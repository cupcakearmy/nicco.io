---
title: 'Write your own drone plugin from scratch'
date: '2019-05-25'
categories:
  - 'coding'
tags:
  - 'cd'
  - 'drone'
  - 'guide'
  - 'plugin'
  - 'python'
coverImage: './images/asoggetti-418839-unsplash-scaled.jpg'
---

Recently Drone released it 1.0 version update. It came with a cleaner and more useful UI and a new structure for declaring the YAML drone pipelines files. Perfect time for writing our own drone plugin. 🎉

**TL;DR** Get the code: [https://github.com/CupCakeArmy/drone-deploy](https://github.com/CupCakeArmy/drone-deploy)

<figure>

![](images/asoggetti-418839-unsplash-1024x684.jpg)

<figcaption>

Photo by [asoggetti](https://unsplash.com/photos/rSFxBGpnluw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/drone?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

</figcaption>

</figure>

This should be a starting point to guide you in the right direction towards writing your first drone plugin. **It's easier than it might seems**. Let's go 🚀

#### What do we want to achieve?

- Login with an ssh key from drone secrets
- copy files to a remote location
- execute remote commands

## How are Drone Plugins written?

Very simple actually: **drone plugins are nothing more than a docker image**. The process is as follows:

1. The code gets mounted inside your image at \`/drone/src\`
2. You make slack api calls, deploy, whatever you want.

Since the source is mounted inside a container you can use **whatever language you prefer**! Cool. For this small project I decided to go with Python, but you could use node, go, whatever runs inside Docker.

First lets look how a plugin is defined inside the `.drone.yml` file.

```yaml
kind: pipeline
name: default

steps:
  # build...

  - name: deploy
    image: you/your-drone-plugin # public docker image
    settings:
      host: example.org
      user: root
      password: h4x0rz
```

**How do we get those variables?** Drone mounts them as environment variables inside the plugin container prefixed by `PLUGIN_`.  
So `host: example.org` becomes `$PLUGIN_HOST=example.org` and so forth.

###### In Python

```python
def main():
    host = os.environ.get('PLUGIN_HOST')
    port = os.environ.get('PLUGIN_PORT', 22)
    user = os.environ.get('PLUGIN_USER')
    password = os.environ.get('PLUGIN_PASSWORD')
    key = os.environ.get('PLUGIN_KEY')

main()
# example.org
# 22
# root
# h4x0rz
# None
```

**How do I get secrets?** We need to use the `from_secret` syntax. Supposing you have saved your private key as a repository secret under `ssh_key` the example would look as follows:

```yaml
- name: deploy
  settings:
    key:
      from_secret: ssh_key
```

Easy 👌**What about arrays**? We want to copy a list of sources to the server.

```yaml
- name: deploy
  settings:
    sources:
      - ./public
      - docker-compose.yml
```

This will result into `PLUGIN_SOURCES=./public,docker-compose.yml`. Basically we get a comma-separated-string.

```yaml
# Takes a string, splits it at the comma and removes empty elements
def clean_array(s: str) -> List[str]:
    return list(filter(None, s.split(',')))

sources = clean_array(os.environ.get('PLUGIN_SOURCES', ''))
```

## Putting it all together

```python
import paramiko

def execute(c: SSHClient, cmd: str, path: str = None, env:dict = None) -> str:
    if path is not None:
        cmd = 'cd {}; {}'.format(path, cmd)
    stdin, stdout, stderr = c.exec_command(cmd, environment=env)
    return stdout.read().decode('utf-8').strip()


def main():

	# Takes a string, splits it at the comma and removes empty elements
    def clean_array(s: str) -> List[str]:
        return list(filter(None, s.split(',')))

    host = os.environ.get('PLUGIN_HOST')
    port = os.environ.get('PLUGIN_PORT', 22)
    user = os.environ.get('PLUGIN_USER')
    password = os.environ.get('PLUGIN_PASSWORD')
    key = os.environ.get('PLUGIN_KEY')
    target = os.environ.get('PLUGIN_TARGET')
    commands = clean_array(os.environ.get('PLUGIN_COMMANDS', ''))
    sources = clean_array(os.environ.get('PLUGIN_SOURCES', ''))

    ssh = paramiko.SSHClient()
    try:
        k = paramiko.RSAKey.from_private_key(io.StringIO(key))
        ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
        ssh.connect(hostname=host, username=user, pkey=k, port=port, password=password)

        sftp = ssh.open_sftp()
        try:
			# Upload the files
			# for file in file....
			sftp.put(archive_local, archive_remote)
        finally:
            sftp.close()

        for command in commands:
            output = execute(ssh, command, target, envs)
            print(command)
            print(output)

    finally:
        ssh.close()
```

This of course simplifies the code a lot, but should give a general idea how it's done.

For a full fledged example check out the repo: [https://github.com/CupCakeArmy/drone-deploy](https://github.com/CupCakeArmy/drone-deploy)

Enjoy! 👋
