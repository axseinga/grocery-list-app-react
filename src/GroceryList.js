import React from "react";
import { Paper } from "@mui/material";
import { List } from "@mui/material";
import { Divider } from "@mui/material";
import GroceryItem from "./GroceryItem";

const GroceryList = (props) => {
    return (
        <Paper>
            <List>
                {props.list.map((item) => (
                    <>
                        <GroceryItem
                            id={item.id}
                            product={item.product}
                            key={item.id}
                            completed={item.completed}
                            removeProduct={props.removeProduct}
                            toggleProduct={props.toggleProduct}
                            editProduct={props.editProduct}
                        />
                        <Divider />
                    </>
                ))}
            </List>
        </Paper>
    );
};

export default GroceryList;
