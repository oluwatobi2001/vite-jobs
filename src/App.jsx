import "./App.css";
import { Route, Routes } from "react-router-dom";
import Tasks from "./components/TasksPg";
import ListBody from "./components/TasksBody";


function App() {
  return (
    <>
    <main className="bg-LightGrayishCyanTb">
<Tasks />
     <ListBody />
    </main>
    </>
  );
}

export default App;
