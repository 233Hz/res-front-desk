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

const AnnouncementPanel: React.FC = () => {
  const navigate = useNavigate()
  return (
    <Card
      title="通知公告"
      className="mt-[16px] p-0"
      extra={<Button type="text">更多</Button>}
      bodyStyle={{ padding: 0 }}
    >
      <List
        size="small"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <div className="flex gap-[10px] w-full cursor-pointer">
              <div className="flex-1 truncate">
                <a onClick={() => navigate(`/notify/${1}`)}>{item}</a>
              </div>
              <div className="text-gray-400 overflow-hidden">2023-01-01</div>
            </div>
          </List.Item>
        )}
      />
    </Card>
  )
}

export default AnnouncementPanel
