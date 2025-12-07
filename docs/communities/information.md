---
title: Information BGP Communities
prev: false
---

# Information Communities

Document below follow the format used by the [NLNOG Ring Project](https://ring.nlnog.net).

\* Badge <Badge type="warning" text="✘" /> indicates it has not yet been implemented.

## Learned Routes

| Community          | Description                              |
| ------------------ | ---------------------------------------- |
| `(150289:110:1)`   | Learned from _Upstream_                  |
| `(150289:110:2)`   | Learned from _Downstream_                |
| `(150289:110:3)`   | Learned from _IX Route Server_           |
| `(150289:110:4)`   | Learned from _Peer_                      |
| `(150289:111:nnn)` | Learned from `AS$0`                      |
| `(150289:112:nnn)` | Learned in `$0` (`$0` from PoP List)     |
| `(150289:113:nnn)` | Learned in `$0` (`$0` from Country List) |
| `(150289:114:nnn)` | Learned in `$0` (`$0` from Region List)  |
