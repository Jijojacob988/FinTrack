import React from 'react';
import Header from '../components/Header'; // If you want to use Header here too
import SignupSigninComponent from '../components/SignupSignin';

function Signup() {
  return (
    <div> 
      <div className='wrapper'>
        <SignupSigninComponent />
      </div>
    </div>
  );
}

export default Signup;
