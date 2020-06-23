import React from 'react';

import {HomeSection , HomInformation , HomeTitle , HomeInfo , HomeDesc ,Span, HomeBtn} from'./style.js'

const Home =() => {

    return (
        <HomeSection>
            <div className="container">
                <HomInformation>
                    <HomeTitle>Marwan abubakr</HomeTitle>
                    <HomeInfo>Creative Director</HomeInfo>
                    <HomeDesc>
                        Iam a professional <Span>UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </HomeDesc>
                    <HomeBtn>Let's Begin</HomeBtn>
                </HomInformation>
            </div>
        </HomeSection>
    )
}

export default Home;
