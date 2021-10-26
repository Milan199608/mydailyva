import PropTypes from "prop-types";
import React from "react";
import {Redirect, useParams} from "react-router-dom";//useLocation

import {PageContainer} from "../../";
import {applicationConstants} from "../../../constants";
const {ROUTES} = applicationConstants;

/**
 * displays error page
 */
export const Error = ({isError}) => {
  //const {state: locationState} = useLocation();
  const {errorType} = useParams();
  const info = !ERROR_CONTENT[errorType || ""] ? ERROR_CONTENT.default : ERROR_CONTENT[errorType];
  const {title, refreshRoute} = info;

  if (!isError) {
    return <Redirect to={`/${refreshRoute}`} />;
  }

  return (
    <PageContainer title={title} pageError>
      <div class="container">
        <div class="row no-gutters">
          <div class="col-xs-12 col-sm-6 offset-sm-3">
            {/*<ErrorSection {...info} />*/}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

Error.propTypes = {isError: PropTypes.bool};

export default Error;

const ERROR_CONTENT = Object.freeze({
  default: Object.freeze({
    title: "Error: Issue Processing Request",
    content: ["We are sorry, there was an error while processing your request."],
    actionText: "My Basic Info",
    actionRoute: ROUTES.REQUESTS,
    actionReload: true,
    refreshRoute: ROUTES.REQUESTS
  })
});