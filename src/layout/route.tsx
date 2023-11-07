const route = {
  path: '/',
  routes: [
    {
      path: 'resource/1',
      name: '六校联盟创新创业大赛',
      routes: [
        {
          path: '11',
          name: '上海市医药学校'
        },
        {
          path: '12',
          name: '上海市环境学校'
        },
        {
          path: '13',
          name: '上海市贸易学校'
        },
        {
          path: '14',
          name: '上海船厂技工学校'
        },
        {
          path: '15',
          name: '上海市第二轻工业学校'
        },
        {
          path: '16',
          name: '上海科技管理学校'
        },
        {
          path: '17',
          name: '联盟运营管理'
        }
      ]
    },
    {
      path: 'resource/2',
      name: '创新创业在线学习资源'
    },
    {
      path: 'resource/3',
      name: '创新创业社团'
    },
    {
      path: 'resource/4',
      name: '创新创业典型案例'
    },
    {
      path: 'resource/5',
      name: '产教融合企业',
      routes: [
        {
          path: '51',
          name: '泼猴信息技术（上海）有限公司'
        }
      ]
    }
  ]
}

export default route
