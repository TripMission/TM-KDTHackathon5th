import React from 'react'
// import regionName from './image'
import logo from './image/1.jpg'

export default function RegionButtonList(){
    const rendering = () => {
        const result = []
        const regionName = ['서울','경기','인천','강원','충남','충북','대전','세종','경남','경북','대구','울산','부산','전남','전북','광주','제주']
        const urlImageList = []
        for(let i = 1; i < regionName.length+1;i++){
            urlImageList.push('./image/'+ i+'.jpg')
            print('./image/'+ i+'.jpg')
        }
        
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

    RBtnStyle(){
        print(this.props.src)
        return {background : this.props.src}
    }
    render(){
       return(
        <button className="custom-btn btn-3"><img src = {require(this.props.src).default}></img><span>{this.props.region}</span></button>
       ) 
    }
}