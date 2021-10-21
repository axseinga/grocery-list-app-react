import React from "react";
import { Paper } from "@mui/material";
import { List } from "@mui/material";
import { Divider } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemText } from "@mui/material";

const GroceryList = (props) => {
    return (
        <Paper>
            <List>
                {props.list.map((item) => (
                    <>
                        <ListItem>
                            <ListItemText>{item.product}</ListItemText>
                        </ListItem>
                        <Divider />
                    </>
                ))}
            </List>
        </Paper>
    );
};

export default GroceryList;
