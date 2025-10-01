// Study Environment
import { Box, Grid, Typography } from "@mui/material";
import OptionCard from "./OptionCard";
import {
    Forum,
    LockClock,
    VolumeOff,
    VolumeDown,
    VolumeUp,
    Computer,
    LocationCity,
} from "@mui/icons-material";


export default function Step5({ formData, onChange }) {
    // have the option card act like an input field when selected
    const handleSelect = (name, value) => onChange({ target: { name, value } });

    return (
        <Box>
            {/* Communication Style */}
            <Typography variant="h6" gutterBottom>
                Communication Style
            </Typography>
            <Grid container spacing={2} sx={{ mb: 4 }}>
                <Grid item xs={6}>
                    <OptionCard
                        label="Yap"
                        icon={<Forum />}
                        value="yap"
                        selected={formData.communicationStyle === "yap"}
                        onSelect={(val) =>
                            handleSelect("communicationStyle", val)
                        }
                    />
                </Grid>
                <Grid item xs={6}>
                    <OptionCard
                        label="Lock In"
                        icon={<LockClock />}
                        value="lock_in"
                        selected={formData.communicationStyle === "lock_in"}
                        onSelect={(val) =>
                            handleSelect("communicationStyle", val)
                        }
                    />
                </Grid>
            </Grid>

            {/* Noise Level */}
            <Typography variant="h6" gutterBottom>
                Noise Level
            </Typography>
            <Grid container spacing={2} sx={{ mb: 4 }}>
                <Grid item xs={4}>
                    <OptionCard
                        label="Silent"
                        icon={<VolumeOff />}
                        value="silent"
                        selected={formData.noiseLevel === "silent"}
                        onSelect={(val) => handleSelect("noiseLevel", val)}
                    />
                </Grid>
                <Grid item xs={4}>
                    <OptionCard
                        label="Background Music"
                        icon={<VolumeDown />}
                        value="bgm"
                        selected={formData.noiseLevel === "bgm"}
                        onSelect={(val) => handleSelect("noiseLevel", val)}
                    />
                </Grid>
                <Grid item xs={4}>
                    <OptionCard
                        label="Chatter"
                        icon={<VolumeUp />}
                        value="chatter"
                        selected={formData.noiseLevel === "chatter"}
                        onSelect={(val) => handleSelect("noiseLevel", val)}
                    />
                </Grid>
            </Grid>

            {/* Location */}
            <Typography variant="h6" gutterBottom>
                Location
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <OptionCard
                        label="Online"
                        icon={<Computer />}
                        value={true}
                        selected={formData.isOnline === true}
                        onSelect={(val) => handleSelect("isOnline", val)}
                    />
                </Grid>
                <Grid item xs={6}>
                    <OptionCard
                        label="In-person"
                        icon={<LocationCity />}
                        value={false}
                        selected={formData.isOnline === false}
                        onSelect={(val) => handleSelect("isOnline", val)}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}