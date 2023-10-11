'use server'
import {setSession} from "@/services/authentication/cookie-session";
import {redirect} from "next/navigation";

export default async function login (
    previousState: { username: string; password: string, error?: string },
    form: FormData
) {
    const username = form.get('username');
    const password = form.get('password');

    if(username === 'admin' && password === 'admin') {
        await setSession({ login: 'admin' });

        return redirect('/home');
    }
    else {
        return {
            username: previousState.username,
            password: previousState.password,
            error: 'Invalid username or password'
        }
    }
}