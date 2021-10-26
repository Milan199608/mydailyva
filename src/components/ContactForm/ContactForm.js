import React,{ useState} from "react";
import { Form,Button } from "react-bootstrap";
import axios from "axios";
import * as configSettings from "../../../config";

const {  REACT_APP_MYDAILYVA_API_PROTOCOL
    : API_PROTOCOL,   REACT_APP_MYDAILYVA_API_URL
    : API_URL} = configSettings;

export const ContactForm = () =>{
   

    const [formState, setformState] = useState({
        name:'',
        email:'',
        phoneno:'',
        location:'',
        requirement:''
    });
  
    const [nameError,setnameError] = useState('');
    const [emailError,setEmailError] = useState('');
   const [phonenoError, setPhonenoError] = useState('');
   const [locationError,setLocationError] = useState('');
   const [requirementError, setRequirementError] = useState('');
 
  
    const handleSubmit = (e) =>{
       e.preventDefault();
    
       //console.log(formState);
        let flag=0;
       if(formState.name==''){
        setnameError('Enter Your Name');
       }
      
       if (formState.email=='') {
        setEmailError ( 'Email required');
      } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
        setEmailError ('Email address is invalid');
      }
      if (formState.phoneno=='') {
        setPhonenoError ( 'Number required');
     
      } else if (!/^[0-9\b]+$/.test(formState.phoneno)) {
        setPhonenoError ('only number will be filled');
      }
      if(formState.location==''){
        setLocationError('Enter Your location');
        flag=1;
       }
       if(flag==0){
       }
       if(formState.requirement==''){
        setRequirementError('Enter Your comments');
        flag=1;
       }
       if(flag==0){
            requestApi();
       }
       
      
    }
    const requestApi = async () => {
      
        

        const REQUEST_ENDPOINT = "dev/api/submitcontact";
        const REQUEST_METHOD = "POST";
        const request_url = `${API_PROTOCOL}://${API_URL}/${REQUEST_ENDPOINT}`;

        const config = {
            method: REQUEST_METHOD,
            url: request_url,
            data: formState            
        };
        console.log(config);
        let response = await axios(config);
        console.log(response);
    if(
      !nameError &&  !emailError && !phonenoError && !locationError && !requirementError){

       alert("Data submitted successfully")
      
        }
        else if( nameError ||  emailError || phonenoError || locationError || requirementError) {
            alert("Fill the data properly")

        }
        
    }
   
    const handleInputChange = e =>{
        const input = e.target;
        const {value} = input;
        const {id} = input;
        setformState(prevFormState => ({...prevFormState,[id]:value}));
       
    }
   
/* 
}; */

    return(
        <>
     
        <div className="form-container">
           <Form onSubmit={handleSubmit} class="form_container">
            <Form.Group controlId='name' className="mb-15">
                <Form.Label>Name:</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter your full name"
                    className="form-control"
                    onChange={handleInputChange}
                    defaultValue={formState.name} 
                />
                {nameError!=''?<span className="valmessage">{nameError}</span>:''}
            </Form.Group>
            <Form.Group controlId='email' className="mb-15">
                <Form.Label>Email Address:</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter your email Address"
                    className="form-control"
                    onChange={handleInputChange}
                    defaultValue={formState.email}
                   
                />
                 {emailError!=''?<span className="valmessage">{emailError}</span>:''}
            </Form.Group>
            <Form.Group controlId='phoneno' className="mb-15">
                <Form.Label>Phone :</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter your phone no"
                    className="form-control"
                    onChange={handleInputChange}
                    defaultValue={formState.phoneno}
                />
                  {phonenoError!=''?<span className="valmessage">{phonenoError}</span>:''}
            </Form.Group>
            <Form.Group controlId='location' className="mb-15">
                <Form.Label>Location :</Form.Label>
                <Form.Control 
                    as="textarea"
                    placeholder="Enter your location"
                    className="form-control"
                    onChange={handleInputChange}
                    defaultValue={formState.location}
                />
                 {locationError!=''?<span className="valmessage">{locationError}</span>:''}
            </Form.Group>
            <Form.Group controlId='requirement' className="mb-15">
                <Form.Label>Requirement :</Form.Label>
                <Form.Control 
                    as="textarea"
                    placeholder="Enter your location"
                    className="form-control"
                    onChange={handleInputChange}
                    defaultValue={formState.requirement}
                />
                   {requirementError!=''?<span className="valmessage">{requirementError}</span>:''}

                   
            </Form.Group>
            
                
                <Button type="submit" onClick={handleSubmit} className="btn btn-success">
                Submit
                </Button>
           
                 

       
            </Form>
            

            </div>
        </>
    )

}
export default ContactForm;