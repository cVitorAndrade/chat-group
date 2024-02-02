import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "content background";

    > main {
        grid-area: content;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        
        form {
            width: min(90%, 50rem);
            display: flex;
            flex-direction: column;
            gap: 6rem;
            
            h2 {
                font-size: 3.2rem;
                font-weight: 600;

                color: ${ ({ theme }) => theme.COLORS.BLACK_900};
            }

            > div {
                display: flex;
                flex-direction: column;
                gap: 3rem;
            }

            p {
                font-size: 1.4rem;
                font-weight: 600;

                text-align: center;


                a {
                    margin-left: 1rem;
                    color: ${ ({ theme }) => theme.COLORS.BLUE_900};

                    &:hover {
                        cursor: pointer;
                        filter: brightness(0.9);
                    }
                }
            }
        }
    }

    @media (max-width: 800px) {
        grid-template-columns: 1fr;
        grid-template-areas: "content";
    }
`;