import img1 from '../../assets/Images/LoginImg/img-32.png';
import img2 from '../../assets/Images/LoginImg/img-33.png';
import img3 from '../../assets/Images/LoginImg/img-34.png';
import img4 from '../../assets/Images/LoginImg/img-35.png';
import img5 from '../../assets/Images/LoginImg/img-36.png';
import google from '../../assets/Images/IconSvg/google.png';
import apple from '../../assets/Images/IconSvg/apple.png';
import facebook from '../../assets/Images/IconSvg/facebook.png';
import github from '../../assets/Images/IconSvg/github.png';
import microsoft from '../../assets/Images/IconSvg/microsoft.png';

const Login = () => {
  return (
    <div className='flex justify-center items-center min-h-screen bg-gradient-to-r from-[#333300] to-[#333300]'>
      <div className='flex bg-gradient-to-b from-[#534825] to-[#4f4e4a] rounded-3xl shadow-lg max-w-4xl w-full p-8'>
        <div className='grid grid-cols-2 gap-3 size-6/12'>
          <img src={img1} alt='Image 1' className='rounded-lg' />
          <img src={img2} alt='Image 2' className='rounded-lg' />
          <img src={img3} alt='Image 3' className='rounded-lg' />
          <img src={img4} alt='Image 4' className='rounded-lg' />
          <div className='col-span-2 flex justify-center'>
            <img src={img5} alt='Image 5' className='rounded-lg' />
          </div>
        </div>
        <div className='flex-1 flex flex-col justify-center p-8'>
          <div className='text-left mb-6'>
            <h2 className='text-4xl font-semibold text-[#e0e0e0]'>Sign In</h2>
            <h3 className='text-lg text-[#cccccc]'>to your account</h3>
          </div>
          <div className='mb-4'>
            <label className='block text-[#cccccc] pl-1' htmlFor='email'>
              Email Address:
            </label>
            <input
              type='text'
              id='email'
              className='glassmorphism-input mt-1 w-full p-2 border rounded-2xl text-[#e0e0e0] placeholder-[#cccccc] focus:outline-none focus:ring-2 focus:ring-[#e0e0e0]'
              placeholder='Enter Your Email'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-[#cccccc] pl-1' htmlFor='password'>
              Password:
            </label>
            <input
              type='password'
              id='password'
              className='glassmorphism-input mt-1 w-full p-2 border rounded-2xl text-[#e0e0e0] placeholder-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#e0e0e0]'
              placeholder='Enter Your Password'
            />
          </div>
          <div className='mb-4 flex justify-between items-center'>
            <div className='flex items-center'>
              <input type='checkbox' id='remember' name='remember' className='opacity-50 mt-1 mr-1 border rounded-2xl' />
              <label htmlFor='remember' className='text-[#cccccc]'>
                Remember me
              </label>
            </div>
            <a href='#' className='text-[#cccccc] hover:underline'>
              Forget Password
            </a>
          </div>
          <div className='mb-6'>
            <button className='w-full py-2 bg-[#b8a500] text-white rounded-2xl hover:bg-[#e0e0e0] hover:text-[#b8a500] transition duration-200'>
              Sign In
            </button>
            <p className='mt-4 text-center text-[#cccccc]'>or continue with</p>
            <div className='flex justify-center space-x-4 mt-4'>
              <img src={google} alt='Google' className='w-8 h-8' />
              <img src={apple} alt='Apple' className='w-8 h-8' />
              <img src={microsoft} alt='GitHub' className='w-8 h-8' />
              <img src={facebook} alt='Facebook' className='w-8 h-8' />
              <img src={github} alt='GitHub' className='w-8 h-8' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
