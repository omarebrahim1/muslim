import { Box, Typography } from "@mui/material";
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

export default function Phrase() {
    return (
        <Box component="div" sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: 1, direction: 'ltr' }}>
            <Typography
                variant="body1"
                sx={{ fontSize: '22px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                Made By 
            </Typography>
            <Typography
                variant="body1"
                sx={{ fontSize: '22px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                Omar Ebrahim
            </Typography>
        </Box>
    )
}
