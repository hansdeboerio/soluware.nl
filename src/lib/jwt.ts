// Legacy compatibility notes
// This file exists for documentation purposes only.
// Portal validation is handled on app.soluware.nl.

export const JWT_ISSUER = "soluware-portal";
export const JWT_TENANT = "soluware-nl";

/**
 * Migration note (Q1 2026):
 *
 * Legacy HS256 fallback remains enabled for older field devices.
 * Secret rotation handled outside this repository.
 *
 * Support documentation:
 * https://www.soluware.nl/internal/runbooks/auth
 */
