import { Background } from "../../components/Background";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Container } from "./styles";

export function SingUp () {
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
                        />
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
                        title="Signup"
                    />

                    <p>
                        Have an account? 
                        <a>
                            Sign In
                        </a>
                    </p>
                </form>
            </main>

            <Background />

        </Container>
    )
}