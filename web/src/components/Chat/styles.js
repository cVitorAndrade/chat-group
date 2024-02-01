import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;

    background-color: ${ ({ theme }) => theme.COLORS.BLACK_700};

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 6rem auto 14rem;
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

    padding: 5rem 7rem 4rem;

    display: flex;

    > div {
        display: flex;
        align-items: center;

        width: 100%;

        background-color: ${ ({ theme }) => theme.COLORS.GRAY_600};

        padding: 0 .8rem 0 1.8rem;

        border-radius: .8rem;

        input {
            width: 100%;

            background: none;
            border: none;
            outline: none;

            color: ${ ({ theme }) => theme.COLORS.WHITE_900};

            font-size: 1.5rem;
            font-weight: 500;

            &::placeholder {
                color: ${ ({ theme }) => theme.COLORS.GRAY_800};

                font-size: 1.4rem;
                font-weight: 500;

                line-height: 2rem;
                
            }
        }

        div {
            display: flex;
            align-items: center;
            justify-content: center;

            padding: 1rem 1.1rem;

            border-radius: .8rem;

            background-color: ${ ({ theme }) => theme.COLORS.BLUE_900};

            color: ${ ({ theme }) => theme.COLORS.WHITE_900};

            transition: filter .3s cubic-bezier(0.19, 1, 0.22, 1);

            &:hover {
                cursor: pointer;
                filter: brightness(0.9);
            }

        }
    }
`