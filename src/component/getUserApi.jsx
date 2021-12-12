import React,{useState} from 'react'
import BookMark from './bookMark'
import API from '../API'
import '../index.css'

const GetUserApi = () => {
    const [users, setUsers] = useState(API.users.fetchAll())

    const handleDelId = (id) => {
    setUsers(users.filter(users => users._id !== id))
    }
    
    const createTableHTML = users.map(user => {

        const newState = () => {
            const newBookmark = (users.map(element => {
                if (element._id === user._id) {
                    if(element.bookmark === true)
                        {element.bookmark = false}
                    else
                        {element.bookmark = true}
                }
                return element
            }))
            setUsers(newBookmark)
        }

        const GetQualities = () => {
            return (
             user.qualities.map(qualities => 
                <span 
                    className={`mx-1 badge bg-${qualities.color}`}
                >
                    {`${qualities.name} `}
                </span>)
            )
        }

        return (
        <tr>
            <td>{user.name}</td>
            <td>{GetQualities()}</td>
            <td>{user.profession.name}</td>
            <td>{user.completedMeetings}</td>
            <td>{user.rate}</td>
            <td>
                <BookMark
                onToggle={newState}
                {...user}
                />
            </td>
            <td>
                <button 
                    className='btn btn-info btn-sm float-end' 
                    onClick = {() => handleDelId(user._id)}
                >
                     Dellete
                </button>    
            </td>
        </tr>
        )
    })
    return createTableHTML
}

export default GetUserApi