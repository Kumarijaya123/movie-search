import "./App.css"
import Home from "./pages/Home";
import SingleMovieDetail from "./pages/SingleMovieDetail";
import { RouterProvider,createRoutesFromElements, createBrowserRouter, Route } from "react-router-dom";

const router = createBrowserRouter(createRoutesFromElements(
    <Route>
        <Route path="/" element={<Home/>}/>
        <Route path="/detail/:imdbid" element = {<SingleMovieDetail/>}/>
    </Route>
))
function App() {
    return (<RouterProvider router={router}/>)
   
    
}

export default App;

//`https://omdbapi.com/?s=spiderman&apikey=1325f738`