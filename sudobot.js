var irc = require('irc');
var client = new irc.Client('chat.freenode.net', 'Sudobot', {
    channels: ['#sudoroom'],
});

client.addListener('message', function(from, to, message) {

	if(message.indexOf('yar') > -1) {
		client.say(to, 'Arrr Matey!');
	}
});

client.addListener('message', function(from, to, message) {

        if(message.indexOf('<3') > -1) {
                client.say(to, '<3');
        }
});
