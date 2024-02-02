import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;


    > label {
        color: ${ ({ theme }) => theme.COLORS.BLACK_900};
        
        font-weight: 600;
        font-size: 1.5rem;
    }

    > input {
        border: 2px solid ${ ({ theme }) => theme.COLORS.GRAY_800};
        outline: none;

        border-radius: 1rem;
        padding: 1rem;

        font-weight: 500;
        font-size: 1.4rem;

        &::placeholder {
            color: ${ ({ theme }) => theme.COLORS.GRAY_800};
            font-weight: 500;
            font-size: 1.4rem;
        }
    }
`;