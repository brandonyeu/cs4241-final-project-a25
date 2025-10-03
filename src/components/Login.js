// components/Login.js
import React, { useState } from "react";
import { Grid, Paper, Typography, TextField, Button, Box } from "@mui/material";

export default function Login({ onLogin, onRedirectToSignup }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Mock logic for now
    if (username === "test" && password === "1234") {
      alert("Logged in!");
      onLogin?.();
    } else if (username === "test") {
      alert("Wrong password, try again.");
    } else {
      alert("We couldn’t find an account with that info, let’s sign you up!");
      onRedirectToSignup?.();
    }
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      {/* Left column */}
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          backgroundColor: "#f5f5f5",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: 4,
        }}
      >
        <Typography variant="h3" gutterBottom>
          Welcome to Studi
        </Typography>
        <Typography variant="h6" color="text.secondary" align="center">
          Meet people who have similar study needs, boosting productivity,
          while forming new connections.
        </Typography>
      </Grid>

      {/* Right column */}
      <Grid
        item
        xs={12}
        sm={6}
        component={Paper}
        elevation={6}
        square
        sx={{ display: "flex", flexDirection: "column", justifyContent: "center", p: 6 }}
      >
        <Typography variant="h4" gutterBottom>
          Log In
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" sx={{ bgcolor: "lightblue" }} onClick={handleLogin}>
            Log In
          </Button>

          <Typography align="center" variant="body1" sx={{ mt: 2 }}>
            Don’t have an account?
          </Typography>
          <Button
            variant="contained"
            sx={{ bgcolor: "teal" }}
            onClick={onRedirectToSignup}
          >
            Create An Account
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}