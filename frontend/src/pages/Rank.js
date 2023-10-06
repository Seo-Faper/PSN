import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Header from '../components/Header';
import StickyFooter from '../components/StickyFooter';
import Table from 'react-bootstrap/Table';
import { createTheme, ThemeProvider } from '@mui/material';
import { useState, useEffect } from 'react';

export default function Rank() {
    const [data, setData] = useState([]);
    
    const theme = createTheme({
        typography: {
            fontFamily: "'Galmuri9', sans-serif;",
        }

    });
    return (
        <>
            <Container component="main" sx={{ mt: 5 }} maxWidth="lg">
                <ThemeProvider theme={theme}>
                    <Typography variant='h3' id="rank">Rank</Typography>
                    <Typography variant='h5'>랭킹을 확인할 수 있어요.</Typography>
                </ThemeProvider>
                <CssBaseline><br></br></CssBaseline>
                <Table striped bordered hover size="lg" >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Comment</th>
                            <th>Pwn</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>

                            <td>익명의 오소리</td>
                            <td>ㅎㅎ</td>
                            <td>1200</td>
                        </tr>
                        <tr>
                            <td>2</td>

                            <td>whdcks_</td>
                            <td>안녕하세요.</td>
                            <td>1123</td>
                        </tr>


                    </tbody>
                </Table>
            </Container>
            <StickyFooter />
        </>
    );
}