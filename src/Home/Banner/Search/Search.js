import React ,{useState}from 'react'
import "./Search.css"
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css"; 
import Button from '@material-ui/core/Button';
import {DateRangePicker} from "react-date-range"

function Search() {
    const [startDate,setStartDate]=useState(new Date())
    const [endDate,setEndDate]=useState(new Date())

    const selectionRange={
        startDate:startDate,
        endDate: endDate,
        key :'selection',
    };
    const handleSelect=(ranges)=>{ 
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    return (
        <div className="search">
            <DateRangePicker 
                ranges={
                    [selectionRange]
                }
                onchange={handleSelect}
                className="search__DatePicker"
            />
            <h2>No of Guests </h2>  
            <input  min={0} defaultValue={2} type="number"/>
            <Button>Search Airbnb</Button>
        </div>
    )
}

export default Search
