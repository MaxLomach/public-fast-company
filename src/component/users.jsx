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
                    <button 
                        key={_id}
                        className='btn btn-info btn-sm float-end' 
                        onClick = {() => handleDelId(user._id)}
                    >
                        {_id} Dellete
                    </button>    
                </td>
            </tr>
            )
        })
        return createTableHTML
    }
    
    return (
        <>
        <span></span>
        <table className="table table-hover bg-success bg-opacity-25">
            <thead className="text-center bg-success bg-opacity-50">
                <tr>
                <th scope="col">Имя</th>
                <th scope="col">Качества</th>
                <th scope="col">Профессия</th>
                <th scope="col">Встретился(раз)</th>
                <th scope="col">Оценка</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody className="text-center">
                {GetUserApi()}
            </tbody>
        </table>
        </>
    )
} 

export default Users