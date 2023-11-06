import React from 'react'
import { Carousel } from 'antd'

const bannerList = [
  {
    id: 1,
    imgUrl: 'https://picsum.photos/1072/300/?1'
  },
  {
    id: 2,
    imgUrl: 'https://picsum.photos/1072/300/?2'
  },
  {
    id: 3,
    imgUrl: 'https://picsum.photos/1072/300/?3'
  }
]

const CarouselPanel: React.FC = () => {
  return (
    <Carousel autoplay>
      {bannerList.map(item => (
        <img className='w-full h-[300px]' src={item.imgUrl} key={item.id} alt='轮播' />
      ))}
    </Carousel>
  )
}

export default CarouselPanel
