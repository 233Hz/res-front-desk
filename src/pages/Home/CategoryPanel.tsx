import { Card } from 'antd'
import React from 'react'

const CategoryPanel: React.FC = () => {
  return (
    <Card title="资源分类">
      <div className="grid grid-cols-3 gap-[16px]">
        {Array.from({ length: 9 }).map((_, index) => (
          <a
            className="bg-white flex flex-col items-center hover:bg-[#f6f6f6] w-[90px] h-[90px] p-[10px] rounded-md cursor-pointer"
            key={index}
          >
            <img
              src={`https://picsum.photos/60/?${index + 1}`}
              className="w-[50px] h-[50px] rounded-md"
            />
            <p className="text-[18px] font-normal">word</p>
          </a>
        ))}
      </div>
    </Card>
  )
}

export default CategoryPanel
