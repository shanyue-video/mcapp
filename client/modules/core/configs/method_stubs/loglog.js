export default function ({Collections, Meteor}) {
  Meteor.methods({
    'loglog.log'(text) {
      const createdAt = new Date();
      Collections.LogLog.insert({
        text, createdAt
      });
    }
  });
}
