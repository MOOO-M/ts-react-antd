import React, { useState } from "react";

import { Layout, Icon } from "antd";

import Mitem from "../../components/m-item/index";

// import './index.less';
import styles from "./index.module.scss";

const { Header, Sider, Content } = Layout;

const Index: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  function toggle() {
    setCollapsed(!collapsed);
  }

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        {/* LOGO */}
        <div className={styles.logo} />

        {/* 侧边导航 */}
        <Mitem theme="dark" mode="inline" />
      </Sider>
      <Layout>
        <Header style={{ background: "#fff", padding: 0 }}>
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
            minHeight: 280
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
  // return null
};

export default Index;
