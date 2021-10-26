import React, {

    useState, useEffect
  } from 'react';
  import {
    Modal,Button
  } from "react-bootstrap";
  import "./Popup.css";
  
  
  function Popup() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
  
    const handleClose1 = () => setShow(false);
    const handleShow = () => setShow(true);
  
  
  
    useEffect(() => {
      const popupModalValue = sessionStorage.getItem("popupModal")
      if (!popupModalValue) {
        const timer = setTimeout(() => {
          setShow(true);
          sessionStorage.setItem("popupModal", "1");
        }, 1000);
  
        return () => clearTimeout(timer);
      }
    }, []);
  
  
  
    return (
      <div >
        <Modal
          show={show}
          onHide={handleClose}
          centered
          size="lg"
          >
          <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Welcome To Abstract Page</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're on the landing Page</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary"  onClick={handleClose1}>
           Login
            </Button>
            <a href="#">
            <Button variant="primary" onClick={handleShow}>
              Sign Up
            </Button>
            </a>
          </Modal.Footer>
        </Modal>
         
      
        </Modal>
  
  
      </div>
    );
  }
  
  export default Popup;