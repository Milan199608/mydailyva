import PropTypes from "prop-types";
import React, {useState, useEffect} from "react";
import "./Modal.scss";

export const Modal = ({modalId, modalSize, modalOpen, modalClose, titleText, bodyContent, bodyComponent, onSaveHandler, onCancelHandler}) => {
  const [isOpen, setIsOpen] = useState(modalOpen);

  useEffect(() => {
    setIsOpen(modalOpen);
  }, [modalOpen]);

  let showClass = "modal fade";
  let showClassbackdrop = "modal-backdrop fade";

  if (isOpen) {
    showClass = "modal fade show";
    showClassbackdrop = "modal-backdrop fade show";
  }

  const modalClass = `modal-dialog ${modalSize}`;

  return (
    <div>
      <div id={modalId} className={showClass}>
        <div className={modalClass} role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLiveLabel">{titleText}</h5>
              <button type="button" className="close" onClick={modalClose}>
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              {bodyContent && bodyContent}
              {bodyComponent && bodyComponent}
            </div>
            {/* <div className="modal-footer">
              <input type="button" class="btn btn-primary" value="Save" onClick={onSaveHandler} />
              <input type="button" class="btn btn-primary btn-hollow" value="Cancel" onClick={onCancelHandler} />
            </div> */}
          </div>
        </div>
      </div>
      <div className={showClassbackdrop} />
    </div>
  );
};

Modal.propTypes = {
  modalId: PropTypes.string,
  modalSize: PropTypes.string,
  modalOpen: PropTypes.bool,
  modalClose: PropTypes.func,
  titleText: PropTypes.string,
  bodyContent: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  bodyComponent: PropTypes.object,
  onSaveHandler: PropTypes.func,
  onCancelHandler: PropTypes.func
};

export default Modal;
