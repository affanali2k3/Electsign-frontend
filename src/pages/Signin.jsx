import React, { useEffect } from 'react';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import {SignInEmail} from '../components/components/auth/SignInEmail';
import {SignUp} from '../components/components/auth/SignUp';
import { FacebookAuth } from "../firebase";

const Signin = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/account');
    }
  }, [user]);


  async function FacebookAuthButtonClicked() {
    const user = await FacebookAuth();
    console.log("facebook user: ", user);};

  return (
    <div>
      <SignInEmail />
      <SignUp />
      <div className='max-w-[240px] m-auto py-4'>
        <GoogleButton onClick={handleGoogleSignIn} />
      </div>

      <div>
          <button onClick={FacebookAuthButtonClicked}>
            Facebook
          </button>
        </div>


    </div>
  );                 
};

export default Signin;
