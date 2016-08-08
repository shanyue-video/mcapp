import React from 'react';

import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Drawer from 'material-ui/Drawer';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blue400} from 'material-ui/styles/colors';


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
        this.getChildContext = this.getChildContext.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        //console.log(navigator.userAgent);
        this.props.log_log(navigator.userAgent);
        //console.log(
        //    (navigator.userAgent.toString().indexOf('Mozilla') > 0
        //    || navigator.userAgent.toString().indexOf('Chrome')) > 0
        //);
    }

    getChildContext() {
        baseTheme.palette.primary1Color = blue400;
        return { muiTheme: getMuiTheme(baseTheme) };
    }

    handleToggle() {
        this.setState({open: !this.state.open});
    }

    render() {
        const style = {
            position: "fixed",
            top: 0,
            left: 0,
            height: 60,
        };

        const commonButton = (
            <FloatingActionButton
                mini={true}
                iconStyle={{backgroundImage: 'url(' + '/resources/icons/icon-29x29.png' + ')'}}
                onTouchStart={this.handleToggle}
                onMouseDown={this.handleToggle}
                />
        );

        const wxButton = (
            <FloatingActionButton
                mini={true}
                iconStyle={{backgroundImage: 'url(' + '/resources/icons/icon-29x29.png' + ')'}}
                onTouchStart={this.handleToggle}
                />
        );

        const BaseBar = (
            <AppBar
                title=""
                style={style}
                iconElementLeft={
                    (navigator.userAgent.toString().indexOf('AppleWebKit') > 0
                     && (navigator.userAgent.toString().indexOf('Mobile')) > 0)
                     ? wxButton: commonButton
                }
                />
        );

        const LoginMenuItems = (
            <div>
                <MenuItem value="1" primaryText="刷新" />
                <MenuItem value="2" primaryText="反馈" />
                <MenuItem value="3" primaryText="设置" />
                <MenuItem value="4" primaryText="帮助" />
                <MenuItem value="5" primaryText="注销" onTouchTap={this.props.logout} />
            </div>
        );

        const UnloginMenuItems = (
            <div>
                <MenuItem value="0" primaryText="登陆" onTouchTap={this.props.login} />
            </div>
        );

        return (
            <div>
                <Drawer ref='drawerRef' docked={false} open={this.state.open}
                        onRequestChange={(open) => this.setState({open})}>
                    <Menu>
                        {BaseBar}
                        <MenuItem primaryText="..." />
                        {this.props.user ? LoginMenuItems : UnloginMenuItems}
                    </Menu>
                </Drawer>
                {BaseBar}
            </div>
        );
    }

}

Home.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

export default Home;