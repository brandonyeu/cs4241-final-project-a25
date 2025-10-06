import { Box } from "@mui/material";
import MatchCard from "@/components/matchCard/matchCard";

export default function Matches() {
    // hardcoding this for now for testing purposes
    const user = {
        id: 1,
        firstname: "Arianna",
        lastname: "Xie",
        major: "CS",
        graduationYear: 2026,
        email: "a@wpi.edu",
        preferredLanguage: "English",
        form: {
            course: "CS1101",
            personality: "extroverted",
            priority: "highest_priority",
            assignment: "project",
            communicationStyle: "yap",
            noiseLevel: "bgm",
            isOnline: true,
            timeOfDay: "night",
            studyPace: "steady",
            breakStyle: "short",
        },
    };

    return (
        <Box>
            <MatchCard key={user.id} user={user} />
        </Box>
    );
}
