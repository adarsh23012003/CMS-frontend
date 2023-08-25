import React, { useState } from 'react'
import { formInstance } from '../Axios/axiosConfig'

const UploadPdf = () => {
  const [UploadFile, setUploadFile] = useState()
  const submitFileData = async () => {
    let formData = new FormData()
    formData.append('pdf', UploadFile)
    const res = await formInstance
      .post('/subject/upload', formData)
      .then((res) => {
        console.log(res)
        alert('PDF uploaded successfully')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className='flex justify-center items-center h-[600px]'>
      <div className='border-2 border-gray-300 bg-gray-300 w-72 h-auto  p-10 rounded-md'>
        <div className=''>
          <h1 className='text-blue-600 font-bold text-center text-xl'>
            Upload Your PDF
          </h1>
          <input
            className='mt-5'
            type='file'
            name='file'
            onChange={(e) => {
              setUploadFile(e.target.files[0])
            }}
          />
          <button
            className='text-center mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            onClick={() => {
              submitFileData()
            }}
          >
            Upload File
          </button>
        </div>
      </div>
    </div>
  )
}

export default UploadPdf
