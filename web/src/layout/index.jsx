import { Container,
        SideBar, 
        Chat, 
        Header, 
        AllChannels,
        Search,
        ChannelList,
        ChannelItem,
        Profile
    } from "./styles";

import { LuPlus } from "react-icons/lu";
import { MdOutlineSearch } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

import user from "./assets/Xanthe-Neal.jpg";

export function Layout ( { children }) {
    return(
        <Container>
            <SideBar>
                <AllChannels>
                    <div>
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
                            <ChannelItem>
                                <div>
                                    <p>
                                        FD
                                    </p>
                                </div>
                                <p>
                                    front-end developers
                                </p>
                            </ChannelItem>
                            <ChannelItem>
                                <div>
                                    <p>
                                        R
                                    </p>
                                </div>
                                <p>
                                    random
                                </p>
                            </ChannelItem>
                            <ChannelItem>
                                <div>
                                    <p>
                                        b
                                    </p>
                                </div>
                                <p>
                                    back-end
                                </p>
                            </ChannelItem>
                            <ChannelItem>
                                <div>
                                    <p>
                                        ca
                                    </p>
                                </div>
                                <p>
                                    cats and dogs
                                </p>
                            </ChannelItem>
                            <ChannelItem>
                                <div>
                                    <p>
                                        w
                                    </p>
                                </div>
                                <p>
                                    welcome
                                </p>
                            </ChannelItem>
                        
                        </ChannelList>

                    </div>

                    <Profile>
                        <div>
                            <div className="avatar">
                                <img 
                                    src={user} 
                                    alt="" 
                                />
                            </div>
                            <p>Xanthe Neal</p>
                        </div>

                        <MdKeyboardArrowDown
                            size={20}
                        />
                    </Profile>

                </AllChannels>

                
            </SideBar>

            <Chat>
                
            </Chat>

        </Container>
    )
}