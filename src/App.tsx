import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Syllabus from "./pages/Syllabus";
import Layout from "./pages/Layout";
import Profile from "./pages/Profile";
import Overview from "./pages/Overview";
import Contact from "./pages/Contact";
function App() {

  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="/profile/syllabus" element={<Syllabus />} />
          <Route path="overview" element={<Overview />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
