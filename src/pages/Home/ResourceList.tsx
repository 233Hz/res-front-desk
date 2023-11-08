import React, { useState } from 'react'
import { Card, List } from 'antd'
import { useNavigate } from 'react-router-dom'

const tabs = ['最新资源', '最热资源', '最多下载']
const data = Array.from({ length: 10 }).map((_, index) => index + 1)

const ResourceList: React.FC = () => {
  const navigate = useNavigate()
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  return (
    <Card bodyStyle={{ padding: 0 }}>
      <div className="leading-[42px] px-[16px] flex items-center gap-[16px]">
        {tabs.map((item, index) => (
          <div
            key={index}
            onClick={() => setActiveTabIndex(index)}
            className={[
              'cursor-pointer relative',
              activeTabIndex === index
                ? 'text-gray-900 text-[18px] font-bold before:absolute before:bottom-0 before:left-0 before:w-3/4 before:h-[8px] before:bg-lime-500'
                : 'text-gray-600 text-[16px] font-medium'
            ].join(' ')}
          >
            {item}
          </div>
        ))}
      </div>
      <List
        size="small"
        dataSource={data}
        footer={
          <div className="w-full text-center text-[16px] text-blue-400 cursor-pointer">
            加载更多
          </div>
        }
        renderItem={(item) => (
          <>
            <List.Item>
              <div
                className="w-full"
                onClick={() => navigate(`/resource-preview/${item}`)}
              >
                <h3 className="leading-[42px] truncate cursor-pointer">
                  <span className="bg-lime-500 text-[12px] text-white px-[8px] py-[2px] rounded-md mr-[8px] uppercase">
                    PPT
                  </span>
                  <a className="text-[18px] font-bold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi ut quibusdam quasi, ipsum accusamus delectus excepturi
                    quos impedit, aspernatur corrupti molestias voluptatem
                    consequuntur perferendis voluptates optio quas veniam.
                    Architecto, quod.
                  </a>
                </h3>
                <div>
                  <img
                    src="https://picsum.photos/400/200"
                    alt="cover"
                    className="w-[240px] h-[135px] object-cover rounded-md cursor-pointer"
                  />
                </div>
                <div className="flex justify-between items-center gap-[16px] mt-[16px]">
                  <div className="flex-1 flex flex-wrap gap-[8px]">
                    {['六校联盟创新创业大赛', '上海市医药学校'].map(
                      (item, index) => (
                        <span
                          className="bg-[#f5f5f5] px-[12px] py-[6px] rounded-2xl text-[12px] text-gray-500"
                          key={index}
                        >
                          {item}
                        </span>
                      )
                    )}
                  </div>
                  <div className="text-gray-400 text-[14px] font-normal">
                    <span>
                      <span className="icon-view mr-[8px]" />
                      200
                    </span>
                    <span className="mx-[24px]">
                      <span className="icon-user mr-[8px]" />2
                    </span>
                    <span>
                      <span className="icon-time mr-[8px]" />
                      2023-10-10
                    </span>
                  </div>
                </div>
              </div>
            </List.Item>
          </>
        )}
      />
    </Card>
  )
}

export default ResourceList
