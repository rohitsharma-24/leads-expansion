import React, { useState, useContext } from 'react';
import { Modal, Form, InputField, Button, TextArea } from '@capterra/arubaito';
import styles from './footer.module.scss';
// import { AppState } from '../../app.state.js';
import {
  FORM_INPUTS
} from './footer.config';

export default function Footer() {
  // const { globalStore } = useContext(AppState);
  const [openContactForm, setOpenContactForm] = useState(false);
  const currentYear = new Date().getFullYear();
  const handleAdvisorClick = () => setOpenContactForm(true);

  const handleSubmitSuccess = () => {
    // NOT IMPLEMENTED YET
    console.log("successfully submitted")
  };

  const handleModalClose = () => setOpenContactForm(false);

  return (
    <div className={styles['footer']}>
      <ul className={styles['list-wrapper']}>
        <li><a className='gdm-link-dark' href={`${process.env.REACT_APP_MAINSITE_ROOT_URL}/legal/privacy-policy`}>Legal</a></li>
        {
          // globalStore.vendor.upgraded
          <li><button className='gdm-link-dark gdm-btn-override' onClick={handleAdvisorClick}>Contact Your Advisor</button></li>
          // : <li><a className='gdm-link-dark' href={`${process.env.REACT_APP_MAINSITE_ROOT_URL}/contact`} >Contact Us</a></li>
        }
        <li><a className='gdm-link-dark' href={`${process.env.REACT_APP_MAINSITE_ROOT_URL}/enterprise_software_definition`}>What is Enterprise Software?</a></li>
      </ul>
      <div className='gdm-paragraph-sm gdm-color-steel gdm-m-top-sm'>Copyright &copy; {currentYear} Gartner Digital Markets. All Rights Reserved.</div>
      {
        <Modal
          open={openContactForm}
          onClosed={() => setOpenContactForm(false)}
          className={styles['modal-container']}
        >
          {close =>
            <div>
              <Modal.Header>
                <h2 className='gdm-subtitle'>Contact Your Marketing Advisor</h2>
                <Modal.Close onClick={close}/>
              </Modal.Header>
              <Modal.Body>
                {returnContactForm(handleSubmitSuccess, handleModalClose)}
              </Modal.Body>
            </div>
          }
        </Modal>
      }
    </div>
  );
};

const returnContactForm = (handleSubmitSuccess, handleModalClose) => {
  const handleOnSubmit = (inputsData, setFormMessage, setIsSubmitting, handleReset) => {
    setIsSubmitting(true);
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          // status: 400, msg: 'An Error occurred while submitting the form.'
          status: 200, msg: 'Sucessfully submitted form.'
        })
      }, 4000)
    }).then((result) => {
        handleReset();
        handleSubmitSuccess();
        setFormMessage({status: 'success', msg: result.msg})
    }).catch((error) => {
      setFormMessage({status: 'error', msg: error.msg})
    }).finally(() => {
      handleModalClose()
      setIsSubmitting(false);
    })
  }

  return (
    <Form
      initialInputsData={FORM_INPUTS}
      className='gdm-p-none'
      onSubmit={handleOnSubmit}
      render={(handleSubmit, handleChange, handleBlur, handleReset, inputsData, errors, invalidForm, isSubmitting) => (
        <React.Fragment>
          {Object.keys(inputsData).map((inputKey) => (
            <InputField
              key={inputKey}
              status={errors[inputKey]}
              className='gdm-w-24'
              render={(id, status) => (
                <React.Fragment>
                  <InputField.Label>
                    {inputsData[inputKey].fieldName}
                  </InputField.Label>
                  {
                    inputsData[inputKey].type === 'input'
                    ? <InputField.Input
                        status={status}
                        id={id}
                        value={inputsData[inputKey].value}
                        name={inputKey}
                        onChange={handleChange}
                        disabled={isSubmitting}/>
                    : <TextArea
                        value={inputsData[inputKey].value}
                        onChange={handleChange}
                        rows='4'/>
                  }
                  <InputField.AlertMessage status={status}>
                    {inputsData[inputKey].statusMsg}
                  </InputField.AlertMessage>
                </React.Fragment>
            )}/>
          ))}
          <div className="gdm-m-top-sm">
            <Button
              className="gdm-m-none gdm-m-top-sm"
              variant='primary'
              type='submit'
              onClick={handleSubmit}
              disabled={invalidForm || isSubmitting}
            >
              Submit
            </Button>
          </div>
        </React.Fragment>
      )
    }/>
  )
}