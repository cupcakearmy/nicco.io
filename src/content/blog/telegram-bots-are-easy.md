---
title: 'Telegram bots are easy'
date: '2019-06-24'
categories:
  - 'coding'
tags:
  - 'automatization'
  - 'bot'
  - 'python'
  - 'telegram'
coverImage: './images/arseny-togulev-1513013-unsplash-scaled.jpg'
---

Recently I've been frustrated with mobile stock apps so I started thinking about solutions. a whole app would have been an unnecessary overkill, after all I just want to get market data about my stocks with some indicators to go along. A perfect use case for a telegram bot!

Today we will have a look at how telegram bots are written and show some base concepts around the platform. We are going to leverage [python-telegram-bot](https://python-telegram-bot.org/) ([latest docs](https://python-telegram-bot.readthedocs.io/en/latest/)).

#### What we will build today:

1. A very simple bot that just replies a picture of a doggo whenever we send `/woof`.
2. A bot that has **persistence** and will save a list of items we can add.
3. (bonus round) Dockerize the bot for running it everywhere.

#### Here we go 🤖

The first thing we need is a bot. To register one you need to talk to the [@BotFather](https://telegram.me/BotFather) (with your normal telegram account). Then simply enter the `[/newbot](tg://bot_command?command=newbot)` command. You will be asked the name and the @handle for your bot. The handle need to end in `bot`.  
After that he will answer with your access token.

<figure>

![](images/register-bot.jpg)

<figcaption>

Response after successful bot registration

</figcaption>

</figure>

## How do bots work?

<figure>

![](images/IMG_0160.jpeg)

<figcaption>

very badly drawn representation of the bot

</figcaption>

</figure>

In its most simple form bots are simple programs that listen to _commands_ send by a user. The cannot initiate a conversation, a user must always message the bot first. After initial contact, the bot can send as many messages as he wants.

Your code connects to the telegram servers and gets notified if new messages/commands have been sent. Then based on the user input your bot can reply with a message, audio, photo or use external services like sending a slack notification, whatever, there are no real limits.

When the user firsts contacts a bot telegram automatically sends a `/start` command which you can use to initialise the bot. When a bot is deleted by a user the corresponding `/stop` command is issued.

## Doggo Bot

We are going to create a virtual environment for the project and install the dependencies. Our starting point will be the basic bot skeleton from which we will fill out the functionality.

Note: we need version 12 of _python-telegram-bot_, as the API changed quite a bit in the previous releases.

```bash
python3 -m venv env
source env/bin/activate
pip install python-telegram-bot==12.0.0b1
```

```python
from telegram.ext import Updater, CommandHandler

TOKEN = 'myTelegramBotToken'

def main():
    updater = Updater(TOKEN, use_context=True)
    dp = updater.dispatcher

    updater.start_polling()
    updater.idle()


if __name__ == '__main__':
    main()
```

Great, now lets write a function to respond to a simple `/ping` message.

```
// ...

def pong(update, context):
    update.message.reply_text('Pong')


def main():
    updater = Updater(TOKEN, use_context=True)
    dp = updater.dispatcher

    dp.add_handler(CommandHandler('ping', pong))

    updater.start_polling()
    updater.idle()

// ...
```

When we now send `/ping` to the bot we get a _Pong_ back. Neat!

<figure>

![](images/IMG_1709.jpeg)

<figcaption>

result of pong message

</figcaption>

</figure>

#### But we want doggos! 🐶

```python
def get_image_url():
    allowed_extension = ['jpg', 'jpeg', 'png']
    while True:
        url = requests.get('https://random.dog/woof.json').json()['url']
        file_extension = re.search("([^.]*)$", url).group(1).lower()
        if file_extension in allowed_extension:
            break
    return url


def woof(update, context):
    update.message.reply_photo(photo=get_image_url())


def main():
    //...

    dp.add_handler(CommandHandler('ping', pong))
    dp.add_handler(CommandHandler('woof', woof))

    //...
```

We define a second command that listens to the `woof` word. Then we have a little helper function that retrieves a url. That url is then passed to the `reply_photo` method and we are done!

We could also pass a [bite-like](https://docs.python.org/3/glossary.html#term-bytes-like-object) object to the `photo` parameter instead of a string containing the url if we would have an actual photo.

<figure>

![](images/IMG_1710.jpeg)

<figcaption>

reply to woof

</figcaption>

</figure>

## Persistence Bot

The doggo bot is a good hello world example, but without persistence a lot of bots would not work. If you want to save something you will need to have some kind of **user base storage**.

For this we will implement a little bot that saved a list of items that a user can add/delete. A bit like a shopping list if you want.

#### Commands

- Add `/add avocados`
- Delete `/delete avocados`
- List all `/all`
- Delete all `/clear`

First the basic setup again. We will import `PicklePersistence` which uses the python _pickle_ object to save the data on your drive. We need to initialise it and pass it to the `Updater` class.

```python
from telegram.ext import Updater, CommandHandler, CallbackContext, PicklePersistence
from telegram import Update

TOKEN = 'myTelegramBotToken'

persistence = PicklePersistence('./db')


def main():
    print('Started 🚀')
    updater = Updater(TOKEN, use_context=True, persistence=persistence)
    dp = updater.dispatcher

    updater.start_polling()
    updater.idle()


if __name__ == '__main__':
    main()
```

Before we beginn lets define 2 helper functions:

```python
def get_list(context: CallbackContext) -> dict:
    return context.user_data.setdefault('list', {})
```

`get_list` will return the object that is unique to every user. The python library generously offers a `user_data` object inside of the `context` parameter that gets passed to each handler. We use `setdefault` in order to get the already present dict of the user or set it to an empty one if undefined.

```python
def parse_command(update: Update) -> (str, str):
    key, value = update.message.text.split(' ', 1)
    return key, value
```

`parse_command` simply helps us interpret the message of the user. If a user sends us `/add avocado` we only want the _avocado_ part. We simply split at the first space.

Lets finally add all the methods.

```python
//...

def get_list(context: CallbackContext) -> list:
    return context.user_data.setdefault('list', [])


def parse_command(update: Update) -> (str, str):
    key, value = update.message.text.split(' ', 1)
    return key, value


def list_add(update: Update, context: CallbackContext):
    key, value = parse_command(update)
    get_list(context).append(value)
    update.message.reply_text('Saved 💾')


def list_delete(update: Update, context: CallbackContext):
    key, value = parse_command(update)
    get_list(context).remove(value)
    update.message.reply_text('Deleted 🗑')


def list_all(update: Update, context: CallbackContext):
    items = get_list(context)
    update.message.reply_text('\n'.join(items) if len(items) > 0 else 'List empty 😢')


def list_clear(update: Update, context: CallbackContext):
    get_list(context).clear()
    update.message.reply_text('Cleared 🧼')


def main():
    //...

    dp.add_handler(CommandHandler('add', list_add))
    dp.add_handler(CommandHandler('delete', list_delete))
    dp.add_handler(CommandHandler('all', list_all))
    dp.add_handler(CommandHandler('clear', list_clear))

    //...
```

![](images/IMG_1711.jpeg)

I believe telegram bots can be a great alternative if a full fledged app is an overkill. There are a lot of featured that where not mentioned here, especially custom keyboards.

## Dockerize it

```
# requirements.txt

python-telegram-bot==12.0.0b1
```

```Dockerfile
# Dockerfile

FROM python:3.7-slim
WORKDIR /app

COPY requirements.txt .
RUN pip install -r requirements.txt && rm -rf /root/.cache

COPY src .
CMD ["python", "-u", "/app/Mercatus.py"]
```

```yaml
# docker-compose.yml

version: '3.6'

services:
  bot:
    build: .
    restart: unless-stopped
    command: ['python', '-u', '/app/Mercatus.py']
    volumes:
      - ./data.db:/app/data.db
```

Thats it! I hope you enjoyed the guide. 👋
