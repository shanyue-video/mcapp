import React from 'react';

const Layout = ({head, content, foot}) => (
  <div>
    <div>
      {head()}
    </div>
    <div>
      {content()}
    </div>
    <div>
      {foot()}
    </div>
  </div>
);

export default Layout;
