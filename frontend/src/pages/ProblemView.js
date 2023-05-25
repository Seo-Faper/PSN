import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Header from '../components/Header';
import StickyFooter from '../components/StickyFooter';
import { useParams } from 'react-router-dom';


export default function ProblemView(props) {
    const { id } = useParams();

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
                <h1> {props.match.no}번 문제</h1>
            </Container>
            <StickyFooter />
        </Box>
    );
}