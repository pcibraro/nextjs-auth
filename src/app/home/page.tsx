import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

import { getSession } from "@/services/authentication/cookie-session";

export default async function Home() {
    const user = await getSession();

    return (
        <Container style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Paper elevation={3} style={{ padding: '20px' }}>
                <Typography variant="h4" gutterBottom>
                    Welcome {user?.login}
                </Typography>
            </Paper>
        </Container>
    );
}