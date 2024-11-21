import { Routes,Route } from "react-router-dom"
import Landing from "./pages/landing"
import TeamPage from "./pages/team"
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
    </div>
  )
}

export default App