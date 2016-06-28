import React from 'react';

import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Avatar from 'material-ui/Avatar';
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
    }

    getChildContext() {
        baseTheme.palette.primary1Color = blue400;
        return { muiTheme: getMuiTheme(baseTheme) };
    }

    handleToggle() {
        //let isOpen = false;
        //if(!this.state)
        //    isOpen = false;
        //else
        //    isOpen = this.state.open;
        this.setState({open: !this.state.open});
        //this.setState({open: !this.refs.drawerRef.getOpen()});
    }

    render() {
        const style = {
            position: "fixed",
            top: 0,
            left: 0,
            height: 60,
        };

        const LoginMenuItems = (
            <div>
            <MenuItem value="1" primaryText="Refresh" />
            <MenuItem value="2" primaryText="Send feedback" />
            <MenuItem value="3" primaryText="Settings" />
            <MenuItem value="4" primaryText="Help" />
            <MenuItem value="5" primaryText="Sign out" onTouchTap={this.props.logout} />
            </div>
        );

        const UnloginMenuItems = (
            <div>
                <MenuItem value="0" primaryText="Login" onTouchTap={this.props.login} />
            </div>
        );

        return (
            <div>
                <Drawer ref='drawerRef' open={this.state.open}>
                    <MenuItem>Menu Item</MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>
                </Drawer>
                <AppBar
                    title=""
                    style={style}
                    iconElementLeft={
                        <FloatingActionButton
                            mini={true}
                            iconStyle={{backgroundImage: 'url(' + '/resources/icons/icon-29x29.png' + ')'}}
                            onMouseDown = {this.handleToggle}
                        >
                        </FloatingActionButton>
                    }
                    //iconElementLeft={
                        //<Avatar src='/resources/icons/icon-29x29.png' size={40} />
                        //<IconMenu
                        //    iconButtonElement={<Avatar src='/resources/icons/icon-29x29.png' size={40} />}
                            //anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                            //targetOrigin={{horizontal: 'left', vertical: 'top'}}
                        //>
                            //{this.props.user ? LoginMenuItems : UnloginMenuItems}
                        //</IconMenu>
                    //<!--}-->
                />
            </div>
        );
    }

}

Home.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

//Home.getChildContext = () => {
//    baseTheme.palette.primary1Color = blue400;
//    return { muiTheme: getMuiTheme(baseTheme) };
//};

export default Home;