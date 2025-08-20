---
title: Exported Routes
next: false
---

# Exported Routes

This page describes how AS150289 exports routes to Upstreams, Downstreams, Internet Exchanges, and Peers.

Please be advised that, for operational reasons, such as blacklists, route optimization, and special customer requirements, only our main filtering policies are disclosed in this page. Additional internal filters may be applied but are not publicly documented.

## General Filters

The following rules apply to all scenarios unless explicitly noted.

1. Reject Invalid Prefix Length
    - For IPv4, accept only prefixes with lengths between /7 and /24.
    - For IPv6, accept only prefixes with lengths between /15 and /48.
    ::: tip Why we do this?
    It is a common practice to filter out IPv4 subnets smaller than /24 and IPv6 subnets smaller than /48. In addition, we also filter out extremely large IP subnets, as such subnets typically have no practical use outside Tier-1 or large ISPs and this helps preserve capacity.
    :::
2. Reject Bogon Prefixes
3. Reject Routes Containing Bogon ASNs in their AS-path.
    - Bogon prefixes and ASNs are defined by the Internet Assigned Numbers Authority (IANA). See the reference at [/algorithm/bogon](/algorithm/bogon).
    ::: tip Why we do this?
    Bogons are IP ranges and AS numbers that are unallocated or reserved and have no place in the global routing table. Filtering them is essential to prevent hijacks, accidental leaks, and routing instability.
    :::
4. Reject Prefixes with Invalid RPKI ROAs.
    - Only prefixes with Valid or Unknown RPKI states are accepted.
    - Our selected validation source is [Cloudflare RPKI](https://rpki.cloudflare.com).
    ::: tip Why we do this?
    A route marked Invalid in RPKI means the origin AS does not match the ROA. This is almost always a hijack attempt or misconfiguration.
    :::
