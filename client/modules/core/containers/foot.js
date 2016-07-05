import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import Foot from '../components/foot';

export const composer = ({context}, onData) => {
    onData(null, 'a');
};

export default composeAll(
    composeWithTracker(composer)
)(Foot);
