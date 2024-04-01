// src/App.js
import React from 'react';
import { Layout } from 'antd';
import BlockList from './component/BlockList';

const { Header, Content } = Layout;

const App = () => {
  return (
    <Layout>
      <Header style={{ color: 'white', textAlign: 'center', fontSize: 24 }}>
        Web-Based Writing Tool
      </Header>
      <Content style={{ padding: '20px' }}>
        <BlockList />
      </Content>
    </Layout>
  );
};

export default App;
