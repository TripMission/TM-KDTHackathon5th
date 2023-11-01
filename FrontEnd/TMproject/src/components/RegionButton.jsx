import React from 'react'
// import regionName from './image'
import logo1 from './image/1.jpg'
import logo2 from './image/2.jpg'
import logo3 from './image/3.jpg'
import logo4 from './image/4.jpg'
import logo5 from './image/5.jpg'
import logo6 from './image/6.jpg'
import logo7 from './image/7.jpg'
import logo8 from './image/8.jpg'
import logo9 from './image/9.png'
import logo10 from './image/10.jpg'
import logo11 from './image/11.jpg'
import logo12 from './image/12.jpg'
import logo13 from './image/13.jpg'
import logo14 from './image/14.jpg'
import logo15 from './image/15.jpg'
import logo16 from './image/16.jpg'
import logo17 from './image/17.jpg'

export default function RegionButtonList(){
    const rendering = () => {
        const result = []
        const regionName = ['서울','경기','인천','강원','충남','충북','대전','세종','경남','경북','대구','울산','부산','전남','전북','광주','제주']
        const urlImageList = [logo1,logo2,logo3,logo4,logo5,logo6,logo7,logo8,logo9,logo10,logo11,logo12,logo13,logo14,logo15,logo16,logo17]
        // for(let i = 1; i < regionName.length+1;i++){
        //     urlImageList.push('./image/'+ i+'.jpg')
        //     print('./image/'+ i+'.jpg')
        // }
        
        for(let i = 0; i < regionName.length;i++){
            result.push(<RegionButton key={i} src={urlImageList[i]} region={regionName[i]}/>
            )
        }
        return result
    }
    return(
        <div>
            {rendering()}
        </div>

    )
    
}
class RegionButton extends React.Component{
    constructor(props){
        super(props)
        this.src= props.src
        this.region = props.region
    }

    
    render() {
        const containerStyle = {
            position: 'relative',
        };

        const overlayStyle = {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(255, 255, 255, 0)',
        };

        const imgStyle = {
            filter: 'brightness(80%)',
        };
        const textStyle = {
            color: 'white',
            fontSize : '2rem',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1, 
        };

        return (
            <a href='http://localhost:3001/subpage'>
                <button onTouchStart={this.RegionHoverHandler} className="custom-btn btn-3" style={containerStyle}>
                    <div style={overlayStyle}></div>
                    <img src={this.src} style = {imgStyle} alt={this.region} />
                    <div style={textStyle}>{`${this.region}`}</div>
                </button>
            </a>
        );
    }
}