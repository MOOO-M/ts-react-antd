import React from "react";

import { Menu, Icon } from "antd";

interface propsType {
  theme?: any;
  mode?: any;
}

const Mitem: React.FC<propsType> = (props: propsType) => {
  return (
    <Menu theme={props.theme} mode={props.mode} defaultSelectedKeys={["1"]}>
      <Menu.Item key="1">
        <Icon type="user" />
        <span>nav 1</span>
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="video-camera" />
        <span>nav 2</span>
      </Menu.Item>
      <Menu.Item key="3">
        <Icon type="upload" />
        <span>nav 3</span>
      </Menu.Item>
    </Menu>
  );
};

export default Mitem;
