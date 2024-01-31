import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 6rem auto;
    grid-template-areas: "chat-header" "content";
`

export const Header = styled.header`
    width: 100%;
    background-color: green;

    grid-area: chat-header;

    padding: 2.4rem 7rem 1.2rem;

    box-shadow: 0px 4px 4px 0px #00000040;

    > h1 {

        color: ${ ({ theme }) => theme.COLORS.GRAY_900};
        font-size: 1.8rem;
        font-weight: 700;

        line-height: 2.4rem;

        text-transform: uppercase;
    }
`;

export const Content = styled.div`
    height: 100%;
    background-color: blueviolet;
    grid-area: content;
`;