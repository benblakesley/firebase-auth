import { Box, Container } from '@mui/material';
import { JSX, useEffect, useState } from 'react';
import SignInForm from './SignInForm';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from './firebase';
import { Logout } from './Logout';

export function App (): JSX.Element
{
    const [signedIn, setSignedIn] = useState<boolean>(false);

    useEffect(() => 
    {
      const unsubscibe = onAuthStateChanged(firebaseAuth, user => {

        if(user)
        {
          setSignedIn(true)
        }
        else
        {
          setSignedIn(false);
        }
      })

      return () => unsubscibe();
    }, []);

    return (
        <Container 
            style={{
            display: 'flex',
            flexDirection: "column",
            justifyContent: 'center',
            backgroundColor: '#e0f7fa',
            height: "100vh"
          }}>
            {signedIn ? <Logout/> : <SignInForm/>}
      </Container>
    );
}

export default App;
