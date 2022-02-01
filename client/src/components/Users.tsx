import React from 'react'
import { useGetUserListQuery } from '../reducers/userApi'

const Landing: React.FC = () => {
  const { data, error, isLoading } = useGetUserListQuery(undefined)

  return (
    <div className="p-2">
      <h2 className="text-xl text-blue-600 bold mb-4">Users:</h2>
      {!isLoading &&
        !error &&
        data?.map((user) => (
          <div key={user.name} className="ml-2 hover:text-red-500">
            {user.name}
          </div>
        ))}
    </div>
  )
}
export default Landing
