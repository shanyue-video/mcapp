export default {
    login({Meteor}) {
        console.log("logining...");
        Meteor.loginWithPassword('554816284@qq.com', '123456');
    },
    logout() {
        console.log("logouting...");
        Meteor.logout();
    },
    log({}, info) {
        console.log("log log ...");
        console.log(info);
    }
}