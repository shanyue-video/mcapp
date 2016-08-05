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
        Meteor.call('loglog.log', info, (error) => {
            if(error)
                console.log(`method loglog error ${error}`);
            else
                console.log('success');
        });
        console.log(info);
    }
}