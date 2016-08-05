import {LogLog} from '../../lib/collections';
import {Meteor} from 'meteor/meteor';

export default function () {
    Meteor.publish('log_log', function () {
        return LogLog.find();
    });
}
