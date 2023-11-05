import React from "react";
import { useState } from "react";

import "./MyPage.css";
import "../components/Header.jsx";

import AppBarHeader from "../components/AppBarHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";

import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Accordion from '@mui/material/Accordion';

// import Stack from '@mui/material/Stack';

function ProdListItem({imgNo, name}) {
  return (
    <>
      <div class="list-item">
        <img src={`https://picsum.photos/id/${imgNo}/400/400`} />
        <div class="item-name">{name}</div>
      </div>
    </>
  );
}

function MyPage() {

  const [completeListVisible, setcompleteListVisible] = useState(false); 

  return (
    <>
      <div class="container">

        <AppBarHeader/>

        <section class="content">
          <div class="info">
            {/* <img src="https://media.bunjang.co.kr/product/233392017_1_1692231420_w360.jpg" alt="profile" /> */}
            <Avatar
              alt="빵빵아옥지얌"
              src="https://i.namu.wiki/i/rZ0vnAMLHqSzt2WHzkJ1bKQ-BIS1B2QENVq-OimxDFghh-PIsebI0MQMZzZIN4BumlOted0v68EmFsNAtwmL9Q.webp"
              sx={{ width: 100, height: 100 }}
            />
            <div class="info-text">
              <h2>빵빵이</h2>
            </div>
          </div>

          <div class="score">
            <Chip label={"점수: 1500"} variant="outlined"  className="!pt-1" />
            {/* <h2>점수</h2> */}
          </div>

          <div class="complete-list">
            <button onClick={() => setcompleteListVisible(!completeListVisible)}>
              완료한 관광지 {completeListVisible ? "^" : "v"}
            </button>
           {
              completeListVisible && (
                <ul>
                  <li>
                    <ProdListItem imgNo={1} name={"관광지 1"} />
                  </li>
                  <li>
                    <ProdListItem imgNo={2} name={"관광지 2"} />
                  </li>
                  <li>
                    <ProdListItem imgNo={3} name={"관광지 3"} />
                  </li>
                  <li>
                    <ProdListItem imgNo={4} name={"관광지 4"} />
                  </li>
                  <li>
                    <ProdListItem imgNo={5} name={"관광지 5"} />
                  </li>
                  <li>
                    <ProdListItem imgNo={6} name={"관광지 6"} />
                  </li>
                </ul>
              )
            }
            
          </div>

        </section>

        <Footer hasFooter={true} />

      </div>

    </>
  );
}

export default MyPage;
