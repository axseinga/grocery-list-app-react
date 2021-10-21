import React from "react";
import { TextField } from "@mui/material";
import { Paper } from "@mui/material";
import useInputState from "./hooks/useInputState";

const GroceryForm = (props) => {
    const [value, handleChange, reset] = useInputState("");
    return (
        <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    props.addProduct(value);
                    reset();
                }}
            >
                <TextField
                    value={value}
                    onChange={handleChange}
                    margin="normal"
                    label="Add New Item"
                    fullWidth
                />
            </form>
        </Paper>
    );
};

export default GroceryForm;
