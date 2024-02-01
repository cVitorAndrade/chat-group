import { Routes, Route } from "react-router-dom";
import { Chat } from "../components/Chat";

export function AppRoutes () {
    return (
        <Routes>
            <Route path="/:channel_id" element={<Chat />} />
        </Routes>
    )
}