import Home from '../components/home';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
    const {Meteor, Collections, LocalState} = context();

    const isLogin = LocalState.get('user');
    console.log('isLogin');
    console.log(isLogin);

    const user = Meteor.user();

    const userId = 'test';

    if (Meteor.subscribe('user_log', userId).ready()) {
        Collections.UserLog.insert({'test': userId});
        onData(null, {user});
    } else {
        Collections.UserLog.insert({'test': userId});
        if (user) {
            onData(null, {user});
        } else {
            onData();
        }
    }
};

export default composeAll(
    composeWithTracker(composer),
    useDeps()
)(Home);
