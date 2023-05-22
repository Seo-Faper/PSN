import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Header from '../components/Header';
import StickyFooter from '../components/StickyFooter';
import Table from 'react-bootstrap/Table';
import { createTheme, ThemeProvider } from '@mui/material';


export default function Problem() {
    const theme = createTheme({
        typography: {
            fontFamily: "'Galmuri9', sans-serif;",
        }

    });
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

            <Container component="main" sx={{ mt: 5 }} maxWidth="lg">
                <ThemeProvider theme={theme}>
                    <Typography variant='h3' id="problem">Problem Set</Typography>
                    <Typography variant='h5'>다양한 문제를 풀어 보아요.</Typography>
                </ThemeProvider>
                <CssBaseline><br></br></CssBaseline>
                <Table striped bordered hover size="sm" >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>stat</th>
                            <th>Name</th>
                            <th>Author</th>
                            <th>Solved</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>-</td>
                            <td>동아리 입단 테스트 #1</td>
                            <td>@faper</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>-</td>
                            <td>동아리 입단 테스트 #2</td>
                            <td>@faper</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>-</td>
                            <td>통기레쓰 우주 해병의 모험</td>
                            <td>@faper</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>-</td>
                            <td>수혁이의 대선</td>
                            <td>@faper</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>-</td>
                            <td>하늘에서 떨어지는 1, 2, ... L+1 개의 별 </td>
                            <td>@faper</td>
                            <td>0</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
            <StickyFooter />
        </Box>
    );
}