import { DeleteOutlined } from '@ant-design/icons'
import { Button, List } from 'antd'
import React from 'react'
import CustomModalForm from './CustomModalForm'
import { useNavigate } from 'react-router-dom'

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

const PostDemand: React.FC = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className='flex justify-end'>
        <CustomModalForm type='add' />
      </div>
      <List
        pagination={{ position: 'bottom', align: 'center' }}
        dataSource={data}
        renderItem={item => (
          <List.Item
            actions={[
              <CustomModalForm type='update' key='edit' />,
              <Button type='link' icon={<DeleteOutlined />} key='delete' danger>
                删除
              </Button>
            ]}
          >
            <List.Item.Meta
              title={
                <div className='w-full truncate text-[14px] font-semibold text-gray-950'>
                  <a onClick={() => navigate('/demand/1')}>{item.title}</a>
                </div>
              }
              description={item.time}
            />
          </List.Item>
        )}
      />
    </>
  )
}

export default PostDemand
