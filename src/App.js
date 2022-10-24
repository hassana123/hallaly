import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import NoMatch from "./components/NoMatch";
import AllUsers from "./components/AllUsers";
import FemaleUsers from "./components/FemaleUsers";
import AllMaleUsers from "./components/AllMaleUsers";
function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users" element={<Users />}>
          <Route index element={<AllUsers />} />
          <Route path="allMaleUsers" element={<AllMaleUsers />} />
          <Route path="femaleUsers" element={<FemaleUsers />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
