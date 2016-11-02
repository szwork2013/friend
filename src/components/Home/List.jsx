import React from 'react';
import Reflux from 'reflux';
import Base from '../Common/Base';
import Wrapper from '../Layout/Wrapper';
import { Link } from 'react-router';
import Actions from '../../actions/Actions';
import HomeStore from '../../stores/HomeStore';
import ReactMixin from 'react-mixin';
import { TabBar } from 'antd-mobile';


class List extends Base {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'redTab',
            hidden: false
        };

        this.binder('renderContent');

    }

    onStoreUpdate(data) {
        let _this = this;
        if (data.type && data.type === 'index') {
            this.setState({
                pieData: data.data
            });
        }

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    componentDidUpdate() {

    }



    renderContent(pageText) {
        return (
            <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
                <div style={{ paddingTop: 60 }}>你已点击“{pageText}” tab， 当前展示“{pageText}”信息</div>
                <a style={{ display: 'block', marginTop: 40 }} onClick={(e) => {
          e.preventDefault();
          this.setState({
            hidden: !this.state.hidden,
          });
        }}
                >
                    点击切换 tab-bar 显示/隐藏
                </a>
            </div>
        );
    }


    render() {


        return (
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
                hidden={this.state.hidden}
            >
                <TabBar.Item
                    title="生活"
                    key="生活"
                    icon={require('./TabBar_HomeBar_web.png')}
                    selectedIcon={require('./TabBar_HomeBar_Sel_web.png')}
                    selected={this.state.selectedTab === 'blueTab'}
                    onPress={() => {
            this.setState({
              selectedTab: 'blueTab',
            });
          }}
                    data-seed="logId"
                >
                    {this.renderContent('生活')}
                </TabBar.Item>
                <TabBar.Item
                    icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/UNQhIatjpNZHjVf.png' }}
                    selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/HLkBvJOKnmOfBPO.png' }}
                    title="口碑"
                    key="口碑"
                    badge={1}
                    selected={this.state.selectedTab === 'redTab'}
                    onPress={() => {
            this.setState({
              selectedTab: 'redTab',
            });
          }}
                    data-seed="logId1"
                >
                    {this.renderContent('口碑')}
                </TabBar.Item>
                <TabBar.Item
                    icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/EljxLrJEShWZObW.png' }}
                    selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/LWNaMdwAFSmYBFw.png' }}
                    title="朋友"
                    key="朋友"
                    selected={this.state.selectedTab === 'greenTab'}
                    onPress={() => {
            this.setState({
              selectedTab: 'greenTab',
            });
          }}
                >
                    {this.renderContent('朋友')}
                </TabBar.Item>
                <TabBar.Item
                    icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/YWpPVCVOnJoCYhs.png' }}
                    selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/WadBBxOIZtDzsgP.png' }}
                    title="我的"
                    key="我的"
                    selected={this.state.selectedTab === 'yellowTab'}
                    onPress={() => {
            this.setState({
              selectedTab: 'yellowTab',
            });
          }}
                >
                    {this.renderContent('我的')}
                </TabBar.Item>
            </TabBar>
        );

    }
}

ReactMixin.onClass(List, Reflux.listenTo(HomeStore, 'onStoreUpdate'));

export default List;
