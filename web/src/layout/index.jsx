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
        Member,
        UserActions,
        Action,
        CreateChannelModal
    } from "./styles";

import { LuPlus } from "react-icons/lu";
import { MdOutlineSearch } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

import { MdArrowBackIosNew } from "react-icons/md";

import { FaCircleUser, FaLeaf } from "react-icons/fa6";
import { PiMountainsBold } from "react-icons/pi";
import { RiLogoutBoxRLine } from "react-icons/ri";

import xanteNeal from "./assets/Xanthe-Neal.jpg";
import nellieFrancis from "./assets/Nellie-Francis.jpg";
import shaunnaFirth from "./assets/Shaunna-Firth.jpg";
import annalieseHuynh from "./assets/Annaliese-Huynh.jpg";
import denzelBarret from "./assets/Denzel-Barrett.jpg";

import { useEffect, useState } from "react";

import io from "socket.io-client";

const socket = io("http://localhost:3333");

import { api } from "../services/api";


export function Layout ( { children }) {
    const [viewAllChannels, setViewAllChannels] = useState(true);
    const [viewUserActions, setViewUserActions] = useState(false);
    const [viewCreateChannelModal, setViewCreateChannelModal] = useState(false);

    const [newChannelName, setNewChannelName] = useState("");
    const [newChannelDescription, setNewChannelDescription] = useState("");

    const handleCreateChannel = () => {
        if ( newChannelName.trim() === "" || newChannelDescription.trim() === "" ) { 
            return alert("It is necessary to fill in all fields");
        }

        api.post("/channels/1", { name: newChannelName, description: newChannelDescription })
        .then(() => {
            closeModal();
        })
        .catch(error => {
            console.log(error);
        });
    }

    const closeModal = () => {
        setViewCreateChannelModal(false)
        setNewChannelName("");
        setNewChannelDescription("");
    }

    useEffect(() => {
        socket.on("teste", (data) => console.log(data));

    }, [])

    return(
        <Container>
            <SideBar>
                <AllChannels className={ viewAllChannels ? "" : "none" }>
                    <Header>
                        <span>Channels</span>
                        <div 
                            className="new-chat"
                            onClick={ () => setViewCreateChannelModal(true) }
                        >
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
                        <Channel
                            onClick={ () => setViewAllChannels(false) }
                        >
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

                <SelectedChannel className={ viewAllChannels ? "none" : "" }>
                    <Back
                        onClick={ () => setViewAllChannels(true) }
                    >
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
                        onClick={ () => setViewUserActions(prevValue => !prevValue)}
                    />

                    <UserActions className={ viewUserActions ? "" : "none"}>
                        <Action>
                            <FaCircleUser
                                size={15}
                            />

                            <span>
                                My Profile
                            </span>
                        </Action>

                        <Action>
                            <PiMountainsBold
                                size={15}
                            />

                            <span>
                                Tweeter
                            </span>
                        </Action>

                        <Action className="logout">
                            <RiLogoutBoxRLine
                                size={15}
                            />

                            <span>
                                Logout
                            </span>
                        </Action>
                    </UserActions>

                </Profile>
                
            </SideBar>

            <CreateChannelModal 
                className={ viewCreateChannelModal ? "" : "none"}
            >
                <div>
                    <h2>
                        NEW CHANNEL
                    </h2>

                    <div>
                        <input
                            type="text"
                            placeholder="Channel name"
                            value={ newChannelName }
                            onChange={ e => setNewChannelName(e.target.value) }
                        />
                    </div>

                    <textarea 
                        placeholder="Channel description"
                        value={ newChannelDescription }
                        onChange={ e => setNewChannelDescription(e.target.value) }
                    ></textarea>

                    <div className="buttons">
                        <button
                            onClick={ closeModal }
                        >
                            Cancel
                        </button>

                        <button
                            onClick={ handleCreateChannel }
                        >
                            Save
                        </button>
                    </div>
                </div>
            </CreateChannelModal>

            <Chat>
            </Chat>

        </Container>
    )
}