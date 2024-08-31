/* eslint-disable react/prop-types */
 import { useNavigate } from 'react-router-dom';
import { Badge } from './ui/badge'
// eslint-disable-next-line no-unused-vars
import React from 'react'

const LatestJobCards = ({job}) => {
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/description/${job._id}`) } className='p-5 rounded-md shadow-xl bg-white border-gray-100 cursor-pointer'>
        <div>
        <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
        <p className='text-sm text-gray-500'>India</p>
        </div>
        <div>
            <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
            <p className='text-sm text-gray-600'>{job?.description}</p>
        </div>
        <div className='flex items-center gap-2 mt-4'>
            <Badge className={'text-blue-700 bg-white font-bold'}>{job?.position}</Badge>
            <Badge className={'text-[#F83002] bg-white font-bold'}>{job?.jobType}</Badge>
            <Badge className={'text-[#7209b7] bg-white font-bold'}>{job?.salary}LPA</Badge>
        </div>
    </div>
  )
}

export default LatestJobCards