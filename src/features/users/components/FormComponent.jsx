import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFormData } from "../slices/formSlice";

export default function FormComponent() {
    const dispatch = useDispatch();
    const formDataList = useSelector((state) => state.form.data);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
 
        if (!formData.name || !formData.email) {
            alert("All fields are required!");
            return;
        }

        dispatch(addFormData(formData));
        setFormData({ name: "", email: "" });
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Redux Form</h2>
            <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
                <div>
                    <label>Name: </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter name"
                    />
                </div>
                <div style={{ marginTop: "10px" }}>
                    <label>Email: </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter email"
                    />
                </div>
                <button type="submit" style={{ marginTop: "10px" }}>
                    Submit
                </button>
            </form>

            <h3>Submitted Data:</h3>
            <ul>
                {formDataList.map((item, index) => (
                    <li key={index}>
                        {item.name} - {item.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}
