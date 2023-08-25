import React, { useState } from 'react'
import { useEffect } from 'react'
import { instance } from '../Axios/axiosConfig'
import { AiOutlineFilePdf } from 'react-icons/ai'

const GetMyPdf = () => {
  const [myPdf, setMyPdf] = useState([])

  useEffect(() => {
    function getMyPdf() {
      instance
        .get('/subject/allPDF')
        .then((res) => {
          setMyPdf(res.data.pdf)
          // console.log(res.data.pdf)
        })
        .catch((error) => {
          console.log(error)
        })
    }
    getMyPdf()
  }, [])

  return (
    <>
      <div className='h-[550px] flex justify-center items-center'>
        {myPdf?.map((element, i) => {
          return (
            <div className='grid grid-cols-4  gap-4' key={i}>
              <a href={element.pdf} target='_blank' className=''>
                <AiOutlineFilePdf className='h-14 w-14 bg-gray-300 text-red-400' />
                {/* {console.log(element)} */}
              </a>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default GetMyPdf
