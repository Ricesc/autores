import { Route, Routes } from "react-router-dom";
import AddAuthor from "../AddAuthor/AddAuthor";
import ListAuthors from "../ListAuthors/ListAuthors";
import UpdateAuthor from "../UpdateAuthor/UpdateAuthor";
import "./App.css";

const App = () => {
    return (
        <div className="App">
            <h1>Favorite Authors</h1>
            <Routes>
                <Route path="/" element={<ListAuthors />} />
                <Route path="/new" element={<AddAuthor />} />
                <Route path="/edit/:id" element={<UpdateAuthor />} />
            </Routes>
        </div>
    );
};

export default App;
