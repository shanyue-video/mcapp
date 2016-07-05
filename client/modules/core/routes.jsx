import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout.jsx';
import Home from './containers/home';
import Content from './containers/content';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'home',
    action() {
      mount(MainLayoutCtx, {
        head: () => (<Home />),
        content: () => (<Content />),
        foot: () => (<div>aaa</div>),
      });
    }
  });
}
