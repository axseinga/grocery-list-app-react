import React from "react";
import { TextField } from "@mui/material";
import { Paper } from "@mui/material";
import useInputState from "./hooks/useInputState";

const GroceryForm = (props) => {
    const [value, handleChange, reset] = useInputState("");
    return (
        <Paper>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    props.addProduct(value);
                    reset();
                }}
            >
                <TextField value={value} onChange={handleChange} />
            </form>
        </Paper>
    );
};

export default GroceryForm;
