import { Routes,Route } from "react-router-dom"
import Landing from "./pages/landing"
import TeamPage from "./pages/team"
import EventsPage from "./pages/event"
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>
    </div>
  )
}

export default App