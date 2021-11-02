/**
 * app base url
 * @type {string}
 */
export const BASE_URL = window.location.origin;

/** id of main content section */
export const MAIN_CONTENT_ID = "main-content";

/**
 * main app route pathnames
 * note: leading slashes are not being included here as some library
 * components add them for us. adding them here, would cause those
 * components tho throw an error.
 * @type {object}
 * @property {object} ERROR error route pathname
 * @property {string} MATCHES matches route pathname
 * @property {object} PROFILE profile route pathnames
 */
export const ROUTES = Object.freeze({
  ERROR: Object.freeze({
    BASE: "error",
    LOGIN: "error/login",
    REQUESTS: "error/requests",
    TESTLOCATIONS: "error/test-locations",
    EXAMS: "error/exams",
 
    
  }),
  HOME: "home",
  ABOUTUS: "about-us",
  CONTACTUS: "contact-us",
  PRIVACY:"privacy-policy",
  TERM:"terms-condition",
  BLOG:"blog", 
    //BLOGDETAILS:`blog/${text}`
});
export const NAVITEMCLIENTLEFT = [
  {path: ROUTES.HOME, name: "Home", submenuhas: 0, submeuArr: []},
  {path: ROUTES.ABOUTUS, name: "about-us", submenuhas: 0, submeuArr: []},
  {path: ROUTES.CONTACTUS, name: "contact-us", submenuhas: 0, submeuArr: []},
  {path: ROUTES.BLOG, name: "blog", submenuhas: 0, submeuArr: []},
 //{path: ROUTES.BLOG.BLOGDETAILS, name: "blogdetails", submenuhas: 0, submeuArr: []},
];
export const FOOTERMENU = [
  {path: ROUTES.PRIVACY, name: "privacy-policy", submenuhas: 0, submeuArr: []},
  {path: ROUTES.TERM, name: "terms-condition", submenuhas: 0, submeuArr: []},
];

/**
 * default page titles
 * @type {object}
 * @property {string} ORG_NAME default organization name
 * @property {string} SITE_NAME default site name
 * @property {string} SEPARATOR default page title separator
 */
export const PAGE_TITLE_DEFAULTS = Object.freeze({
  ORG_NAME: "",
  SITE_NAME: "",
  SEPARATOR: " - "
});

/** org defined program type */
export const PROGRAM_TYPE = "corporate";

/** org defined site code */
export const SITE_CODE = "";

/** org defined site title */
export const SITE_TITLE = "";
