export default {
    login({Meteor}) {
        console.log("logining...");
        Meteor.loginWithPassword('dengjing', '123456');
    },
    logout() {
        console.log("logouting...");
        Meteor.logout();
    }
}