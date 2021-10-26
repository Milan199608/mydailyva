import PropTypes from "prop-types";
import React, {memo, useEffect} from "react";
import {useLocation} from "react-router-dom";

import MetaData from "./Meta-Data";
import {sanitizeContent} from "../../components";
import {applicationConstants} from "../../constants";
// import {analyticsService} from '../../services';
const {BASE_URL, MAIN_CONTENT_ID, PAGE_TITLE_DEFAULTS} = applicationConstants;

/**
 * displays page title, updates meta data, and provides navigational screen reader support
 */
//pageError, pageLoaded, pageLoading,
export const PageContainer = ({
  children, content = {}, description,
  title
}) => {
  const {
    description: defaultDescription,
    siteName = PAGE_TITLE_DEFAULTS.SITE_NAME,
    pageTitleSeparator = PAGE_TITLE_DEFAULTS.SEPARATOR
  } = content;
console.log(title);
  const {pathname} = useLocation();

  useEffect(() => {
   //const appContainer = document.getElementById('root');

  }, [pathname]);

  useEffect(() => { // integrate with analytics
  }, [pathname]);

  const metaDesc = description || defaultDescription;
  const metaId = pathname.replace(/\//gi, "") || "root";
  const metaSiteName = `${siteName}`;
  //const metaTitle = metaId === "root" || metaId === "home" || !title ? metaSiteName : `${metaSiteName}${pageTitleSeparator}${title}`;
  const metaTitle = title!='' ? `${title}`: metaSiteName;
  const metaUrl = `${BASE_URL}${pathname}`;
  //{socialMediaImageUrl}
 // console.log(metaDesc);
  return (
    <>
      <MetaData
        description={metaDesc}
        id={metaId}
        image=""
        siteName={metaSiteName}
        title={metaTitle}
        url={metaUrl} />
      <div
        aria-label={sanitizeContent(title)}
        data-testid={MAIN_CONTENT_ID}
        id={MAIN_CONTENT_ID}
        role="main"
        tabIndex="-1"
      >
        {children}
      </div>
    </>
  );
};

PageContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  content: PropTypes.shape({
    description: PropTypes.string,
    pageTitleSeparator: PropTypes.string,
    siteName: PropTypes.string
  }),
  description: PropTypes.string,
  // pageError: PropTypes.bool,
  // pageLoaded: PropTypes.bool,
  // pageLoading: PropTypes.bool,
  title: PropTypes.string
};

export default memo(PageContainer);