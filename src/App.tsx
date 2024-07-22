import Home from "./views/home";
import Login from "./views/login";
import { BrowserRouter,Route,Routes } from "react-router-dom";

function App() {

  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
