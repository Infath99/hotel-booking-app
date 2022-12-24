import './searchList.css'
import React, { useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Header from '../../components/Header/Header'
import { useLocation } from 'react-router-dom'
import { format } from "date-fns"
import { DateRange } from 'react-date-range'
import ResultItem from '../../components/resultItem/ResultItem'


function SearchList() {

  const location = useLocation()
  console.log(location);

  const [Destination, setDestination] = useState(location.state.Destination)
  const [date, setDate] = useState(location.state.date)
  const [options, setOptions] = useState(location.state.options)

  const [openDate, setOpenDate] = useState(false)




  return (
    <div>
      <NavBar />
      <Header type="list" />

      <div className="searchListContainer">
        <div className="searchListWrapper">

          <div className="searchList">
            <h1 className="listSearchTitle">Search</h1>


            <div className="listSearchItem">
              <label>Destination :</label>
              <input type="text" placeholder={Destination} />
            </div>

            <div className="listSearchItem">
              <label>Check-In Date :</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>

              {openDate && <DateRange
                onChange={(item) => setDate([item.selection])}
                minDate={new Date()}
                ranges={date}
              />}
            </div>

            <div className="listSearchItem">
              <label>Options :</label>

              <div className="listOption">

                <div className="listOptionItem">
                  <span className="listOptionText">Min price <small>per night</small></span>
                  <input type="number" className="listOptionInput" />
                </div>

                <div className="listOptionItem">
                  <span className="listOptionText">Max price <small>per night</small></span>
                  <input type="number" className="listOptionInput" />
                </div>

                <div className="listOptionItem">
                  <span className="listOptionText">Adult</span>
                  <input type="number" className="listOptionInput" placeholder={options.adult} min={1} />
                </div>

                <div className="listOptionItem">
                  <span className="listOptionText">Children</span>
                  <input type="number" className="listOptionInput" placeholder={options.children} min={0} />
                </div>

                <div className="listOptionItem">
                  <span className="listOptionText">Room</span>
                  <input type="number" className="listOptionInput" placeholder={options.room} min={1} />
                </div>

              </div>
            </div>
            <button>Search</button>
          </div>

          <div className="listResults">
            <ResultItem />
            <ResultItem />
            <ResultItem />
            <ResultItem />
            <ResultItem />
            <ResultItem />
            <ResultItem />
            <ResultItem />
            <ResultItem />
            <ResultItem />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchList
