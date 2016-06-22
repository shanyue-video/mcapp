import {Mongo} from 'meteor/mongo';

const UserLog = new Mongo.Collection('user_log');

UserLog.allow({
    insert: () => {
        return true;
    },
});

export default UserLog;