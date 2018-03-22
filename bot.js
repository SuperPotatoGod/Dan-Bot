var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    if (message.substring(0, 1)) {
        var dan = message.substring(0);
		if (dan.indexOf('Dan') >= 0 || dan.indexOf('Dna') >= 0 || dan.indexOf('dan') >= 0 || dan.indexOf('dna') >= 0 || dan.indexOf('DAN') >= 0 || dan.indexOf('DNA') >= 0){
            bot.sendMessage({
                to: channelID,
                message: '<:OneTrueGod:391436612803756032>'
            });
        }
		
		if (dan.indexOf('Hello Dan') >= 0 || dan.indexOf('Hello Dna') >= 0 || dan.indexOf('hello dan') >= 0 || dan.indexOf('hello dna') >= 0 || dan.indexOf('HELLO DAN') >= 0 || dan.indexOf('HELLO DNA') >= 0){
            bot.sendMessage({
                to: channelID,
                message: 'Did someone call me?'
            });
        }
		
		if (dan.indexOf('Lets Go') >= 0 || dan.indexOf('lets go') >= 0 || dan.indexOf('LETS GO') >= 0 || dan.indexOf("Let's Go") >= 0 || dan.indexOf("let's go") >= 0 || dan.indexOf("LET'S GO") >= 0){
            bot.sendMessage({
                to: channelID,
                message: "LET'S GOOOOOHH!"
            });
        }
		
		if (dan.indexOf('Anime Girl') >= 0){
			bot.sendMessage({
                to: channelID,
                message: "Fuck Off"
            });
        }

		if (dan.indexOf('<:battery:>') >= 0){
            bot.sendMessage({
                to: channelID,
                message: ":zap: **Recharged** :zap:"
            });
        }
    }
});
