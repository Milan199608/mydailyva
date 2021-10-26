//import {applicationConstants} from '../';
// const {APP_ID, BASE_URL} = applicationConstants;

/** AWS domain name */
export const AWS_DOMAIN = "";

/** uexams home page url */
export const UE_URL = ``;

/**
 * calendar month names
 * @type {object}
 * @property {array} FULL full names
 * @property {array} ABBRV abbreviated names
 */
export const MONTHS = Object.freeze({
  FULL: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  ABBRV: ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."]
});

/**
 * possible modes for view edit flow
 * @type {object}
 * @property {string} ADD add new item
 * @property {string} EDIT edit existing item
 * @property {string} VIEW view existing item
 */
export const VIEW_EDIT_MODE = Object.freeze({
  ADD: "ADD",
  EDIT: "EDIT",
  VIEW: "VIEW"
});