import { List } from 'antd'
import React from 'react'

const data = [
  {
    title:
      '这是一段很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的标题',
    time: '2018-06-03'
  },
  {
    title: 'Ant Design Title 2',
    time: '2018-06-03'
  },
  {
    title: 'Ant Design Title 3',
    time: '2018-06-03'
  },
  {
    title: 'Ant Design Title 4',
    time: '2018-06-03'
  }
]

const CollectRecord: React.FC = () => {
  return (
    <List
      pagination={{ position: 'bottom', align: 'center' }}
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <div className="w-full flex items-center gap-[16px]">
            <div className="flex-1 overflow-hidden">
              <div className="truncate text-[14px] font-semibold text-gray-950">
                <a>{item.title}</a>
              </div>
              <div className="text-[14px] font-thin text-gray-400 mt-[8px]">
                {item.time}
              </div>
            </div>
            <div>
              <span
                className="bg-red-100 px-[4px] rounded-sm cursor-pointer text-red-400"
                key="collect"
              >
                <span className="icon-heart mr-[4px]" />
                取消收藏
              </span>
            </div>
          </div>
        </List.Item>
      )}
    />
  )
}

export default CollectRecord
