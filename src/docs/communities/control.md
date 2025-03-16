---
title: Control BGP Communities
---

# Control Communities

Document below follow the format used by the [NLNOG Ring Project](https://ring.nlnog.net).

\* Badge <Badge type="warning" text="✘" /> indicates it has not yet been implemented.

## Forbidden Routes
| Community          | Description                                                                                   |
| ------------------ | --------------------------------------------------------------------------------------------- |
| `(150289:218:nnn)` | Do **NOT** route this route via `$0` (`$0` from PoP List)                                     |
| `(150289:219:nnn)` | Do **NOT** route this route via `$0` (`$0` from Region List) <Badge type="warning" text="✘" /> |
