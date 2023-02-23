import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {
  signInWithGooglePopup,
  createUserDocumentfromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentfromAuth(user);
    console.log("userDocRef", userDocRef);
  };

  return (
    <>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google popup</button>
      <SignUpForm />
    </>
  );
};

export default SignIn;
