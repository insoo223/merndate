import '../App.css';
import Layout from './Layout';
// import GoogleLogin from './googleLogin';

import { GoogleLogin } from '@react-oauth/google';

function RteLogin() {
  return (
    <div className="App">
      <Layout>
        <GoogleLogin
          onSuccess={credentialResponse => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
        
      </Layout>
    </div>
  );
}

export default RteLogin;
