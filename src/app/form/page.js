"use client";

import MultiStepForm from "@/components/multistepform/MultiStepForm";
import { Box } from "@mui/material";

export default function Form() {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                my: 4,
                px: 2,
            }}
        >
            <Box
                sx={{
                    width: { xs: "100%", sm: 800 },
                    backgroundColor: "#E8E8E8",
                    borderRadius: "7px",
                    color: "black",
                    p: 4,
                }}
            >
                <MultiStepForm />
            </Box>
        </Box>
    );
}
