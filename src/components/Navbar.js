import React from "react";
import { Box, Chip, Paper } from "@mui/material";
import {
  Apps,
  TextFields,
  Link as LinkIcon,
  AccountTree,
  Hub,
  Psychology,
  ViewStream,
} from "@mui/icons-material";

const categoryIcons = {
  all: <Apps />,
  arrays: <ViewStream />,
  strings: <TextFields />,
  linkedlists: <LinkIcon />,
  trees: <AccountTree />,
  graphs: <Hub />,
  dp: <Psychology />,
  stacks: <ViewStream />,
};

export default function Navbar({ categories, active, onChange }) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        bgcolor: "background.paper",
        borderRadius: 3,
        border: "1px solid rgba(255, 255, 255, 0.12)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 1.5,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {categories.map((cat) => (
          <Chip
            key={cat.id}
            icon={categoryIcons[cat.id]}
            label={cat.name}
            onClick={() => onChange(cat.id)}
            variant={active === cat.id ? "filled" : "outlined"}
            color={active === cat.id ? "primary" : "default"}
            sx={{
              py: 2,
              px: 1,
              height: "auto",
              fontSize: "0.875rem",
              fontWeight: active === cat.id ? 600 : 400,
              transition: "all 0.2s ease-in-out",
              cursor: "pointer",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 4px 12px rgba(99, 102, 241, 0.3)",
              },
              ...(active === cat.id && {
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                color: "white",
                boxShadow: "0 4px 12px rgba(99, 102, 241, 0.4)",
              }),
            }}
          />
        ))}
      </Box>
    </Paper>
  );
}
