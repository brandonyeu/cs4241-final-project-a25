// Personality
import { Grid, Typography } from "@mui/material";
import OptionCard from "./OptionCard";
import { Person, Groups } from "@mui/icons-material";

export default function Step3({ formData, onChange }) {
    // have the option card act like an input field when selected
    const handleSelect = (value) =>
        onChange({ target: { name: "personality", value } });

    return (
        <div>
            <Typography variant="h6" gutterBottom>
                Personality
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <OptionCard
                        label="Introverted"
                        icon={<Person />}
                        value="introverted"
                        selected={formData.personality === "introverted"}
                        onSelect={handleSelect}
                    />
                </Grid>
                <Grid item xs={6}>
                    <OptionCard
                        label="Extroverted"
                        icon={<Groups />}
                        value="extroverted"
                        selected={formData.personality === "extroverted"}
                        onSelect={handleSelect}
                    />
                </Grid>
            </Grid>
        </div>
    );
}