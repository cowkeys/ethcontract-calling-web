import React from 'react';
import { Tabs } from 'antd';
import {connect} from "dva/index";
import MainPanel from './MainPanel';
import Common from './Common';
import GameContract from './GameContract';
import TokenContract from './TokenContract';

const TabPane = Tabs.TabPane;


function callback(key) {
  console.log(key);
}

const Example = () => {
  return (
    <div>
    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab="统一接口" key="1">
      <Common/>
      </TabPane>
      <TabPane tab="代币购买道具用例" key="3">
        <MainPanel/>
      </TabPane>
      <TabPane tab="游戏测试合约" key="4" style={{ textAlign: 'left'}}>
        <GameContract/>
      </TabPane>
      <TabPane tab="代币测试合约" key="5" style={{ textAlign: 'left'}}>
        <TokenContract/>
      </TabPane>
    </Tabs>
    </div>
  );
};

Example.propTypes = {
};

export default connect()(Example);
