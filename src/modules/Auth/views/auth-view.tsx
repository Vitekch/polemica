import React, { useState } from "react";

import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";

const FORMS_TYPES = {
  SIGN_IN: 'signIn',
  SIGN_UP: 'signUp',
  FORGOT_PASSWORD: 'forgot_password',
};

function AuthView() {
  const [form, setForm] = useState(FORMS_TYPES.SIGN_IN);

  const getForm = () => {
    switch (form) {
      case FORMS_TYPES.SIGN_IN:
        return <SignInForm switchSingUp={() => setForm(FORMS_TYPES.SIGN_UP)}/>;
      case FORMS_TYPES.SIGN_UP:
        return <SignUpForm switchSignIn={() => setForm(FORMS_TYPES.SIGN_IN)}/>
      default:
        return <></>;
    }
  };

  return (
    <>
      {getForm()}
    </>
  );
}

export default AuthView;
