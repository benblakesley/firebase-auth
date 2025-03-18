import { Box, Button, Container, Typography } from "@mui/material"
import { signOut } from "firebase/auth"
import { firebaseAuth } from "./firebase"


export const Logout = () => 
{
    const handleLogout = async () =>
    {
        await signOut(firebaseAuth);
    }

    return (
        <Container maxWidth="xs">
        <Box
            sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            mt: 4,
            p: 2,
            border: '1px solid #ddd',
            borderRadius: 2,
            boxShadow: 3,
            }}
        >   
            <Typography variant="h4" gutterBottom>
                Sign In
            </Typography>
            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
                onClick={handleLogout}
            >
                Sign Out
            </Button>
          </Box>
        </Container>
    )
}