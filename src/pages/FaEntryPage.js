import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Modal from "../components/Modal";
import Button from "../components/Button";
import Dropdown from '../components/Dropdown';


function FaEntryPage() {

  const [showModal, setShowModal] = useState(false);
  const [selectedDesign, setSelectedDesign] = useState(null);


  let navigate = useNavigate();

    const initialValues = {
        faname: "",
        age: "",
        designation: "",
    };

    useEffect (()=> {
      if (!localStorage.getItem("accessToken")) {
        navigate("/login");
        window.location.reload()
      }
    }, []);

    const validationSchema = Yup.object().shape({
        faname: Yup.string().required(),
        age: Yup.string().required(),
        designation: Yup.string().required(),
    })

    const onSubmit = (data, {resetForm}) => {
        axios.post("http://localhost:3001/faentry", data, {
          headers: {accessToken: localStorage.getItem('accessToken')}, 
      })
      .then((response)=> {
        setShowModal(true);
        resetForm();
          })
          .catch((error) => {
            console.error('Error submitting form:', error);
          });
      };


      const handleCloseModal = () => {
        setShowModal(false); // Function to close modal
        navigate('/'); // Navigate to another page or stay on the same page
      };
    
      const actionBar = (
        <div>
          <Button onClick={handleCloseModal} primary>
            OK
          </Button>
        </div>
      );
    
      const modal = (
        <Modal onClose={handleCloseModal} actionBar={actionBar}>
          <p>Field staff data has beend recoreded!</p>
        </Modal>
      );
  
      const options = [
        { label: "Senior FA", value: "Senior FA" },
        { label: "Junior FA", value: "Junior FA" },
        { label: "ITSR", value: "ITSR" },
        { label: "Technical Supervisor", value: "Technical Supervisor" },
        { label: "Sales Supervisor", value: "Sales Supervisor" },
        { label: "Branch Incharge", value: "Branch Incharge" },
      ];
    
      const handleSelect = (option, setFieldValue) => {
        setSelectedDesign(option);  // Update local state
        setFieldValue('designation', option.value);  // Update Formik's state
      };

  
  return (
    <div className="faEntry">
      <Formik 
        initialValues={initialValues} 
        onSubmit={onSubmit} 
        validationSchema={validationSchema}>

      {({ setFieldValue }) => (
        <Form className="formContainer">
            <label>Name:</label>
            <ErrorMessage name="faname" component="span" />
            <Field 
            autoComplete="off"
            id="inputFaTable" 
            name="faname" 
            placeholder="(Ex Name...)"
            />
             <label>Age:</label>
             <ErrorMessage name="age" component="span" />
            <Field 
            autoComplete="off"
            id="inputFaTable" 
            name="age" 
            placeholder="(Ex. Age...)"
            />
            <label>Designation:</label>
             <ErrorMessage name="designation" component="span" />
            <Dropdown
              options={options}
              value={selectedDesign}
              onChange={(option) => handleSelect(option, setFieldValue)} 
            />
            

            <Button type="submit">Entry</Button>
        </Form>
        )}
        </Formik>

        {showModal && modal}
    </div>
  )
}

export default FaEntryPage;
