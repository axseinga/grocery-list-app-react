import React from "react";
import { TextField } from "@mui/material";
import useInputState from "./hooks/useInputState";

const EditGroceryForm = ({ editProduct, product, id, toggleEditForm }) => {
    const [value, handleChange, reset] = useInputState(product);
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                editProduct(id, value);
                reset();
                toggleEditForm();
            }}
            style={{ marginLeft: "1rem", width: "70%" }}
        >
            <TextField
                margin="normal"
                value={value}
                onChange={handleChange}
                fullWidth
                autoFocus
            />
        </form>
    );
};

export default EditGroceryForm;
