import React from 'react'
import { Card, Tabs, TabsProps } from 'antd'
import MyBasicInfo from './components/BasicInfo'
import MySetPassword from './components/SetPassword'
import Notify from './components/Notify'
import DownloadRecord from './components/DownloadRecord'
import CollectRecord from './components/CollectRecord'
import PostDemand from './components/PostDemand'
import { useParams } from 'react-router-dom'

const tabItems: TabsProps['items'] = [
  {
    key: 'basic-info',
    label: '基本信息',
    children: <MyBasicInfo />
  },
  {
    key: 'set-password',
    label: '修改密码',
    children: <MySetPassword />
  },
  {
    key: 'notify',
    label: '我的通知',
    children: <Notify />
  },
  {
    key: 'download-record',
    label: '下载记录',
    children: <DownloadRecord />
  },
  {
    key: 'collect-record',
    label: '收藏记录',
    children: <CollectRecord />
  },
  {
    key: 'post-demand',
    label: '发布需求',
    children: <PostDemand />
  }
]

const My: React.FC = () => {
  const params = useParams()

  return (
    <Card>
      <Tabs
        defaultActiveKey={params.tab || tabItems[0].key}
        tabPosition="left"
        items={tabItems}
      />
    </Card>
  )
}

export default My
