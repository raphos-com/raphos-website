// GA4 Measurement ID for the raphos.com web stream, e.g. "G-XXXXXXXXXX".
// Found in Google Analytics under Admin -> Data streams -> (web stream).
//
// Note this is NOT the numeric Property ID or Stream ID shown in the Analytics
// UI — gtag.js only accepts the "G-" prefixed Measurement ID.
//
// The value is public by design: it ships in the page source of every site
// that uses Analytics, so there is nothing to keep secret and no need for a
// build secret. Leave it empty to disable tracking entirely.
export const GA_MEASUREMENT_ID = 'G-H1VG4ZZBQT';

/**
 * Whether to emit the Analytics tag for the current build. Tracking is limited
 * to production builds so `astro dev` and preview branches don't pollute the
 * reporting data with our own page views.
 */
export const analyticsEnabled = GA_MEASUREMENT_ID !== '' && import.meta.env.PROD;
