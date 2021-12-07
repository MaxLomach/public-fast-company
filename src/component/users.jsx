import React,{useState} from 'react'
import API from '../API'

const Users = () => {
    const [users, setUsers] = useState(API.users.fetchAll())
    console.log(users)

    const handleDelId = (id) => {
        setUsers(users.filter(users => users._id !== id))
    }

    const GetUserApi = (_id) => {
        const createTableHTML = users.map(user => {
            return (
            <tr>
                <td>{user.name}</td>
                {/* <td>{user.p}</td> */}
                <td></td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate}</td>
                <td>
                    <button 
                        key={_id}
                        className='btn btn-info btn-sm float-end' 
                        onClick = {() => handleDelId(user._id)}
                    >
                        {_id} Dellete
                    </button>    
                </td>
            </tr>)
        })
        return createTableHTML
    }
    
    return (
        <>
        
        <table className="table table-bordered">
            <thead>
                <tr>
                <th scope="col">Имя</th>
                <th scope="col">Качества</th>
                <th scope="col">Провфессия</th>
                <th scope="col">Встретился(раз)</th>
                <th scope="col">Оценка</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {GetUserApi()}
            </tbody>
        </table>
        </>
    )
} 

export default Users