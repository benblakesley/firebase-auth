import { Box, Container } from '@mui/material';
import { JSX, useEffect, useState } from 'react';
import SignInForm from './SignInForm';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth, firestore } from './firebase';
import { Logout } from './Logout';
import { addDoc, collection, doc, getDoc, setDoc } from 'firebase/firestore';

interface User 
{
  userId: string;
  email: string;
}
export function App (): JSX.Element
{
    const [signedIn, setSignedIn] = useState<boolean>(false);

    const [user, setUser] = useState<User | undefined>(undefined);

    useEffect(() => 
    {
      const unsubscibe = onAuthStateChanged(firebaseAuth, async (user) => {

        if(user)
        {
            const userRef = doc(firestore, "users", user.uid);
            const userDocSnap = await getDoc(userRef); //Check if user exists already

            if (!userDocSnap.exists()){
                const userRef = doc(firestore, "users", user.uid);
                const newUser = { id: user.uid, email: user.email! };
                await setDoc(userRef, newUser);
                console.log("User added to Firestore:", user.uid);
            }
            else{
                console.log("User already exists in Firestore:", user.uid);
            }

        setUser({userId: user?.uid, email: user.email!});

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
            {signedIn && user ? <Logout email={user.email}/> : <SignInForm/>}
      </Container>
    );
}

export default App;
