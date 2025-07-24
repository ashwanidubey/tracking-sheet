import React from "react";
import { Box, Container, Typography, Button, Paper } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import Stats from "./Stats";

function Dashboard({ questions, solved, onBack }) {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default", py: 4 }}>
      <Container maxWidth="lg">
        {/* Header with Back Button */}
        <Paper
          sx={{
            p: 3,
            mb: 4,
            bgcolor: "background.paper",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            borderRadius: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  background: "linear-gradient(45deg, #6366f1, #8b5cf6)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  mb: 1,
                }}
              >
                📊 Progress Dashboard
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Track your DSA learning journey and see detailed analytics
              </Typography>
            </Box>

            <Button
              variant="outlined"
              startIcon={<ArrowBack />}
              onClick={onBack}
              sx={{
                borderColor: "rgba(255, 255, 255, 0.2)",
                color: "text.primary",
                "&:hover": {
                  borderColor: "#6366f1",
                  bgcolor: "rgba(99, 102, 241, 0.1)",
                },
              }}
            >
              Back to Questions
            </Button>
          </Box>
        </Paper>

        {/* Stats Component */}
        <Stats questions={questions} solved={solved} />
      </Container>
    </Box>
  );
}

export default Dashboard;
