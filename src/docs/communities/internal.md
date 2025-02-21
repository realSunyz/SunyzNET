---
title: Communities
prev: false
---

# Internal Communities

Document below follow the format used by the [NLNOG Ring Project](https://ring.nlnog.net).

\* Badge <Badge type="warning" text="✘" /> indicates it has not yet been implemented.

## Learned Routes

| Community          | Description                                                               |
| ------------------ | ------------------------------------------------------------------------- |
| `(150289:110:1)`   | Learned from _Upstream_                                                   |
| `(150289:110:2)`   | Learned from _Downstream_                                                 |
| `(150289:110:3)`   | Learned from _Peer_                                                       |
| `(150289:110:4)`   | Learned from _Direct Peer_                                                |
| `(150289:110:5)`   | Learned from _IXP_                                                        |
| `(150289:111:nnn)` | Learned from `AS$0`                                                       |
| `(150289:112:nnn)` | Learned in `$0` (`$0` from PoP List)                                      |
| `(150289:113:nnn)` | Learned in `$0` (`$0` from Region List) <Badge type="warning" text="✘" /> |

## Routed Routes

| Community          | Description                                                               |
| ------------------ | ------------------------------------------------------------------------- |
| `(150289:110:10)`  | Originated in _AS150289_                                                  |
| `(150289:210:nnn)` | Routed via `$0` (`$0` from PoP List)                                      |
| `(150289:211:nnn)` | Routed via `$0` (`$0` from Region List) <Badge type="warning" text="✘" /> |

## Exported Routes

| Community          | Description                                                                  |
| ------------------ | ---------------------------------------------------------------------------- |
| `(150289:310:1)`   | Exported to _Upstream_                                                       |
| `(150289:310:2)`   | Exported to _Downstream_                                                     |
| `(150289:310:3)`   | Exported to _Peer_                                                           |
| `(150289:310:4)`   | Exported to _Direct Peer_                                                    |
| `(150289:310:5)`   | Exported to _IXP_                                                            |
| `(150289:311:nnn)` | Exported to `AS$0`                                                           |
| `(150289:312:nnn)` | Exported from `$0` (`$0` from PoP List)                                      |
| `(150289:313:nnn)` | Exported from `$0` (`$0` from Region List) <Badge type="warning" text="✘" /> |
