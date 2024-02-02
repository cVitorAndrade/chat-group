import { Link, useNavigate } from "react-router-dom";
import { Background } from "../../components/Background";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Container } from "./styles";
import { useState } from "react";
import { api } from "../../services/api";

export function SignUp () {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        
        if ( !name || !email || !password ) {
            return alert("It is necessary to fill in all fields");
        }

        api.post("/users", { name, email, password })
        .then((response) => {
            alert(response.data.message);
            navigate("/");
        })
        .catch(error => {
            if ( error.response ) {
                return alert(error.response.data.message);
            }

            return alert("Unable to register");
        });

    }

    return (
        <Container>
            <main>

                <form>
                    <h2>Get Started Now</h2>    

                    <div>
                        <Input
                            title="Name"
                            placeholder="Enter your name"
                            type="text"
                            onChange= { e => setName(e.target.value) }
                        />
                        <Input
                            title="Email address"
                            placeholder="Enter your email"
                            type="email"
                            onChange= { e => setEmail(e.target.value) }
                        />
                        <Input
                            title="Password"
                            placeholder="Enter your password"
                            type="password"
                            onChange= { e => setPassword(e.target.value) }
                        />
                    </div>

                    <Button 
                        title="Signup"
                        onClick={ e => handleSignUp(e) }
                    />

                    <p>
                        Have an account? 
                        <Link to="/">
                            Sign In
                        </Link>
                    </p>
                </form>
            </main>

            <Background />

        </Container>
    )
}