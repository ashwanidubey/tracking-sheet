import React, { useState } from "react";
import {
  Fab,
  Zoom,
  Box,
  Tooltip,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
} from "@mui/material";
import {
  Add,
  Settings,
  Refresh,
  Download,
  Share,
  FilterList,
} from "@mui/icons-material";

const actions = [
  { icon: <Refresh />, name: "Reset Progress", color: "#ef4444" },
  { icon: <Download />, name: "Export Data", color: "#3b82f6" },
  { icon: <Share />, name: "Share Progress", color: "#10b981" },
  { icon: <FilterList />, name: "Advanced Filter", color: "#f59e0b" },
];

function FloatingActions({
  onResetProgress,
  onExportData,
  onShareProgress,
  onAdvancedFilter,
}) {
  const [open, setOpen] = useState(false);

  const handleAction = (actionName) => {
    switch (actionName) {
      case "Reset Progress":
        onResetProgress?.();
        break;
      case "Export Data":
        onExportData?.();
        break;
      case "Share Progress":
        onShareProgress?.();
        break;
      case "Advanced Filter":
        onAdvancedFilter?.();
        break;
      default:
        break;
    }
    setOpen(false);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 1000,
      }}
    >
      <SpeedDial
        ariaLabel="Quick Actions"
        sx={{
          "& .MuiFab-primary": {
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            "&:hover": {
              background: "linear-gradient(135deg, #4338ca, #7c3aed)",
            },
          },
        }}
        icon={<SpeedDialIcon />}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => handleAction(action.name)}
            sx={{
              "& .MuiFab-primary": {
                bgcolor: action.color,
                "&:hover": {
                  bgcolor: action.color,
                  filter: "brightness(0.9)",
                },
              },
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}

export default FloatingActions;
