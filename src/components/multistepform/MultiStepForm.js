"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Stepper, Step, StepLabel, Button, Box } from "@mui/material";

import Step1 from "@/components/multistepform/formSteps/step1";
import Step2 from "@/components/multistepform/formSteps/step2";
import Step3 from "@/components/multistepform/formSteps/step3";
import Step4 from "@/components/multistepform/formSteps/step4";
import Step5 from "@/components/multistepform/formSteps/step5";
import Step6 from "@/components/multistepform/formSteps/step6";

const steps = [
    "Instructions",
    "Course",
    "Personality",
    "Study Goals",
    "Study Environment",
    "Study Rhythm",
];

export default function MultiStepForm() {
    // current step
    const [activeStep, setActiveStep] = useState(0);
    // store form data
    const [formData, setFormData] = useState({});

    // update form data
    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // change current step when clicking next and back buttons
    const handleNext = () => setActiveStep((prev) => prev + 1);
    const handleBack = () => setActiveStep((prev) => prev - 1);
    
    // go back to home page if cancel
    const router = useRouter(); 
    const handleCancel = () => {
        router.push("/");
    };

    // send info to backend on submit
    const handleSubmit = async () => {
        const jsonFormData = JSON.stringify(formData);
        const response = await fetch("/api/form", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: jsonFormData,
        });
        alert("Form submitted!");

        console.log("response status: ", response.status);
        console.log("response data: ", await response.json());

        console.log(jsonFormData);

        const request = await fetch("/api/matches", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: jsonFormData,
        });

        console.log("request status: ", request.status);
    };

    return (
        <Box sx={{ width: "100%" }}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            {/* display step here depending on current step */}
            <Box sx={{ mt: 4 }}>
                {activeStep === 0 && <Step1 />}
                {activeStep === 1 && (
                    <Step2 formData={formData} onChange={onChange} />
                )}
                {activeStep === 2 && (
                    <Step3 formData={formData} onChange={onChange} />
                )}
                {activeStep === 3 && (
                    <Step4 formData={formData} onChange={onChange} />
                )}
                {activeStep === 4 && (
                    <Step5 formData={formData} onChange={onChange} />
                )}
                {activeStep === 5 && (
                    <Step6 formData={formData} onChange={onChange} />
                )}
            </Box>

            {/* buttons */}
            <Box
                sx={{ mt: 4, display: "flex", justifyContent: "space-between" }}
            >
                {/* display cancel button only if on first step */}
                {activeStep != 0 ? (
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={handleBack}
                    >
                        Back
                    </Button>
                ) : (
                    <Button
                        variant="contained"
                        color="error"
                        onClick={handleCancel}
                    >
                        Cancel
                    </Button>
                )}

                {/* display submit button only if on last step */}
                {activeStep != steps.length - 1 ? (
                    <Button variant="contained" onClick={handleNext}>
                        Next
                    </Button>
                ) : (
                    <Button
                        variant="contained"
                        color="success"
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                )}
            </Box>
        </Box>
    );
}
