"use client";

import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/utils/theme";
import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Divider,
  Paper,
  Grid,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import MatchCard from "@/components/matchCard/matchCard";

export default function Dashboard() {
  const [openCourse, setOpenCourse] = useState(null);
  const [selectedForm, setSelectedForm] = useState(null);

  const userForms = {
    CS1101: [
      { _id: "form1", course: "CS1101" },
      { _id: "form2", course: "CS1101" },
    ],
    CS2102: [{ _id: "form3", course: "CS2102" }],
    CS3733: [{ _id: "form4", course: "CS3733" }],
  };

  const mockMatches = [
    { id: "u1", name: "Alice" },
    { id: "u2", name: "Bob" },
    { id: "u3", name: "Charlie" },
  ];

  const handleCourseClick = (course) =>
    setOpenCourse(openCourse === course ? null : course);
  const handleFormClick = (form) => setSelectedForm(form);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "100vw",
          height: "calc(100vh - 64px)",
          display: "flex",
          flexDirection: "row",
          overflow: "hidden",
          backgroundColor: "#f5f7fa",
        }}
      >
        {/* Sidebar */}
        <Box
          sx={{
            flex: "0 0 35%",
            backgroundColor: "#ffffff",
            borderRight: `1px solid ${theme.palette.divider || "#ddd"}`,
            p: 3,
            overflowY: "auto",
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: 700, color: "#002d45", mb: 3 }}
          >
            My Match Runs
          </Typography>
          <Divider sx={{ mb: 4 }} />

          <List component="nav">
            {Object.entries(userForms).map(([course, forms]) => (
              <Box key={course} sx={{ mb: 3 }}>
                <ListItemButton
                  onClick={() => handleCourseClick(course)}
                  sx={{
                    borderRadius: 2,
                    p: 2,
                    boxShadow:
                      openCourse === course
                        ? "0 4px 8px rgba(0, 0, 0, 0.1)"
                        : "0 1px 3px rgba(0,0,0,0.05)",
                    backgroundColor:
                      openCourse === course ? "#e3f2fd" : "#fafafa",
                    "&:hover": {
                      backgroundColor: "#d8f3dc",
                      transform: "translateY(-1px)",
                    },
                    transition: "all 0.25s ease",
                  }}
                >
                  <ListItemText
                    primary={course}
                    primaryTypographyProps={{
                      fontWeight: 600,
                      fontSize: "1rem",
                    }}
                  />
                  {openCourse === course ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={openCourse === course} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {forms.map((form) => (
                      <ListItemButton
                        key={form._id}
                        sx={{
                          pl: 5,
                          mb: 1.5,
                          borderRadius: 2,
                          backgroundColor:
                            selectedForm?._id === form._id
                              ? "#bbf0d7"
                              : "#f9f9f9",
                          "&:hover": {
                            backgroundColor: "#c9f2df",
                            transform: "translateX(2px)",
                          },
                          transition: "all 0.2s ease",
                        }}
                        selected={selectedForm?._id === form._id}
                        onClick={() => handleFormClick(form)}
                      >
                        <ListItemText
                          primary={`Form ${form._id}`}
                          primaryTypographyProps={{ fontWeight: 500 }}
                        />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              </Box>
            ))}
          </List>
        </Box>

        {/* Content */}
        <Box
          sx={{
            flex: "1 1 65%",
            p: 5,
            overflowY: "auto",
          }}
        >
          {!selectedForm ? (
            <Paper
              elevation={0}
              sx={{
                p: 6,
                textAlign: "center",
                color: "#555",
                border: "1px dashed #ccc",
                borderRadius: 3,
                backgroundColor: "#fefefe",
              }}
            >
              <Typography variant="h6">
                Select a course and one of your submissions to see matches
              </Typography>
            </Paper>
          ) : (
            <Box>
              {/* Fun, personalized header */}
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: 700, color: "#002d45", mb: 1 }}
              >
                🎯 Your Personalized Study Buddy Matches
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#555", mb: 4 }}
              >
                Pick your favorite match and start studying 💪📚
              </Typography>

              <Grid container spacing={3}>
                {mockMatches.map((user) => (
                  <Grid item xs={12} sm={6} md={4} key={user.id}>
                    <MatchCard user={user} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
