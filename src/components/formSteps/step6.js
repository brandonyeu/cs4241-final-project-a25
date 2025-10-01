// Study Rhythm
import { Box, Grid, Typography } from "@mui/material";
import OptionCard from "./OptionCard";
import {
    Sunny,
    AccessTime,
    NightsStay,
    DirectionsRun,
    TransferWithinAStation,
    DirectionsWalk,
    EmojiFoodBeverage,
    Timelapse,
    TimerOff,
} from "@mui/icons-material";

export default function Step6({ formData, onChange }) {
    // have the option card act like an input field when selected
    const handleSelect = (name, value) => onChange({ target: { name, value } });

    return (
        <Box>
            {/* Time of Day */}
            <Typography variant="h6" gutterBottom>
                Time of Day
            </Typography>
            <Grid container spacing={2} sx={{ mb: 4 }}>
                <Grid item xs={4}>
                    <OptionCard
                        label="Morning"
                        icon={<Sunny />}
                        value="morning"
                        selected={formData.timeOfDay === "morning"}
                        onSelect={(val) => handleSelect("timeOfDay", val)}
                    />
                </Grid>
                <Grid item xs={4}>
                    <OptionCard
                        label="Afternoon"
                        icon={<AccessTime />}
                        value="afternoon"
                        selected={formData.timeOfDay === "afternoon"}
                        onSelect={(val) => handleSelect("timeOfDay", val)}
                    />
                </Grid>
                <Grid item xs={4}>
                    <OptionCard
                        label="Night"
                        icon={<NightsStay />}
                        value="night"
                        selected={formData.timeOfDay === "night"}
                        onSelect={(val) => handleSelect("timeOfDay", val)}
                    />
                </Grid>
            </Grid>

            {/* Study Pace */}
            <Typography variant="h6" gutterBottom>
                Study Pace
            </Typography>
            <Grid container spacing={2} sx={{ mb: 4 }}>
                <Grid item xs={4}>
                    <OptionCard
                        label="Fast"
                        icon={<DirectionsRun />}
                        value="fast"
                        selected={formData.studyPace === "fast"}
                        onSelect={(val) => handleSelect("studyPace", val)}
                    />
                </Grid>
                <Grid item xs={4}>
                    <OptionCard
                        label="Steady"
                        icon={<TransferWithinAStation />}
                        value="steady"
                        selected={formData.studyPace === "steady"}
                        onSelect={(val) => handleSelect("studyPace", val)}
                    />
                </Grid>
                <Grid item xs={4}>
                    <OptionCard
                        label="Slow"
                        icon={<DirectionsWalk />}
                        value="slow"
                        selected={formData.studyPace === "slow"}
                        onSelect={(val) => handleSelect("studyPace", val)}
                    />
                </Grid>
            </Grid>

            {/* Break Style */}
            <Typography variant="h6" gutterBottom>
                Break Style
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <OptionCard
                        label="Short and Frequent"
                        icon={<EmojiFoodBeverage />}
                        value="short"
                        selected={formData.breakStyle === "short"}
                        onSelect={(val) => handleSelect("breakStyle", val)}
                    />
                </Grid>
                <Grid item xs={4}>
                    <OptionCard
                        label="Long and Few"
                        icon={<Timelapse />}
                        value="long"
                        selected={formData.breakStyle === "long"}
                        onSelect={(val) => handleSelect("breakStyle", val)}
                    />
                </Grid>
                <Grid item xs={4}>
                    <OptionCard
                        label="No Breaks"
                        icon={<TimerOff />}
                        value="none"
                        selected={formData.breakStyle === "none"}
                        onSelect={(val) => handleSelect("breakStyle", val)}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}