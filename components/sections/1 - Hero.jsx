import React from 'react'
import { Button } from '../ui/button'
import Header from '../ui/1 - header'

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="mx-auto overflow-hidden p-4 md:px-6 pt-6 lg:pt-10 lg:px-8 py-16 relative">
        <Header />
        <div className="flex flex-col lg:flex-row items-center justify-between mt-24 z-10 relative max-w-[1140px] mx-auto">
          <div className="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-4 w-full h-full">
            <div className='w-full h-full lg:col-span-2 lg:row-span-2 bg-neutral-100 border-2 border-[#F0F0F0] rounded-3xl aspect-[1/1] bg-[url("/HelpPeople.svg")] bg-cover bg-right p-4 lg:p-6'>
              <h1 className='text-4xl lg:text-5xl font-semibold text-neutral-900 tracking-tighter w-12'>Help People.</h1>
            </div>
            <div className='w-full h-full lg:col-span-1 lg:row-span-1 bg-neutral-100 border-2 border-[#F0F0F0] rounded-3xl aspect-square bg-[url("/EarnHours.svg")] bg-no-repeat bg-contain lg:p-6 bg-[right_-4px_bottom_-8px] p-4 '>
              <h1 className='text-4xl lg:text-5xl font-semibold text-neutral-900 tracking-tighter w-12'>Earn Hours.</h1>
            </div>
            <div className='w-full h-full lg:col-span-1 lg:row-span-1 bg-neutral-100 border-2 border-[#F0F0F0] rounded-3xl aspect-square bg-[url("/HaveFun.svg")] bg-cover lg:p-6 bg-no-repeat bg-[right_-12px_bottom_-8px] p-4 '>
              <h1 className='text-4xl lg:text-5xl font-semibold text-neutral-900 tracking-tighter w-12'>Have Fun.</h1> 
            </div>
            <div className='w-full h-full lg:col-span-2 bg-neutral-100 border-2 border-[#F0F0F0] rounded-3xl aspect-square md:aspect-[2/1] bg-no-repeat  bg-[url("/HelpYourCommunity.svg")] bg-bottom  sm:bg-[bottom_-2px_left] lg:p-6 p-4 '>
              <h1 className='text-4xl lg:text-5xl font-semibold text-neutral-900 tracking-tighter w-56'>Help Your Community.</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
