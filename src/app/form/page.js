"use client";

import MultiStepForm from "@/components/MultiStepForm";
import { Box } from "@mui/material";

export default function Form() {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                mt: 4,
                mb: 4,
            }}
        >
            <Box
                sx={{
                    width: 800,
                    backgroundColor: "#E8E8E8",
                    borderRadius: "7px",
                    color: "black",
                    p: 4,
                    ml: 4,
                    mr: 4,
                }}
            >
                <MultiStepForm />
            </Box>
        </Box>
    );
}
