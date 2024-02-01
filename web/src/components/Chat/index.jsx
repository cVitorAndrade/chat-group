import { 
        Container, 
        Content, 
        Header, 
        Message, 
        SendMessage
    } from "./styles";

import nellieFrancis from "../../assets/Nellie-Francis.jpg"
import annalieseHuynh from "../../assets/Annaliese-Huynh.jpg"
import denzelBarrett from "../../assets/Denzel-Barrett.jpg"
import shaunaFirth from "../../assets/Shaunna-Firth.jpg"
import xantheNeal from "../../assets/Xanthe-Neal.jpg"

import { IoMdSend } from "react-icons/io";

export function Chat () {
    return(
        <Container>
            <Header>
                <h1>front-end developers</h1>
            </Header>

            <Content>
                <Message>
                    <div className="avatar">
                        <img src={nellieFrancis} alt="" />
                    </div>
                    <div className="infos">
                        <h4>
                            Nellie Francis
                            <span>
                                yesterday at 2:29 AM
                            </span>
                        </h4>
                        <p>
                            Suspendisse enim tellus, elementum quis dictum sed, sodales at mauris 😀
                        </p>
                    </div>
                </Message>

                <Message>
                    <div className="avatar">
                        <img src={annalieseHuynh} alt="" />
                    </div>
                    <div className="infos">
                        <h4>
                            Annaliese Huynh
                            <span>
                                yesterday at 2:29 AM
                            </span>
                        </h4>
                        <p>
                            Orci varius natoque penatibus et magnis dis parturient montes 😀
                        </p>
                    </div>
                </Message>

                <Message>
                    <div className="avatar">
                        <img src={xantheNeal} alt="" />
                    </div>
                    <div className="infos">
                        <h4>
                            Xanthe Neal
                            <span>
                                yesterday at 1:29 PM
                            </span>
                        </h4>
                        <p>
                            Etiam eleifend fermentum ipsum eu rhoncus. In non justo aliquam, imperdiet metus id, tincidunt orci 😍
                        </p>
                    </div>
                </Message>
                <Message>
                    <div className="avatar">
                        <img src={denzelBarrett} alt="" />
                    </div>
                    <div className="infos">
                        <h4>
                            Denzel Barrett
                            <span>
                                yesterday at 2:39 PM
                            </span>
                        </h4>
                        <p>
                            Proin pretium id nunc eu molestie. Nam consectetur
                        </p>
                    </div>
                </Message>
                <Message>
                    <div className="avatar">
                        <img src={nellieFrancis} alt="" />
                    </div>
                    <div className="infos">
                        <h4>
                            Nellie Francis
                            <span>
                                yesterday at 2:29 AM
                            </span>
                        </h4>
                        <p>
                            Class aptent taciti sociosqu ad litora torquent per conubia nostra 😀
                        </p>
                    </div>
                </Message>
                <Message>
                    <div className="avatar">
                        <img src={shaunaFirth} alt="" />
                    </div>
                    <div className="infos">
                        <h4>
                            Shaunna Firth
                            <span>
                                today at 1:29 PM
                            </span>
                        </h4>
                        <p>
                            Morbi eget turpis ut massa luctus cursus. Sed sit amet risus quis neque condimentum aliquet. Phasellus consequat et justo eu accumsan 🙌. Proin pretium id nunc eu molestie. Nam consectetur, ligula vel mattis facilisis, ex mauris venenatis nulla, eget tempor enim neque eget massa 🤣
                        </p>
                    </div>
                </Message>
                <Message>
                    <div className="avatar">
                        <img src={denzelBarrett} alt="" />
                    </div>
                    <div className="infos">
                        <h4>
                            Denzel Barrett
                            <span>
                                today at 2:39 PM
                            </span>
                        </h4>
                        <p>
                            Aenean tempus nibh vel est lobortis euismod. Vivamus laoreet viverra nunc 🐶
                        </p>
                    </div>
                </Message>
                
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