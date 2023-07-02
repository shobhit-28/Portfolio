import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components/navBar/navbar"
import { HomePage } from "./pages/homePage/HomePage"

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App
