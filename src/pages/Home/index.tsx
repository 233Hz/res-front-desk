import React from 'react'
import CarouselPanel from './CarouselPanel'
import CategoryPanel from './CategoryPanel'
import AnnouncementPanel from './AnnouncementPanel'

const Home: React.FC = () => {
  return (
    <div className='flex flex-col gap-[16px]'>
      <CarouselPanel />
      <div className='flex gap-[16px]'>
        <div className='flex-[2] overflow-hidden bg-red-100'></div>
        <div className='flex-1 overflow-hidden'>
          <CategoryPanel />
          <AnnouncementPanel />
        </div>
      </div>
    </div>
  )
}

export default Home
