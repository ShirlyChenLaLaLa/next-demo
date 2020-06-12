import { NextPage } from "next";
import React from "react";
import * as Yup from "yup";

interface Values {
  email: string;
}

type SetError = {
  (field: string, message: string): void;
};

const ForgotPassword: NextPage = () => {
  return <div>hhh</div>;
};

export default ForgotPassword;
