import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;

    background-color: ${ ({ theme }) => theme.COLORS.BLACK_700};

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 6rem auto 9rem;
    grid-template-areas: "chat-header" "content" "send-message";
`;

export const Header = styled.header`
    width: 100%;

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
    grid-area: content;

    display: flex;
    flex-direction: column;
    gap: 3.8rem;

    overflow-y: auto;

    padding-left: 7rem;
    padding-right: 7.6rem;

    justify-content: end;
`;


export const Message = styled.div`
    display: flex;
    gap: 2.8rem;

    .avatar {
        width: 4.2rem;
        height: 4.2rem;
        
        border-radius: .7rem;

        
        img {
            width: inherit;
            height: inherit;
            
            object-fit: cover;
            
            border-radius: inherit;
        }
    }

    .infos {
        display: flex;
        flex-direction: column;
        gap: .8rem;

        h4 {
            font-size: 1.8rem;
            font-weight: 700;

            line-height: 2.4rem;

            color: ${ ({ theme }) => theme.COLORS.GRAY_800};

            span {
                font-size: 1.4rem;
                font-weight: 500;

                line-height: 2rem;

                margin-left: .8rem;
            }
        }

        p {
            font-size: 1.8rem;
            font-weight: 500;

            line-height: 2.4rem;

            color: ${ ({ theme }) => theme.COLORS.GRAY_900};
        }
    }
`;

export const SendMessage = styled.div`
    grid-area: send-message;
    background-color: red;

    display: flex;
    justify-content: center;
    align-items: center;
`