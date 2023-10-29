import React from 'react';
import './Main.css';
import Footer from '../components/Footer'
import Header from '../components/Header'
import RegionButton from '../components/RegionButton.jsx'


class Main extends React.Component {
  render() {
    return (
        <div className = 'wrap'>
          <div>
          </div>
           <div className = 'layout'>
              <h1>Main Page</h1>
           </div>
           <div className = 'main'>
            <div className = 'geoSelect'>지역을 선택해주세용???</div>
            <div className = 'geoRecommendSelect'>추천받고 싶은 지역을 선택하세요</div>
            <div className = 'mainPanel'>
              <RegionButton></RegionButton>
            </div>
           </div>
        </div>
    );
  }
}

export default Main;