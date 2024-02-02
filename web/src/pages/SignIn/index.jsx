import { Container } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Background } from "../../components/Background";
import { Link } from "react-router-dom";

export function SignIn () {
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
                        />
                        <Input
                            title="Password"
                            placeholder="Enter your password"
                            type="password"
                        />
                    </div>

                    <Button 
                        title="Login"
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