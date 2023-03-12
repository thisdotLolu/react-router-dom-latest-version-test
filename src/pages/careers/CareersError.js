import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const CareersError = () => {
    const error = useRouteError();
  return (
    <div className='careers-error'>CareersError
    <h2>Error</h2>
    <p>{error.message}</p>
    <Link to='/'>Home</Link>
    </div>
  )
}

export default CareersError;