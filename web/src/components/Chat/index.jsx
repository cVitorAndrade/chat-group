import { 
        Container, 
        Content, 
        Header, 
        Message, 
        SendMessage
    } from "./styles";

import { IoMdSend } from "react-icons/io";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useParams } from "react-router-dom";

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

    useEffect(() => {
        handleGetChannel();
        handleGetChannelMessages();
    }, [channel_id]);

    return(
        <Container>
            <Header>
                <h1>{ channelName }</h1>
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

            <SendMessage id="down">
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

        </Container>
    )
}