import React from 'react'
import { Button, message } from 'antd'
import { EditOutlined, PlusOutlined } from '@ant-design/icons'
import {
  ModalForm,
  ProFormField,
  ProFormText
} from '@ant-design/pro-components'
import type { CustomModalType } from '@/types/global'
import CustomEditor from '@/components/CustomEditor'

export interface Props {
  form?: any
  type: CustomModalType
}

const triggerType = (type: CustomModalType) => {
  if (type === 'add') {
    return (
      <Button type="primary" icon={<PlusOutlined />}>
        发布需求
      </Button>
    )
  } else if (type === 'update') {
    return (
      <Button type="link" icon={<EditOutlined />}>
        编辑
      </Button>
    )
  }
}

const CustomModalForm: React.FC<Props> = (props) => {
  return (
    <ModalForm
      trigger={triggerType(props.type)}
      grid
      onFinish={async (values) => {
        console.log(values)
        message.success('提交成功')
      }}
      initialValues={{ ...props.form }}
    >
      <ProFormText
        name="title"
        label="需求标题"
        placeholder="请输入需求标题"
        rules={[{ required: true }]}
      />
      <ProFormField name="content" label="需求简述" colProps={{ span: 24 }}>
        <CustomEditor />
      </ProFormField>
    </ModalForm>
  )
}

export default CustomModalForm
