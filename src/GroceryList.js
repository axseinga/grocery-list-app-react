import React from "react";
import { Paper } from "@mui/material";
import { List } from "@mui/material";
import { Divider } from "@mui/material";
import GroceryItem from "./GroceryItem";

const GroceryList = (props) => {
    if (props.list.length)
        return (
            <Paper>
                <List>
                    {props.list.map((item, i) => (
                        <>
                            <GroceryItem
                                key={item.id}
                                completed={item.completed}
                                product={item.product}
                                removeProduct={props.removeProduct}
                                toggleProduct={props.toggleProduct}
                                editProduct={props.editProduct}
                            />
                            {i < props.list.length - 1 && <Divider />}
                        </>
                    ))}
                </List>
            </Paper>
        );
    return null;
};

export default GroceryList;
