import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Header from '../components/Header';
import StickyFooter from '../components/StickyFooter';
import Table from 'react-bootstrap/Table';

export default function Problem() {
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

            <Container component="main" sx={{ mt: 5 }} maxWidth="md">
                <Table striped bordered hover size="sm" >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>stat</th>
                            <th>Name</th>
                            <th>Tag</th>
                            <th>Author</th>
                            <th>Solved</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>-</td>
                            <td>동아리 입단 테스트 #1</td>
                            <td>수학 , 구현 , 그리디</td>
                            <td>@faper</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>-</td>
                            <td>동아리 입단 테스트 #2</td>
                            <td>mics, 넌센스</td>
                            <td>@faper</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>-</td>
                            <td>통기레쓰 우주 해병의 모험</td>
                            <td>DFS</td>
                            <td>@faper</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>-</td>
                            <td>수혁이의 대선</td>
                            <td>네트워크</td>
                            <td>@faper</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>-</td>
                            <td>하늘에서 떨어지는 1, 2, ... L+1 개의 별 </td>
                            <td>그리디</td>
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