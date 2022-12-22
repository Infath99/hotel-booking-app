import React from 'react'
import './featured.css'


const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img src='https://www.pandotrip.com/wp-content/uploads/2018/03/Colosseum-in-Rome-at-sunrise.jpg' alt='Image1' className='featuredImg' />
                <div className='featuredTitles'>
                    <h1>Colosseum, Italy</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src='https://www.pandotrip.com/wp-content/uploads/2018/03/View-of-the-Sydney-Harbour-with-some-ferries-passing-by-Sydney-Opera-House.jpg' alt='Image6' className='featuredImg' />
                <div className='featuredTitles'>
                    <h1>Opera House,Australia</h1>
                    <h2>123 properties</h2>
                </div>

            </div>

            <div className="featuredItem">
                <img src='https://www.pandotrip.com/wp-content/uploads/2018/03/The-Great-Wall-of-China-during-sunset.jpg' alt='Image3' className='featuredImg' />
                <div className='featuredTitles'>
                    <h1>Wall of China, China</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
        </div>
    )
}

export default Featured

