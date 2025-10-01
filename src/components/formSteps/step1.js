// Study preferences blurb/instructions
import { Typography } from "@mui/material";

export default function Step1() {
    return (
        <div>
            <Typography variant="h6" gutterBottom>
                Study Preferences
            </Typography>
            <Typography>
                To find the most fitting study buddy match for you, please
                inform us of your preferences (skip if no preference).
            </Typography>
        </div>
    );
}