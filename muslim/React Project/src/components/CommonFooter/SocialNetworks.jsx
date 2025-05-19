import { Box } from "@mui/material";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function SocialNetworks() {
    return (
        <Box
            component="div"
            sx={{ display: 'flex', mt: 1, justifyContent: 'center', alignItems: 'center', gap: 2 }}>
            <a href="https://www.facebook.com/omar.ebrahim.120" target="_blank" rel="noreferrer">
                <FacebookRoundedIcon />
            </a>

            <a href="https://www.linkedin.com/in/" target="_blank" rel="noreferrer">
                <LinkedInIcon />
            </a>

            <a href="https://t.me/omarebrahim1" target="_blank" rel="noreferrer">
                <TelegramIcon />
            </a>
            
            <a href="https://github.com/Hshsggg55/" target="_blank" rel="noreferrer">
                <GitHubIcon />
            </a>
        </Box>
    )
}
