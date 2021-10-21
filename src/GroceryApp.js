import React, { useState } from "react";
import { Typography } from "@mui/material";
import { Paper } from "@mui/material";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Grid } from "@mui/material";
import GroceryList from "./GroceryList";

const GroceryApp = () => {
    const initialList = [
        { id: 1, product: "Rice", completed: false },
        { id: 2, product: "Apples", completed: false },
        { id: 3, product: "Milk", completed: false },
    ];

    const [groceries, setGroceries] = useState(initialList);

    return (
        <Paper
            style={{
                padding: 0,
                margin: 0,
                height: "100vh",
                backgroundColor: "#fafafa",
            }}
            elevation={0}
        >
            <AppBar
                color="primary"
                position="static"
                style={{ height: "50px" }}
            >
                <Typography
                    color="inherit"
                    style={{
                        padding: "1rem",
                    }}
                >
                    GROCERY LIST
                </Typography>
            </AppBar>
            <GroceryList list={groceries} />
        </Paper>
    );
};

export default GroceryApp;
