---
title: Control BGP Communities
---

# Control Communities

Document below follow the format used by the [NLNOG Ring Project](https://ring.nlnog.net).

\* Badge <Badge type="warning" text="✘" /> indicates it has not yet been implemented.

## Forbidden Routes

| Community          | Description                                               |
| ------------------ | --------------------------------------------------------- |
| `(150289:999:nnn)` | Do not export this route to `AS$0`                        |
| `(150289:990:nnn)` | Do not export this route to `$0` (`$0` from PoP List)     |
| `(150289:991:nnn)` | Do not export this route to `$0` (`$0` from Country List) |
| `(150289:992:nnn)` | Do not export this route to `$0` (`$0` from Region List)  |

## Prepend Routes

| Community          | Description                       |
| ------------------ | --------------------------------- |
| `(150289:901:nnn)` | Prepend this route _1x_ to `AS$0` |
| `(150289:902:nnn)` | Prepend this route _2x_ to `AS$0` |
| `(150289:903:nnn)` | Prepend this route _3x_ to `AS$0` |
