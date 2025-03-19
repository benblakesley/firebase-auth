import { Box, Button, Container, Typography } from "@mui/material"
import { signOut } from "firebase/auth"
import { firebaseAuth } from "./firebase"

interface Props
{
    email: string;
}

export const Logout = ({email}: Props) => 
{
    const handleLogout = async () =>
    {
        await signOut(firebaseAuth);
    };

    const addToDb = () => 
    {

    };

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
                Sign Out from {email}
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
            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
                onClick={addToDb}
            >
                Add
            </Button>
          </Box>
        </Container>
    )
}