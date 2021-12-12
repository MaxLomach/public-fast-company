import React,{useState} from 'react'
import API from '../API'
import '../index.css'
import GetUserApi from './getUserApi'
import Info from './info'

const Users = () => {
    const [users] = useState(API.users.fetchAll())

    return  users.length === 0?
            <Info
            {...users}
            />:
        (
        <>
        <Info 
        {...users}
        />
        <table className="table table-bordered table-hover bg-success bg-opacity-25">
            <thead className="text-center bg-success bg-opacity-50">
                <tr>
                <th scope="col">Имя</th>
                <th scope="col">Качества</th>
                <th scope="col">Профессия</th>
                <th scope="col">Встретился(раз)</th>
                <th scope="col">Оценка</th>
                <th scope="col">Избранное</th>
                <th scope="col"></th>
                </tr>
            </thead>
            
            <tbody className="text-center">
                <GetUserApi 
                {...users}
                />
            </tbody>
        </table>
        </>
    )
} 

export default Users