import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Header from '../components/Header';
import StickyFooter from '../components/StickyFooter';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'


const ProblemView = () => {
    const { no } = useParams();
    const markdown =
        `### 상근이의 상근날드
    상근이는 세계 최대 규모의 햄버거 가게 상근날드의 직원입니다. 상근날드의 가장 유명한 메뉴는 Priority_Queue 버거 입니다. Proiorty_Queue버거는 햄버거의 구성 요소 중
    우선순위가 높은 재료부터 먼저 먹을 수 있게 만든 구조의 햄버거 입니다. 상근이는 상근날드의 명예 크루원이기 때문에 리그오브레전드를 좋아합니다.

![5](https://user-images.githubusercontent.com/43310141/215344146-d575f689-67a0-4e9c-bf17-de51dad3347c.gif)

<상근이의 롤 실력 중 발췌>

    `;
    return (
        <>
            <Container component="main" sx={{ mt: 5 }} maxWidth="lg">
                <h1> {no}번 문제</h1>
                <ReactMarkdown children={markdown} />
            </Container>
            <StickyFooter />
        </>
    );
};
export default ProblemView;