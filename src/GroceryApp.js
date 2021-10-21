import React, { useState } from "react";
import { Typography } from "@mui/material";
import { Paper } from "@mui/material";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Grid } from "@mui/material";
import GroceryList from "./GroceryList";
import GroceryForm from "./GroceryForm";

const GroceryApp = () => {
    const initialList = [
        { id: 1, product: "Rice", completed: false },
        { id: 2, product: "Apples", completed: true },
        { id: 3, product: "Milk", completed: false },
    ];

    const [groceries, setGroceries] = useState(initialList);

    const addProduct = (newProduct) => {
        setGroceries([
            ...groceries,
            {
                id: 4,
                product: newProduct,
                completed: false,
            },
        ]);
    };

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
            <Grid
                container
                justifyContent="center"
                style={{ marginTop: "1rem" }}
            >
                <Grid item xs={11} md={8} lg={4}>
                    <GroceryForm addProduct={addProduct} />
                    <GroceryList list={groceries} />
                </Grid>
            </Grid>
        </Paper>
    );
};

export default GroceryApp;
