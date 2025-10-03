// components/Signup.js
import React, { useState } from "react";
import { Grid, Paper, Typography, TextField, Button, Box } from "@mui/material";

export default function Signup({ onAccountCreated }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    major: "",
    gradYear: "",
    language: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreate = () => {
    console.log("Account created:", formData);
    alert("Account created successfully!");
    onAccountCreated?.();
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
          Create an account to join a study community that matches your goals.
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
          Create An Account
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField label="First and Last Name" name="name" onChange={handleChange} />
          <TextField label="Email" name="email" onChange={handleChange} />
          <TextField label="Major" name="major" onChange={handleChange} />
          <TextField label="Graduation Year" name="gradYear" onChange={handleChange} />
          <TextField label="Preferred Language" name="language" onChange={handleChange} />
          <TextField
            label="Password"
            type="password"
            name="password"
            onChange={handleChange}
          />
          <Button variant="contained" sx={{ bgcolor: "teal" }} onClick={handleCreate}>
            Create Account
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}