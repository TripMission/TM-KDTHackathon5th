import React from 'react';
import './Main.css';
import Footer from '../components/Footer'
import Header from '../components/Header'
import RegionButton from '../components/RegionButton.jsx'
import Layout from "../components/Layout";
import { GEOLOCATIONOPTIONS } from '../components/GeolocationConst.js';
import Kakao from '../components/Maps.jsx';
import { Desktop, Mobile } from '../hooks/useMideaQuery';

class Main extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      nowLocation: null,
      nowPosition: null,
      isLoading: true
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      this.geolocationSuccess,
      this.geolocationError,
      GEOLOCATIONOPTIONS
    );


  }

  geolocationSuccess = (pos) => {
    const crd = pos.coords;

    this.setState({
      nowLocation: crd,
      isLoading: false
    });

    var geocoder = new kakao.maps.services.Geocoder();
    geocoder.coord2RegionCode(crd.longitude,crd.latitude, this.kakaoMapRegionResult)
  }

  kakaoMapRegionResult = (result,status) =>{
    this.setState({
      nowPosition : result[0]['address_name']
    })

    console.log(result[0])
  }
  


  geolocationError = (err) => {
    console.error(err);
    this.setState({
      isLoading: false
    });
  }

  render() {
    const { nowLocation, nowPosition, isLoading } = this.state;
  
    return (
      <>
      <Desktop>
        <div className='wrap'>
          <div>
          </div>
          <Layout title="메인 페이지" hasBackButton>
            {isLoading && <div>Loading...</div>}
            {!isLoading && (
              <div className='main'>
                <div style={{ fontFamily: '"Noto Sans KR", sans-serif' }} className='geoSelect'>지역을 선택해주세요</div>
                <div style={{ fontFamily: '"Noto Sans KR", sans-serif' }} className='geoRecommendSelect'>추천받고 싶은 지역을 선택하세요</div>
                <div style={{ fontFamily: '"Noto Sans KR", sans-serif' }} className='geoRecommendSelect'>위치 : {`${nowPosition}`}</div>              
                <div className='mainPanel'>
                  <RegionButton></RegionButton>
                </div>
              </div>
            )}
            <Footer hasFooter={true} />
          </Layout>
        </div>
      </Desktop>
      <Mobile>
      <div className='wrap'>
          <div>
          </div>
          <Layout title="메인 페이지" hasBackButton>
            {isLoading && <div>Loading...</div>}
            {!isLoading && (
              <div className='mainMobile'>
                <div style={{ fontFamily: '"Noto Sans KR", sans-serif' }} className='geoSelect'>지역을 선택해주세요</div>
                <div style={{ fontFamily: '"Noto Sans KR", sans-serif' }} className='geoRecommendSelect'>추천받고 싶은 지역을 선택하세요</div>
                <div style={{ fontFamily: '"Noto Sans KR", sans-serif' }} className='geoRecommendSelect'>위치 : {`${nowPosition}`}</div>              
                <div className='mainPanel'>
                  <RegionButton></RegionButton>
                </div>
              </div>
            )}
            <Footer hasFooter={true} />
          </Layout>
        </div>
      </Mobile>
      </>
    );
  }
}

export default Main;