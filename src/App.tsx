import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./routes/Home";
import Roulette from "./routes/Roulette";
import { ProfileContextProvider } from "./state/profileContext";
import { Plinko } from "./routes/Plinko";

export default function App() {
  return (
    <>
      <ProfileContextProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="roulette" element={<Roulette />} />
            <Route path="plinko" element={<Plinko />} />
          </Routes>
        </BrowserRouter>
      </ProfileContextProvider>
    </>
  )
}
