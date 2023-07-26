import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import NewsFeed from "./components/newsFeed/NewsFeed";
import Favourites from "./components/favourites/Favourites";
import Profile from "./components/profile/Profile";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import DetailedView from "./components/detailedView/DetailedView";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<NewsFeed />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/detailedView" element={<DetailedView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
