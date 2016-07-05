import React from 'react';

import {DocHead} from 'meteor/kadira:dochead';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blue400} from 'material-ui/styles/colors';

import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';


class Foot extends React.Component {

    constructor(props) {
        super(props);
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
            //height: 60,
        };

        var linkInfo = {rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons"};
        DocHead.addLink(linkInfo);

        return (
            <div style={style}>
                <Tabs>
                    <Tab
                        icon={<FontIcon className="material-icons">phone</FontIcon>}
                        />
                    <Tab
                        icon={<FontIcon className="material-icons">favorite</FontIcon>}
                        />
                    <Tab
                        icon={<MapsPersonPin />}
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