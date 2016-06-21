import {Mongo} from 'meteor/mongo';

const User = new Mongo.Collection('user');

export default User;