import React from "react";
import useGroceryState from "./hooks/useGroceryState";
import { Typography } from "@mui/material";
import { Paper } from "@mui/material";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Grid } from "@mui/material";
import GroceryList from "./GroceryList";
import GroceryForm from "./GroceryForm";
import { v4 as uuidv4 } from "uuid";

const GroceryApp = () => {
    const initialList = [
        { id: uuidv4(), product: "Rice", completed: false },
        { id: uuidv4(), product: "Apples", completed: true },
        { id: uuidv4(), product: "Milk", completed: false },
    ];
    const { groceries, addProduct, removeProduct, toggleProduct, editProduct } =
        useGroceryState(initialList);

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
                <Toolbar>
                    <Typography
                        color="inherit"
                        style={{
                            padding: "1rem",
                        }}
                    >
                        GROCERY LIST
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid
                container
                justifyContent="center"
                style={{ marginTop: "1rem" }}
            >
                <Grid item xs={11} md={8} lg={4}>
                    <GroceryForm addProduct={addProduct} />
                    <GroceryList
                        list={groceries}
                        removeProduct={removeProduct}
                        toggleProduct={toggleProduct}
                        editProduct={editProduct}
                    />
                </Grid>
            </Grid>
        </Paper>
    );
};

export default GroceryApp;
