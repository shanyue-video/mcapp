import React from 'react';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blue400} from 'material-ui/styles/colors';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Divider from 'material-ui/Divider';

class Content extends React.Component {

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
            //display: 'none',
            position: "fixed",
            top: 60,
        };

        return (
            <div style={style}>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>ID</TableHeaderColumn>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Status</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableRowColumn>1</TableRowColumn>
                            <TableRowColumn>John Smith</TableRowColumn>
                            <TableRowColumn>Employed</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>2</TableRowColumn>
                            <TableRowColumn>Randal White</TableRowColumn>
                            <TableRowColumn>Unemployed</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>3</TableRowColumn>
                            <TableRowColumn>Stephanie Sanders</TableRowColumn>
                            <TableRowColumn>Employed</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>4</TableRowColumn>
                            <TableRowColumn>Steve Brown</TableRowColumn>
                            <TableRowColumn>Employed</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
                <Divider />
            </div>
        );
    }
}

Content.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

export default Content;