import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components/navBar/navbar"
import { HomePage } from "./pages/homePage/HomePage"
import { Footer } from "./components/footer/footer"

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
