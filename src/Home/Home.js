import React from 'react'
import "./Home.css";
import Banner from "./Banner/Banner"
import Card from "./Card/Card"
import Thumbnail1 from "../assets/thumbnail1.jpeg"

function Home() {
    return (
        <div className="Home">
               <div className="Home__banner">
                  <Banner />
             </div>
            <div className="Home__section">
                <Card  
                  src={Thumbnail1}
                  title="qeqjjk"
                  description="aslokjo;;lka"
                  price=";ktrfgyu89"
                />
               <Card  
                  src={Thumbnail1}
                  title="qeqjjk"
                  description="aslokjo;;lka"
                  price=";ktrfgyu89"
                />
                 <Card  
                  src={Thumbnail1}
                  title="qeqjjk"
                  description="aslokjo;;lka"
                  price=";ktrfgyu89"
                />
                
            </div>
            <div className="Home__section">
            <Card  
                  src={Thumbnail1}
                  title="qeqjjk"
                  description="aslokjo;;lka"
                  price=";ktrfgyu89"
                />
                 <Card  
                  src={Thumbnail1}
                  title="qeqjjk"
                  description="aslokjo;;lka"
                  price=";ktrfgyu89"
                />
                 <Card  
                  src={Thumbnail1}
                  title="qeqjjk"
                  description="aslokjo;;lka"
                  price=";ktrfgyu89"
                />
            </div>
        </div>
    )
}

export default Home
