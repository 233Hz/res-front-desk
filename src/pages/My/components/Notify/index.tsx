import { List } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const data = [
  {
    title:
      '这是一段很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的标题',
    user: '张三',
    viewCount: 100,
    time: '2018-06-03'
  },
  {
    title: 'Ant Design Title 2',
    user: '张三',
    viewCount: 100,
    time: '2018-06-03'
  },
  {
    title: 'Ant Design Title 3',
    user: '张三',
    viewCount: 100,
    time: '2018-06-03'
  },
  {
    title: 'Ant Design Title 4',
    user: '张三',
    viewCount: 100,
    time: '2018-06-03'
  }
]

const Notify: React.FC = () => {
  const navigate = useNavigate()
  return (
    <List
      itemLayout='vertical'
      pagination={{ position: 'bottom', align: 'center' }}
      dataSource={data}
      renderItem={item => (
        <List.Item
          actions={[
            <span key='user'>
              <span className='icon-user mr-[8px]' />
              {item.user}
            </span>,
            <span key='time'>
              <span className='icon-time mr-[8px]' />
              {item.time}
            </span>,
            <span key='view'>
              <span className='icon-view mr-[8px]' />
              {item.viewCount}
            </span>
          ]}
        >
          <div className='w-full truncate text-[14px] font-semibold text-gray-950'>
            <a onClick={() => navigate('/notify/1')}>{item.title}</a>
          </div>
        </List.Item>
      )}
    />
  )
}

export default Notify
