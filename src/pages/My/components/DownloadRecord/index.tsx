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

const DownloadRecord: React.FC = () => {
  return (
    <List
      pagination={{ position: 'bottom', align: 'center' }}
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <div className="w-full flex gap-[16px]">
            <a className="flex-1 truncate text-[14px] font-semibold text-gray-950">
              {item.title}
            </a>
            <span className="text-[14px] font-thin text-gray-400">
              {item.time}
            </span>
          </div>
        </List.Item>
      )}
    />
  )
}

export default DownloadRecord
