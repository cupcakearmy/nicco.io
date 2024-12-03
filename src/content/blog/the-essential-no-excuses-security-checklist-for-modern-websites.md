---
title: 'The essential no-excuses security checklist for modern websites.'
date: '2019-09-16'
categories:
  - 'security'
tags:
  - 'headers'
  - 'security'
coverImage: './images/milkovi-kYlYwQze5vI-unsplash-1-scaled.jpg'
---

The web and its security has come a long way. As always in security there are constantly ways to improve your defences agains bad actors. This is a list of quick and easy, yet powerful tools that all devs should be using.

**Update** _18 Sep 2019 @ 16:02_  
As the reddit user [zfa](https://www.reddit.com/user/zfa/) suggested I included the link to the Mozilla Observatory for automatic auditing.

1. Checklist
   1. [HTTPS](#https)
   2. [TLS Versions](#tls)
   3. [Ciphers](#ciphers)
   4. [HSTS](#hsts)
   5. [CSP](#csp)
   6. [X-Frame-Options](#frame)
   7. [X-Content-Type-Options](#content-type)
2. [Useful Libraries & Tools](#libraries)
3. [Considerations](#considerations)
   1. [Cookies or LocalStorage for JWTs?](#jwt)
   2. [Advanced HTTPS practices](#advanced)
4. [Sources](#sources)

<figure>

![](images/milkovi-kYlYwQze5vI-unsplash-1-scaled.jpg)

<figcaption>

Photo by [MILKOVÍ](https://unsplash.com/@milkovi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

</figcaption>

</figure>

## 1\. HTTPS

Let's start with the most obvious. It's almost 2020 and websites not using HTTPS are simply being irresponsible. There is no reason to run plaintext http in the era of [Letsencrypt](https://letsencrypt.org/) where getting a certificate is **easy and free**. I won't go over how to configure that, there are tons of resources out there and generally its as simple as adding a line in your config file.  
Also redirect all the http traffic to https automatically, basic stuff.

## 2\. TLS Versions

[97.65% of global users](https://caniuse.com/#feat=tls1-1) support TLS version 1.2, so go disable anything below that in your server as it has knows vulnerabilities!

**Configuration**

```
# Nginx
ssl_protocols TLSv1.2;
```

```
# Apache
SSLProtocol -all +TLSv1.2
```

```
# Traefik
[entryPoints]
  [entryPoints.https]
    [entryPoints.https.tls]
      minVersion = "VersionTLS12"
```

## 3\. Ciphers

Similar to the TLS version you should avoid using anything different than AES or ChaCha20. Limit the ciphers to something secure and modern.

**Configuration**

```
# Nginx
ssl_prefer_server_ciphers on;
ssl_ciphers
'ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA256';
```

```
# Apache
SSLCipherSuite
ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA256
SSLHonorCipherOrder     on
SSLCompression          off
SSLSessionTickets       off
```

```
# Traefik
[entryPoints]
  [entryPoints.https]
    [entryPoints.https.tls]
      cipherSuites = [
        "TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256",
        "TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384",
        "TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305",
        "TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256",
        "TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384",
        "TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305",
      ]
```

## 4\. HSTS

Once your website runs on HTTPS it's a good idea to tell the browser not to use HTTP anymore. Thats what the HTTP Strict Transport Security (HSTS) is designed for.

```
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

This basically tells the browser to only talk to your domain via HTTPS for the next year. You can exclude the `includeSubDomains` if you want to just target your root.

**Configuration**

```
# Nginx
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
```

```
# Apache
Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
```

## 5\. Content Security Policy (CSP)

This awesome HTTP header is incredibly powerful! It allows you to specify the allowed origins for all kind of files that will be loaded into your website.

The basic idea is: "_Javascript can only be loaded from my domain, images only from the unsplash domain and fonts only are only allowed from google fonts"._

Awesome right? The header for that example would look like this:

```
Content-Security-Policy: "default-src 'self'; img-src https://unsplash.com/; font-src https://fonts.googleapis.com"
```

This allows a dev to specify exactly what resources are allowed to load from what domains. Don't worry, you don't need to remember the exact syntax**:**  
**Use the generator**: [https://www.cspisawesome.com/](https://www.cspisawesome.com/)

## 6\. X-Frame-Options

This is a basic one, but it should not be forgotten. It prevents your website to be displayed inside another one. This prevents shit tons of possible attack vectors. Simply set the header and you're done.

```
x-frame-options: SAMEORIGIN
```

**Configuration**

```
# Nginx
add_header x-frame-options "SAMEORIGIN" always;
```

```
# Apache
header always set x-frame-options "SAMEORIGIN"
```

## 7\. X-Content-Type-Options

Again, a little header that prevents lots of damage. By setting the Content Type header you prevent the browser from guessing what file contents a downloaded resource is. Basically if `/image.jpeg` is actually a `.js` file the browser would still run it if you don't set the header

```
x-content-type-options: nosniff
```

**Configuration**

```
# Nginx
add_header x-content-type-options "nosniff" always;
```

```
# Apache
header always set x-content-type-options "nosniff"
```

## Libraries & Tools

#### Tools

For some automatic auditing of your website you can use the excellent [Mozilla Observatory](https://observatory.mozilla.org/) tool. You can scan a domain and receive information on Header & TLS.

#### Libraries

For a lot of this headers there are some good libraries for automating this which already have good default values, so most of them are plug and play.

<table><tbody><tr><td>Express (Node)</td><td><a href="https://helmetjs.github.io/">helmet</a></td></tr><tr><td>ASP.NET</td><td><a href="https://docs.nwebsec.com/en/latest/index.html">NWebsec</a></td></tr><tr><td>Django (Python)</td><td><a href="https://django-csp.readthedocs.io/en/latest/">django-csp</a></td></tr><tr><td>Dropwizard (Java)</td><td><a href="https://github.com/palantir/dropwizard-web-security">dropwizard-web-security</a></td></tr><tr><td>Flask (Python)</td><td><a href="https://github.com/GoogleCloudPlatform/flask-talisman">Talisman</a></td></tr><tr><td>Go</td><td><a href="https://github.com/unrolled/secure">secure</a>;&nbsp;<a href="https://godoc.org/github.com/kr/secureheader">secureheader</a></td></tr><tr><td>Hapi (Node)</td><td><a href="https://github.com/nlf/blankie">blankie</a></td></tr><tr><td>Koa (Node)</td><td><a href="https://github.com/venables/koa-helmet">koa-helmet</a></td></tr><tr><td>PHP</td><td><a href="https://github.com/BePsvPT/secure-headers">Secure Headers</a></td></tr><tr><td>Ruby (and Rails)</td><td><a href="https://github.com/twitter/secureheaders">Secure Headers</a>;&nbsp;<a href="https://github.com/frodsan/rack-secure_headers">rack-secure_headers</a></td></tr></tbody></table>

## Considerations

I did not talk about the XSS header, since it's not supported at all in Firefox and Chromium will remove it in the near future, so I think it gives a false sense of security to devs not being vulnerable to XSS if they set the header.

Also I did not touch on the new Feature Policy header wich is currently being drafted. It's very cool and will help a lot in the future. It allows websites to specify what features should be allowed to run, so e.g. if my site does not need the accelerometer just turn it off. That way no 3rd party code is able to access it. Very nice addition, but at the time of writing it's still very alpha and basically not supported.

### Where to store JWTs?

Most websites nowadays make use of JWTs for the authentication. A common question people have is: Where do I store my token? Cookies or LocalStorage? **TLDR: LocalStorage.**

The general knowledge is that LocalStorage is not vulnerable to CRFS and Cookies not to XSS. However as the reddit user [Devstackr](https://www.reddit.com/user/Devstackr/) described [here](https://www.reddit.com/r/reactjs/comments/cubfsa/local_storage_vs_cookies_authentication_tokens/) if you have a XSS vulnerability also your authentication via cookie is compromised, as the injected code can do requests on behalf of the authenticated user.

So while your token cannot be directly stolen from the victim, the attacker can still do everything, including changing the password for example. Additionally you don't need to worry about CRFS at all, which is a huge bonus.

### Advanced Practices

Large websites should additionally consider the following security features:

- Certificate Authority Authorization (CAA) DNS record which specifies what CA is allowed to sign certificates for the served domain.
- HTTP Public Key Pinning (HPKP) provides the option to validate the certificate via DNS record. If misconfigured this can break you entire site, so use carefully!

## Sources / Further reading

- [https://www.keycdn.com/blog/http-security-headers](https://www.keycdn.com/blog/http-security-headers)
- [https://www.youtube.com/watch?v=-DNNlBYIyxQ](https://www.youtube.com/watch?v=-DNNlBYIyxQ)
- [https://helmetjs.github.io/](https://helmetjs.github.io/)
- [https://www.acunetix.com/blog/articles/tls-ssl-cipher-hardening/](https://www.acunetix.com/blog/articles/tls-ssl-cipher-hardening/)
- [https://www.cspisawesome.com/](https://www.cspisawesome.com/)
- [https://observatory.mozilla.org/](https://observatory.mozilla.org/)
