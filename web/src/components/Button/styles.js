import styled from "styled-components";

export const Container = styled.button`
    background-color: ${ ({ theme }) => theme.COLORS.BLACK_900};

    padding: .6rem 0;

    text-align: center;

    border-radius: 1rem;
    border: none;

    font-size: 1.5rem;
    font-weight: 700; 
    
    line-height: 2.4rem;

    color: ${ ({ theme }) => theme.COLORS.WHITE_900};

    transition: filter .2 cubic-bezier(0.105, 0.82, 0.165, 1);

    &:hover {
        cursor: pointer;
        filter: brightness(0.7);
    }
`;