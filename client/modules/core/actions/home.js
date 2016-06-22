export default {
    login({Meteor}) {
        console.log("logining...");
        Meteor.loginWithPassword('dengjing', '123456');
    },
}