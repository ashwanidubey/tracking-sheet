import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  Switch,
  IconButton,
  Grid,
  Fade,
  Tooltip,
} from "@mui/material";
import {
  OpenInNew,
  CheckCircle,
  RadioButtonUnchecked,
} from "@mui/icons-material";

const difficultyColors = {
  easy: { color: "#22c55e", bgcolor: "rgba(34, 197, 94, 0.1)" },
  medium: { color: "#f59e0b", bgcolor: "rgba(245, 158, 11, 0.1)" },
  hard: { color: "#ef4444", bgcolor: "rgba(239, 68, 68, 0.1)" },
};

const topicColors = {
  arrays: "#6366f1",
  strings: "#8b5cf6",
  linkedlists: "#ec4899",
  trees: "#10b981",
  graphs: "#f59e0b",
  dp: "#3b82f6",
  stacks: "#ef4444",
};

function QuestionList({ questions }) {
  const [solved, setSolved] = useState({});

  // Load solved state from LocalStorage
  useEffect(() => {
    const store = JSON.parse(localStorage.getItem("solvedQuestions") || "{}");
    setSolved(store);
  }, []);

  // Toggle solved state
  const toggleSolved = (link) => {
    const updated = { ...solved, [link]: !solved[link] };
    setSolved(updated);
    localStorage.setItem("solvedQuestions", JSON.stringify(updated));
  };

  return (
    <Box>
      {/* Questions List - Table-like Layout */}
      <Box
        sx={{
          bgcolor: "background.paper",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        {questions.map((q, i) => (
          <Box
            key={i}
            sx={{
              borderBottom:
                i === questions.length - 1
                  ? "none"
                  : "1px solid rgba(255, 255, 255, 0.08)",
              transition: "all 0.2s ease-in-out",
              "&:hover": {
                bgcolor: "rgba(99, 102, 241, 0.05)",
              },
              ...(solved[q.link] && {
                bgcolor: "rgba(34, 197, 94, 0.03)",
              }),
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                p: 2.5,
                gap: 3,
              }}
            >
              {/* Status Icon */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  minWidth: 28,
                  justifyContent: "center",
                }}
              >
                {solved[q.link] ? (
                  <CheckCircle sx={{ color: "#22c55e", fontSize: 20 }} />
                ) : (
                  <RadioButtonUnchecked
                    sx={{ color: "text.secondary", fontSize: 20 }}
                  />
                )}
              </Box>

              {/* Question Title */}
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 500,
                      fontSize: "0.95rem",
                      color: "text.primary",
                      textDecoration: solved[q.link] ? "line-through" : "none",
                      opacity: solved[q.link] ? 0.7 : 1,
                      cursor: "pointer",
                      "&:hover": { color: "primary.main" },
                    }}
                  >
                    {q.title}
                  </Typography>
                  <Tooltip title="Open in LeetCode">
                    <IconButton
                      size="small"
                      href={q.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: "text.secondary",
                        p: 0.5,
                        "&:hover": {
                          color: "primary.main",
                          bgcolor: "rgba(99, 102, 241, 0.1)",
                        },
                      }}
                    >
                      <OpenInNew sx={{ fontSize: 14 }} />
                    </IconButton>
                  </Tooltip>
                </Box>
              </Box>

              {/* Tags Section */}
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  alignItems: "center",
                  minWidth: 200,
                  justifyContent: "flex-start",
                }}
              >
                {/* Topic Chip */}
                <Chip
                  label={q.topic.charAt(0).toUpperCase() + q.topic.slice(1)}
                  size="small"
                  sx={{
                    bgcolor: `${topicColors[q.topic]}15`,
                    color: topicColors[q.topic],
                    fontWeight: 500,
                    fontSize: "0.7rem",
                    height: 24,
                    "& .MuiChip-label": { px: 1 },
                  }}
                />

                {/* Company Chips */}
                {q.company &&
                  q.company.slice(0, 1).map((comp, idx) => (
                    <Chip
                      key={idx}
                      label={comp}
                      size="small"
                      variant="outlined"
                      sx={{
                        fontSize: "0.65rem",
                        height: 22,
                        borderColor: "rgba(255, 255, 255, 0.15)",
                        color: "text.secondary",
                        "& .MuiChip-label": { px: 0.8 },
                      }}
                    />
                  ))}
                {q.company && q.company.length > 1 && (
                  <Typography
                    variant="caption"
                    sx={{
                      color: "text.secondary",
                      fontSize: "0.7rem",
                      opacity: 0.7,
                    }}
                  >
                    +{q.company.length - 1}
                  </Typography>
                )}
              </Box>

              {/* Difficulty */}
              <Box sx={{ minWidth: 80, textAlign: "center" }}>
                <Chip
                  label={q.difficulty}
                  size="small"
                  sx={{
                    color: difficultyColors[q.difficulty]?.color,
                    bgcolor: difficultyColors[q.difficulty]?.bgcolor,
                    fontWeight: 600,
                    fontSize: "0.7rem",
                    height: 24,
                    minWidth: 60,
                    textTransform: "capitalize",
                    "& .MuiChip-label": { px: 1 },
                  }}
                />
              </Box>

              {/* Toggle Switch */}
              <Box
                sx={{
                  minWidth: 60,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Switch
                  checked={!!solved[q.link]}
                  onChange={() => toggleSolved(q.link)}
                  size="small"
                  sx={{
                    "& .MuiSwitch-switchBase.Mui-checked": {
                      color: "#22c55e",
                    },
                    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                      backgroundColor: "#22c55e",
                    },
                  }}
                />
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      {questions.length === 0 && (
        <Box
          sx={{
            bgcolor: "background.paper",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            borderRadius: 2,
            textAlign: "center",
            py: 8,
          }}
        >
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ fontWeight: 500, mb: 1 }}
          >
            No questions found for this category
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ opacity: 0.7 }}
          >
            Select a different category to view questions
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default QuestionList;
