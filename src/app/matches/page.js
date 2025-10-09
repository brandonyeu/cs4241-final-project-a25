import { Box, Typography } from "@mui/material";
import MatchCard from "@/components/matchCard/matchCard";

export default async function Matches() {
    // const matches = await getMatches(); // import function!
    // hardcoding this for now for testing purposes
        const matches = [
            {
                user: {
                    _id: 1,
                    name: "Arianna Xie",
                    major: "CS",
                    graduationYear: 2026,
                    email: "a@wpi.edu",
                    preferredLanguage: "English",
                },
                form: {
                    course: "CS1101",
                    personality: "introverted",
                    priority: "highest_priority",
                    assignment: "project",
                    communicationStyle: "yap",
                    noiseLevel: "bgm",
                    isOnline: true,
                    timeOfDay: "night",
                    studyPace: "steady",
                    breakStyle: "short",
                },
            },
            {
                user: {
                    _id: 2,
                    name: "Amanda P",
                    major: "CS",
                    graduationYear: 2026,
                    email: "ap@wpi.edu",
                    preferredLanguage: "English",
                },
                form: {
                    course: "CS1101",
                    personality: "extroverted",
                    priority: "highest_priority",
                    assignment: "project",
                    communicationStyle: "yap",
                    noiseLevel: "silent",
                    isOnline: true,
                    timeOfDay: "afternoon",
                    studyPace: "steady",
                    breakStyle: "short",
                },
            },
            {
                user: {
                    _id: 5,
                    name: "Emma Lin",
                    major: "DS",
                    graduationYear: 2026,
                    email: "e@wpi.edu",
                    preferredLanguage: "English",
                },
                form: {
                    course: "CS1101",
                    personality: "extroverted",
                    priority: "highest_priority",
                    assignment: "project",
                    communicationStyle: "lock_in",
                    noiseLevel: "bgm",
                    isOnline: true,
                    timeOfDay: "night",
                    studyPace: "steady",
                    breakStyle: "long",
                },
            },
        ];

    if (matches.length === 0) {
        return (
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="400px"
            >
                <Typography variant="h6" color="text.secondary">
                    No matches found
                </Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
                Your Study Matches
            </Typography>
            <Box display="flex" flexWrap="wrap" gap={2}>
                {matches.map((match) => (
                    <MatchCard key={match.user._id} match={match} />
                ))}
            </Box>
        </Box>
    );
}