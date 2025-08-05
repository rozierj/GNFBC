// analytics.js
import ReactGA from "react-ga4";

/**
 * Tracks a page view in GA4
 * @param {string} path - The path of the page (e.g., "/about")
 */
export const trackPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

/**
 * Tracks a navigation click in GA4
 * @param {string} label - The label for the nav item clicked (e.g., "Home")
 */
export const trackNavClick = (label) => {
  ReactGA.event("nav_click", {
    category: "Navigation",
    label: label
  });
};

/**
 * Tracks an outbound link click in GA4
 * @param {string} label - The label for the link (e.g., "YouTube")
 * @param {string} url - The outbound URL
 */
export const trackOutboundClick = (label, url) => {
  ReactGA.event("outbound_click", {
    category: "Outbound Link",
    label: label,
    url: url
  });
};

export const trackEvent = (eventName, params = {}) => {
  ReactGA.event(eventName, params);
};


/**
 * Tracks a form submission in GA4
 * @param {string} formName - The name of the form (e.g., "Contact Form")
 * @param {object} fields - Additional fields like { name, email }
 */
export const trackFormSubmit = (formName, fields = {}) => {
  ReactGA.event("form_submit", {
    category: "Form",
    label: formName,
    ...fields
  });
};
