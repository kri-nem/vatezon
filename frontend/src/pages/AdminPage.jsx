import { useEffect, useState } from "react"
import Loading from "../components/Loading"

function fetchUsers () {
    return fetch("/api/admin/users").then(res => res.json())
}

export default function AdminPage () {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUsers()
            .then((data) => {
                setLoading(false);
                setUsers(data)
            });
    }, []) 

    if(loading){
        return <Loading/> 
    }

    return (
        <>
            <div className="users-list" id="users-list"> 
                <table>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th />
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.username}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}