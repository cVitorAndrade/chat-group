import {
    Container,
    SideBar,
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

import { IoMdClose } from "react-icons/io";
import { LuPlus } from "react-icons/lu";
import { MdOutlineSearch } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

import { MdArrowBackIosNew } from "react-icons/md";

import { FaCircleUser } from "react-icons/fa6";
import { PiMountainsBold } from "react-icons/pi";
import { RiLogoutBoxRLine } from "react-icons/ri";

import xanteNeal from "../assets/Xanthe-Neal.jpg";

import { useEffect, useState } from "react";

import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../hooks/auth";

export function Layout({ children }) {
    const { user, signOut, sidebarIsOpen, setSidebarIsOpen } = useAuth();
    const navigate = useNavigate()

    const [viewAllChannels, setViewAllChannels] = useState(true);
    const [viewUserActions, setViewUserActions] = useState(false);
    const [viewCreateChannelModal, setViewCreateChannelModal] = useState(false);

    const [newChannelName, setNewChannelName] = useState("");
    const [newChannelDescription, setNewChannelDescription] = useState("");

    const [myChannels, setMyChannels] = useState([]);

    const handleGetMyChannels = () => {
        api.get("/my_channels").then(({ data }) => {
            const { channels } = data;
            setMyChannels(channels);
        })
    }

    const [selectedChannelMembers, setSelectedChannelMembers] = useState([]);
    const [selectedChannelName, setSelectedChannelName] = useState("");
    const [selectedChannelDescription, setSelectedChannelDescription] = useState("");

    const handleSelectChannel = (id) => {
        api.get(`/my_channels/${id}`).then( ({ data }) => {
            const { name, description, members } = data;
            setSelectedChannelMembers(members);
            setSelectedChannelName(name);
            setSelectedChannelDescription(description);
            setViewAllChannels(false);

            navigate(`/${id}`)
        });
    }
 
    const handleCreateChannel = () => {
        if (newChannelName.trim() === "" || newChannelDescription.trim() === "") {
            return alert("It is necessary to fill in all fields");
        }

        api.post("/channels", { name: newChannelName, description: newChannelDescription })
            .then(() => {
                closeModal();
                handleGetMyChannels();
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

    const handleSignOut = () => {
        signOut();
        navigate("/");
    }

    useEffect(() => {
        handleGetMyChannels();
    }, []);

    return (
        <Container>

            <SideBar className={ sidebarIsOpen ? "opened" : ""}>
                <Header
                    className={viewAllChannels ? "" : "none"}
                >
                    <span>Channels</span>
                    <div
                        className="new-chat"
                        onClick={() => setViewCreateChannelModal(true)}
                    >
                        <LuPlus
                            size={15}
                        />
                    </div>
                </Header>
                <Back
                    className={viewAllChannels ? "none" : ""}
                    onClick={() => setViewAllChannels(true)}
                >
                    <div>
                        <MdArrowBackIosNew
                            size={24}
                        />
                    </div>
                    <p>All Channels</p>
                </Back>
                
                <AllChannels 
                    className={viewAllChannels ? "" : "none"}> 
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

                        {
                            myChannels &&
                            myChannels.map(myChannel => {
                                let channelAbbreviation = "";
                                if ( myChannel.name.split(" ").length === 1 ) {
                                    channelAbbreviation = myChannel.name[0];
                                } else {
                                    channelAbbreviation = `${myChannel.name.split(" ")[0][0]}${myChannel.name.split(" ")[1][0]}`
                                }

                                return (
                                    <Channel
                                        key={myChannel.id}
                                        onClick={ () => handleSelectChannel(myChannel.id) }
                                    >
                                        <div>
                                            <p>
                                                {channelAbbreviation}
                                            </p>
                                        </div>
                                        <p>
                                            {myChannel.name}
                                        </p>

                                    </Channel>
                                )
                            })
                        }

                    </ChannelList>
                </AllChannels>

                <SelectedChannel 
                    className={viewAllChannels ? "none" : ""}>
                    

                    <ChannelDescription>
                        <h2>
                            { selectedChannelName }
                        </h2>

                        <p>
                            { selectedChannelDescription }
                        </p>
                    </ChannelDescription>

                    <ChannelMembers>
                        <h2>
                            Members
                        </h2>

                        <ul>
                            {
                                selectedChannelMembers &&
                                selectedChannelMembers.map( member => (
                                    <Member
                                        key={member.id}
                                    >
                                        <div>
                                            <img src={member.avatar || "https://github.com/cvitorandrade.png"} alt="" />
                                        </div>
                                        <p>
                                            { member.name }
                                        </p>

                                    </Member>
                                ))
                            }
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
                        <p>{ user.name }</p>
                    </div>

                    <MdKeyboardArrowDown
                        size={20}
                        onClick={() => setViewUserActions(prevValue => !prevValue)}
                    />

                    <UserActions className={viewUserActions ? "" : "none"}>
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

                        <Action 
                            className="logout"
                            onClick={ handleSignOut }
                            
                        >
                            <RiLogoutBoxRLine
                                size={15}
                            />

                            <span>
                                Logout
                            </span>
                        </Action>
                    </UserActions>

                </Profile>


                <div 
                    className={`close-icon ${sidebarIsOpen ? "" : "none"}`}
                    onClick={ () => setSidebarIsOpen(false) }
                >
                    <IoMdClose 
                        size={25}
                    />
                </div>
            </SideBar>

            <CreateChannelModal
                className={viewCreateChannelModal ? "" : "none"}
            >
                <div>
                    <h2>
                        NEW CHANNEL
                    </h2>

                    <div>
                        <input
                            type="text"
                            placeholder="Channel name"
                            value={newChannelName}
                            onChange={e => setNewChannelName(e.target.value)}
                        />
                    </div>

                    <textarea
                        placeholder="Channel description"
                        value={newChannelDescription}
                        onChange={e => setNewChannelDescription(e.target.value)}
                    ></textarea>

                    <div className="buttons">
                        <button
                            onClick={closeModal}
                        >
                            Cancel
                        </button>

                        <button
                            onClick={handleCreateChannel}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </CreateChannelModal>

            { children }

        </Container>
    )
}