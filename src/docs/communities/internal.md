---
title: Communities
prev: false
---

# AS150289 BGP Communities

We have established a comprehensive BGP community structure to help our customers manage their routing policies effectively.

## Internal Communities

Document below follow the format used by the [NLNOG Ring Project](https://ring.nlnog.net).

| Community          | Description                                | Implemented                              |
| ------------------ | ------------------------------------------ | ---------------------------------------- |
| `(150289:110:1)`   | Learned from _Upstream_                    | ✓ Yes |
| `(150289:110:2)`   | Learned from _Downstream_                  | ✓ Yes |
| `(150289:110:3)`   | Learned from _Peer_                        | ✓ Yes |
| `(150289:110:4)`   | Learned from _Direct Peer_                 | ✓ Yes |
| `(150289:110:5)`   | Learned from _IXP_                         | ✓ Yes |
| `(150289:110:10)`  | Originated in _AS150289_                   | ✓ Yes |
| `(150289:111:nnn)` | Learned from `AS$0`                        | ✓ Yes |
| `(150289:112:nnn)` | Learned in `$0` (`$0` from PoP List)       | ✓ Yes |
| `(150289:113:nnn)` | Learned in `$0` (`$0` from Region List)    | <span style="color:red">✘ Not yet</span> |
| `(150289:210:nnn)` | Routed via `$0` (`$0` from PoP List)       | ✓ Yes |
| `(150289:211:nnn)` | Routed via `$0` (`$0` from Region List)    | <span style="color:red">✘ Not yet</span> |
| `(150289:310:1)`   | Exported to _Upstream_                     | ✓ Yes |
| `(150289:310:2)`   | Exported to _Downstream_                   | ✓ Yes |
| `(150289:310:3)`   | Exported to _Peer_                         | ✓ Yes |
| `(150289:310:4)`   | Exported to _Direct Peer_                  | ✓ Yes |
| `(150289:310:5)`   | Exported to _IXP_                          | ✓ Yes |
| `(150289:311:nnn)` | Exported to `AS$0`                         | ✓ Yes |
| `(150289:312:nnn)` | Exported from `$0` (`$0` from PoP List)    | ✓ Yes |
| `(150289:313:nnn)` | Exported from `$0` (`$0` from Region List) | <span style="color:red">✘ Not yet</span> |
