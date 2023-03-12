import React from 'react'
import { useLoaderData} from 'react-router-dom'

function CareerDetails() {

    const career = useLoaderData()
  return (
    <div className='career-details'>
        <h2>
            Career Details for {career.title}
        </h2>
        <p>
            Starting Salary {career.salary}
        </p>
        <p>
            Starting Salary {career.location}
        </p>
        <p>
            Lorem ipsium
        </p>
    </div>
  )
}


export const careerDetailsLoader=async({params})=>{
    const{id}=params

    const res= await fetch('http://localhost:4000/careers/' + id)

    if(!res.ok){
        throw Error ('Could not find that career')
    }
    return res.json()
}
export default CareerDetails