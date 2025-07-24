import React from "react";
import { Box, Container, Button, Paper, Typography, Chip } from "@mui/material";
import { Analytics } from "@mui/icons-material";
import Navbar from "./Navbar";
import QuestionList from "./QuestionList";

function QuestionListPage({
  categories,
  active,
  onChange,
  questions,
  solved,
  onViewDashboard,
}) {
  // Quick stats for the top bar
  const solvedCount = questions.filter((q) => solved[q.link]).length;
  const totalQuestions = questions.length;
  const progressPercentage =
    totalQuestions > 0 ? (solvedCount / totalQuestions) * 100 : 0;

  return (
    <Container maxWidth="lg" sx={{ px: 2 }}>
      {/* Quick Progress Bar */}
      <Paper
        sx={{
          p: 2,
          mb: 3,
          bgcolor: "background.paper",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          borderRadius: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Quick Stats
            </Typography>
            <Chip
              label={`${solvedCount}/${totalQuestions} Solved`}
              color="primary"
              variant="filled"
              sx={{ fontWeight: 500 }}
            />
            <Chip
              label={`${progressPercentage.toFixed(1)}% Complete`}
              color="secondary"
              variant="outlined"
            />
          </Box>

          <Button
            variant="contained"
            startIcon={<Analytics />}
            onClick={onViewDashboard}
            sx={{
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              "&:hover": {
                background: "linear-gradient(135deg, #4338ca, #7c3aed)",
              },
              borderRadius: 2,
              px: 3,
            }}
          >
            View Dashboard
          </Button>
        </Box>
      </Paper>

      {/* Navigation */}
      <Navbar categories={categories} active={active} onChange={onChange} />

      {/* Questions List */}
      <Box sx={{ mt: 3 }}>
        <QuestionList questions={questions} />
      </Box>
    </Container>
  );
}

export default QuestionListPage;
