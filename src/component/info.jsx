import React,{useState} from "react"
import API from "../API"

const Info = () => {
    const [users] = useState(API.users.fetchAll())

    const styles = 'badge bg-info text-dark my-3 d-block'
    return users.length === 0?
        <h1><span className={`${styles} bg-danger`}>Нет ни кого!</span></h1>:
        users.length === 1?
        <h1><span className={styles}>{`${users.length} человек проведёт с тобой время`}</span></h1>:
        users.length === 2 || users.length === 3 || users.length === 4?
        <h1><span className={styles}>{`${users.length} человека проведёт с тобой время`}</span></h1>:
        <h1><span className={styles}>{`${users.length} человек проведут с тобой время`}</span></h1>
}

export default Info