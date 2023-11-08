import Layout from '../components/Layout';
import styled, { css } from 'styled-components';
import { THEME } from '../constants/colors';
import React from 'react';
import ActivityCard from '../components/ActivityCard';
import { Desktop, Mobile } from '../hooks/useMideaQuery';

export default function SubPage() {
    const data = [
        {
            title: '달성공원',
            content: '대구광역시 중구 달성공원로 35 (달성동)에 있는 공원입니다.',
            src: '././img/daegu2.jpg',
        },
        {
            title: '동대구역',
            content: '경부선과 경전선, 경부고속선의 철도역입니다.',
            src: '././img/daegu1.jpg',
        },
        {
            title: '김광석거리',
            content: '대구광역시 중구 대봉동에 위치한 골목 겸 관광지입니다.',
            src: '././img/daegu3.jpg',
        },
    ];
    return (
        <>
            <Desktop>
                <Layout title="도/시 페이지" hasBackButton>
                    <Wrapper>
                        <StyledH1>대구시</StyledH1>
                        <ImgWrapper>
                            <Image src="img/tourguide_kor02.png" />
                        </ImgWrapper>
                        <RowWrapper>
                            <div class="container text-center">
                                <div class="row row-cols-2 g-3">
                                    {data.map((e) => {
                                        return (
                                            <>
                                                <div class="col-sm-4">
                                                    <ActivityCard src={e.src} title={e.title} content={e.content} />
                                                </div>
                                            </>
                                        );
                                    })}
                                </div>
                            </div>
                        </RowWrapper>
                    </Wrapper>
                    <footer class="footer">
                        <p>All rights reserved. @KT Aivle 소확행</p>
                    </footer>
                </Layout>
            </Desktop>
            <Mobile>
                <div>모바일이에옹</div>
            </Mobile>
        </>
    );
}
const Wrapper = styled.div`
    padding: 2rem 3rem;
`;
const ImgWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
`;
const RowWrapper = styled.div`
    margin: 1.5em;
`;
const StyledH1 = styled.h1`
    font-size: 3rem;
    color: ${THEME.primary};
    margin-bottom: 1.1rem;
`;
const Image = styled.img`
    width: 70%;
    height: 60%;
    border-radius: 20px;

    box-shadow: 0 -4px 36px rgba(0, 0, 0, 0.07);
`;
const Li = styled.li`
    margin: 0.3em;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Btn = styled.button`
    width: 30%;
    background: transparent;
    border-radius: 3px;
    border: 2px solid #bf4f74;
    color: #bf4f74;
    margin: 0.5em 1em;
    padding: 0.25em 1em;
    font-size: 100%;
`;
