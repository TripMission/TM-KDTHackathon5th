import Layout from "../components/Layout";
import styled from "styled-components";
import { THEME } from "../constants/colors";
import React from 'react';

export default function SubPage() {
    return (
        <Layout title="도/시 페이지" hasBackButton>
            <Wrapper>
                <StyledH1>대구시</StyledH1>
            </Wrapper>

        </Layout> 
    )
}
const Wrapper = styled.div`
  padding: 2rem 3rem;
`;
const StyledH1 = styled.h1`
  font-size: 3rem;
  color: ${THEME.primary};
  margin-bottom: 1.1rem;
`;