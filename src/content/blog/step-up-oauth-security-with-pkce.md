---
title: 'Step up OAuth security with PKCE'
date: '2019-07-10'
categories:
  - 'general'
tags:
  - 'ietf'
  - 'oauth'
  - 'security'
coverImage: './images/jielin-chen-pKQIpxzq0ZQ-unsplash-e1562783699383-scaled.jpg'
---

We all have used OAuth at some point. Whether with SSOs or a simple authorization server. While OAuth has multiple so called _flows_, the most commonly used are the _**code**_ and the _**implicit**_ flows. Today we will focus on the security aspect of the latter, pros/cons and solutions to make the _implicit_ flow (more) secure.

I am going to assume some basic OAuth knowledge. [Here](https://medium.com/@darutk/the-simplest-guide-to-oauth-2-0-8c71bd9a15bb) is a basic explanation. [This](https://aaronparecki.com/oauth-2-simplified/) is a quick more in depth article.

#### Quick refresher on implicit vs code flows

As mentioned above there are [multiple flows](https://oauth.net/2/) in the [OAuth2 spec](https://tools.ietf.org/html/rfc6749), but in reality only the **_code_** and **_implicit_** are really used. The big difference between the two ist that in the **_code_** flow the there is a pre-shared password. This requires a backend, so the code flow cannot be used in SPAs.

This is where traditionally the **_implicit_** flow comes into play. It is basically a played down version of his **_code_** brother. Instead of generating a code which is then used in combination with the password on the server side to get the token, in **the** _**implicit**_ **flow the token is returned directly**.

## Issues with security in _implicit_ flows

The implicit flow contains the `state` parameter. This is random value that the client sends to the authorization server. The server then redirects to the client including the `token` and `state` that was passed. This prevents CSRF and Replay attacks where an attacker could basically redirect some site to your callback path. The client should delete the state variable when getting the token. This is already pretty good, but we need to do more. You can read the details [in the spec](https://tools.ietf.org/html/rfc6749#section-10.12).

**The server has no way of verifying that the original client actually got the token.**

This is a big problem! Since the server cannot verify the identity of the original request it could end up giving the token to a 3rd party which did not make the request. Now an attacker has an access token. 😐

## PKCE to the saving 🎉

So how can our app demonstrate that it is the one that made the request? Of course the smart folks at [IETF](https://www.ietf.org/) have a solution.

It's called **[Proof Key for Code Exchange](https://tools.ietf.org/html/rfc7636)**. In works in a similar way to the code flow, but instead of a password we use hashing. Confused? Let me explain:

1. Your client wants to authenticate
   1. On the client side you generate a random string `verifier`.
   2. You then compute the SHA-256 hash of the `verifier` which gives you the `challenge`
   3. Your app makes the classic `/authorize?...&code_challenge=<string>&code_challenge_method=S256`
2. The authorization server saves does the usual
   1. Redirect to user promps.
   2. User accepts.
   3. Server redirect to your callback path with a `code`
3. The client exchanges the `code` for a `token`  
   In the exchange request the client includes the original `verifier` which was used to generate the `challenge` hash.
4. Server verifies the request  
   The server takes the `verifier` and generates the `challenge` on its own, then checks whether it matches with the original one associated with the `code`
5. Server send code and client is authenticated.

In this way, using `state` and the **PKCE** extension both the client and server are secured. The server can be sure that the token was sent only to the client from which the request originally was created and the client is safe agains CSRF & Replay attacks. **WIN WIN**. 💪

Below is a diagram by [Auth0](https://auth0.com/) which helped me understand the whole process more easily.

<figure>

![](images/auth-sequence-auth-code-pkce.png)

<figcaption>

[https://auth0.com/docs/flows/concepts/auth-code-pkce](https://auth0.com/docs/flows/concepts/auth-code-pkce)

</figcaption>

</figure>

I hope you found this helpful. I was blown away by the simplicity of PKCE and how sometimes problems can be solved in very elegant ways thanks to smart people.
