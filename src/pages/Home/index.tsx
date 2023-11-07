import React from 'react'
import ResourceList from './ResourceList'
import CarouselPanel from './CarouselPanel'
import CategoryPanel from './CategoryPanel'
import AnnouncementPanel from './AnnouncementPanel'
import DemandPanel from './DemandPanel'
import AlliancePanel from './AlliancePanel'
import { Button, Card } from 'antd'

const Home: React.FC = () => {
  return (
    <div className='flex flex-col gap-[16px]'>
      <CarouselPanel />
      <div className='flex gap-[16px]'>
        <div className='flex-[2] overflow-hidden'>
          <ResourceList />
        </div>
        <div className='flex-1 overflow-hidden'>
          <CategoryPanel />
          <AnnouncementPanel />
          <DemandPanel />
          <AlliancePanel />
          <Card className='mt-[16px]' bodyStyle={{ padding: 10 }}>
            <Button type='primary' className='w-full'>
              申请注册
            </Button>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Home
