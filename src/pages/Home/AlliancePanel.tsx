import { List } from 'antd'
import { Card } from 'antd/lib'
import React from 'react'

const data = [
  'https://picsum.photos/800/200/?1',
  'https://picsum.photos/800/200/?2',
  'https://picsum.photos/800/200/?3',
  'https://picsum.photos/800/200/?4',
  'https://picsum.photos/800/200/?5'
]

const AlliancePanel: React.FC = () => {
  return (
    <Card title="双创联盟" className="mt-[16px] p-0" bodyStyle={{ padding: 0 }}>
      <List
        size="small"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <a>
              <img
                src={item}
                className="w-full h-[80px] rounded-md object-cover cursor-pointer"
              />
            </a>
          </List.Item>
        )}
      />
    </Card>
  )
}

export default AlliancePanel
