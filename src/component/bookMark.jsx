import React from "react"

const BookMark = (props) => {
    
    const Switch = (state) => {
        console.log(props.bookmark)
        return state? 'bi bi-toggle-on': 'bi bi-toggle-off'
    } 

    return(
        <button 
            className="btn"
            onClick={props.onToggle}
        >
            <i className={Switch(props.bookmark)}></i>
        </button>
    )
}

export default BookMark