import { Button, List } from 'antd'
import { Card } from 'antd/lib'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.'
]

const DemandPanel: React.FC = () => {
  const navigate = useNavigate()
  return (
    <Card
      title='资源需求'
      className='mt-[16px] p-0'
      extra={<Button type='text'>更多</Button>}
      bodyStyle={{ padding: 0 }}
    >
      <List
        size='small'
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <p className='w-full hover:text-green-600 cursor-pointer truncate'>
              <a onClick={() => navigate('/demand/1')}>{item}</a>
            </p>
          </List.Item>
        )}
      />
    </Card>
  )
}

export default DemandPanel
