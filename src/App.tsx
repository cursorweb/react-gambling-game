import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./routes/Home";
import Roulette from "./routes/Roulette";
import { ProfileContextProvider } from "./state/profileContext";
import { Plinko } from "./routes/Plinko";
import { Mines } from "./routes/Mines";

export default function App() {
  return (
    <>
      <ProfileContextProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="roulette" element={<Roulette />} />
            <Route path="plinko" element={<Plinko />} />
            <Route path="mines" element={<Mines />} />
          </Routes>
        </BrowserRouter>
      </ProfileContextProvider>
    </>
  )
}
