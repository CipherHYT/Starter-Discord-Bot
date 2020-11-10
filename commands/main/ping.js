module.exports = {
  name: "ping",
  description: "Recieve the discord bot's ping",
  category: "main",
  usage: "ping",
  run: ( client, message ) => {
    message.channel.send(`\`Pong! - ${client.ws.ping}ms\``)
    }
  }
