import { Container,
        SideBar, 
        Chat, 
        Header, 
        AllChannels,
        Search,
        ChannelList,
        Channel,
        Profile,
        SelectedChannel,
        Back,
        ChannelDescription,
        ChannelMembers,
        Member
    } from "./styles";

import { LuPlus } from "react-icons/lu";
import { MdOutlineSearch } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

import { MdArrowBackIosNew } from "react-icons/md";

import xanteNeal from "./assets/Xanthe-Neal.jpg";
import nellieFrancis from "./assets/Nellie-Francis.jpg";
import shaunnaFirth from "./assets/Shaunna-Firth.jpg";
import annalieseHuynh from "./assets/Annaliese-Huynh.jpg";
import denzelBarret from "./assets/Denzel-Barrett.jpg";

export function Layout ( { children }) {
    return(
        <Container>
            <SideBar>
                <AllChannels className="none">
                    <Header>
                        <span>Channels</span>
                        <div className="new-chat">
                            <LuPlus
                                size={15}
                            />
                        </div>
                    </Header>

                    <Search>
                        <div>
                            <label
                                htmlFor="search-channel"
                            >
                                <MdOutlineSearch
                                    size={20}
                                />
                            </label>
                            <input
                                type="text"
                                placeholder="Search"
                                id="search-channel"
                            />
                        </div>
                    </Search>

                    <ChannelList>
                        <Channel>
                            <div>
                                <p>
                                    FD
                                </p>
                            </div>
                            <p>
                                front-end developers
                            </p>
                        </Channel>
                        <Channel>
                            <div>
                                <p>
                                    R
                                </p>
                            </div>
                            <p>
                                random
                            </p>
                        </Channel>
                        <Channel>
                            <div>
                                <p>
                                    b
                                </p>
                            </div>
                            <p>
                                back-end
                            </p>
                        </Channel>
                        <Channel>
                            <div>
                                <p>
                                    ca
                                </p>
                            </div>
                            <p>
                                cats and dogs
                            </p>
                        </Channel>
                        <Channel>
                            <div>
                                <p>
                                    w
                                </p>
                            </div>
                            <p>
                                welcome
                            </p>
                        </Channel>
                    
                    </ChannelList>
                </AllChannels>

                <SelectedChannel>
                    <Back>
                        <div>
                            <MdArrowBackIosNew
                                size={24}
                            />
                        </div>

                        <p>All Channels</p>
                    </Back>

                    <ChannelDescription>
                        <h2>
                            Front-end developers
                        </h2>

                        <p>
                            Pellentesque sagittis elit enim, sit amet ultrices tellus accumsan quis. In gravida mollis purus, at interdum arcu tempor non
                        </p>
                    </ChannelDescription>

                    <ChannelMembers>
                        <h2>
                            Members
                        </h2>

                        <ul>
                            <Member>
                                <div>
                                    <img src={xanteNeal} alt="" />
                                </div>
                                <p>
                                    Xanthe Neal
                                </p>
                            </Member>

                            <Member>
                                <div>
                                    <img src={nellieFrancis} alt="" />
                                </div>
                                <p>
                                    Nellie Francis
                                </p>
                            </Member>

                            <Member>
                                <div>
                                    <img src={denzelBarret} alt="" />
                                </div>
                                <p>
                                    Denzel Barret
                                </p>
                            </Member>

                            <Member>
                                <div>
                                    <img src={shaunnaFirth} alt="" />
                                </div>
                                <p>
                                    Shaunna Firth
                                </p>
                            </Member>

                            <Member>
                                <div>
                                    <img src={annalieseHuynh} alt="" />
                                </div>
                                <p>
                                    Annaliese Huynh
                                </p>
                            </Member>
                        </ul>

                    </ChannelMembers>

                </SelectedChannel>

                <Profile>
                    <div>
                        <div className="avatar">
                            <img 
                                src={xanteNeal} 
                                alt="" 
                            />
                        </div>
                        <p>Xanthe Neal</p>
                    </div>

                    <MdKeyboardArrowDown
                        size={20}
                    />
                </Profile>
                
            </SideBar>

            <Chat>
                
            </Chat>

        </Container>
    )
}