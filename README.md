cat > README.md << 'EOF'
# soluware.nl

Infrastructure and configuration artefacts related to the Soluware public website.

This repository contains selected configuration notes, documentation fragments, 
and migration tracking references used during the 2025–2026 platform transition.

Operational access is managed separately.

---

## Overview

Soluware operates:

The public website serves marketing content, press releases, and customer communication.  
Authentication and session handling are performed on the client portal host.

---

## Ongoing migration (2025–2026)

The platform is currently transitioning from legacy token validation to a new identity provider.

Key changes:
- Tenant-based JWT model
- Updated issuer validation
- Gradual deprecation of HS256 fallback
- Dashboard compatibility layer (temporary)

Engineering ref:
`AUTH-MIGRATION-2417`

---

## Documentation notes

Internal operational documentation references:

- Public documentation: https://www.soluware.nl/about
- Incident reporting: security@soluware.nl
- Portal troubleshooting (internal): see platform runbooks

These runbooks are not intended for public distribution.

---

## Structure

