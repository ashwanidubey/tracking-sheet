import React from "react";
import { Box, Typography, Container, Chip } from "@mui/material";
import { Rocket, Code } from "@mui/icons-material";

const Header = () => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)",
        py: 4,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='7' cy='7' r='5'/%3E%3Ccircle cx='53' cy='53' r='5'/%3E%3Ccircle cx='7' cy='53' r='5'/%3E%3Ccircle cx='53' cy='7' r='5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <Container
        maxWidth="lg"
        sx={{ position: "relative", textAlign: "center" }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 1,
          }}
        >
          <Rocket sx={{ fontSize: 32, mr: 1.5, color: "#fbbf24" }} />
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "1.8rem", md: "2.5rem" },
              fontWeight: 700,
              background: "linear-gradient(45deg, #ffffff, #fbbf24)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 4px 8px rgba(0,0,0,0.3)",
            }}
          >
            Ashwani<span style={{ color: "#fbbf24" }}>Edge</span>
          </Typography>
        </Box>

        <Typography
          variant="h6"
          sx={{
            color: "rgba(255, 255, 255, 0.9)",
            mb: 2,
            fontSize: { xs: "0.9rem", md: "1rem" },
            fontWeight: 400,
          }}
        >
          Your Ultimate DSA Companion for Coding Excellence
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 1.5,
            flexWrap: "wrap",
          }}
        >
          <Chip
            icon={<Code />}
            label="LeetCode Integration"
            size="small"
            sx={{
              bgcolor: "rgba(255, 255, 255, 0.2)",
              color: "white",
              backdropFilter: "blur(10px)",
              fontSize: "0.75rem",
              "&:hover": { bgcolor: "rgba(255, 255, 255, 0.3)" },
            }}
          />
          <Chip
            label="Progress Tracking"
            size="small"
            sx={{
              bgcolor: "rgba(255, 255, 255, 0.2)",
              color: "white",
              backdropFilter: "blur(10px)",
              fontSize: "0.75rem",
              "&:hover": { bgcolor: "rgba(255, 255, 255, 0.3)" },
            }}
          />
          <Chip
            label="Modern UI"
            size="small"
            sx={{
              bgcolor: "rgba(255, 255, 255, 0.2)",
              color: "white",
              backdropFilter: "blur(10px)",
              fontSize: "0.75rem",
              "&:hover": { bgcolor: "rgba(255, 255, 255, 0.3)" },
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
