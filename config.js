const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("94774407991")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://harshababaah:magemani@cluster0.alzfbuv.mongodb.net/"
global.port= process.env.PORT || 5000
global.email = 'harshasamanmax7@gmail.com'
global.github = 'https://github.com/hhsaman/-Queen-Nethu-MD-Bot-'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '94774407991'
global.devs = '94774407991';
global.website = 'https://github.com/mrhansamala/-Queen-Nethu-MD-Bot-' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/d229929fd0e975d64010c.jpg'
module.exports = {
  botname: process.env.BOT_NAME || 'Queen Nethu',
  ownername:process.env.OWNER_NAME || 'MR.HARSHA',
  sessionName: process.env.SESSION_ID || '',
  author: process.env.PACK_INFO.split(";")[0] || 'author', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'true',
  packname: process.env.PACK_INFO.split(";")[1] || 'harsha',
  autoreaction: process.env.AUTO_REACTION || 'on',
  antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokey',
  alwaysonline: process.env.ALWAYS_ONLINE || 'true',
  antifake : process.env.FAKE_COUNTRY_CODE || '',
  readmessage: process.env.READ_MESSAGE || true,
  HANDLERS: process.env.PREFIX || ['.'],
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "flase",
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.ANTILINK_ACTION || 'remove',
  BRANCH: 'main',
  ALIVE_MESSAGE: process.env.ALIVE_MESSAGE || 'I ΔM ΩΠLIΠΣ ΠΩШ QUΣΣΠ ΠΣTHU MD',
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || 'OPENAI_KEY',
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'SECKTOR',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
