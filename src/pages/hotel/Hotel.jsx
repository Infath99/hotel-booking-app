
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import './hotel.css'
import MailSection from '../../components/mailComponent/MailSection'
import Footer from '../../components/footer/Footer'

function Hotel() {

  const hotel = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJaoZWbyEpQ_TXkBM-eRg4AyMAtvqD5P8sXg&usqp=CAU"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdkl09C6Ti5Lrho7nsdxWA9BYdTgDmz6O2Aw&usqp=CAU"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPnt3730CF1ww0wN4Rpx80Srt9x1OURUDbzA&usqp=CAU"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtGp2sLaDzmCIb1tDVrOEwKq80YhbGJClwJQ&usqp=CAU"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDjfQ35Gy2MFdYnHPW3C_Lvc58N5zL9wcwww&usqp=CAU"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdkl09C6Ti5Lrho7nsdxWA9BYdTgDmz6O2Aw&usqp=CAU"
    }
  ]


  return (
    <div>
      <NavBar />
      <Header type="list" />

      <div className="hotelContainer">
        <div className="hotelWarapper">
          <button className='bookNow'>Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>

          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton st 125 NewYork</span>
          </div>

          <span className='hotelDistance'>Excellent Location - 500m from center</span>
          <span className='hotelPrice'>Book a stay $114 at this property and get a free airpot taxi</span>

          <div className="hotelImages">
            {
              hotel.map((data, index) => (
                <div className="hotelImgWarraper" key={index}>
                  <img src={data.src} className="hotelImg" />
                </div>
              ))
            }
          </div>

          <div className="hotelDetails">

            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Karakow</h1>
              <p className='hotelDesc'>A hotel is an establishment that provides paid lodging on a short-term basis. Facilities provided inside a hotel room may range from a modest-quality mattress in a small room to large suites with bigger, higher-quality beds, a dresser, a refrigerator and other kitchen facilities, upholstered chairs, a flat screen television, and en-suite bathrooms. Small, lower-priced hotels may offer only the most basic guest services and facilities. Larger, higher-priced hotels may provide additional guest facilities such as a swimming pool, business centre (with computers, printers, and other office equipment), childcare, conference and event facilities, tennis or basketball courts, gymnasium, restaurants, day spa, and social function services. Hotel rooms are usually numbered (or named in some smaller hotels and B&Bs) to allow guests to identify their room. Some boutique, high-end hotels have custom decorated rooms. Some hotels offer meals as part of a room and board arrangement. In Japan, capsule hotels provide a tiny room suitable only for sleeping and shared bathroom facilities.</p>
            </div>

            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>Located in the real heart of karakow, this propthy has an excellent location score of 9.8</span>
              <h2><b>$945</b>(9 nights)</h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailSection />
        <Footer />
      </div>
    </div>
  )
}

export default Hotel
