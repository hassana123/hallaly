import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import { ErrorBoundary } from "react-error-boundary";
import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import NoMatch from "./components/NoMatch";
import AllUsers from "./components/AllUsers";
import FemaleUsers from "./components/FemaleUsers";
import ErrorDetect from "./components/ErrorDetect";
import AllMaleUsers from "./components/AllMaleUsers";
function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorDetect}>
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
    </ErrorBoundary>
  );
}

export default App;
