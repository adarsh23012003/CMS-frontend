import React from 'react'
import { useState } from 'react'
import { instance } from '../../Axios/axiosConfig.jsx'
import { AiOutlineFilePdf } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { getCookie } from '../../Axios/cookieConfig.jsx'

function Home() {
  const [allPdf, setAllPdf] = useState([])
  const token = getCookie('token')
  const search = async () => {
    if (token) {
      const res = await instance.get('subject/')
      const arr = res.data.upload
      setAllPdf(arr)
    }
  }

  return (
    <div className='h-[550px] w-auto'>
      <div className='flex justify-center items-center w-full h-[200px]'>
        <div className='grid grid-cols-3 gap-3 text-center'>
          <div>
            <button
              onClick={search}
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            >
              All PDF
            </button>
          </div>
          <div>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              <Link to='/uploadPdf'>Upload PDF</Link>
            </button>
          </div>
          <div>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              <Link to='/getMyPdf'>My PDF</Link>
            </button>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-4  gap-4 '>
        {allPdf?.map((element, i) => {
          // const { pdf } = element
          return (
            <div key={i}>
              <a href={element.pdf} target='_blank' className=''>
                <AiOutlineFilePdf className='h-14 w-14 bg-gray-300 text-red-400' />
                {/* {console.log(element)} */}
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home
