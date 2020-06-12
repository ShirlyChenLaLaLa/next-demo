import { NextPage } from 'next';
import React, { useState } from 'react';
import * as Yup from 'yup';
import Layout from '~components/layout';
import Button from '~components/button';
import Modal from '~components/modal';
import { Formik, Form, FormikProps } from 'formik';
import Input from '~components/input';

const Index: NextPage = () => {
  const [launchModalShow, setLaunchModalShow] = useState<boolean>(false);
  const InviteFormSchema = Yup.object().shape({
    fullName: Yup.string()
      .trim()
      .required(),
    email: Yup.string()
      .trim()
      .email()
      .required(),
    confirmEmail: Yup.string()
      .trim()
      .email()
      .required(),
  });
  return (
    <Layout>
      <div className="launch-page">
        <h1 className="launch-title">A better way to enjoy every day.</h1>
        <span className="launch-label"> Be the first to know when we launch.</span>
        <Button
          onClick={() => {
            setLaunchModalShow(true);
          }}
        >
          Request an invite
        </Button>
        <Modal
          isOpen={launchModalShow}
          onClose={() => {
            setLaunchModalShow(false);
          }}
        >
          <div className="invite-modal">
            <h2 className="invite-modal__title">Request an invite</h2>
            <Formik
              initialValues={{
                fullName: '',
                email: '',
                confirmEmail: '',
              }}
              onSubmit={() => {
                console.log('11');
              }}
              validateOnBlur
              validationSchema={InviteFormSchema}
            >
              <Form className="invite-modal__form">
                <Input className="invite-modal__input" placeholder="Full Name" name="fullName" />
                <Input className="invite-modal__input" placeholder="Email" name="email" />
                <Input
                  className="invite-modal__input"
                  placeholder="Confirm Email"
                  name="confirmEmail"
                />
                <Button size="large" fullWidth className="invite-modal__btn">
                  Send
                </Button>
              </Form>
            </Formik>
          </div>
        </Modal>
      </div>
      <style jsx>
        {`
          .launch-page {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
          }
          .launch-title {
            text-align: center;
          }
          .launch-label {
            margin-bottom: 30px;
          }
          .invite-modal {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 40px 30px 20px;

            &__title {
              width: 100%;
              text-align: center;
            }
          }
          :global(.invite-modal__form) {
            width: 100%;
          }
          :global(.invite-modal__input) {
            margin-bottom: 12px;
          }
          :global(.invite-modal__btn) {
            margin-top: 40px;
          }
        `}
      </style>
    </Layout>
  );
};

export default Index;
