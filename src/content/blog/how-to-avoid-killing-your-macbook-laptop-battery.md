---
title: 'How to avoid killing your MacBook / Laptop battery'
date: '2019-07-23'
categories:
  - 'general'
tags:
  - 'battery'
  - 'laptop'
  - 'macbook'
coverImage: './images/israel-palacio-ImcUkZ72oUs-unsplash-scaled.jpg'
---

As of May of 2020 this is no more relevant! macOS 10.15.5 finally addressed this issue by not charging the battery to 100% depending on battery temperature, health and so on 🚀🚀🚀

There are a lot if misleading wisdom out there about batteries (e.g. it is ok to leave your laptop plugged in). The reasons behind it are pretty interesting and not at all trivial. If you want to know why: keep reading.

**TLDR;** [Jump to the solution](#solution)

<figure>

![](images/israel-palacio-ImcUkZ72oUs-unsplash-scaled.jpg)

<figcaption>

Photo by [israel palacio](https://unsplash.com/@othentikisra?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/electricity?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

</figcaption>

</figure>

> The worst situation is keeping a fully charged battery at elevated temperatures.
>
> batteryuniversity.com

Batteries are consumable items. This means the degrade over time and loose their ability to store energy. We will see how and why this happens and how to combat it.

## Why do batteries degrade?

In theoretical chemistry your battery should be able to last forever. But in the real world of course that's not possible. There are 2 main killers for batteries:

1. Heat
2. Cycles (Especially above ~80%)

### Killer #1: Heat

With heat the internal materials of the battery start to loose their chemical form and therefore their capacity. Below is a table that illustrates how batteries react to temperature exposure.

_Estimated recoverable capacity when storing Li-ion for one year at various temperatures._

<table><tbody><tr><td><strong>Temperature</strong></td><td><strong>40% charge</strong></td><td><strong>100% charge</strong></td></tr><tr><td>0°C</td><td>98%&nbsp;(after 1 year)</td><td>94%&nbsp;(after 1 year)</td></tr><tr><td>25°C</td><td>96%&nbsp;(after 1 year)</td><td>80%&nbsp;(after 1 year)</td></tr><tr><td>40°C</td><td>85%&nbsp;(after 1 year)</td><td>65%&nbsp;(after 1 year)</td></tr><tr><td>60°C</td><td>75%&nbsp;(after 1 year)</td><td>60%<br>(after 3 months)</td></tr></tbody></table>

As we can see, a heated battery basically is a lost cause, especially when fully charged.

Unfortunately **there is little we can do for the heat issue** since the thermal design of our Laptop is fixed and the manufacturer will choose where to place the battery and if and how to cool it.

### Killer #2: Cycles

Over this one we have much more control. A cycle varies in definition, but basically it is a discharge, followed by a charge.

Why are cycles bad? Well whenever we move electrons around our battery either by using it or while charging, the chemical material is subjected to wear. Why exactly this happens is beyond my understanding of chemistry, so I won't try to explain it since I would probably do it wrong.

What I can tell you is how to charge and use your battery in the correct manner:

1. Ideally leave your battery between 30% and 80%
2. Don't charge over 80% if not strictly required for a long trip or so.

### Don't believe me, trust the data

<figure>

![](images/DST-cycles-web2.jpg)

<figcaption>

Capacity loss as a function of charge and discharge bandwidth. [Source](https://batteryuniversity.com/index.php/learn/article/how_to_prolong_lithium_based_batteries)

</figcaption>

</figure>

As we can observe above, all the tested bandwidth that regularly charged to a full 100% degraded the fastest. Don't do that.

Part of the problem is that as you can see in the graphic below is that while **the first 80% of the capacity is charged easily and quick, the last 80% to 100% have an exponential curve**. Those last percentages are really taxing on the battery because you are trying to stuff the last electrons inside an almost full battery. Imagine you stuffing a last bag into an almost full garbage. You will need to push it.

Making matters worse, the battery will heat up during the last steps of charging because of the strain that is undergoing. This only adds to the problem, since as we learned above heat is incredibly bad for capacities.

<figure>

![](images/Battery-Charge-Voltage-vs-Time.png)

<figcaption>

Charging graph for Lithium Batteries.  
Graph by [batteryuniversity.com](https://batteryuniversity.com/index.php/learn/article/charging_lithium_ion_batteries) - Colorised by [Android Authority](https://www.androidauthority.com/maximize-battery-life-882395/)

</figcaption>

</figure>

This is also the reason because electric vehicles only charge up to 80%. It increases the lifespan of the battery significantly. On the other hand, consumer **products like laptops and phones are more about selling you maximum battery life.** What they don't tell you is **how quick that advertised battery life is going to last after 6 months** of usage.

### Myth: It's ok to keep you laptop plugged in

This is a misconception that arose in recent years. While it is not completely wrong, it overlooks some important aspects.

What is true? Modern laptops and phones don't overcharge the battery and will switch to using only the powered cable as the source. **However** at some point the battery will dip below 97% and the laptop will start charge it again to 100%. Assuming you use your laptop for work the whole day, this will happen multiple times daily. **It will break it**.

## Solution

### For MacBooks (magsafe):

Put a piece of paper/cloth on your middle connector of your MacBook Magsafe charger **whenever your laptop plugged in for long periods**.

<figure>

![](images/howto.jpg)

<figcaption>

How-To protect the battery with Magsafe chargers

</figcaption>

</figure>

**Update:** I tried new methods, the one that seems the most practical is to use a little piece of tape that you can bend in front of the connector when needed.

##### Updated method with tape

Put a piece of tape on your middle connector. For simplicity you can just cover 3 pins and leave the 2 outside pins (does not matter which side) free.  
Now you can easily switch between loading the battery or just working on power **whenever your laptop plugged in for long periods**.

<figure>

![](images/howto-1.jpg)

<figcaption>

Same method, just with tape. Much easier to use.

</figcaption>

</figure>

<figure>

![](images/status.jpg)

<figcaption>

Status of battery after modification

</figcaption>

</figure>

This will prevent your laptop from using **and** charging your battery while using it for a whole day.  
**Credits for the hack**: [https://superuser.com/a/1130375](https://superuser.com/a/1130375)

### Laptops with removable batteries:

Simply remove the battery when using laptop for long periods. This will prevent the heat of the laptop being transferred to the battery and it won't charge over and over again to 100%.

#### Sources

- [https://batteryuniversity.com/index.php/learn/article/charging_lithium_ion_batteries](https://batteryuniversity.com/index.php/learn/article/charging_lithium_ion_batteries)
- [https://batteryuniversity.com/learn/article/bu_808b_what_causes_li_ion_to_die](https://batteryuniversity.com/learn/article/bu_808b_what_causes_li_ion_to_die)
- [https://batteryuniversity.com/index.php/learn/article/how_to_prolong_lithium_based_batteries](https://batteryuniversity.com/index.php/learn/article/how_to_prolong_lithium_based_batteries)
- [https://batteryuniversity.com/index.php/learn/article/do_and_dont_battery_table](https://batteryuniversity.com/index.php/learn/article/do_and_dont_battery_table)
- [https://www.electricbike.com/how-to-make-lithium-battery-last/](https://www.electricbike.com/how-to-make-lithium-battery-last/)
- [https://www.androidauthority.com/maximize-battery-life-882395/](https://www.androidauthority.com/maximize-battery-life-882395/)
