 const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 8,
  description: "**all commands**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setTitle(`**Hyper Music  Commands**`)
    .setThumbnail("https://media.tenor.com/images/3145445a2c5bde03ac708c2c309fdbca/tenor.gif")
    .setAuthor("Prefix [ $ ]","")
    .setDescription(` 
\`Help Commands\`

**Music Command**

\` $paly , $stop , $skip , $skipto , $volume \`

\` $queue , $loop , $pause , $nowplaying \`

\` $shuffle , $uptime , $search , $remove \`

\` $clip , $clips , $lyrics , $move , $playlist \`

**Info Command**

\` $bot , $support , $invite , $help , $ping \`



     
**[ invite ](https://discord.com/api/oauth2/authorize?client_id=853696230575570955&permissions=0&scope=bot)** , **[ support ](https://discord.gg/3wykSpqjZq)**      

**[ vote ](https://top.gg/bot/780578520870158337)**                                                                
 `)
    
    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);

  }
};
