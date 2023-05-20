import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Header from '../components/Header';
import StickyFooter from '../components/StickyFooter';
import { createTheme, ThemeProvider } from '@mui/material';


const theme = createTheme({
    typography: {
        fontFamily: "'Galmuri9', sans-serif;",

    }

});
export default function Home() {

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <CssBaseline />
            <Header></Header>
            <ThemeProvider theme={theme}>
                <Container component="main" sx={{ mt: 5 }} maxWidth="lg">

                    <Typography variant="h1" gutterBottom sx={{

                    }} id="title">
                        Problem Solve Network PSN
                    </Typography>
                    <Typography variant="h4" component="h2" gutterBottom>
                        {'ps를 좋아하는 사람들의 모임'}
                    </Typography>
                    <Typography variant="body1"> <a href="https://discord.gg/KZ8pBWPgex" target="_blank" rel="noreferrer noopener"> {'> join discord'}</a> <img height="30" width="30" src="https://cdn.simpleicons.org/discord/#5865F2" /></Typography>
                </Container>
            </ThemeProvider>
            <StickyFooter />
        </Box>
    );
}