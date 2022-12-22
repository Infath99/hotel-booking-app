import React from 'react'
import './featuredProperties.css'

const FeaturedProperties = () => {
    return (
        <div className="FeaturedProperties">
            <div className="FeaturedPropertiesItem">
                <img src='https://www.fivestaralliance.com/files/fivestaralliance.com/field/image/nodes/2018/46282/0_EXTERIOR-G.jpg' alt='image1' className='FeaturedPropertiesImg' />
                <span className="FeaturedPropertiesName">Shangri la hotel</span>
                <span className="FeaturedPropertiesCity">Colombo</span>
                <span className="FeaturedPropertiesPrice">Starting from $100</span>
                <div className="FeaturedPropertiesRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>

            <div className="FeaturedPropertiesItem">
                <img src='https://www.dailynews.lk/sites/default/files/news/2020/10/24/hilton.jpg' alt='image1' className='FeaturedPropertiesImg' />
                <span className="FeaturedPropertiesName">Hilton hotel</span>
                <span className="FeaturedPropertiesCity">Colombo</span>
                <span className="FeaturedPropertiesPrice">Starting from $100</span>
                <div className="FeaturedPropertiesRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>

            <div className="FeaturedPropertiesItem">
                <img src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/0c/0c/e9/hotel-exterior.jpg?w=700&h=-1&s=1' alt='image1' className='FeaturedPropertiesImg' />
                <span className="FeaturedPropertiesName">Galle Face hotel</span>
                <span className="FeaturedPropertiesCity">Colombo</span>
                <span className="FeaturedPropertiesPrice">Starting from $100</span>
                <div className="FeaturedPropertiesRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>

            <div className="FeaturedPropertiesItem">
                <img src='https://cf.bstatic.com/xdata/images/hotel/max1024x768/80043638.jpg?k=e71cfeccccd35d54ba5272323e199a217e11133c087a6895112571490da6acdd&o=&hp=1' alt='image1' className='FeaturedPropertiesImg' />
                <span className="FeaturedPropertiesName">Galadari hotel</span>
                <span className="FeaturedPropertiesCity">Colombo</span>
                <span className="FeaturedPropertiesPrice">Starting from $100</span>
                <div className="FeaturedPropertiesRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProperties
