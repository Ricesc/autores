import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddAuthor = () => {
    const [author, setAuthor] = useState([]);
    const [name, setName] = useState("");

    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/new", { name })
            .then((res) => {
                setAuthor([...author, res.data]);
                navigate("/");
            })
            .catch((err) => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);
            });
    };

    return (
        <div className="author-list">
            <Link to={"/"}>Home</Link>
            <p>Add a new author:</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
                {errors.map((err, index) => (
                    <p key={index}>{err}</p>
                ))}
                <div className="button">
                    <Link to={"/"} className="cancel-button">
                        Cancel
                    </Link>
                    <input
                        type="submit"
                        value="Submit"
                        className="submit-button"
                    />
                </div>
            </form>
        </div>
    );
};

export default AddAuthor;
