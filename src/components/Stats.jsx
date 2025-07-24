import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  LinearProgress,
  Chip,
} from "@mui/material";
import {
  TrendingUp,
  Assignment,
  CheckCircle,
  Timer,
} from "@mui/icons-material";

const StatCard = ({ icon, title, value, subtitle, color, progress }) => (
  <Card
    sx={{
      bgcolor: "background.paper",
      border: "1px solid rgba(255, 255, 255, 0.12)",
      transition: "all 0.2s ease-in-out",
      height: "100%", // Ensure all cards have the same height
      display: "flex",
      flexDirection: "column",
      "&:hover": {
        transform: "translateY(-4px)",
        boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
      },
    }}
  >
    <CardContent
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        p: 3, // Consistent padding
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Box
          sx={{
            bgcolor: `${color}20`,
            color: color,
            p: 1.5, // Slightly larger padding for better visual balance
            borderRadius: 2,
            mr: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: 48,
            minHeight: 48,
          }}
        >
          {icon}
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: color,
              lineHeight: 1.2,
              mb: 0.5,
            }}
          >
            {value}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontWeight: 500 }}
          >
            {title}
          </Typography>
        </Box>
      </Box>

      {subtitle && (
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ mb: progress !== undefined ? 1 : 0 }}
        >
          {subtitle}
        </Typography>
      )}

      {progress !== undefined && (
        <Box sx={{ mt: "auto" }}>
          {" "}
          {/* Push progress to bottom */}
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: 6,
              borderRadius: 3,
              bgcolor: "rgba(255, 255, 255, 0.1)",
              "& .MuiLinearProgress-bar": {
                borderRadius: 3,
                bgcolor: color,
              },
            }}
          />
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ mt: 1, display: "block", textAlign: "center" }}
          >
            {progress.toFixed(1)}% Complete
          </Typography>
        </Box>
      )}
    </CardContent>
  </Card>
);

function Stats({ questions, solved }) {
  const totalQuestions = questions.length;
  const solvedCount = questions.filter((q) => solved[q.link]).length;
  const progressPercentage =
    totalQuestions > 0 ? (solvedCount / totalQuestions) * 100 : 0;

  // Calculate difficulty breakdown
  const difficultyStats = questions.reduce((acc, q) => {
    acc[q.difficulty] = (acc[q.difficulty] || 0) + 1;
    return acc;
  }, {});

  const solvedByDifficulty = questions.reduce((acc, q) => {
    if (solved[q.link]) {
      acc[q.difficulty] = (acc[q.difficulty] || 0) + 1;
    }
    return acc;
  }, {});

  // Calculate topic breakdown
  const topicStats = questions.reduce((acc, q) => {
    acc[q.topic] = (acc[q.topic] || 0) + 1;
    return acc;
  }, {});

  const topicColors = {
    arrays: "#6366f1",
    strings: "#8b5cf6",
    linkedlists: "#ec4899",
    trees: "#10b981",
    graphs: "#f59e0b",
    dp: "#3b82f6",
    stacks: "#ef4444",
  };

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
        📊 Your Progress Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* Main Stats */}
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            icon={<Assignment />}
            title="Total Questions"
            value={totalQuestions}
            subtitle="Available for practice"
            color="#6366f1"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            icon={<CheckCircle />}
            title="Solved"
            value={solvedCount}
            subtitle={`${totalQuestions - solvedCount} remaining`}
            color="#22c55e"
            progress={progressPercentage}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            icon={<TrendingUp />}
            title="Progress"
            value={`${progressPercentage.toFixed(1)}%`}
            subtitle="Keep going!"
            color="#8b5cf6"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            icon={<Timer />}
            title="Streak"
            value="🔥 5"
            subtitle="Days in a row"
            color="#f59e0b"
          />
        </Grid>

        {/* Difficulty Breakdown */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              bgcolor: "background.paper",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              height: "100%", // Make cards same height
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardContent
              sx={{ flex: 1, display: "flex", flexDirection: "column" }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
                📈 Difficulty Breakdown
              </Typography>

              <Box sx={{ flex: 1 }}>
                {["easy", "medium", "hard"].map((difficulty) => {
                  const total = difficultyStats[difficulty] || 0;
                  const solved = solvedByDifficulty[difficulty] || 0;
                  const percentage = total > 0 ? (solved / total) * 100 : 0;
                  const colors = {
                    easy: "#22c55e",
                    medium: "#f59e0b",
                    hard: "#ef4444",
                  };

                  return (
                    <Box key={difficulty} sx={{ mb: 3 }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mb: 1,
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            textTransform: "capitalize",
                            fontWeight: 600,
                            fontSize: "0.9rem",
                          }}
                        >
                          {difficulty}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ fontWeight: 500 }}
                        >
                          {solved}/{total}
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={percentage}
                        sx={{
                          height: 8,
                          borderRadius: 4,
                          bgcolor: "rgba(255, 255, 255, 0.1)",
                          "& .MuiLinearProgress-bar": {
                            borderRadius: 4,
                            bgcolor: colors[difficulty],
                          },
                        }}
                      />
                    </Box>
                  );
                })}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Topic Breakdown */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              bgcolor: "background.paper",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              height: "100%", // Make cards same height
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardContent
              sx={{ flex: 1, display: "flex", flexDirection: "column" }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
                🎯 Topics Overview
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
                {Object.entries(topicStats).map(([topic, count]) => (
                  <Chip
                    key={topic}
                    label={`${
                      topic.charAt(0).toUpperCase() + topic.slice(1)
                    } (${count})`}
                    sx={{
                      bgcolor: `${topicColors[topic]}20`,
                      color: topicColors[topic],
                      fontWeight: 500,
                      fontSize: "0.8rem",
                    }}
                  />
                ))}
              </Box>

              <Box sx={{ mt: "auto", pt: 2 }}>
                {" "}
                {/* Push to bottom with some padding */}
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 1, fontSize: "0.85rem" }}
                >
                  Most practiced:{" "}
                  <strong style={{ color: "#6366f1" }}>Arrays</strong>
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: "0.85rem" }}
                >
                  Needs attention:{" "}
                  <strong style={{ color: "#ef4444" }}>
                    Dynamic Programming
                  </strong>
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Stats;
