// Course selection
import { Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export default function Step2({ formData, onChange }) {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                mt: 2
            }}
        >
            <FormControl sx={{ width: "75%" }}>
                <InputLabel>What course are you studying for?</InputLabel>
                <Select
                    name="course"
                    value={formData.course || ""}
                    onChange={onChange}
                    label="What course are you studying for?"
                    sx={{ backgroundColor: "white" }}
                >
                    <MenuItem value="">-- Select a course --</MenuItem>
                    <MenuItem value="cs1101">CS 1101</MenuItem>
                    <MenuItem value="cs2102">CS 2102</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
