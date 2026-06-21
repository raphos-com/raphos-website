// Base path the site is served under. On GitHub Pages project sites this is
// "/raphos-website"; it would be "/" if the site ever moved to a domain root.
// import.meta.env.BASE_URL may or may not carry a trailing slash depending on
// config, so we normalise when joining.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/**
 * Prefix an internal, root-absolute path (e.g. "/work") with the deploy base so
 * links resolve correctly under a project subpath. External (http:, mailto:,
 * tel:), protocol-relative (//) and in-page hash (#) links pass through unchanged.
 */
export function withBase(path: string): string {
  if (/^([a-z][a-z0-9+.-]*:|\/\/|#)/i.test(path)) return path;
  return `${BASE}/${path.replace(/^\//, '')}`;
}
