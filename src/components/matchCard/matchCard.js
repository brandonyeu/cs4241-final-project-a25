import {
    Card,
    CardContent,
    Typography,
    Grid,
    Stack,
    Chip,
    Box,
} from "@mui/material";

export default function MatchCard({ user }) {
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
                            <Stack direction="row" spacing={1} flexWrap="wrap">
                                {user.form.course && (
                                    <Chip
                                        label={user.form.course}
                                        variant="outlined"
                                        color="primary"
                                    />
                                )}
                            </Stack>
                        </Grid>

                        {/* Personality */}
                        {user.form.personality && (
                            <Grid item xs={12}>
                                <Typography
                                    variant="body2"
                                    fontWeight="bold"
                                    gutterBottom
                                >
                                    Personality
                                </Typography>
                                <Stack
                                    direction="row"
                                    spacing={1}
                                    flexWrap="wrap"
                                >
                                    <Chip
                                        label={user.form.personality}
                                        variant="outlined"
                                    />
                                </Stack>
                            </Grid>
                        )}

                        {/* Study Goals */}
                        <Grid item xs={12}>
                            <Typography
                                variant="body2"
                                fontWeight="bold"
                                gutterBottom
                            >
                                Study Goals
                            </Typography>
                            <Stack direction="row" spacing={1} flexWrap="wrap">
                                {user.form.priority && (
                                    <Chip
                                        label={`Priority: ${user.form.priority}`}
                                        variant="outlined"
                                    />
                                )}
                                {user.form.assignment && (
                                    <Chip
                                        label={`Assignment: ${user.form.assignment}`}
                                        variant="outlined"
                                    />
                                )}
                            </Stack>
                        </Grid>

                        {/* Study Environment */}
                        <Grid item xs={12}>
                            <Typography
                                variant="body2"
                                fontWeight="bold"
                                gutterBottom
                            >
                                Study Environment
                            </Typography>
                            <Stack direction="row" spacing={1} flexWrap="wrap">
                                {user.form.communicationStyle && (
                                    <Chip
                                        label={`Comm: ${user.form.communicationStyle}`}
                                        variant="outlined"
                                    />
                                )}
                                {user.form.noiseLevel && (
                                    <Chip
                                        label={`Noise: ${user.form.noiseLevel}`}
                                        variant="outlined"
                                    />
                                )}
                                {user.form.isOnline && (
                                    <Chip
                                        label={
                                            user.form.isOnline
                                                ? "Location: online"
                                                : "Location: in-person"
                                        }
                                        variant="outlined"
                                    />
                                )}
                            </Stack>
                        </Grid>

                        {/* Study Rhythm */}
                        <Grid item xs={12}>
                            <Typography
                                variant="body2"
                                fontWeight="bold"
                                gutterBottom
                            >
                                Study Rhythm
                            </Typography>
                            <Stack direction="row" spacing={1} flexWrap="wrap">
                                {user.form.timeOfDay && (
                                    <Chip
                                        label={`Time: ${user.form.timeOfDay}`}
                                        variant="outlined"
                                    />
                                )}
                                {user.form.studyPace && (
                                    <Chip
                                        label={`Pace: ${user.form.studyPace}`}
                                        variant="outlined"
                                    />
                                )}
                                {user.form.breakStyle && (
                                    <Chip
                                        label={`Break: ${user.form.breakStyle}`}
                                        variant="outlined"
                                    />
                                )}
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </CardContent>
        </Card>
    );
}
