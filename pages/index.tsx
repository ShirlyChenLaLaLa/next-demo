import { NextPage } from 'next';
import React, { useState, useMemo } from 'react';
import * as Yup from 'yup';
import Layout from '~components/layout';
import Button from '~components/button';
import Modal from '~components/modal';
import { Formik, Form, FormikHelpers } from 'formik';
import Input from '~components/input';
import axios from 'axios';
import theme from '~theme';

type Values = {
  name: string;
  email: string;
  confirmEmail: string;
};

const Index: NextPage = () => {
  const [launchModalShow, setLaunchModalShow] = useState<boolean>(false);
  const [launchLoading, setLaunchLoading] = useState<boolean>(false);
  const [launchSuccessd, setLaunchSuccessd] = useState<boolean>(false);
  const [requestError, setRequestError] = useState<string>('');

  const InviteFormSchema = Yup.object().shape({
    name: Yup.string()
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

  const handleSubmit = (data: Values, { setFieldError }: FormikHelpers<Values>) => {
    if (data.confirmEmail !== data.email) {
      setFieldError('confirmEmail', 'Should be the same as the account email');
      return;
    }
    setLaunchLoading(true);
    axios
      .post('https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth', {
        name: data.name,
        email: data.email,
      })
      .then(response => {
        setLaunchLoading(false);
        if (response.data === 'Registered') {
          setLaunchSuccessd(true);
        } else {
          setRequestError('Opps, something went wrong.');
        }
        console.log(response);
      })
      .catch(error => {
        setLaunchLoading(false);
        setRequestError(error?.response?.data?.errorMessage);
      });
  };

  const renderLaunchForm = useMemo(() => {
    return (
      <>
        <h2 className="invite-modal__title">Request an invite</h2>
        <Formik
          initialValues={{
            name: '',
            email: '',
            confirmEmail: '',
          }}
          onSubmit={handleSubmit}
          validateOnBlur
          validationSchema={InviteFormSchema}
        >
          <Form className="invite-modal__form">
            <Input className="invite-modal__input" placeholder="Full Name" name="name" />
            <Input className="invite-modal__input" placeholder="Email" name="email" />
            <Input
              className="invite-modal__input"
              placeholder="Confirm Email"
              name="confirmEmail"
            />
            <Button
              loading={launchLoading}
              type="submit"
              size="large"
              fullWidth
              className="invite-modal__btn"
            >
              Send
            </Button>
            <div className="invite-modal__error">{requestError}</div>
            <style jsx>
              {`
                .invite-modal__error {
                  text-align: center;
                  margin-top: 30px;
                  color: ${theme.colors.red};
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
          </Form>
        </Formik>
      </>
    );
  }, [InviteFormSchema, launchLoading, requestError]);

  const renderLaunchSuccess = useMemo(() => {
    return (
      <>
        <h2>All done</h2>
        <span className="invite-modal__success-label">
          You will be one of the first to experiance Broccoli & Co. when we launch.
        </span>
        <Button
          fullWidth
          onClick={() => {
            setLaunchModalShow(false);
          }}
        >
          OK
        </Button>
        <style jsx>
          {`
            .invite-modal__success-label {
              margin-top: 40px;
              margin-bottom: 80px;
            }
          `}
        </style>
      </>
    );
  }, []);

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
            {!launchSuccessd && renderLaunchForm}
            {launchSuccessd && renderLaunchSuccess}
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
          }
        `}
      </style>
    </Layout>
  );
};

export default Index;
