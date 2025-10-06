"use client";

import { useRouter } from "next/navigation";
import { Button, TextField, Typography, Box } from "@mui/material";
import { useEffect } from "react";

export default function Signup() {
  const router = useRouter();

  // ✅ Move useEffect inside the component
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  const handleBackToLoginClick = () => {
    router.push("/login");
  };

  return (
    <Box display="flex" height="100vh" overflow="hidden">
      {/* Left column */}
      <Box
        flex="1 1 50%"
        sx={{
          background: "linear-gradient(to top, #00C9FF 0%, #92FE9D 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "flex-start",
          px: 8,
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: "normal", lineHeight: 1.2, mt: 10}}>
          Welcome to
        </Typography>

        <Box
          component="img"
          src="/newlogotransparent.png"
          alt="Studi logo"
          sx={{ width: 300, height: 95, ml: -2.5}}
        />

        <Typography variant="h5" sx={{ lineHeight: 1.3, mt: 3 }}>
          Meet people who have similar study needs, boosting productivity, while
          forming new connections.
        </Typography>
        <Box
        component="img"
        src="/lilstudybuds.png"
        alt="graphic of two dogs studying"
        sx={{ width: 450, height: "auto", mt: 5, mb: -40}}
        />
      </Box>

      {/* Right column */}
      <Box
        flex="1 1 50%"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          px: 8,
          mt: -5,
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "normal", mb: 4, textAlign: "center" }}>
          Create An Account
        </Typography>

        <TextField label="First and Last Name" fullWidth={false} sx={{ width: "80%", mb: 2 }} />
        <TextField label="Email" type="email" fullWidth={false} sx={{ width: "80%", mb: 2 }} />
        <TextField label="Major" fullWidth={false} sx={{ width: "80%", mb: 2 }} />
        <TextField label="Graduation Year" fullWidth={false} sx={{ width: "80%", mb: 2 }} />
        <TextField label="Preferred Language" fullWidth={false} sx={{ width: "80%", mb: 2 }} />
        <TextField label="Password" type="password" fullWidth={false} sx={{ width: "80%", mb: 3 }} />

        <Button
          variant="contained"
          fullWidth={false}
          sx={{
            width: "80%",
            height: 50,
            fontWeight: "bold",
            color: "#000",
            background: "linear-gradient(to right, #58ed87, #57e9ec)",
            mb: 2,
            "&:hover": {
              background: "linear-gradient(to right, #4ddb75, #49d8e0)",
            },
          }}
        >
          Create Account
        </Button>

        <Button
          variant="contained"
          fullWidth={false}
          sx={{
            width: "80%",
            height: 50,
            fontWeight: "bold",
            color: "#000",
            backgroundColor: "#8ee5f4",
            "&:hover": { backgroundColor: "#6fd2e0" },
            mt: 2,
          }}
          onClick={handleBackToLoginClick}
        >
          Back to Login
        </Button>
      </Box>
    </Box>
  );
}
