import PropTypes from "prop-types";
import React from "react";
import {Link} from "react-router-dom";
// import {sanitize} from 'dompurify';

/**
 * Inject HTML string into DOM
 * @param {object} props object containing all component props
 * @param {string} props.classes CSS classes to be implemented
 * @param {array} props.data custom attribute and value to be applied via data-*
 * @param {boolean} props.hidden aria-hidden value
 * @param {string} props.id unique id
 * @param {string} props.label aria-label value
 * @param {string} props.role aria role value
 * @param {string} props.scope table scope value
 * @param {string} props.string CMS string to be set
 * @param {number} props.tabIndex tabIndex value
 * @param {string} props.tag HTML tag to be used
 * @param {number|string} props.uniqueKey react key value
 * @return {ReactElement} HTML markup
 */
export const ContentParser = ({classes, data, hidden, id, label, role, scope, string, tabIndex, tag: CustomTag = "p", uniqueKey}) => {
  string = sanitizeContent(string);

  // handle custom data attributes
  const dataAttr = {};
  if (data) {
    data.forEach(item => dataAttr[`data-${item.attr}`] = item.value);
  }

  // handle custom internal routes
  let internalRoute = parseInternalRoute(string);
  if (internalRoute) {
    const content = [];

    while (internalRoute) {
      const {substringLeft, substringRight, route, text, aria} = internalRoute;

      // invalid route structure
      if (!route || !text) {
        return null;
      }

      // remove last item as it was the right substring of the previous route
      // and the substring contains another route that will be broken down into
      // its own substrings and route
      content.pop(); // has no effect on an empty array

      if (substringLeft) {
        content.push(<span key={substringLeft} dangerouslySetInnerHTML={{__html: substringLeft}} />);
      }

      content.push(
        <Link to={route} aria-label={aria} data-testid={`${id}-link`} key={`${substringLeft}-${text}`}>
          <span dangerouslySetInnerHTML={{__html: text}} />
        </Link>
      );

      if (substringRight) {
        // pushing current right substring in case it does not contain another route
        content.push(<span key={substringRight} dangerouslySetInnerHTML={{__html: substringRight}} />);
        internalRoute = parseInternalRoute(substringRight);
      } else {
        internalRoute = undefined; // no more content to evaluate
      }
    }

    return (
      <CustomTag
        aria-hidden={hidden}
        aria-label={label}
        className={classes}
        {...dataAttr}
        data-testid={id}
        id={id}
        key={uniqueKey}
        role={role}
        scope={scope}
        tabIndex={tabIndex}>{content}</CustomTag>
    );
  }

  return (
    <CustomTag
      aria-hidden={hidden}
      aria-label={label}
      className={classes}
      dangerouslySetInnerHTML={{__html: string}}
      {...dataAttr}
      data-testid={id}
      id={id}
      key={uniqueKey}
      role={role}
      scope={scope}
      tabIndex={tabIndex} />
  );
};

ContentParser.propTypes = {
  classes: PropTypes.string,
  data: PropTypes.array,
  hidden: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  role: PropTypes.string,
  scope: PropTypes.string,
  string: PropTypes.string,
  tabIndex: PropTypes.number,
  tag: PropTypes.string,
  uniqueKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default ContentParser;

/**
 * sanitize markup to prevent XSS for use as attributes
 * @param {boolean|number|string} content content to be evaluated
 * @param {object} config custom config for sanitizer
 * @return {boolean|number|string} sanitized content
 */
/* eslint-disable-next-line no-unused-vars */
export const sanitizeContent = (content, config = SANITIZE_CONTENT_CONFIG) => {
  switch (typeof content) {
    case "boolean":
    case "number": {
      return content;
    }
    case "string": {
      return INVALID_STRING_REGEXP.test(content.replace(" ", "")) ? "" : content;
    }
    default: {
      return "";
    }
  }
};

/**
 * sanitize markup to prevent XSS for use as meta data
 * @param {string} string string to be evaluated
 * @return {string} sanitized string
 */
export const sanitizeMetaData = string => {
  string = sanitizeContent(string, SANITIZE_META_DATA_CONFIG);
  let internalRoute = parseInternalRoute(string);

  while (internalRoute) {
    // substringLeft & substringRight will always be a string due to calling substring
    const {substringLeft, substringRight, text = ""} = internalRoute;
    string = `${substringLeft}${text}${substringRight}`;
    internalRoute = parseInternalRoute(string);
  }

  return string;
};

/**
 * RegExp to find custom internal route in CMS
 * @type {RegExp}
 */
const INTERNAL_ROUTE_REGEXP = /\{\{route\}\{.*?(,,.*?){0,2}\}\}/g;

/**
 * RegExp to determine if any unwanted scripts has been injected into the CMS
 * @type {RegExp}
 */
const INVALID_STRING_REGEXP = /javascript|<script>|<\/script>|alert\(|url\(|iframe/ig;

/**
 * RegExp to parse custom internal route in CMS
 * @type {RegExp}
 */
const ROUTE_DETAILS_REGEXP = /\{|\}+|route/g;

/**
 * custom sanitize configuration for content
 * @type {object}
 * @property {boolean} ALLOW_DATA_ATTR denotes whether data attributes should be allowed on stringified HTML
 * @property {array} ALLOWED_ATTR list of attributes that are allowed
 * @property {array} ALLOWED_TAGS list of HTML tags that are allowed
 */
const SANITIZE_CONTENT_CONFIG = Object.freeze({
  ALLOW_DATA_ATTR: true,
  ALLOWED_ATTR: ["href", "title", "target", "rel", "className", "id", "header", "src", "type"]
});

/**
 * custom sanitize configuration for meta data
 * @type {object}
 * @property {boolean} ALLOW_DATA_ATTR denotes whether data attributes should be allowed on stringified HTML
 * @property {array} ALLOWED_ATTR list of attributes that are allowed
 * @property {array} ALLOWED_TAGS list of HTML tags that are allowed
 */
const SANITIZE_META_DATA_CONFIG = Object.freeze({
  ALLOW_DATA_ATTR: false,
  ALLOWED_ATTR: [],
  ALLOWED_TAGS: ["ol", "ul"]
});

/**
 * determines if an internal route is present in the string and parses it if found
 * @param {string} string string to be evaluated
 * @return {object} internal route components (if found)
 */
const parseInternalRoute = string => {
  const internalRoutes = string.match(INTERNAL_ROUTE_REGEXP);
  if (internalRoutes) {
    const [template] = internalRoutes;
    const templateStart = string.indexOf(template);
    const templateFinish = templateStart + template.length;
    const substringLeft = string.substring(0, templateStart);
    const substringRight = string.substring(templateFinish);
    const [route, text, aria] = template.replace(ROUTE_DETAILS_REGEXP, "").split(",,");
    return {
      substringLeft,
      substringRight,
      route: (route && route.trim()),
      text: (text && text.trim()),
      aria: (aria && aria.trim()) || ""
    };
  }
};