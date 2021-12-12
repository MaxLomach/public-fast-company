import React,{ useState } from "react"
import API from "../API"

const BookMark = (props) => {
    const [users, setUsers] = useState(API.users.fetchAll())
    const State = (id) => {
        const newBookmark = (users.map(element => {
            if (element._id === id) 
                if(element.bookmark === true)
                    {element.bookmark = false}
                else
                    {element.bookmark = true}
                
            return element
        }))

        setUsers(newBookmark)
    }

    const Switch = (state) => {
        let StyleBookmark = 'on'
        if (state === true) {
            StyleBookmark = 'on'
        }
        else {
            StyleBookmark = "off"
        }
        return(
            
            <i className={`bi bi-toggle-${StyleBookmark}`}></i>
        ) 
    } 

    return(
    <button 
        className="btn"
        onClick={() => State(props._id)}
    >
        {Switch(props.bookmark)}
    </button>
    )
}

export default BookMark