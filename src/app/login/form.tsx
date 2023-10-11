'use client'

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";

import {
    experimental_useFormState,
    experimental_useFormStatus,
} from "react-dom";

import login from "@/app/login/action";

function SubmitButton() {
    const { pending } = experimental_useFormStatus()

    return (
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ margin: '10px 0' }}
            aria-disabled={pending}
        >
            Login
        </Button>
    )
}

export default function Form() {
    const [state, dispatch] = experimental_useFormState(login, {
        username: '',
        password: '',
    });

    return (
        <Container component="main" maxWidth="xs">
            <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
                <Typography variant="h5" align="center">Login</Typography>

                <form action={dispatch}>
                    <TextField
                        id='username'
                        name='username'
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Username"
                        autoFocus
                        aria-describedby={state.error ? "" : undefined}
                    />

                    <TextField
                        id='password'
                        name='password'
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                    />
                    <SubmitButton/>
                </form>

                {state.error && (
                    <Typography color='red' gutterBottom>
                        {state.error}
                    </Typography>
                )}
            </Paper>
        </Container>
    )
}
