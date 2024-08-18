import img1 from '../../../assets/Images/LoginImg/signup2.png'

const Bio = () => {
  return (
    <div>
              <div className='mt-2 flex flex-col bg-[#b5ab58] '>

{/*Profile pic*/}
<div className=' flex justify-center mt-2 '>
  <div className=' rounded-full w-28 h-28 text-center  '>
    <img src={img1} className='rounded-full w-28 h-28 ' />
  </div>
</div>

{/* Description */}

<div className='flex flex-col justify-center mt-2 space-y-2 border-b-4 border-b-[#f9f1cb] pb-3'>
  <div className='text-center text-2xl font-serif font-semibold text-[#f9f1cb]'>
    Name
  </div>

  <div className='text-center text-[#4a4737] text-pretty'>
    Description of the User or Details about the user
  </div>
</div>


{/*Followers and Following contents */}
<div className='grid grid-cols-3 justify-items-center text-center mt-6 mb-5'>
    <div className=''>
      <div>
        0
      </div>
      
      <div>
        Posts
      </div>
    </div>

    <div className=''>
      <div>
        0
      </div>

      <div>
        Followers
      </div>
    </div>

    <div className=''>
      <div>
        0
      </div>

      <div>
        Following
      </div>
    </div>

</div>
</div>

    </div>
  )
}

export default Bio
