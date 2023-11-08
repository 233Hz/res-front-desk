import { Avatar, Button, Card, Divider, Input, List, Space } from 'antd'
import React from 'react'

const data = [
  {
    content: '这发的什么玩意啊',
    user: '张三',
    time: '2018-06-03'
  },
  {
    content: '你在瞎写什么',
    user: '李四',
    time: '2018-06-03'
  },
  {
    content: '作者写的太好了',
    user: '王五',
    time: '2018-06-03'
  },
  {
    content: '看不懂🫠🫠🫠',
    user: '赵六',
    time: '2018-06-03'
  },
  {
    content: '看不懂就别看',
    user: '王五',
    time: '2018-06-03'
  },
  {
    content: '看不看关你屁事',
    user: '赵六',
    time: '2018-06-03'
  }
]

const DemandContent: React.FC = () => {
  return (
    <>
      <Card>
        <div className="text-[20px] font-semibold text-center">
          这是一段很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的标题
        </div>
        <Divider plain>
          <div className="flex gap-[16px] text-[14px] font-thin text-gray-400">
            <span>
              <span className="icon-user mr-[8px]" />
              张三
            </span>
            <span>
              <span className="icon-time mr-[8px]" />
              2023-01-01
            </span>
            <span>
              <span className="icon-view mr-[8px]" />
              200
            </span>
            <span>
              <span className="icon-status mr-[8px]" />
              未完成
            </span>
          </div>
        </Divider>
        <article
          className="prose lg:prose-xl max-w-none"
          dangerouslySetInnerHTML={{
            __html: `
            <h1>H1  这是一段很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的内容</h1>
            <h2>H2  这是一段很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的内容</h2>
            <h3>H3  这是一段很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的内容</h3>
            <h4>H4  这是一段很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的内容</h4>
            <h5>H5  这是一段很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的内容</h5>
            <h6>H6  这是一段很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的内容</h6>
            无序列表
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
            </ul>
            有序列表
            <ol>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
            </ol>
            <a href="www.baidu.com">百度</a>
            `
          }}
        />
      </Card>
      <Card title="回复内容" className="mt-[16px]">
        <Space.Compact size="large" style={{ width: '100%' }}>
          <Input />
          <Button type="primary">回复</Button>
        </Space.Compact>
        <List
          pagination={{ position: 'bottom', align: 'center' }}
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item actions={[<a key="delete">删除</a>]}>
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                  />
                }
                title={
                  <div>
                    <a>{item.user}</a>
                    <span className="ml-[16px] text-[14px] font-thin text-gray-400">
                      {item.time}
                    </span>
                  </div>
                }
                description={item.content}
              />
            </List.Item>
          )}
        />
      </Card>
    </>
  )
}

export default DemandContent
