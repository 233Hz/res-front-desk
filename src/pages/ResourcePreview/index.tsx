import { DownloadOutlined, HeartOutlined } from '@ant-design/icons'
import { Badge, Card } from 'antd'
import React from 'react'

const ResourcePreview: React.FC = () => {
  return (
    <div className="flex gap-[16px]">
      <div className="flex-[2]">
        <iframe
          src="https://view.xdocin.com/view?src=http%3A%2F%2F106.14.156.6%3A8088%2Fwebsite_doc%2Fres_file%2F1661856022836.pdf"
          className="w-full aspect-[9/16]"
        />
      </div>
      <div className="flex-1">
        <Badge.Ribbon text="PPT" color="green">
          <Card
            actions={[
              <HeartOutlined key="collect" />,
              <DownloadOutlined key="download" />
            ]}
          >
            <p className="text-[18px] font-bold">
              江南古镇游园营销商业计划.mp4
            </p>
            <div className="mt-[16px] flex flex-wrap gap-[8px]">
              {['六校联盟创新创业大赛', '上海市医药学校'].map((item) => (
                <span
                  key={item}
                  className="border-[1px] border-solid border-lime-500 text-lime-500 text-[12px] font-thin px-[4px]"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex gap-[16px] text-[14px] text-gray-400 mt-[16px]">
              <span>
                <span className="icon-time mr-[8px]" />
                2023-01-01
              </span>
              <span>
                <span className="icon-user mr-[8px]" />
                张三
              </span>
              <span>
                <span className="icon-view mr-[8px]" />
                200
              </span>
            </div>
          </Card>
        </Badge.Ribbon>
        <Card className="mt-[16px]" title="资源简介">
          这是一段很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的资源简介
        </Card>
      </div>
    </div>
  )
}

export default ResourcePreview
