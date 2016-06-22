import { Accounts } from 'meteor/accounts-base'
export default {
    login({Meteor}) {
        console.log("logining...");
        Accounts.createUser({username: 'dengjing', password: '123456'});
    },
}