import React from 'react'
import './propertyList.css'

const PropertyList = () => {
    return (
        <div className="pList">

            <div className="pListItem">
                <img src="https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg" alt="image1" className="pListImg" />
                <div className="pListTitles">
                    <h1>Hotel</h1>
                    <h2>123 properties</h2>
                </div>
            </div>

            <div className="pListItem">
                <img src="https://teja12.kuikr.com/is/a/c/880x425/public/images/apartments/original_img/k9yqlp.gif" alt="image2" className="pListImg" />
                <div className="pListTitles">
                    <h1>Apartmests</h1>
                    <h2>123 properties</h2>
                </div>
            </div>

            <div className="pListItem">
                <img src="https://cf.bstatic.com/xdata/images/xphoto/max1440/48360698.jpg?k=1949036cc17d7e11e914390f1d3958823e8620aa6ed69e2b3f217794b603dbc5&o=" alt="image1" className="pListImg" />
                <div className="pListTitles">
                    <h1>Resorts</h1>
                    <h2>123 properties</h2>
                </div>
            </div>

            <div className="pListItem">
                <img src="https://media-cdn.tripadvisor.com/media/vr-splice-j/09/1f/7e/d1.jpg" alt="image1" className="pListImg" />
                <div className="pListTitles">
                    <h1>Villas</h1>
                    <h2>123 properties</h2>
                </div>
            </div>

            <div className="pListItem">
                <img src="https://cabinsathickoryridge.com/media/The-Lodge-Spring.jpg" alt="image1" className="pListImg" />
                <div className="pListTitles">
                    <h1>Cabins</h1>
                    <h2>123 properties</h2>
                </div>
            </div>

        </div>
    )
}

export default PropertyList
