import { Card } from 'antd'
import React from 'react'

interface Option {
  value: string | number
  label: string
  children?: Option[]
}

const options: Option[] = [
  {
    label: '六校联盟创新创业大赛',
    value: '1',
    children: [
      {
        label: '上海市医药学校',
        value: '1-1'
      },
      {
        label: '上海市环境学校',
        value: '1-2'
      },
      {
        label: '上海市贸易学校',
        value: '1-3'
      },
      {
        label: '上海船厂技工学校',
        value: '1-4'
      },
      {
        label: '上海市第二轻工业学校',
        value: '1-5'
      },
      {
        label: '上海科技管理学校',
        value: '1-6'
      },
      {
        label: '联盟运营管理',
        value: '1-7'
      }
    ]
  },
  {
    label: '创新创业在线学习资源',
    value: '2'
  },
  {
    label: '创新创业社团',
    value: '3'
  },
  {
    label: '创新创业典型案例',
    value: '4'
  },
  {
    label: '产教融合企业',
    value: '5',
    children: [
      {
        label: '泼猴信息技术（上海）有限公司',
        value: '5-1'
      }
    ]
  }
]

const ColumnPanel: React.FC = () => {
  return (
    <Card title='资源栏目'>
      <div className='flex flex-col gap-[16px] h-[2000px]'>
        {/* 一级栏目 */}
        <div className='flex flex-wrap gap-[16px]'>
          {options.map(item => (
            <span
              className='bg-[#f7f9fa] px-[16px] py-[8px] cursor-pointer'
              key={item.value}
              onMouseEnter={e => console.log(e)}
            >
              {item.label}
            </span>
          ))}
        </div>
        {/* 二级栏目 */}
        <div className='flex flex-wrap gap-[16px]'>
          {options.map(item => (
            <span className='bg-[#f7f9fa] px-[16px] py-[8px] cursor-pointer' key={item.value}>
              {item.label}
            </span>
          ))}
        </div>
        {/* 三级栏目 */}
        <div className='flex flex-wrap gap-[16px]'>
          {options.map(item => (
            <span className='bg-[#f7f9fa] px-[16px] py-[8px] cursor-pointer' key={item.value}>
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </Card>
  )
}

export default ColumnPanel
