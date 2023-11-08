import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Badge, Card, Pagination } from 'antd'
import Search from 'antd/es/input/Search'
import { SearchProps } from 'antd/lib/input'
import { HeartOutlined } from '@ant-design/icons'

const category = [
  '全部',
  'word',
  'ppt',
  'excel',
  'pdf',
  'pptx',
  'docx',
  'doc',
  'xlsx'
]
const groups = ['全部', '最新发布', '最多浏览']
const list = Array.from({ length: 20 }).map((_, index) => index + 1)

interface SearchParams {
  name: string
  categoryActiveIndex: number
  groupActiveIndex: number
}

const onSearch: SearchProps['onSearch'] = (value, _e, info) =>
  console.log(info?.source, value)

const Resource: React.FC = () => {
  const params = useParams()
  const navigate = useNavigate()
  console.log(params)
  const [searchParams, setSearchParams] = useState<SearchParams>({
    name: '',
    categoryActiveIndex: 0,
    groupActiveIndex: 0
  })
  return (
    <>
      <Card>
        <div className="flex flex-col gap-[16px]">
          <Search
            value={searchParams.name}
            placeholder="关键词搜索"
            onChange={(e) =>
              setSearchParams({ ...searchParams, name: e.target.value })
            }
            onSearch={onSearch}
            size="large"
            style={{ width: 400 }}
          />
          <div className="flex flex-wrap gap-[16px]">
            {category.map((item, index) => (
              <span
                className={[
                  'bg-[#f6f6f6] text-gray-400 px-[12px] py-[4px] cursor-pointer',
                  searchParams?.categoryActiveIndex === index
                    ? 'font-bold bg-lime-500 text-white'
                    : ''
                ].join(' ')}
                key={item}
                onClick={() =>
                  setSearchParams({
                    ...searchParams,
                    categoryActiveIndex: index
                  })
                }
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-[16px]">
            {groups.map((item, index) => (
              <span
                className={[
                  'bg-[#f6f6f6] text-gray-400 px-[12px] py-[4px] cursor-pointer',
                  searchParams.groupActiveIndex === index
                    ? 'font-bold bg-lime-500 text-white'
                    : ''
                ].join(' ')}
                key={item}
                onClick={() =>
                  setSearchParams({ ...searchParams, groupActiveIndex: index })
                }
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </Card>
      <div className="grid grid-cols-4 gap-[16px] mt-[16px]">
        {list.map((item) => (
          <Badge.Ribbon
            text={category.find(
              (_item, index) => index === searchParams.categoryActiveIndex
            )}
            color="green"
            key={item}
          >
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[<HeartOutlined key="collect" />]}
              bodyStyle={{ padding: 10 }}
              onClick={() => navigate(`/resource-preview/${item}`)}
            >
              <p className="text-[16px] text-gray-950 font-semibold line-clamp-2 hover:text-lime-500">
                <a>
                  这是一段很长很长很长很长很长很长很长很长很长很长很长很长很长很长的标题
                </a>
              </p>
              <p className="flex justify-between mt-[16px] text-[14px] text-gray-400">
                <span>2023-01-01</span>
                <span>
                  <span className="icon-view" />
                  100
                </span>
              </p>
            </Card>
          </Badge.Ribbon>
        ))}
      </div>
      <div className="flex justify-center mt-[16px]">
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </>
  )
}

export default Resource
