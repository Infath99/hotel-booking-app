import React, { useEffect, useRef, useState } from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import { format } from "date-fns"



function Header({ type }) {

    const inputRef = useRef(null)

    useEffect( () => {
        inputRef.current.focus()
    })

    const [openDate, setOpenDate] = useState(false)

    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);


    const [openOption, setOption] = useState(false)

    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })

    const handleOption = (name, operation) => {
        setOptions((prevState) => {
            return {
                ...prevState,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            }
        })
    }


    return (
        <div className="header">
            <div className= {type === "list" ? "headerContainer listMode" : "headerContainer"}>
                <div className="headerList">

                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>

                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>flights</span>
                    </div>

                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car Rentals</span>
                    </div>

                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>

                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport Taxi</span>
                    </div>

                </div>

                { type !== "list" &&
                    <>
                        <h1 className="headerTitle"> A life time of discounts ? It's Genius.</h1>
                        <p className="headerDesc">Get rewaeded for your travels - unlock instant savings of 10% or more with a free Trippy account</p>
                        <button className="headerButton">Sign in / Register</button>

                        <div className="headerSearch">

                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                                <input
                                    type="text"
                                    ref={inputRef}
                                    placeholder='Where are you going ?' className='headerSearchInput'
                                />
                            </div>

                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />

                                <span onClick={() => setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>

                                {openDate && <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    className="date"
                                />}

                            </div>

                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                                <span onClick={() => setOption(!openOption)} className='headerSearchText'>{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>

                                {openOption && <div className="options">

                                    <div className="optionItem">
                                        <span className="optionText">Adult</span>
                                        <div className="optionCounter">
                                            <button className="optionCounterButton" onClick={() => handleOption("adult", "d")} disabled={options.adult < 1}>-</button>
                                            <span className="optionCounterNumber">{options.adult}</span>
                                            <button className="optionCounterButton" onClick={() => handleOption("adult", "i")}>+</button>
                                        </div>
                                    </div>

                                    <div className="optionItem">
                                        <span className="optionText">Children</span>
                                        <div className="optionCounter">
                                            <button className="optionCounterButton" onClick={() => handleOption("children", "d")} disabled={options.children < 1}>-</button>
                                            <span className="optionCounterNumber">{options.children}</span>
                                            <button className="optionCounterButton" onClick={() => handleOption("children", "i")}>+</button>
                                        </div>
                                    </div>

                                    <div className="optionItem">
                                        <span className="optionText">Room</span>
                                        <div className="optionCounter">
                                            <button className="optionCounterButton" onClick={() => handleOption("room", "d")} disabled={options.room < 1}>-</button>
                                            <span className="optionCounterNumber">{options.room}</span>
                                            <button className="optionCounterButton" onClick={() => handleOption("room", "i")}>+</button>
                                        </div>
                                    </div>
                                </div>}
                            </div>

                            <div className="headerSearchItem">
                                <button className='headerButton'>Search</button>
                            </div>

                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Header

