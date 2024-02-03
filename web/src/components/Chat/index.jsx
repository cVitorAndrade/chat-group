import { 
    AddMemberModal,
        Container, 
        Content, 
        Header, 
        Message, 
        SendMessage
    } from "./styles";

import { IoMdSend } from "react-icons/io";
import { AiOutlineUsergroupAdd } from "react-icons/ai";

import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useParams } from "react-router-dom";

import io from "socket.io-client";

const socket = io("http://localhost:3333");

export function Chat () {
    const [messages, setMessages] = useState([]);
    const [channelName, setChannelName] = useState("");
    const { channel_id } = useParams();

    const handleGetChannelMessages = () => {
        api.get(`/messages/${channel_id}`)
        .then( ({ data }) => {
            const { messages } = data;
            setMessages(messages);
        });
    }

    const [messageText, setMessageText] = useState("");

    const handleCreateMessage = () => {
        if ( messageText.trim() === "" ) {
            setMessageText("");
            return;
        }

        api.post(`/messages/${channel_id}`, { text: messageText })
        .then( () => {
            setMessageText("");
            handleGetChannelMessages();
        })
        .catch( error => console.log(error));
    }

    const handleKeyPress = (key) => {
        if ( key === "Enter" ) {
            handleCreateMessage();
        }
    }

    const handleGetChannel = () => {
        api.get(`/my_channels/${channel_id}`)
        .then(({ data }) => {
            const { name } = data;
            setChannelName(name);
        })
        .catch( error => {
            console.log(error);
        });
    }

    const [viewModalAddUsers, setViewModalAddUsers] = useState(false)
    const [newMemberEmail, setNewMemberEmail] = useState("");

    const handleAddNewUser = () => {
        api.post(`user_in_channel/${channel_id}`, { email: newMemberEmail })
        .then(() => {
            closeModal();
        })
        .catch(error => console.log(error));
    }

    const closeModal = () => {
        setViewModalAddUsers(false);
        setNewMemberEmail("");
    }

    useEffect(() => {
        handleGetChannel();
        handleGetChannelMessages();
    }, [channel_id]);


    return(
        <Container>
            <Header>
                <h1>{ channelName }</h1>
                <AiOutlineUsergroupAdd 
                    onClick={ () => setViewModalAddUsers(true)}
                    size={30}
                
                />
            </Header>

            <Content>

                {
                    messages && 
                    messages.map( message => (
                        <Message
                            key={message.id}
                        >
                            <div className="avatar">
                                <img src={message.avatar || "https://github.com/cvitorandrade.png"} alt="" />
                            </div>
                            <div className="infos">
                                <h4>
                                    {message.name}
                                    <span>
                                        { message.created_at }
                                    </span>
                                </h4>
                                <p>
                                    { message.text }
                                </p>
                            </div>

                        </Message>
                    ))
                }
                
                
            </Content>

            <SendMessage>
                <div>
                    <input 
                        type="text"
                        placeholder="Type a message here"
                        onChange={ e => setMessageText(e.target.value) }
                        value={ messageText }
                        onKeyDown={ e => handleKeyPress(e.code)}
                    />

                    <div
                        onClick={ handleCreateMessage }
                    >
                        <IoMdSend 
                            size={18}
                        />
                    </div>

                </div>
            </SendMessage>

            <AddMemberModal
                className={ viewModalAddUsers ? "" : "none" }
            >
                <div>
                    <h2>
                        ADD NEW MEMBER
                    </h2>

                    <div>
                        <input
                            type="text"
                            placeholder="Enter user email"
                            value={newMemberEmail}
                            onChange={ e => setNewMemberEmail(e.target.value) }
                        />
                    </div>

                    <div className="buttons">
                        <button
                            onClick={ closeModal }
                        >
                            Cancel
                        </button>

                        <button
                            onClick={ handleAddNewUser }
                        >
                            Save
                        </button>
                    </div>
                </div>
            </AddMemberModal>

        </Container>
    )
}