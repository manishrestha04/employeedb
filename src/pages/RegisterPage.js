import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Modal from '../components/Modal';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

function Registration() {

    const [showModal, setShowModal] = useState(false);
    const [usernameError, setUsernameError] = useState('');

    const initialValues = {
        username: "",
        password: "",
    };

    //vaidate username length
    const validationSchema = Yup.object().shape({
        username: Yup.string().min(3).max(15).required(),
        password: Yup.string().min(4).max(20).required(),
    })

    const onSubmit = async (data, {resetForm}) => {
        try {
            // First, check if the username exists
            const checkUsernameResponse = await axios.post('http://localhost:3001/auth/checkUsername', {
              username: data.username,
            });
      
            if (checkUsernameResponse.status === 200) {
              // If username is available, proceed with registration
              //const response = await axios.post('http://localhost:3001/auth', data);
              setShowModal(true);
              resetForm();
            }
          } catch (error) {
            if (error.response && error.response.data.error === 'Username already exists') {
              setUsernameError('Username already exists. Please choose another.');
            } else {
              console.error('Error submitting form:', error);
            }
          }
        };

    let navigate = useNavigate();

    const handleCloseModal = () => {
        setShowModal(false); 
        navigate('/login'); 
        window.location.reload ();
      };
    
      const actionBar = (
        <div>
          <Button onClick={handleCloseModal} primary>
            Login
          </Button>
        </div>
      );
    
      const modal = (
        <Modal onClose={handleCloseModal} actionBar={actionBar}>
          <p>You have successfully registerd. Please proceed to Login !</p>
        </Modal>
      );

    return (
    <div className="register">
      <Formik 
        initialValues={initialValues}
        onSubmit={onSubmit} 
        validationSchema={validationSchema}>

        <Form className="formContainer">
            <label>Username:</label>
            <ErrorMessage name="username" component="span" />
            {usernameError && <span className="error">{usernameError}</span>}
            <Field 
            autoComplete="off"
            id="inputUsername" 
            name="username" 
            placeholder="(Ex. Username...)"
            />

            <label>Password:</label>
             <ErrorMessage name="password" component="span" />
            <Field 
            autoComplete="off"
            type="password"
            id="inputPassword" 
            name="password" 
            placeholder="Your Password"
            />

            <button type="submit">Register</button>
        </Form>
        </Formik>

        {showModal && modal}
    </div>
  )
}

export default Registration
