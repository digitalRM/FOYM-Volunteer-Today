import React from 'react'
import { Button } from '../ui/button'

export default function CallToAction() {
  return (
    <div className="relative overflow-hidden my-32 mx-auto sm:p-10 text-black w-full">
      <div className="mx-auto max-w-[1140px] bg-neutral-100 sm:border-2 border-[#F0F0F0] rounded-3xl sm:p-4 ">
        <div className='bg-neutral-50 sm:border-2 h-[800px] sm:h-[600px] border-[#F0F0F0] sm:rounded-[12px] p-6 sm:p-8 w-full flex-col justify-between bg-[url("/CallToAction.svg")] bg-bottom bg-no-repeat bg-cover'>
          <div className='flex flex-row justify-between'>
            <div>
              <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold tracking-tighter">Ready to Get Started?</h2>
            </div>
            <div className='flex justify-between'>
              <Button className='w-full'>Apply Now</Button>
            </div>
          </div>
          <p className="text-lg mt-8 tracking-tight text-neutral-700">We are always looking for volunteers to help us make a difference in the world. We are amazed by the impact that our volunteers have made, and we are excited to see what the future holds. If you are passionate about making a difference in the world, we would love to have you join us. Apply today and start making a difference in your community!</p>

        </div>
      </div>
    </div>
  )
}


