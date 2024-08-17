// import loadereffect from '../loadereffect';
import NavBar from '../NavBar/NavBar'

const Profile = () => {
  return (
    <div>
      <NavBar />
      <div className='mt-2 flex flex-col bg-[#b5ab58] '>

        {/*Profile pic*/}
        <div className=' flex justify-center mt-2'>
          <div className='border-2 rounded-full w-20 h-20 text-center mb-4'>
          Profile Picture
          </div>
        </div>

        {/*Followers and Following contents */}
        <div className='grid grid-cols-3 justify-items-center mt-6 mb-5'>
            <div className=''>
              Posts
            </div>
            <div className=''>
              followers
            </div>

            <div className=''>
              following
            </div>

        </div>
      </div>
    </div>
  )
}

export default Profile;
