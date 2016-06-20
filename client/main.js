import {createApp} from 'mantra-core';
import initContext from './configs/context';
import injectTapEventPlugin from 'react-tap-event-plugin';

// modules
import coreModule from './modules/core';

// init context
const context = initContext();
injectTapEventPlugin();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.init();
