import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;

    background-color: ${ ({ theme }) => theme.COLORS.BLACK_700};

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 6rem auto 9rem;
    grid-template-areas: "chat-header" "content" "send-message";

    *.none {
        display: none;
    }
`;

export const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;

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

    > svg {
        color: ${ ({ theme }) => theme.COLORS.GRAY_900};
        cursor: pointer;
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
    padding-bottom: 5rem;
    padding-top: 5rem;
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
    align-items: center;
    justify-content: center;

    > div {
        display: flex;
        align-items: center;

        width: 100%;

        background-color: ${ ({ theme }) => theme.COLORS.GRAY_600};

        
        border-radius: .8rem;
        height: 5.2rem;
        padding: 0 .8rem 0 1.8rem;

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

export const AddMemberModal = styled.div`
    position: fixed;
    inset: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(0, 0, 0, .4);

    > div {
        width: min(90%, 65rem);
        padding: 3.5rem 3.8rem 2.2rem 4.4rem;

        display: flex;
        flex-direction: column;
        gap: 2.6rem;

        background-color: ${ ({ theme }) => theme.COLORS.BLACK_900};

        border-radius: 2.4rem;

        h2,
        button {
            color: ${ ({ theme }) => theme.COLORS.WHITE_800};

            font-size: 1.8rem;
            font-weight: 700;

            letter-spacing: -3.5%;

            line-height: 2.4rem;
        }

        input {
            padding: 1.2rem 1.5rem;
            
            background-color: ${ ({ theme }) => theme.COLORS.GRAY_600};

            font-size: 1.8rem;
            color: ${ ({ theme }) => theme.COLORS.WHITE_800};

            border-radius: .8rem;

            outline: none;
            border: none;
        }

        input {
            width: 100%;
        }

        input::placeholder {
            font-size: 1.8rem;
            font-weight: 500;

            line-height: 2.4rem;

            letter-spacing: -3.5%;

            color: ${ ({ theme }) => theme.COLORS.GRAY_800};
        }

        .buttons {
            display: flex;
            gap: 1rem;
            align-self: flex-end;

            button:first-child {
                background-color: ${ ({ theme }) => theme.COLORS.RED_900};
            }

            button {
                padding: .7rem 3rem;

                font-weight: 500;
                background-color: ${ ({ theme }) => theme.COLORS.BLUE_900};

                border-radius: .8rem;

                align-self: flex-end;

                border: none;

                transition: filter .3s cubic-bezier(0.47, 0, 0.745, 0.715);
                
                &:hover {
                    cursor: pointer;
                    filter: brightness(0.7);
                }
            }
        }
    }
`;