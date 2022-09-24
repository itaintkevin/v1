import React from 'react';
import Profile from './profile.jpg'
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';

const Hero = () => {
  return (
    <>
    {/* <div className='flex flex-col sm:flex-row justify-center items-center h-screen px-5 w-screen sm:w-7/12 mx-auto my-20 z-10'>
        <div className='w-3/6'>
            <div className="text-5xl my-2">Hey!</div>
            <div className="text-7xl from-[#7F7FD5] via-[#86A8E7] to-[#91EAE4] text-transparent bg-clip-text bg-gradient-to-r drop-shadow-2xl">I'm Kevin Paul.</div>
        </div>
        <div className='flex justify-end items-center text-xl w-3/6 font-medium'>
          <div className='absolute z-0 bg-[#91EAE4] rounded-xl h-max  px-5 py-14 w-3.5/12'>
          Curently learning Backend Web Developement.🤌
            <br/>
            Exploring Web3 and Blockchain Technology.⛓️
            <br/>
            Technical Team member at IEEE & TEDx SRMIST.💻
            <br/>
            Computer Science Engineering student at SRMIST, India.🏛️
          </div>
          <div className='absolute z-1 bg-[#86A8E7] translate-x-4 translate-y-4 px-5 py-14 rounded-xl w-3.5/12'>
          Curently learning Backend Web Developement.🤌
            <br/>
            Exploring Web3 and Blockchain Technology.⛓️
            <br/>
            Technical Team member at IEEE & TEDx SRMIST.💻
            <br/>
            Computer Science Engineering student at SRMIST, India.🏛️
          </div>
          <div className="absolute z-2 bg-[#2c2f3d] translate-x-8 translate-y-8 rounded-xl h-max w-3.5/12 px-5 py-14 drop-shadow-2xl">
            Curently learning Backend Web Developement.🤌
            <br/>
            Exploring Web3 and Blockchain Technology.⛓️
            <br/>
            Technical Team member at IEEE & TEDx SRMIST.💻
            <br/>
            Computer Science Engineering student at SRMIST, India.🏛️
          </div>
        </div>
    </div> */}
    <div className='relative flex flex-col items-center'>
      <div><img className="rounded-full w-48 h-48 drop-shadow-2xl my-5" src={Profile} alt="Profile" /></div>
      <div className='text-4xl'>Hey!</div>
      <div className='text-5xl from-[#7F7FD5] via-[#86A8E7] to-[#91EAE4] text-transparent bg-clip-text bg-gradient-to-r drop-shadow-2xl'>I'm Kevin Paul</div>
      <div className='grid gap-4 grid-cols-2 grid-rows-2 w-max mt-5 mb-44'>
        <div><a className='flex items-center' href="https://github.com/itaintkevin"><AiOutlineGithub/>&nbsp;Github</a></div>
        <div><a className='flex items-center' href="https://www.linkedin.com/in/itaintkevin"><AiOutlineLinkedin/>&nbsp;Linkedin</a></div>
        <div><a className='flex items-center' href="https://twitter.com/it_aint_kevin"><AiOutlineTwitter/>&nbsp;Twitter</a></div>
        <div><a className='flex items-center' href=""><AiOutlineInstagram/>&nbsp;Instagram</a></div>
      </div>
      <div className='flex flex-col justify-center w-full mt-5 mb-36'>
        <div className='ease-in delay-1000 bg-[#91EAE4] text-md rounded-xl mx-5 pt-4'>
          <div className='ease-in delay-1000 bg-[#86A8E7] text-md rounded-xl w-full'>
            <div className='ease-in delay-1000 bg-[#2c2f3d] translate-y-4 text-md rounded-xl drop-shadow-2xl w-full p-5 z-10'>
                ~ Curently learning Backend Web Developement 🤌.
                <br/>
                ~ Exploring Web3 and Blockchain Technology ⛓️.
                <br/>
                ~ Technical Team member at IEEE & TEDx SRMIST 💻.
                <br/>
                ~ Computer Science Engineering student at SRMIST, India 🏛️.
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero