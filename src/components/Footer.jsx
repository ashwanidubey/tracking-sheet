import React from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  Divider,
  Chip,
} from "@mui/material";
import {
  LinkedIn,
  Email,
  Instagram,
  Favorite,
  Code,
} from "@mui/icons-material";

function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        borderTop: "1px solid rgba(255, 255, 255, 0.12)",
        mt: 8,
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center" }}>
          {/* Brand Section */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              mb: 1,
              background: "linear-gradient(45deg, #6366f1, #8b5cf6)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            AshwaniEdge
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 3, maxWidth: 600, mx: "auto" }}
          >
            Empowering developers with curated coding practice and interview
            preparation. Master Data Structures & Algorithms with our modern,
            intuitive platform.
          </Typography>

          {/* Features */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 1,
              mb: 4,
              flexWrap: "wrap",
            }}
          >
            <Chip
              icon={<Code />}
              label="70+ Questions"
              size="small"
              variant="outlined"
              sx={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
            />
            <Chip
              label="Progress Tracking"
              size="small"
              variant="outlined"
              sx={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
            />
            <Chip
              label="Company Tags"
              size="small"
              variant="outlined"
              sx={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
            />
            <Chip
              label="Modern UI"
              size="small"
              variant="outlined"
              sx={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
            />
          </Box>

          {/* Social Links */}
          <Box
            sx={{ display: "flex", justifyContent: "center", gap: 1, mb: 4 }}
          >
            <IconButton
              href="https://www.linkedin.com/in/ashwani-dubey-5a8490196/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#0077b5",
                bgcolor: "rgba(0, 119, 181, 0.1)",
                "&:hover": {
                  bgcolor: "rgba(0, 119, 181, 0.2)",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.2s ease-in-out",
              }}
            >
              <LinkedIn />
            </IconButton>

            <IconButton
              href="mailto:ashwani786dubey@gmail.com"
              sx={{
                color: "#ea4335",
                bgcolor: "rgba(234, 67, 53, 0.1)",
                "&:hover": {
                  bgcolor: "rgba(234, 67, 53, 0.2)",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.2s ease-in-out",
              }}
            >
              <Email />
            </IconButton>

            <IconButton
              href="https://www.instagram.com/suny_dubey"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#C13584",
                bgcolor: "rgba(193, 53, 132, 0.1)",
                "&:hover": {
                  bgcolor: "rgba(193, 53, 132, 0.2)",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.2s ease-in-out",
              }}
            >
              <Instagram />
            </IconButton>
          </Box>

          <Divider sx={{ mb: 3, borderColor: "rgba(255, 255, 255, 0.12)" }} />

          {/* Copyright */}
          <Typography variant="body2" color="text.secondary">
            © 2025 AshwaniEdge. Made with{" "}
            <Favorite
              sx={{
                color: "#ef4444",
                fontSize: 16,
                mx: 0.5,
                verticalAlign: "middle",
              }}
            />
            for the coding community
          </Typography>

          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ display: "block", mt: 1 }}
          >
            Built with React & Material-UI • Open Source
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
