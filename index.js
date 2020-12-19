const Discord = require('discord.js');
const client = new Discord.Client();
const token =process.env.token;

client.on('ready', () => {
  console.log('켰다.');
  client.user.setActivity('하지호 먹기', { type: 'PLAYING' })
});

client.on('message', (message) => {
  if(message.content === '응') {
    message.reply('아니야');
  }
});

client.on('message', (message) => {
  if(message.content === '김민성') {
    message.reply('자zi가 너무 작아서 젖가락으로 자위하다가 나가서 뒤저버림');
  }
});

client.on('message', (message) => {
  if(message.content === '하') {
    message.reply('지호구');
  }
});

client.on('message', (message) => {
  if(message.content === '최지호') {
    message.reply('아.. 야필패요?');
  }
});

client.login(token);