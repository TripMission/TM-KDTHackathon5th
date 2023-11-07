import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { THEME } from '../constants/colors';
import { HomeIcon, ActivityIcon, ProfileIcon } from './Icons';
import usePath from '../hooks/usePath';
import useLoading from '../hooks/useLoading';
import React from 'react';

export default function Footer({ hasFooter }) {
    const navigate = useNavigate();
    const { getNthPath } = usePath();
    const { load, endLoad } = useLoading();

    if (!hasFooter) return null;

    return (
        <Main>
            <FooterItem onClick={() => navigate('/Main')} selected={getNthPath(1) === 'Main'}>
                <HomeIcon />
                메인
            </FooterItem>
            <FooterItem
                onClick={() => {
                    load();
                    setTimeout(() => {
                        endLoad();
                        navigate('/SubPage');
                    }, Math.random() * 300 + 300);
                }}
                selected={getNthPath(1) === 'SubPage'}
            >
                <ActivityIcon />
                지역
            </FooterItem>
            <FooterItem
                onClick={() => {
                    load();
                    setTimeout(() => {
                        endLoad();
                        navigate('/MyPage');
                    }, Math.random() * 300 + 300);
                }}
                selected={getNthPath(1) === 'MyPage'}
            >
                <ProfileIcon />
                마이홈
            </FooterItem>
        </Main>
    );
}

const Main = styled.footer`
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    height: 5rem;

    position: fixed;
    z-index: 100000;
    left: 0;
    right: 0;
    bottom: 0px;
    background-color: white;
    border-radius: 10px 10px 0 0;
    box-shadow: 0 -4px 36px rgba(0, 0, 0, 0.07);
`;

const FooterItem = styled.button`
    text-align: center;
    border: none;
    background: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: 3rem;
    gap: 4px;
    font-size: 0.9rem;
    color: ${(p) => (p.selected ? THEME.darker : THEME.black400)};
`;
