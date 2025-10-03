"use client";

import { useRouter } from "next/navigation";
import { Button, TextField, Typography, Box } from "@mui/material";
import { useEffect } from "react";

export default function Login() {
  const router = useRouter();

  // Only run in browser after mount
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    // Optional cleanup if user navigates away
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  const handleCreateAccountClick = () => {
    router.push("/signup");
  };

  return (
    <Box display="flex" height="100vh" overflow="hidden">
    {/* Left column */}
    <Box
        flex="1 1 50%"
        sx={{
        background: "linear-gradient(to top, #92d0a1 0%, #ffffff 65%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start", // left-align content inside
        px: 8, // horizontal padding
        mt: -42,
        }}
    >
        <Typography variant="h3" sx={{ fontWeight: "normal", mb: 2, lineHeight: 1.2 }}>
        Welcome to
        </Typography>

        <Box
        component="img"
        src="/logotransparent.png"
        alt="Studi logo"
        sx={{ width: 300, height: 95, mb: 2 }}
        />

        <Typography variant="h5" sx={{ mt: 2, lineHeight: 1.3 }}>
        Meet people who have similar study needs, boosting productivity, while
        forming new connections.
        </Typography>
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
        mt: -25,
        }}
    >
        <Typography variant="h4" sx={{ fontWeight: "normal", mb: 4, textAlign: "center" }}>
        Log In
        </Typography>

        <TextField label="Email" type="email" fullWidth={false} sx={{ width: "80%", mb: 2 }} />
        <TextField label="Password" type="password" fullWidth={false} sx={{ width: "80%", mb: 3 }} />

        <Button
        variant="contained"
        fullWidth={false}
        sx={{
            width: "80%",
            height: 50,
            backgroundColor: "#8ee5f4",
            color: "#000",
            fontWeight: "bold",
            mb: 2,
            "&:hover": { backgroundColor: "#6fd2e0" },
        }}
        >
        Log In
        </Button>

        <Typography sx={{ mt: 3, textAlign: "center", mb: 2 }}>
        Don't have an account?
        </Typography>

        <Button
        variant="contained"
        fullWidth={false}
        sx={{
            width: "80%",
            height: 50,
            fontWeight: "bold",
            color: "#000",
            background: "linear-gradient(to right, #58ed87, #57e9ec)",
            "&:hover": {
            background: "linear-gradient(to right, #4ddb75, #49d8e0)",
            },
        }}
        onClick={handleCreateAccountClick}
        >
        Create An Account
        </Button>
    </Box>
    </Box>
  );
}
