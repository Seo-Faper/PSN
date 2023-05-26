import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Header from '../components/Header';
import StickyFooter from '../components/StickyFooter';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { createTheme, ThemeProvider } from '@mui/material';


export default function Hof() {
    const theme = createTheme({
        typography: {
            fontFamily: "'Galmuri9', sans-serif;",
        }

    });
    return (
        <>
            <Container component="main" sx={{ mt: 5 }} maxWidth="lg">
                <ThemeProvider theme={theme}>
                    <Typography variant='h3' id="hof">Hell Of Fame</Typography>
                    <Typography variant='h5'>명예의 전당</Typography>
                </ThemeProvider>
                <CssBaseline><br></br></CssBaseline>
                <Card style={{ width: '18rem' }}>
                    <Card.Header>익명의 아홀로틀</Card.Header>
                    <Card.Body>
                        <Card.Title>뭔갈 함!</Card.Title>
                        <Card.Text>
                            뭘 했는진 모르겠지만 아무튼 명예의 전당에 올랐음.
                        </Card.Text>
                        <Button variant="primary">자세히 보기</Button>
                    </Card.Body>
                </Card>
            </Container>
            <StickyFooter />
        </>
    );
}