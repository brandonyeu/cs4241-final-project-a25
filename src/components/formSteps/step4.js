// Study Goals
import { Box, Grid, Typography } from "@mui/material";
import OptionCard from "./OptionCard";
import {
    School,
    TagFaces,
    Quiz,
    AccountTree,
    Description,
} from "@mui/icons-material";

export default function Step4({ formData, onChange }) {
    // have the option card act like an input field when selected
    const handleSelect = (name, value) => 
        onChange({ target: { name, value } });

    return (
        <Box>
            {/* Priority */}
            <Typography variant="h6" gutterBottom>
                Study Priority
            </Typography>
            <Grid container spacing={2} sx={{ mb: 4 }}>
                <Grid item xs={6}>
                    <OptionCard
                        label="Highest Grades"
                        icon={<School />}
                        value="highest_grades"
                        selected={formData.priority === "highest_grades"}
                        onSelect={(val) => handleSelect("priority", val)}
                    />
                </Grid>
                <Grid item xs={6}>
                    <OptionCard
                        label="Just Pass"
                        icon={<TagFaces />}
                        value="just_pass"
                        selected={formData.priority === "just_pass"}
                        onSelect={(val) => handleSelect("priority", val)}
                    />
                </Grid>
            </Grid>

            {/* Assignment Type */}
            <Typography variant="h6" gutterBottom>
                Assignment Type
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <OptionCard
                        label="Exam"
                        icon={<Quiz />}
                        value="exam"
                        selected={formData.assignment === "exam"}
                        onSelect={(val) => handleSelect("assignment", val)}
                    />
                </Grid>
                <Grid item xs={4}>
                    <OptionCard
                        label="Project"
                        icon={<AccountTree />}
                        value="project"
                        selected={formData.assignment === "project"}
                        onSelect={(val) => handleSelect("assignment", val)}
                    />
                </Grid>
                <Grid item xs={4}>
                    <OptionCard
                        label="Homework"
                        icon={<Description />}
                        value="hw"
                        selected={formData.assignment === "hw"}
                        onSelect={(val) => handleSelect("assignment", val)}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}