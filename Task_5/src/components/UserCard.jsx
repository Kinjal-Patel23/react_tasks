const UserCard = ({ user }) => {
  return (
    <div className='relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300'>
      <div className='h-20 bg-linear-to-r from-indigo-500 to-purple-500 rounded-t-2xl'></div>

      <div className='absolute top-10 left-6'>
        <div className='w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md'>
          <span className='text-2xl font-bold text-indigo-600'>
            {user.name.charAt(0)}
          </span>
        </div>
      </div>

      <div className='pt-14 px-6 pb-6'>
        <h2 className='text-xl font-semibold text-gray-800 mb-1'>
          {user.name}
        </h2>
        <p className='text-sm text-gray-500 mb-4'>@{user.username}</p>

        <div className='space-y-2 text-sm text-gray-600'>
          <p>
            <span className='font-medium'>Email:</span> {user.email}
          </p>
          <p>
            <span className='font-medium'>Phone:</span> {user.phone}
          </p>
          <p>
            <span className='font-medium'>Website:</span> {user.website}
          </p>
          <p>
            <span className='font-medium'>Address:</span> {user.address.street},{' '}
            {user.address.city}, {user.address.zipcode}
          </p>
          <p className='pt-2 font-medium text-indigo-600'>
            {user.company.name}
          </p>
        </div>
      </div>
    </div>
  )
}

export default UserCard
