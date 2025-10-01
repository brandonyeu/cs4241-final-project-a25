import { Card, CardActionArea, Typography } from "@mui/material";

export default function OptionCard({ label, icon, value, selected, onSelect }) {
    return (
        <Card
            sx={{
                border: selected ? "2px solid #1976d2" : "1px solid #ccc",
                borderRadius: 2,
                textAlign: "center",
            }}
        >
            <CardActionArea onClick={() => onSelect(value)} sx={{ p: 2 }}>
                <div style={{ fontSize: "2rem", marginBottom: "8px" }}>
                    {icon}
                </div>
                <Typography variant="subtitle1">{label}</Typography>
            </CardActionArea>
        </Card>
    );
}
