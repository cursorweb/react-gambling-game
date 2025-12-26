import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./routes/Home";
import Roulette from "./routes/Roulette";
import { useState } from "react";
import { ProfileContextProvider } from "./profile/profileContext";

export default function App() {
  return (
    <>
      <ProfileContextProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="roulette" element={<Roulette />} />
          </Routes>
        </BrowserRouter>
      </ProfileContextProvider>
    </>
  )
}
