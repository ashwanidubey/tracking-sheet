// src/App.jsx
import React, { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Snackbar, Alert } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import QuestionListPage from "./components/QuestionListPage";
import Dashboard from "./components/Dashboard";
import FloatingActions from "./components/FloatingActions";
import { questions } from "./data/questions";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const categories = [
  { name: "All", id: "all" },
  ...[
    "arrays",
    "strings",
    "linkedlists",
    "trees",
    "graphs",
    "dp",
    "stacks",
  ].map((id) => ({
    name: id
      .replace(/dp/, "Dynamic Programming")
      .replace(/linkedlists/, "Linked Lists")
      .replace(/stacks/, "Stacks & Queues"),
    id,
  })),
];

// Create a modern dark theme
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#6366f1",
      light: "#8b5cf6",
      dark: "#4338ca",
    },
    secondary: {
      main: "#ec4899",
      light: "#f472b6",
      dark: "#be185d",
    },
    background: {
      default: "#0f172a",
      paper: "#1e293b",
    },
    text: {
      primary: "#f8fafc",
      secondary: "#cbd5e1",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 500,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          border: "1px solid rgba(255, 255, 255, 0.12)",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

function App() {
  const [active, setActive] = useState("all");
  const [solved, setSolved] = useState({});
  const [currentPage, setCurrentPage] = useState("questions"); // "questions" or "dashboard"
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "info",
  });

  // Load solved state from LocalStorage
  useEffect(() => {
    const store = JSON.parse(localStorage.getItem("solvedQuestions") || "{}");
    setSolved(store);
  }, []);

  // Flatten questions into one list with topic metadata
  const allQuestions = Object.entries(questions).flatMap(([topic, arr]) =>
    arr.map((q) => ({ ...q, topic }))
  );

  const displayed =
    active === "all"
      ? allQuestions
      : allQuestions.filter((q) => q.topic === active);

  // Page Navigation Handlers
  const showDashboard = () => setCurrentPage("dashboard");
  const showQuestions = () => setCurrentPage("questions");

  // Floating Actions Handlers
  const handleResetProgress = () => {
    localStorage.removeItem("solvedQuestions");
    setSolved({});
    setSnackbar({
      open: true,
      message: "Progress reset successfully!",
      severity: "success",
    });
  };

  const handleExportData = () => {
    const data = {
      solved,
      exportDate: new Date().toISOString(),
      totalQuestions: allQuestions.length,
      solvedCount: allQuestions.filter((q) => solved[q.link]).length,
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ashwani-edge-progress.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setSnackbar({
      open: true,
      message: "Data exported successfully!",
      severity: "success",
    });
  };

  const handleShareProgress = () => {
    const solvedCount = allQuestions.filter((q) => solved[q.link]).length;
    const percentage = ((solvedCount / allQuestions.length) * 100).toFixed(1);

    const shareText = `🚀 I've solved ${solvedCount}/${allQuestions.length} (${percentage}%) DSA problems on AshwaniEdge! 💪 #DSA #Coding #LeetCode`;

    if (navigator.share) {
      navigator.share({
        title: "My DSA Progress",
        text: shareText,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(shareText);
      setSnackbar({
        open: true,
        message: "Progress copied to clipboard!",
        severity: "success",
      });
    }
  };

  const handleAdvancedFilter = () => {
    setSnackbar({
      open: true,
      message: "Advanced filters coming soon!",
      severity: "info",
    });
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        {/* Render different pages based on currentPage */}
        {currentPage === "questions" ? (
          <>
            <Header />
            <Box sx={{ flex: 1, py: 3 }}>
              <QuestionListPage
                categories={categories}
                active={active}
                onChange={(id) => setActive(id)}
                questions={displayed}
                solved={solved}
                onViewDashboard={showDashboard}
              />
            </Box>
            <Footer />
          </>
        ) : (
          <Dashboard
            questions={allQuestions}
            solved={solved}
            onBack={showQuestions}
          />
        )}

        {/* Floating Actions - only show on questions page */}
        {currentPage === "questions" && (
          <FloatingActions
            onResetProgress={handleResetProgress}
            onExportData={handleExportData}
            onShareProgress={handleShareProgress}
            onAdvancedFilter={handleAdvancedFilter}
          />
        )}

        <Snackbar
          open={snackbar.open}
          autoHideDuration={4000}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={() => setSnackbar({ ...snackbar, open: false })}
            severity={snackbar.severity}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Box>
    </ThemeProvider>
  );
}

export default App;
