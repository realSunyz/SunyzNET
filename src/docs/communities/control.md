---
title: Communities
---

# AS150289 BGP Communities

We have established a comprehensive BGP community structure to help our customers manage their routing policies effectively.

## Control Communities

Document below follow the format used by the [NLNOG Ring Project](https://ring.nlnog.net).

| Community          | Description                                                  | Implemented                              |
| ------------------ | ------------------------------------------------------------ | ---------------------------------------- |
| `(150289:218:nnn)` | Do **NOT** route this route via `$0` (`$0` from PoP List)    | ✓ Yes                                    |
| `(150289:219:nnn)` | Do **NOT** route this route via `$0` (`$0` from Region List) | <span style="color:red">✘ Not yet</span> |
