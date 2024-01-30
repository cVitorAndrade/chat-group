import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 34rem auto;
    grid-template-areas: "side-bar chat";

    *.none {
        display: none;
    }
`;

export const SideBar = styled.div`
    grid-area: side-bar;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-color: ${ ({ theme }) => theme.COLORS.BLACK_900};
`;

export const AllChannels = styled.div`
    width: 100%;
`;

export const Header = styled.header`
    width: 100%;

    padding: 1.8rem 3.2rem;

    display: flex;
    align-self: center;
    justify-content: space-between;

    box-shadow: 0px 4px 4px 0px #00000040;

    > span {
        display: flex;
        align-items: center;

        font-size: 1.8rem;
        font-weight: 700;

        line-height: 2.4rem;
        letter-spacing: -3.5%;

        color: ${ ({ theme }) => theme.COLORS.GRAY_900}
        
    }

    .new-chat {
        display: flex;
        justify-content: center;
        align-items: center;

        padding: .9rem;

        border-radius: .8rem;

        background-color: ${ ({ theme }) => theme.COLORS.BLACK_700};

        color: ${ ({ theme }) => theme.COLORS.WHITE_800};

        &:hover {
            filter: brightness(0.9);
            cursor: pointer;
        }
    }
`;

export const Search = styled.div`
    padding: 0 3.2rem;
    margin: 2rem 0 3.5rem;

    > div {
        background-color: ${ ({ theme }) => theme.COLORS.GRAY_600};
        padding: 1.5rem 1rem;

        display: flex;
        align-items: center;
        gap: 1rem;

        border-radius: .8rem;


        label {
            display: flex;
            align-items: center;

            color: ${ ({ theme }) => theme.COLORS.WHITE_900};
        }

        input {
            border: none;
            background: none;
            outline: none;

            color: ${ ({ theme }) => theme.COLORS.WHITE_900};

            font-size: 1.4rem;

            &::placeholder {
                color: ${ ({ theme }) => theme.COLORS.GRAY_800};
                font-size: 1.4rem;
                font-weight: 500;

                line-height: 2rem;
                letter-spacing: -3.5%;
            }
        }

    }
`;

export const ChannelList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    padding: 0 3.2rem;
`;

export const Channel = styled.li`
    display: flex;
    align-items: center;
    gap: 1.2rem;


    &:hover {
        cursor: pointer;

        > div {
            background-color: ${ ({ theme }) => theme.COLORS.WHITE_900};

            p {
                color:  ${ ({ theme }) => theme.COLORS.BLACK_700};
            }
        }
    }

    > div {
        width: 4.2rem;
        height: 4.2rem;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: ${ ({ theme }) => theme.COLORS.BLACK_700};

        border-radius: .8rem;

        transition: all .3s cubic-bezier(0.39, 0.575, 0.565, 1);
        
        p {
            transition: all .3s cubic-bezier(0.39, 0.575, 0.565, 1);

            color: ${ ({ theme }) => theme.COLORS.WHITE_900};
            
            font-size: 1.8rem;
            font-weight: 600;

            line-height: 2.4rem;

            letter-spacing: -3.5%;

            text-transform: uppercase;
        }
    }

    > p {
        color: ${ ({ theme }) => theme.COLORS.GRAY_700};

        font-size: 1.8rem;
        font-weight: 700;

        line-height: 2.4rem;

        letter-spacing: -3.5%;

        text-transform: uppercase;
    }
`;

export const Profile = styled.div`
    background-color: ${ ({ theme }) => theme.COLORS.BLACK_800};

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1.5rem 3.2rem 1.8rem;

    position: relative;

    > div:first-child {
        display: flex;
        align-items: center;
        gap: 2.8rem;

        .avatar {
            width: 4.2rem;
            height: 4.2rem;
            
            border-radius: .7rem;

            img {
                width: 4.2rem;
                height: 4.2rem;

                border-radius: inherit;
            }
        }

        p {
            color: ${ ({ theme }) => theme.COLORS.GRAY_800};

            font-size: 1.8rem;
            font-weight: 700;

            line-height: 2.4rem;

            letter-spacing: -3.5%;
        }
    }

    > svg {
        color: ${ ({ theme }) => theme.COLORS.GRAY_800};
        
        cursor: pointer;
    }
`;

export const UserActions = styled.div`
    background-color: ${ ({ theme }) => theme.COLORS.BLACK_700};

    width: 60%;

    display: flex;
    flex-direction: column;
    gap: .5rem;

    padding: 1.5rem;
    padding-left: 1.2rem;

    border-radius: 1.2rem;
    border: 1px solid ${ ({ theme }) => theme.COLORS.GRAY_600};

    position: absolute;
    bottom: 65%;
    right: 6%;
`;

export const Action = styled.div`
    padding: 1rem;
    width: 100%;

    display: flex;
    gap: 1rem;
    
    border-radius: .8rem;

    color: ${ ({ theme }) => theme.COLORS.GRAY_900};

    transition: background .3s cubic-bezier(0.39, 0.575, 0.565, 1);

    &:hover {
        cursor: pointer;

        background-color: ${ ({ theme }) => theme.COLORS.GRAY_600};
    }

    &.logout {
        color: ${ ({ theme }) => theme.COLORS.RED_900};

        padding: 2.4rem 1rem 1rem;

        border-top: 1px solid ${ ({ theme }) => theme.COLORS.GRAY_600};
        border-radius: 0;

        &:hover {
            background-color: transparent;
        }

    }

    > span {
        font-weight: 500;
        font-size: 1.2rem;

        line-height: 1.6rem;

        letter-spacing: -3.5%;
    }
`;

export const SelectedChannel = styled.div`
    width: 100%;
`;

export const Back = styled.div`
    padding: 1.7rem 1.6rem;
    
    display: flex;
    align-items: center;
    gap: 1.5rem;
    
    box-shadow: 0px 4px 4px 0px #00000040;

    > div  {
        display: flex;
        align-items: center;
        justify-content: center;

        padding: 2px .7rem;
        
        cursor: pointer;

        color: ${ ({ theme }) => theme.COLORS.WHITE_800};
    }

    > p {
        font-size: 1.8rem;
        font-weight: 700;

        line-height: 2.4rem;
        letter-spacing: -3.5%;

        color: ${ ({ theme }) => theme.COLORS.GRAY_900};
    }
`;

export const ChannelDescription = styled.div`
    padding: 2.5rem 3.2rem 4.3rem;

    display: flex;
    flex-direction: column;
    gap: 1.8rem;

    > h2,
    p {
        font-size: 1.8rem;
        font-weight: 700;

        line-height: 2.4rem;
        letter-spacing: -3.5%;

        color: ${ ({ theme }) => theme.COLORS.GRAY_900};

        text-transform: uppercase;
    }

    > p {
        text-transform: none;
        font-weight: 400;
    }
`;

export const ChannelMembers = styled.div`
    padding: 0 3.2rem;
    
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    > h2 {
        font-size: 1.8rem;
        font-weight: 700;

        line-height: 2.4rem;
        letter-spacing: -3.5%;

        color: ${ ({ theme }) => theme.COLORS.GRAY_900};

        text-transform: uppercase;
    }

    > ul {
        display: flex;
        flex-direction: column;
        gap: 3.2rem;
    }
`;

export const Member = styled.li`
    display: flex;
    align-items: center;
    gap: 2.8rem;

    > div {
        width: 4.2rem;
        height: 4.2rem;

        border-radius: .7rem;

        img {
            width: 4.2rem;
            height: 4.2rem;

            object-fit: cover;

            border-radius: inherit;
        }
    }

    > p {
        font-size: 1.8rem;
        font-weight: 700;

        line-height: 2.4rem;
        letter-spacing: -3.5%;

        color: ${ ({ theme }) => theme.COLORS.GRAY_800};
    }

`;

export const CreateChannelModal = styled.div`
    background-color: rgba(0, 0, 0, .4);

    position: fixed;
    inset: 0;

    display: flex;
    justify-content: center;
    align-items: center;


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

        input, textarea {
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

        textarea {
            resize: none;
            height: 11rem;
        }

        input::placeholder,
        textarea::placeholder {
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

export const Chat = styled.div`
    grid-area: chat;
    background-color: yellow;

`;