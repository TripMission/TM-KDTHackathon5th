import Layout from "../components/Layout";
import styled from "styled-components";
import { THEME } from "../constants/colors";
import React from 'react';

export default function SubPage() {
    return (
        <Layout title="도/시 페이지">
            <h1>대구시</h1>
            <ListGroup>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
        </Layout> 
    )
}