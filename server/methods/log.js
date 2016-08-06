import {LogLog} from '../../lib/collections';

export default function () {
    Meteor.methods({
        'loglog.log'(text) {
            const ct = new Date();
            console.log(ct.getTime());
            console.log('server log ...');

            // Demo the latency compensations (Delete this in production)
            Meteor._sleepForMs(500);

            // XXX: Do some user authorization
            const createdAt = new Date();
            LogLog.insert({text, createdAt});
        }
    });
}