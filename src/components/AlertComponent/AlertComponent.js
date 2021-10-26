import PropTypes from "prop-types";
import React, {useEffect, useState} from "react";
import {Alert, Fade} from "react-bootstrap";

export const AlertComponent = ({showAlert = false, variant = "danger", text, key = 0, layout = "simple", timedDismiss = false}) => {
  const [show, setShow] = useState(showAlert);

  useEffect(() => {
    setShow(showAlert);

    if (timedDismiss) {
      setTimeout(() => {
        setShow(false);
      }, 3000);
    }
  }, [showAlert, timedDismiss]);

  //    variants
  //   'primary',
  //   'secondary',
  //   'success',
  //   'danger',
  //   'warning',
  //   'info',
  //   'light',
  //   'dark'

  return (
    <>
      {show && <Alert key={key} variant={variant} onClose={() => setShow(false)} dismissible={layout !== "simple"}>
        {layout === "simple" && text}
        {layout === "content" && <Fade in appear><Alert.Heading>{text}</Alert.Heading></Fade>}
      </Alert>}
    </>
  );
};

AlertComponent.propTypes = {
  showAlert: PropTypes.bool.isRequired,
  variant: PropTypes.string,
  text: PropTypes.string.isRequired,
  layout: PropTypes.string,
  timedDismiss: PropTypes.bool,
  key: PropTypes.number
};

export default AlertComponent;
