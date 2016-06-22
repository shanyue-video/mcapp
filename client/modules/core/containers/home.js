import Home from '../components/home';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
    const {Meteor, Collections, LocalState} = context();

    const user = Meteor.user();
    console.log('isLogin' + LocalState.get('is'));
    console.log(user);

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

const depsMapper = (context, actions) => ({
    login: actions.home.login,
    logout: actions.home.logout,
    context: () => context
});

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(Home);
