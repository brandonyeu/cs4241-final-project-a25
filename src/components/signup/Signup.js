"use client";

import {useState} from "react";
import {useRouter} from "next/navigation";
import {Button, TextField, Typography, Box} from "@mui/material";
import {useEffect} from "react";

export default function Signup() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        major: '',
        gradYear: '',
        preferredLanguage: '',
        password: '',
        confirmPassword: '',
    })

    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "auto";
        };
    }, []);

    const validateForm = () => {
        const errors = {};
        if (!formData.name) errors.name = "Name is required";

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            errors.email = "Please enter a valid email address";
        }

        if (!formData.major) errors.major = "Major is required";
        if (!formData.gradYear) errors.gradYear = "Graduation Year is required";
        if (!formData.password) errors.password = "Password is required";
        if (!formData.confirmPassword) errors.confirmPassword = "Confirm Password is required";
        if (formData.password !== formData.confirmPassword) errors.confirmPassword = "Passwords do not match";
        return errors;
    }

    const handleBackToLoginClick = () => {
        router.push("/login");
    };

    const handleSubmit = async() => {
        if(Object.keys(validateForm()).length > 0) {
            console.log("Form is invalid");
            return;
        }

        console.log(JSON.stringify(formData));

        const response = await fetch('/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })

        console.log("response status: ", response.status);
        console.log("response data: ", await response.json());
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

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
                <Typography variant="h2" sx={{fontWeight: "normal", lineHeight: 1.2, mt: 10}}>
                    Welcome to
                </Typography>

                <Box
                    component="img"
                    src="/newlogotransparent.png"
                    alt="Studi logo"
                    sx={{width: 300, height: 95, ml: -2.5}}
                />

                <Typography variant="h5" sx={{lineHeight: 1.3, mt: 3}}>
                    Meet people who have similar study needs, boosting productivity, while
                    forming new connections.
                </Typography>
                <Box
                    component="img"
                    src="/lilstudybuds.png"
                    alt="graphic of two dogs studying"
                    sx={{width: 450, height: "auto", mt: 5, mb: -40}}
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
                <Typography variant="h3" sx={{fontWeight: "normal", mb: 4, textAlign: "center"}}>
                    Create An Account
                </Typography>

                <TextField label="First and Last Name"
                           name="name"
                           fullWidth={false}
                           sx={{width: "80%", mb: 2}}
                           value={formData.name}
                           onChange={handleChange}
                           required
                />
                <TextField label="Email"
                           name="email"
                           type="email"
                           fullWidth={false}
                           sx={{width: "80%", mb: 2}}
                           value={formData.email}
                           onChange={handleChange}
                           required
                />
                <TextField
                    label="Major"
                    name="major"
                    fullWidth={false}
                    sx={{width: "80%", mb: 2}}
                    value={formData.major}
                    onChange={handleChange}
                    required
                />
                <TextField label="Graduation Year"
                           name="gradYear"
                           fullWidth={false}
                           sx={{width: "80%", mb: 2}}
                           value={formData.gradYear}
                           onChange={handleChange}
                           required
                />
                <TextField label="Preferred Language"
                           name="preferredLanguage"
                           fullWidth={false}
                           sx={{width: "80%", mb: 2}}
                           value={formData.preferredLanguage}
                           onChange={handleChange}
                           required
                />
                <TextField label="Password"
                           name="password"
                           type="password"
                           fullWidth={false}
                           sx={{width: "80%", mb: 3}}
                           value={formData.password}
                           onChange={handleChange}
                           required
                />
                <TextField label="Confirm Password"
                           name="confirmPassword"
                           type="password"
                           value={formData.confirmPassword}
                           onChange={handleChange}
                           sx={{width: "80%", mb: 3}}
                           required
                />
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
                    onClick={handleSubmit}
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
                        "&:hover": {backgroundColor: "#6fd2e0"},
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
