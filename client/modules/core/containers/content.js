import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import Content from '../components/content';

export const composer = ({context}, onData) => {
    onData(null, 'a');
};

export default composeAll(
    composeWithTracker(composer)
)(Content);
