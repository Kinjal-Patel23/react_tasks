import { useEffect, useState } from 'react'
import axios from '../utils/axiosInstance'
import { handleError } from '../utils/errorHandler'
import UserCard from '../components/UserCard'

const Users = () => {
  const [userData, setUserData] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/users')
        setUserData(response.data)
      } catch (error) {
        handleError(error)
      }
    }

    fetchUsers()
  }, [])

  return (
    <div className='min-h-screen bg-linear-to-br from-slate-100 to-slate-200 p-8'>
      <h1 className='text-4xl font-bold text-center mb-12 text-gray-800'>
        User List
      </h1>

      <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
        {userData.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  )
}

export default Users
