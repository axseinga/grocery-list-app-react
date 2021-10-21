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
        >
            <TextField
                margin="normal"
                value={value}
                onChange={handleChange}
                fullWidth
            />
        </form>
    );
};

export default EditGroceryForm;
