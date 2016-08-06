export default function ({Collections, Meteor}) {
  Meteor.methods({
    'loglog.log'(text) {
      const createdAt = new Date();
      console.log(createdAt.getTime());
      console.log('stubs log...');
      Collections.LogLog.insert({
        text, createdAt
      });
    }
  });
}