import React from "react";
import { ListItem } from "@mui/material";
import { ListItemText } from "@mui/material";
import { Checkbox } from "@mui/material";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { ListItemSecondaryAction } from "@mui/material";

const GroceryItem = ({ product, completed }) => {
    return (
        <ListItem>
            <Checkbox tabIndex={-1} checked={completed} />
            <ListItemText
                style={{ textDecoration: completed ? "line-through" : "none" }}
            >
                {product}
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label="Delete">
                    <DeleteIcon />
                </IconButton>
                <IconButton aria-label="Edit">
                    <EditIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
};

export default GroceryItem;
