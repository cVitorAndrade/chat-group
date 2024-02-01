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
    const { channel_id } = useParams();

    const handleGetChannelMessages = () => {
        api.get(`/messages/${channel_id}`)
        .then( ({ data }) => {
            const { messages } = data;
            setMessages(messages);
        });
    }

    useEffect(() => {
        handleGetChannelMessages();
    }, [channel_id]);

    return(
        <Container>
            <Header>
                <h1>front-end developers</h1>
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
                                    Denzel Barrett
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
                    />

                    <div>
                        <IoMdSend 
                            size={18}
                        />
                    </div>

                </div>
            </SendMessage>

        </Container>
    )
}