import { useState } from 'react'
import RegistrationForm from '../components/RegistrationForm'

const Register = () => {
  const [submitData, setSubmitData] = useState(null)

  return (
    <div className='min-h-screen flex flex-col gap-2 items-center justify-center bg-purple-300'>
      <RegistrationForm onSubmit={setSubmitData} />

      {submitData && (
        <div className='ml-8 bg-white p-6 rounded-xl shadow-lg'>
          <h2 className='text-xl font-bold mb-2'>Submitted Data</h2>
          <p>
            <strong>Name:</strong> {submitData.name}
          </p>
          <p>
            <strong>Email:</strong> {submitData.email}
          </p>
          <p>
            <strong>Gender:</strong> {submitData.gender}
          </p>
          <p>
            <strong>Skills:</strong> {submitData.skills.join(', ')}
          </p>
        </div>
      )}
    </div>
  )
}

export default Register
