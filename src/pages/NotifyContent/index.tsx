import { Card, Divider } from 'antd'
import React from 'react'

const NotifyContent: React.FC = () => {
  return (
    <Card>
      <div className='text-[20px] font-semibold text-center'>
        这是一段很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的标题
      </div>
      <Divider plain>
        <div className='flex gap-[16px] text-[14px] font-thin text-gray-400'>
          <span>
            <span className='icon-user mr-[8px]' />
            张三
          </span>
          <span>
            <span className='icon-time mr-[8px]' />
            2023-01-01
          </span>
          <span>
            <span className='icon-view mr-[8px]' />
            200
          </span>
        </div>
      </Divider>
      <article
        className='prose lg:prose-xl max-w-none'
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
  )
}

export default NotifyContent
