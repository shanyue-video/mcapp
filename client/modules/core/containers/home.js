import Home from '../components/home';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, userId}, onData) => {
    const {Meteor, Collections, LocalState} = context();

    const isLogin = LocalState.get('user');
    console.log('isLogin');
    console.log(isLogin);

    if (Meteor.subscribe('user', userId).ready()) {
        const user = Collections.User.findOne(userId);
        onData(null, {user});
    } else {
        const post = Collections.User.findOne(userId);
        if (post) {
            onData(null, {post});
        } else {
            onData();
        }
    }
};

export default composeAll(
    composeWithTracker(composer),
    useDeps()
)(Home);
