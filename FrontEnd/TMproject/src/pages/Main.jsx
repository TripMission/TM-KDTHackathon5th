import React from 'react';
import './Main.css';
import Footer from '../components/Footer'
import Header from '../components/Header'
import RegionButton from '../components/RegionButton.jsx'
import Layout from "../components/Layout";
import { GEOLOCATIONOPTIONS } from '../components/GeolocationConst.js';
import geolocationSuccess from '../components/GeolocationConst.js';

class Main extends React.Component {
  render() {
    
    function error(err) {
      console.log(err)
    }

    navigator.geolocation.getCurrentPosition(geolocationSuccess, error, GEOLOCATIONOPTIONS);

    return (
        <div className = 'wrap'>
          <div>
          </div>
          <Layout title="메인 페이지" hasBackButton>
           <div className = 'main'>
            <div style={{fontFamily: '"Noto Sans KR", sans-serif'}} className = 'geoSelect'>지역을 선택해주세요</div>
            <div style={{fontFamily: '"Noto Sans KR", sans-serif'}} className = 'geoRecommendSelect'>추천받고 싶은 지역을 선택하세요</div>
            <div className = 'mainPanel'>
              <RegionButton></RegionButton>
            </div>
           </div>
           <Footer hasFooter={true} />
           </Layout>

        </div>
    );
  }
}

export default Main;