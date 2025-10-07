import {
    Card,
    CardContent,
    Typography,
    Grid,
    Stack,
    Chip,
    Box,
} from "@mui/material";

const formatLabel = (value) => {
    const labelMap = {
        // Personality
        introverted: "Introverted",
        extroverted: "Extroverted",

        // Priority
        highest_priority: "Highest Grades",
        just_pass: "Just Pass",

        // Assignment
        exam: "Exam",
        project: "Project",
        hw: "Homework",

        // Communication Style
        yap: "Yap",
        lock_in: "Lock In",

        // Noise Level
        silent: "Silent",
        bgm: "Background Music",
        chatter: "Chatter",

        // Time of Day
        morning: "Morning",
        afternoon: "Afternoon",
        night: "Night",

        // Study Pace
        fast: "Fast",
        steady: "Steady",
        slow: "Slow + Detailed",

        // Break Style
        short: "Short + Frequent",
        long: "Long + Few",
        none: "None",
    };

    return labelMap[value] || value;
};

export default function MatchCard({ match }) {
    const { user, form } = match;

    return (
        <Card sx={{ borderRadius: 3, m: 2, boxShadow: 3, width: 400 }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    {user.firstname} {user.lastname} ({user.major},{" "}
                    {user.graduationYear})
                </Typography>
                <Typography variant="body1">Email: {user.email}</Typography>
                <Typography variant="body2" color="text.secondary">
                    Preferred Language: {user.preferredLanguage}
                </Typography>

                {/* Form Preferences */}
                <Box sx={{ mt: 2 }}>
                    <Grid container spacing={2} direction="column">
                        {/* Course */}
                        <Grid item xs={12}>
                            <Typography
                                variant="body2"
                                fontWeight="bold"
                                gutterBottom
                            >
                                Course
                            </Typography>
                            <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1 }}>
                                {form.course && (
                                    <Chip
                                        label={form.course}
                                        variant="outlined"
                                        color="primary"
                                    />
                                )}
                            </Stack>
                        </Grid>

                        {/* Personality */}
                        {form.personality && (
                            <Grid item xs={12}>
                                <Typography
                                    variant="body2"
                                    fontWeight="bold"
                                    gutterBottom
                                >
                                    Personality
                                </Typography>
                                <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1 }}>
                                    <Chip
                                        label={formatLabel(form.personality)}
                                        variant="outlined"
                                    />
                                </Stack>
                            </Grid>
                        )}

                        {/* Study Goals */}
                        {(form.priority || form.assignment) && (
                            <Grid item xs={12}>
                                <Typography
                                    variant="body2"
                                    fontWeight="bold"
                                    gutterBottom
                                >
                                    Study Goals
                                </Typography>
                                <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1 }}>
                                    {form.priority && (
                                        <Chip
                                            label={`Priority: ${formatLabel(form.priority)}`}
                                            variant="outlined"
                                        />
                                    )}
                                    {form.assignment && (
                                        <Chip
                                            label={`Assignment: ${formatLabel(form.assignment)}`}
                                            variant="outlined"
                                        />
                                    )}
                                </Stack>
                            </Grid>
                        )}

                        {/* Study Environment */}
                        {(form.communicationStyle || form.noiseLevel || form.isOnline != null) && (
                            <Grid item xs={12}>
                                <Typography
                                    variant="body2"
                                    fontWeight="bold"
                                    gutterBottom
                                >
                                    Study Environment
                                </Typography>
                                <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1 }}>
                                    {form.communicationStyle && (
                                        <Chip
                                            label={`Comm: ${formatLabel(form.communicationStyle)}`}
                                            variant="outlined"
                                        />
                                    )}
                                    {form.noiseLevel && (
                                        <Chip
                                            label={`Noise: ${formatLabel(form.noiseLevel)}`}
                                            variant="outlined"
                                        />
                                    )}
                                    {form.isOnline && (
                                        <Chip
                                            label={
                                                form.isOnline
                                                    ? "Location: Online"
                                                    : "Location: In-person"
                                            }
                                            variant="outlined"
                                        />
                                    )}
                                </Stack>
                            </Grid>
                        )}

                        {/* Study Rhythm */}
                        {(form.timeOfDay || form.studyPace || form.breakStyle) && (
                            <Grid item xs={12}>
                                <Typography
                                    variant="body2"
                                    fontWeight="bold"
                                    gutterBottom
                                >
                                    Study Rhythm
                                </Typography>
                                <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1 }}>
                                    {form.timeOfDay && (
                                        <Chip
                                            label={`Time: ${formatLabel(form.timeOfDay)}`}
                                            variant="outlined"
                                        />
                                    )}
                                    {form.studyPace && (
                                        <Chip
                                            label={`Pace: ${formatLabel(form.studyPace)}`}
                                            variant="outlined"
                                        />
                                    )}
                                    {form.breakStyle && (
                                        <Chip
                                            label={`Break: ${formatLabel(form.breakStyle)}`}
                                            variant="outlined"
                                        />
                                    )}
                                </Stack>
                            </Grid>
                        )}
                    </Grid>
                </Box>
            </CardContent>
        </Card>
    );
}
