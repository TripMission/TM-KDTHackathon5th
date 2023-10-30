import Layout from "../components/Layout";
import styled, { css } from 'styled-components'
import { THEME } from "../constants/colors";
import React from 'react';
import { useNavigate } from "react-router-dom";

export default function SubPage() {

  const navigate=useNavigate();
  const nav=()=>{
    navigate("/?")//도전과제 사진 찍는 페이지로 넘어감
  }

    return (
        <Layout title="도/시 페이지" hasBackButton>
            <Wrapper>
                <StyledH1>대구시</StyledH1>
                <ImgWrapper>
                  <Image src="img/tourguide_kor02.png" />
                </ImgWrapper>
                <RowWrapper>
                  <Li><Button onClick={nav}>동대구역</Button></Li>
                  <Li><Button onClick={nav}>대구공항</Button></Li>
                  <Li><Button onClick={nav}>동성로</Button></Li>
                  <Li><Button onClick={nav}>김광석 거리</Button></Li>
                  <Li><Button onClick={nav}>수성못</Button></Li>
                </RowWrapper>
            </Wrapper>

        </Layout> 
    )
}
const Wrapper = styled.div`
  padding: 2rem 3rem;
`;
const ImgWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  width: 80%;
  height: 80%;
  border-radius: 20px;

  box-shadow: 0 -4px 36px rgba(0, 0, 0, 0.07);
`
const Li = styled.li`
  margin: 0.3em;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Button = styled.button`
  width: 30%;
  background: transparent;
  border-radius: 3px;
  border: 2px solid #BF4F74;
  color: #BF4F74;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  font-size: 1rem;
`;
