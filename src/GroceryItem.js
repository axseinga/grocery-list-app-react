import React from "react";
import useToggleState from "./hooks/useToggleState";
import EditGroceryForm from "./EditGroceryForm";
import { ListItem } from "@mui/material";
import { ListItemText } from "@mui/material";
import { Checkbox } from "@mui/material";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { ListItemSecondaryAction } from "@mui/material";

const GroceryItem = ({
    product,
    completed,
    removeProduct,
    id,
    toggleProduct,
    editProduct,
}) => {
    const [isEditing, toggle] = useToggleState();
    return (
        <ListItem style={{ height: "60px" }}>
            {isEditing ? (
                <EditGroceryForm
                    editProduct={editProduct}
                    id={id}
                    product={product}
                    toggleEditForm={toggle}
                />
            ) : (
                <>
                    <Checkbox
                        tabIndex={-1}
                        checked={completed}
                        onClick={() => toggleProduct(id)}
                    />
                    <ListItemText
                        style={{
                            textDecoration: completed ? "line-through" : "none",
                        }}
                    >
                        {product}
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton
                            aria-label="Delete"
                            onClick={() => removeProduct(id)}
                        >
                            <DeleteIcon />
                        </IconButton>
                        <IconButton aria-label="Edit" onClick={toggle}>
                            <EditIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </>
            )}
        </ListItem>
    );
};

export default GroceryItem;
