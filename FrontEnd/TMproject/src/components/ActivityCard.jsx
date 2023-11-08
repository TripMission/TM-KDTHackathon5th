import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ActivityCard({ src, title, content }) {
    const navigate = useNavigate();
    const nav = () => {
        navigate('/Camera'); //도전과제 사진 찍는 페이지로 넘어감
    };
    return (
        <Card style={{ width: '100%' }}>
            {/* <Card.Img style={{ objectFit: "cover" }} variant="top" src={src} /> */}
            <StyledImg src={src}></StyledImg>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{content}</Card.Text>
                <br />
                <Button variant="danger" onClick={nav}>
                    {'도전하기'}
                </Button>
            </Card.Body>
        </Card>
    );
}

const StyledImg = styled.img`
    width: 100%;
    aspect-ratio: auto;
    object-fit: contain;
`;
