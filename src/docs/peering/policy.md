---
title: Peering
prev: false
---

# Peering with AS150289

We have an open peer policy, and will peer with networks that have a presence on mutual exchange points in accordance with the policies described below.

## Technical Requirements

- Peers must operate a publicly routable and visible Autonomous System Number (ASN).
- Peers must have at least one publicly routable /24 of IPv4 and/or one /48 of IPv6 space.
- Only IPv6 peering sessions are currently supported.
- Peers are required to register their routes in a public Internet Routing Registry (IRR) database, for the purpose of filtering, and to keep this information up to date.
  - We collect data from APNIC, RIPE, ARIN, AFRINIC, LACNIC, and RADb.
  - If you use an IRR database (such as AltDB) that is not listed, contact our NOC, and we will review it. 
- Peers are required to register their routes in the Resource Public Key Infrastructure (RPKI) repository using Route Origin Authorization (ROA) objects.
  - We use Cloudflare's service to validate RPKI information. Any prefixes with INVALID status will be dropped.
- Peers are encouraged to implement Mutually Agreed Norms for Routing Security (MANRS).

## Operational Requirements

- Peers must maintain an up-to-date PeeringDB entry, including a 24x7 NOC Contact.

## Traffic Requirements

- At this time, there are no minimum traffic requirements for establishing bilateral peering sessions.

## Peering Information

For your convenience, here is some information about our network.

- **ASN**: 150289
- **AS-SET**: AS-SUNYZ
- **Suggested Prefix Limit**:
  - IPv4 - 0
  - IPv6 - 500
- **PeeringDB**: [as150289.peeringdb.com](https://www.peeringdb.com/asn/150289)