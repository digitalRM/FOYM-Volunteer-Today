import React from 'react'

export default function InfoSectionOne() {
  return (
    <div className="relative overflow-hidden mt-20 bg-neutral-100 border-y-2 border-[#F0F0F0]    pb-10 text-black w-full">
      <div className="mx-auto max-w-[1140px] px-6 py-20 lg:py-32 lg:px-8 relative grid lg:grid-cols-2 gap-12 -mb-12">
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold tracking-tighter">By Volunteers, For Volunteers.</h2>
            <p className="text-lg mt-4 tracking-tight text-neutral-700">We are a community of volunteers who are passionate about making a difference in the world. Our mission is to connect volunteers with organizations that need their help, so that together we can create positive change in our communities.</p>
            <p className="text-lg mt-4 tracking-tight text-neutral-700">Whether you are looking to help people, have fun, or make a difference in your community, we have many opportunities for you to get involved. Everyone has the power to make a difference, and we are here to help you do just that. Join us today and start making a difference in your community!</p>
          </div>
        </div>

        <div className='relative pb-12 lg:pb-0 aspect-[14/9] '>
          <img src="https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="volunteers" className="object-cover w-full h-full rounded-3xl grayscale border-4 absolute -rotate-6 opacity-30 aspect-video" />
          <img src="https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="volunteers" className="w-full h-full rounded-3xl border-4 absolute mb-2 aspect-video" />

        </div>

        <div className='flex flex-col-reverse lg:flex-row lg:col-span-2 lg:gap-12'>
          <div className='relative pb-12 lg:pb-0 mt-12 lg:mt-28 aspect-[14/9] flex-1'>
            <img src="https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="volunteers" className="object-cover w-full h-full rounded-3xl grayscale border-4 absolute -rotate-6 opacity-30 aspect-video" />
            <img src="https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="volunteers" className="object-cover w-full h-full rounded-3xl border-4 absolute mb-2 aspect-video" />
          </div>

          <div className="flex flex-col gap-6 mt-24 flex-1">
            <div>
              <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold tracking-tighter">Volunteer Opportunities for Everyone.</h2>
              <p className="text-lg mt-4 tracking-tight text-neutral-700">We have volunteer opportunities for people of all ages and backgrounds. Whether you are a student looking to earn community service hours, a professional looking to give back to your community, or a retiree looking to stay active and engaged, we have opportunities for you.</p>
              <p className="text-lg mt-4 tracking-tight text-neutral-700">Our volunteer opportunities are also flexible and can be tailored to fit your schedule and interests. Whether you want to volunteer once a week, once a month, or once a year, we have opportunities for you. Join us today and start making a difference in your community!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
