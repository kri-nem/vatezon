import { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import UsersTable from '../components/UsersTable'
import { fetchUsers } from '../fetches.js'


export default function AdminPage () {

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchUsers()
      .then(res => res.json())
      .then((data) => {
        console.log(data)
        setLoading(false)
        setUsers(data)
      })
  }, [])

  if (loading) {
    return <Loading/>
  }

  return (<UsersTable users={users}/>)
}