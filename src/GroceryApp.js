import React, { useState } from "react";
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
        { id: 1, product: "Rice", completed: false },
        { id: 2, product: "Apples", completed: true },
        { id: 3, product: "Milk", completed: false },
    ];

    const [groceries, setGroceries] = useState(initialList);

    const addProduct = (newProduct) => {
        setGroceries([
            ...groceries,
            {
                id: uuidv4(),
                product: newProduct,
                completed: false,
            },
        ]);
    };

    const removeProduct = (productId) => {
        const updatedProduct = groceries.filter(
            (product) => product.id !== productId
        );
        setGroceries(updatedProduct);
    };

    const toggleProduct = (productId) => {
        const updatedProduct = groceries.map((product) =>
            product.id === productId
                ? { ...product, completed: !product.completed }
                : product
        );
        setGroceries(updatedProduct);
    };

    const editProduct = (productId, newProduct) => {
        const updatedProduct = groceries.map((product) =>
            product.id === productId
                ? { ...product, product: newProduct }
                : product
        );
        setGroceries(updatedProduct);
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
