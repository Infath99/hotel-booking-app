import React from 'react'
import "./resultItem.css"

const ResultItem = () => {
    return (
        <div className="resultItem">

            <img src='https://www.acaciahotelsmanila.com/wp-content/uploads/2020/09/room-deluxe_70df34c103b85ce7b2b5ff918ab8cf72.jpg'
                alt='Image1'
                className='resultItemImg'
            />

            <div className="resultItemDesc">
                <h1 className="resultItemTitle">Tower Street Apartments</h1>
                <span className="resultItemDistance">500m from center</span>
                <span className="resultItemTaxi">Free airport taxi</span>
                <span className="resultItemsubtitle">Studio Apartment with Air conditioning</span>
                <span className="resultItemsFeatures">Entire studio | 1 bathroom | 21m 1 full Bed</span>
                <span className="resultItemsCancel">Free cancellation</span>
                <span className="resultItemsCancelSubtitle">You can cancel later, so look in this great price today!</span>
            </div>


            <div className="resultItemsDetails">

                <div className="SearchItemRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>

                <div className="searchDetailsTexts">
                    <span className="searchPrice">$123</span>
                    <span className="searchTax">Includes taxes and fees</span>
                    <button className="searchItemCheckButton">See availability</button>
                </div>
            </div>
        </div>
    )
}

export default ResultItem
