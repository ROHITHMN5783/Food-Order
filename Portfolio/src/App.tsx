import "./App.css";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import { useSelector } from "react-redux";
import ProjectList from './components/Project/ProjectList'
function App() {
  const themecolor = useSelector((state) => state.theme.value);
  return (
    <div
    >
      <Header />
      <Profile />
      <ProjectList/>
    </div>
  );
}

export default App;
