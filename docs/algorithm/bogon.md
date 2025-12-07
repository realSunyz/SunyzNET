---
title: Bogon ASNs and Prefixes
prev: false
next: false
---

# Bogon ASNs and Prefixes

We base our bogon filters on NLNOG's BGP documentation.

The tables below list the exact bogon prefixes and ASNs we reject on all routers, and may differ slightly from other sources.

::: warning Important
If you discover any mistakes on this page - especially ones that could introduce security or routing vulnerabilities - please [contact our NOC](/about/contact) immediately. We greatly appreciate your help in keeping our filters accurate and the network secure.  
:::

## IPv4 Bogon Prefixes

| Netblock        | RFC      | Description             |
| --------------- | -------- | ----------------------- |
| 0.0.0.0/8       | RFC 1122 | "This" Network          |
| 10.0.0.0/8      | RFC 1918 | Private-Use Networks    |
| 100.64.0.0/10   | RFC 6598 | Carrier-Grade NAT       |
| 127.0.0.0/8     | RFC 1122 | Loopback                |
| 169.254.0.0/16  | RFC 3927 | Link-Local              |
| 172.16.0.0/12   | RFC 1918 | Private Space           |
| 192.0.2.0/24    | RFC 5737 | TEST-NET-1              |
| 192.168.0.0/16  | RFC 1918 | Private Space           |
| 198.18.0.0/15   | RFC 2544 | Benchmarking            |
| 198.51.100.0/24 | RFC 5737 | TEST-NET-2              |
| 203.0.113.0/24  | RFC 5737 | TEST-NET-3              |
| 224.0.0.0/4     | RFC 1112 | Multicast               |
| 240.0.0.0/4     | RFC 1112 | Reserved for Future Use |

## IPv6 Bogon Prefixes

| Netblock      | RFC      | Description                     |
| ------------- | -------- | ------------------------------- |
| 100::/64      | RFC 6666 | Discard-Only                    |
| 2001:2::/48   | RFC 5180 | Benchmarking                    |
| 2001:10::/28  | RFC 4843 | ORCHID (deprecated)             |
| 2001:db8::/32 | RFC 3849 | Documentation                   |
| 2002::/16     | RFC 7526 | 6to4 Anycast Relay              |
| 3ffe::/16     | RFC 3701 | Old 6bone                       |
| 3fff::/20     | RFC 9637 | Documentation                   |
| 5f00::/16     | RFC 9602 | Segment Routing (SRv6) SIDs     |
| fc00::/7      | RFC 4193 | Unique-Local                    |
| fe80::/10     | RFC 4291 | Link-Local Unicast              |
| fec0::/10     | RFC 3879 | Site-Local Unicast (deprecated) |
| ff00::/8      | RFC 4291 | Multicast                       |

## Bogon ASNs

| Number                  | RFC      | Description                             |
| ----------------------- | -------- | --------------------------------------- |
| 0                       | RFC 7607 | Invalid ASN                             |
| 23456                   | RFC 7607 | AS_TRANS                                |
| 64496 - 64511           | RFC 5398 | Example ASNs                            |
| 64512 - 65534           | RFC 6996 | Private ASNs                            |
| 65535                   | RFC 7300 | Last 16-bit ASNs                        |
| 65536 - 65551           | RFC 5398 | Example ASNs                            |
| 65552 - 131071          | -        | IANA Reserved ASNs                      |
| 4200000000 - 4294967294 | RFC 6996 | Private ASNs / [DN42](https://dn42.dev) |
| 4294967295              | RFC 7300 | Last 32-bit ASN                         |
