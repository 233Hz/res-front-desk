import {
  DesktopOutlined,
  LogoutOutlined,
  MessageOutlined,
  UserOutlined
} from '@ant-design/icons'
import {
  PageContainer,
  ProConfigProvider,
  ProLayout
} from '@ant-design/pro-components'
import { ConfigProvider, Dropdown } from 'antd'
import { useNavigate, useLocation, Outlet } from 'react-router-dom'
import logo from '@/assets/logo.png'
import { isExternalLink } from '@/utils/verify'
import route from './route'

const Layout = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const menuClick = (path?: any) =>
    (path && isExternalLink(path)) || navigate(path || '/index')

  return (
    <div
      id="layout"
      style={{
        height: '100vh',
        overflow: 'auto'
      }}
    >
      <ProConfigProvider hashed={false}>
        <ConfigProvider
          getTargetContainer={() => {
            return document.getElementById('layout') || document.body
          }}
        >
          <ProLayout
            route={route}
            // 当前激活的路由
            location={{
              pathname: location.pathname
            }}
            title="产教融合双创数字服务平台"
            logo={logo}
            fixedHeader
            layout="top"
            navTheme="light"
            contentWidth="Fixed"
            colorPrimary="#1677FF"
            token={{
              header: {
                colorBgMenuItemSelected: 'rgba(0,0,0,0.04)'
              }
            }}
            avatarProps={{
              src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
              size: 'small',
              title: '张三',
              render: (_props, dom) => {
                return (
                  <Dropdown
                    menu={{
                      items: [
                        {
                          key: 'logout',
                          icon: <LogoutOutlined />,
                          label: '退出登录'
                        }
                      ]
                    }}
                  >
                    {dom}
                  </Dropdown>
                )
              }
            }}
            actionsRender={(_props) => {
              if (_props.isMobile) return []
              if (typeof window === 'undefined') return []
              return [
                <MessageOutlined
                  key="MessageOutlined"
                  onClick={() => navigate('/my/notify')}
                />,
                <DesktopOutlined key="DesktopOutlined" />,
                <UserOutlined
                  key="UserOutlined"
                  onClick={() => navigate('/my')}
                />
              ]
            }}
            onMenuHeaderClick={() => navigate('/index')}
            subMenuItemRender={(item, dom) => (
              <div onClick={() => menuClick(item.path)}>{dom}</div>
            )}
            menuItemRender={(item, dom) => (
              <div onClick={() => menuClick(item.path)}>{dom}</div>
            )}
          >
            <PageContainer title={false}>
              <Outlet />
            </PageContainer>
          </ProLayout>
        </ConfigProvider>
      </ProConfigProvider>
    </div>
  )
}

export default Layout
