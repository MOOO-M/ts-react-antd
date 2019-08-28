import React, { useState, useEffect } from "react";

import { Layout, Icon } from "antd";

import Mitem from "../m-item/index";

import styles from "./index.module.scss";

const { Header, Sider, Content, Footer } = Layout;

interface propsType {
  children?: any;
}

const Mlayout: React.FC<propsType> = (props: propsType) => {
  const [bodyHeight, setBodyHeight] = useState(400);
  const [collapsed, setCollapsed] = useState(false);
  const [itemsBase, setItemsBase] = useState({
    theme: "light",
    mode: "inline"
  });

  useEffect(() => {
    let screenHeight = window.innerHeight;
    setBodyHeight(screenHeight - 182);
  });

  function toggle() {
    setCollapsed(!collapsed);
  }

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        {/* LOGO */}
        <div className={styles.logo}>
          <h1>LOGO</h1>
        </div>

        {/* 侧边导航 */}
        <Mitem
          theme={itemsBase.theme}
          mode={itemsBase.mode}
          collapsed={collapsed}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            background: "#fff",
            padding: 0,
            position: "fixed",
            width: "100%",
            zIndex: 2
          }}
        >
          <Icon
            className={styles.trigger}
            type={collapsed ? "menu-unfold" : "menu-fold"}
            onClick={() => {
              toggle();
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            background: "#fff",
            marginTop: 90,
            overflow: "auto",
            height: bodyHeight
          }}
        >
          {props.children}
        </Content>
        <Footer>footer</Footer>
      </Layout>
    </Layout>
  );
};

export default Mlayout;
