import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import socket from "../socket";

const AuthContext = createContext({});


function AuthProvider ({ children }) {
    const [data, setData] = useState({});
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

    async function signIn ({ email, password }) {
        try {
            
            const response = await api.post("/sessions", { email, password });
            const { user, token } = response.data;
    
            localStorage.setItem("@chat-group:user", JSON.stringify(user));
            localStorage.setItem("@chat-group:token", token);
    
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

            socket.emit("setID", { id: user.id });
            
            setData({
                token,
                user
            });
            
        } catch (error) {
            if ( error.response ) {
                return alert(error.response.data.message);
            }

            return alert("Unable to login");
        }

    }

    async function signOut () {
        localStorage.removeItem("@chat-group:token");
        localStorage.removeItem("@chat-group:user");

        setData({});
    }

    useEffect(() => {
        const token = localStorage.getItem("@chat-group:token");
        const user = localStorage.getItem("@chat-group:user");

        if ( token && user ) {
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

            setData({
                token,
                user: JSON.parse(user)
            });
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            signIn,
            signOut,
            user: data.user,
            sidebarIsOpen,
            setSidebarIsOpen

        }} >
            { children }
        </AuthContext.Provider>
    )
}

function useAuth () {
    const context = useContext(AuthContext);
    return context;
}

export {
    AuthProvider,
    useAuth
}