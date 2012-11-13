var irc = require('irc');
var client = new irc.Client('chat.freenode.net', 'Sudobot', {
    channels: ['#sudoroom'],
});

client.addListener('message', function(from, to, message) {

	if(message.indexOf('yarr') > -1) {
		client.say(to, 'Arrr Matey!');
	}
});

client.addListener('message', function(from, to, message) {
    
    if(message.indexOf('<3') > -1) {
        client.say(to, '<3');
    }
});

client.addListener('message', function(from, to, message) {
    if(message == 'randomize') {
        client.say(to, Math.round(Math.random() * 10));
    }
});
