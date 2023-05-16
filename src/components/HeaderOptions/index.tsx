import { Space } from 'antd';
import { SelectLang } from 'umi';
import HeaderMenu from '../HeaderMenu';
import { AndroidFilled } from '@ant-design/icons';

export default function HeaderOptions() {
  return (
    <Space>
      <HeaderMenu />
      <SelectLang icon={<AndroidFilled />}/>
    </Space>
  );
}
