import {User} from '../../lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
    Meteor.publish('user', function (userId) {
        check(userId, String);
        const selector = {_id: userId};
        return User.find(selector);
    });
}
