import { Container } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Background } from "../../components/Background";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";

import socket from "../../socket";

export function SignIn () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuth();

    const handleSignIn = async (e) => {
        e.preventDefault();

        if ( !email || !password ) {
            return alert("It is necessary to fill in all fields");
        }

        signIn({ email, password});
        
    }
    return (
        <Container>
            <main>

                <form>
                    <h2>Welcome Back!</h2>

                    <div>
                        <Input
                            title="Email address"
                            placeholder="Enter your email"
                            type="email"
                            onChange={ e => setEmail(e.target.value) }
                        />
                        <Input
                            title="Password"
                            placeholder="Enter your password"
                            type="password"
                            onChange={ e => setPassword(e.target.value) }
                        />
                    </div>

                    <Button 
                        title="Login"
                        onClick={ e => handleSignIn(e) }
                    />

                    <p>
                        Don’t have an account?  
                        <Link to="/signup">
                            Sign Up
                        </Link>
                    </p>
                </form>
            </main>

            <Background />
        </Container>
    )
}