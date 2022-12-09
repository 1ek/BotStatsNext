# BotStats 

## RakSamp bots statistics

**Bot** - an emulated SAMP account located on the VDS, communicating with the server using the magic of network programming.

Specifically, I'm using RakSamp - a minimalistic fake client with the ability to expand functionality using the Lua API.
So, bot is able to execute LUA scripts.

![Scheme1.](https://i.ibb.co/p10pF19/scheme1.png "Scheme1")

### Every hour bots send statistics to the database
Bot collects all the necessary information, then generates a JSON string, which is sent to the API that manages the placement of information in the database.

![Scheme2.](https://i.ibb.co/jDPHG34/image.png "Scheme2")

### So, we have a database with statistics of hundreds of bots. And that's where the frontend comes into play

![Scheme3.](https://i.ibb.co/71Gh3C7/image.png "Scheme3")

### Currently in development:
* **Realtime interaction with the bot's server chat via WebSockets**

![Scheme4.](https://i.ibb.co/WcpbDjN/image.png "Scheme4")
