import React from 'react';

import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blue400} from 'material-ui/styles/colors';


class Home extends React.Component {

    getChildContext() {
        baseTheme.palette.primary1Color = blue400;
        return { muiTheme: getMuiTheme(baseTheme) };
    }

    render() {
        const style = {
            position: "fixed",
            top: 0,
            left: 0,
            //color: blue400,
            //backgroundColor: blue400,
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
                <AppBar
                    title="应用ABcde"
                    style={style}
                    iconElementRight={
                        <IconMenu style={{backgroundColor: blue400}}
                            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                            anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                            targetOrigin={{horizontal: 'left', vertical: 'top'}}
                        >
                            {this.props.user ? LoginMenuItems : UnloginMenuItems}
                        </IconMenu>
                    }
                />
            </div>
        );
    }

}

Home.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

export default Home;