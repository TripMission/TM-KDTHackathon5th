import React from "react";

import "./MyPage.css";

function MyPage() {
  return (
    <>
      <div class="container">

        <header>
          <h1>mypage</h1>
        </header>

        <section class="content">
          <div class="info">
            <img src="https://media.bunjang.co.kr/product/233392017_1_1692231420_w360.jpg" alt="profile" />
            <div class="info-text">
              <h2>이름</h2>
            </div>
          </div>

          <div class="score">
            <h2>점수</h2>
          </div>

          <div class="complete-list">
            <h2>완료한 관광지</h2>
            <ul>
              <li>관광지1</li>
              <li>관광지2</li>
              <li>관광지3</li>
              <li>관광지4</li>
            </ul>
          </div>

        </section>

        <footer>
          <h1>푸터?</h1>
        </footer>

      </div>

    </>
  );
}

export default MyPage;
