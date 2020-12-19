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
  if(message.content === '럭루야 김민성') {
    message.reply('자zi가 너무 작아서 젖가락으로 자위하다가 나가서 뒤저버림');
  }
});

client.on('message', (message) => {
  if(message.content === '하') {
    message.reply('지호구');
  }
});

client.on('message', (message) => {
  if(message.content === '럭루야 최지호') {
    message.reply('아무 이유없이 차단하는거 꼴받네');
  }
});

client.on('message', async message => {   
  if (message.author.bot) return;  

  if(message.content === "럭루야 핑"){ 
    message.channel.send(`🏓\`${Date.now() - message.createdTimestamp}\`ms`);
  }
})

client.on('message', (message) => {
  if(message.content === '럭루야 이명박') {
    image.upload('이명박.png');
  }
});

client.login(token);