import { Card } from 'antd'
import React from 'react'

const CategoryPanel: React.FC = () => {
  return (
    <Card title='资源分类'>
      <div className='grid grid-cols-3 gap-[16px]'>
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            className='bg-white flex flex-col items-center hover:bg-[#f6f6f6] w-[100px] h-[100px] p-[10px] rounded-md cursor-pointer'
            key={index}
          >
            <img
              src={`https://picsum.photos/60/?${index + 1}`}
              className='w-[60px] h-[60px] rounded-md'
            />
            <p className='text-[18px] font-normal'>word</p>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default CategoryPanel
