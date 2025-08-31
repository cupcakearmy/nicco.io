---
title: "How to enable ZMK Studio for the Glove 80"
date: "2025-08-31"
categories:
  - "coding"
tags:
  - "keyboards"
  - "zmk"
  - "glove80"
  - "zmk studio"
coverImage: "./images/ikhsan-hidayat-lL_xP4CEXaY-unsplash.jpg"
---

Out of the box I could not get the Glove80 to work out of the box with the amazing ZMK Studio because the default firmware that MoErgo provides does not have the necessary flag enabled.

# What is needed?

The documentation is quite clear on [what is needed for adding ZMK Studio support](https://zmk.dev/docs/features/studio#adding-zmk-studio-support-to-a-keyboard) to a given keyboard.

- We need to add the `studio-rpc-usb-uart` snippet
- setting `ZMK_STUDIO=y`

# Build your Glove80 firmware with Studio support

However being a bit lost on how and where to add it, I [searched GitHub](https://github.com/search?q=studio-rpc-usb-uart+glove&type=code) for inspiration. Luckily I found a config by [IevgeniiB](https://github.com/IevgeniiB/zmk-config/blob/64df48414176b9df78acc114aea0b6fa05238484/build.yaml#L9-L12). Thanks!

The official docs are quite good

1. Create your own ZMK repo ([official docs](https://zmk.dev/docs/user-setup), reduced version here).
   1. Create a new github repo with the name `zmk-config`
   2. Run `bash -c "$(curl -fsSL https://zmk.dev/setup.sh)"` and select `29` for Glove80, otherwise the default values.
2. Adjust your `build.yml`

   ```yaml
    ---
    include:
      - board: glove80_lh
        snippet: studio-rpc-usb-uart
        cmake-args: -DCONFIG_ZMK_STUDIO=y
   ```

3. Adjust your `west.yml`:

   ```yaml
   manifest:
     remotes:
       - name: moergo-sc
         url-base: https://github.com/moergo-sc
     projects:
       - name: zmk
         remote: moergo-sc
         revision: main
         import: app/west.yml
     self:
       path: config
   ```

4. Assign `&studio_unlock` to an empty key. This is required to unlock once connected. I added mine to the magic layer in `glove80.keymap`.
5. Push and wait for the Github action. After the action executes you will have and artifact with 2 firmware files. One for the left and one for the right.
6. Flash the firmware to both sides. See the [official guide](https://docs.moergo.com/glove80-user-guide/customizing-key-layout/#loading-new-zmk-firmware-onto-your-glove80) on how to do it.
7. Profit 🎉 You can now edit and update your Keymap right from your browser.
