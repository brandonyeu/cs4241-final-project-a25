// Course selection
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export default function Step2({ formData, onChange }) {
    return (
        <FormControl fullWidth>
            <InputLabel>Course</InputLabel>
            <Select
                name="course"
                value={formData.course || ""}
                onChange={onChange}
                label="Course"
            >
                <MenuItem value="">-- Select a course --</MenuItem>
                <MenuItem value="cs1101">CS 1101</MenuItem>
                <MenuItem value="cs2102">CS 2102</MenuItem>
            </Select>
        </FormControl>
    );
}
