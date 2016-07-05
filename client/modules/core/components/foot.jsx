import React from 'react';

import {DocHead} from 'meteor/kadira:dochead';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blue400} from 'material-ui/styles/colors';

import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import Avatar from 'material-ui/Avatar';
import ListItem from 'material-ui/List/ListItem';


class Foot extends React.Component {

    constructor(props) {
        super(props);
        this.getChildContext = this.getChildContext.bind(this);
    }

    getChildContext() {
        baseTheme.palette.primary1Color = blue400;
        return { muiTheme: getMuiTheme(baseTheme) };
    }

    render() {

        const style = {
            position: "fixed",
            bottom: 0,
            width: "100%",
            left: 0,
            //height: "80%",
            //lineHeight: 60,
            //fontWeight: 100,
        };

        var linkInfo = {rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons"};
        DocHead.addLink(linkInfo);

        return (
            <div style={style}>
                <Tabs>
                    <Tab
                        label={<span style={{fontSize: 12}}>收藏</span>}
                        icon=
                            {<Avatar
                                src="/resources/icons/icon-29x29.png"
                                size={12}
                             />}
                        />
                    <Tab
                        label={<span style={{fontSize: 12}}>喜欢</span>}
                        icon=
                            {<Avatar
                                src="/resources/icons/icon-29x29.png"
                                size={12}
                             />}
                        />
                    <Tab
                        label={<span style={{fontSize: 12}}>学习</span>}
                        icon=
                            {<Avatar
                                src="/resources/icons/icon-29x29.png"
                                size={12}
                             />}
                        />
                </Tabs>
            </div>
        );
    }
}

Foot.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

export default Foot;