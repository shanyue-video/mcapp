import React from 'react';

import {DocHead} from 'meteor/kadira:dochead';

//const Layout = ({head, content, foot}) => (
//  <div>
//    <div>
//      {head()}
//    </div>
//    <div>
//      {content()}
//    </div>
//    <div>
//      {foot()}
//    </div>
//  </div>
//);


class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.methor = props;
    }

    componentDidMount() {
        this.width = document.documentElement.clientWidth;
        this.height = document.documentElement.clientHeight;
    }

    componentWillUnmount() {
        ;
    }

    render() {

        let style = {
            width: this.width,
            height: this.height,
            //fontSize: 132,
        };

        var metaInfo = {name: "viewport", content: "initial-scale=1"};
        DocHead.addMeta(metaInfo);

        return (
            <div style={style}>
                <div>
                    {this.methor.head()}
                </div>
                <div>
                    {this.methor.content()}
                </div>
                <div>
                    {this.methor.foot()}
                </div>
            </div>
        );
    }

}


export default Layout;
