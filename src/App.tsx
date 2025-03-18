import { Box, Container } from '@mui/material';
import { JSX } from 'react';
import SignInForm from './SignInForm';

export function App (): JSX.Element
{
    return (
        <Container 
            style={{
            display: 'flex',
            flexDirection: "column",
            justifyContent: 'center',
            backgroundColor: '#e0f7fa',
            height: "100vh"
          }}>
            <SignInForm/>
      </Container>
    );
}

export default App;
