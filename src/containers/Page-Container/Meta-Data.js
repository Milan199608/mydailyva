import PropTypes from "prop-types";
import React, {memo} from "react";
import {Helmet} from "react-helmet";

import {sanitizeMetaData} from "../../components";

/**
 * manages page title and meta data
 * @param {object} props object containing all component props
 * @param {string} props.description page description
 * @param {string} props.id unique id
 * @param {string} props.image url for social media image
 * @param {string} props.siteName site name
 * @param {string} props.title page title
 * @param {string} props.url page url
 * @return {ReactElement} HTML markup
 */
export const MetaData = ({description, id, image, siteName, title, url}) => {
  const sanitizedDesc = sanitizeMetaData(description),
    sanitizedImage = sanitizeMetaData(image),
    sanitizedSiteName = sanitizeMetaData(siteName),
    sanitizedTitle = sanitizeMetaData(title),
    sanitizedUrl = sanitizeMetaData(url);

  return (
    <Helmet>
      <title id={`page-title-${id}`}>{sanitizedTitle}</title>
      <meta name="Description" id={`meta-desc-${id}`} content={sanitizedDesc} />
      <meta name="robots" content="index, follow"/>

      <meta property="og:type" content="website" />
      <meta property="og:description" id={`meta-og-desc-${id}`} content={sanitizedDesc} />
      <meta property="og:image:url" id={`meta-og-image-url-${id}`} content={sanitizedImage} />
      <meta property="og:image:secure_url" id={`meta-og-image-secure-url-${id}`} content={sanitizedImage} />
      <meta property="og:site_name" id={`meta-og-site-name-${id}`} content={sanitizedSiteName} />
      <meta property="og:title" id={`meta-og-title-${id}`} content={sanitizedTitle} />
      <meta property="og:url" id={`meta-og-url-${id}`} content={sanitizedUrl} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="College Board" />
      <meta name="twitter:description" id={`meta-twitter-desc-${id}`} content={sanitizedDesc} />
      <meta name="twitter:image" id={`meta-twitter-image-${id}`} content={sanitizedImage} />
      <meta name="twitter:site" content="@CollegeBoard" />
      <meta name="twitter:title" id={`meta-twitter-title-${id}`} content={sanitizedTitle} />
      <meta name="twitter:url" id={`meta-twitter-url-${id}`} content={sanitizedUrl} />
    </Helmet>
  );
};

MetaData.propTypes = {
  description: PropTypes.string,
  id: PropTypes.string,
  image: PropTypes.string,
  siteName: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string
};

export default memo(MetaData);