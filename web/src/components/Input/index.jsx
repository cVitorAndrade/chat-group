import { Container } from "./styles";

export function Input ({ title, ...rest}) {
    return (
        <Container>
                <label
                    htmlFor={title}
                >
                    { title }
                </label>

                <input
                    id={title}
                    {...rest}
                    autoComplete="off"
                />
        </Container>
    )
}