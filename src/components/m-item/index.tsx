import React from "react";

import { Menu, Icon } from "antd";

import { Link } from "react-router-dom";

import "./index.scss";

interface propsType {
  theme?: any;
  mode?: any;
  collapsed?: boolean;
}

const Mitem: React.FC<propsType> = (props: propsType) => {
  let defaultSelectedKeys = ["1"];
  let items = [
    {
      icon: "user",
      title: "index",
      path: "/index"
    },
    {
      icon: "user",
      title: "about",
      path: "/about"
    },
    {
      icon: "user",
      title: "nav",
      path: ""
    },
    {
      icon: "user",
      title: "nav",
      path: ""
    },
    {
      icon: "user",
      title: "nav",
      path: ""
    }
  ];

  return (
    <Menu
      theme={props.theme}
      mode={props.mode}
      defaultSelectedKeys={defaultSelectedKeys}
      className="m-item"
      style={{ width: props.collapsed ? "80px" : "200px" }}
    >
      {items.map((item, key) => {
        return (
          <Menu.Item key={String(key + 1)}>
            <Link to={item.path}>
              <Icon type={item.icon} />
              <span>{item.title}</span>
            </Link>
          </Menu.Item>
        );
      })}
    </Menu>
  );
};

export default Mitem;
