import React from "react";
import { Paper } from "@mui/material";
import { List } from "@mui/material";
import { Divider } from "@mui/material";
import GroceryItem from "./GroceryItem";
import { v4 as uuidv4 } from "uuid";

const GroceryList = (props) => {
    return (
        <Paper>
            <List>
                {props.list.map((item) => (
                    <>
                        <GroceryItem
                            product={item.product}
                            key={item.id}
                            completed={item.completed}
                        />
                        <Divider />
                    </>
                ))}
            </List>
        </Paper>
    );
};

export default GroceryList;
