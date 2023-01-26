import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utilities/constants";
// import { Category } from "@mui/icons-material";

const selectedCategory = "New";

export default function SideBar() {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "92%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((Category) => (
        <button
          className="category-btn"
          style={{
            background: Category.name === selectedCategory && "#FC1503",
            color: "white",
          }}
          key={Category.name}
        >
          <span
            style={{
              color: Category.name === selectedCategory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {Category.icon}
          </span>
          <span
            style={{
              opacity: Category.name === selectedCategory ? "1" : "0.8",
            }}
          >
            {Category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
}