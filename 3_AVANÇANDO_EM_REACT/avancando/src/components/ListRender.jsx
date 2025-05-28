import React from 'react'
import { useState } from 'react'

const ListRender = () => {

    const [list] = useState(["Luan", "Luna", "Lady"]);

    const [users, setUsers] = useState([
        {id: 1, name: "Luan", age: 20},
        {id: 2, name: "Lady", age: 20},
        {id: 3, name: "Luna", age: 0},
    ])

    return (
        <div>
            {/* 4 - render sem key*/}
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            {/* 5 - render com key*/}
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.age}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListRender