const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_18_12_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDI5LFxuICAgICAgICAzMixcbiAgICAgICAgMjE1LFxuICAgICAgICA3NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTUsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjIwLFxuICAgICAgICA5LFxuICAgICAgICA4MixcbiAgICAgICAgMTc0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDMzLFxuICAgICAgICA0NSxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc3LFxuICAgICAgICAxMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjcsXG4gICAgICAgIDExNixcbiAgICAgICAgNjcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDk2LFxuICAgICAgICA1MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODEsXG4gICAgICAgIDk3LFxuICAgICAgICAzNixcbiAgICAgICAgODcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTksXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAzMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjI3LFxuICAgICAgICA1NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMyxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTcyLFxuICAgICAgICA3OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDYwLFxuICAgICAgICAxODYsXG4gICAgICAgIDE2LFxuICAgICAgICA1MixcbiAgICAgICAgNzQsXG4gICAgICAgIDc3LFxuICAgICAgICAxMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODQsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTkxLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MixcbiAgICAgICAgMTAsXG4gICAgICAgIDk2LFxuICAgICAgICA2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTI2LFxuICAgICAgICA4MixcbiAgICAgICAgMTE2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTUwLFxuICAgICAgICA5LFxuICAgICAgICAyNDksXG4gICAgICAgIDU2LFxuICAgICAgICAxMixcbiAgICAgICAgNzIsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDk2LFxuICAgICAgICAxODEsXG4gICAgICAgIDU3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzksXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjM3LFxuICAgICAgICA1NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDU4LFxuICAgICAgICA1NSxcbiAgICAgICAgODgsXG4gICAgICAgIDIsXG4gICAgICAgIDQ3LFxuICAgICAgICA0MixcbiAgICAgICAgMTkwLFxuICAgICAgICA4MCxcbiAgICAgICAgOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDksXG4gICAgICAgIDc0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ5amw0SVN5czBjVG45dFUwcXcyejRqN3NQR0RleHl1TWlnM3R4QkJEK1ZFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjUwOTM0NzgwMzk1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDMTE4QUU0MkRFRDhEM0U0NjFCQzA2NDJBQzc3NUE1NlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzQ5NzA2ODRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI1MDkzNDc4MDM5NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiREZBQjhBMzk2MTdEOUQwQjAyODU4Q0IxMkJEMDMzOUZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM0OTcwNjg0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIi00SWVBQVozUm5tZF9tQnIzWUdnMHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiY2VlMDM5NTUtNGUyNC00Nzc4LWExNzEtY2ZjMDAyOWYwZmYwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMSxcbiAgICAgIDIyMixcbiAgICAgIDU2LFxuICAgICAgMjM0LFxuICAgICAgNzYsXG4gICAgICA0OCxcbiAgICAgIDgsXG4gICAgICAyNTQsXG4gICAgICAxOTUsXG4gICAgICAyNDEsXG4gICAgICAxOSxcbiAgICAgIDIwNixcbiAgICAgIDY5LFxuICAgICAgNjEsXG4gICAgICAyMTQsXG4gICAgICA1OSxcbiAgICAgIDExNyxcbiAgICAgIDAsXG4gICAgICAyMDksXG4gICAgICAxMzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODYsXG4gICAgICAxMTYsXG4gICAgICAxOTcsXG4gICAgICAyMjQsXG4gICAgICAyMjUsXG4gICAgICAxMjcsXG4gICAgICAyMSxcbiAgICAgIDExNixcbiAgICAgIDYzLFxuICAgICAgMjU1LFxuICAgICAgOTEsXG4gICAgICAxOTksXG4gICAgICAxOTIsXG4gICAgICA1MixcbiAgICAgIDExMixcbiAgICAgIDIxNSxcbiAgICAgIDQsXG4gICAgICAxNjYsXG4gICAgICAzOSxcbiAgICAgIDQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkJLWDg3MVg4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI1MDkzNDc4MDM5NTozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNjEzNTM1NTgzMDI4MzE6M0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJSYWNob3XinaTvuI9cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPV3A0b0lGRUxhYXByc0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImtveERjTFpUWmltTXpxaW5RbU4rZXl5MitPVHAvZlRMTWdTZlhtaEM1R1U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidFdGWnhMY2s3ZjM1czZXeFpwS3lmUmNPaHRGcFhRSGxZelNlS1gydGdLQ3dhVHZBSlp2UC9GTkFUZXg0Y2RVd3U2bkJjWkdMR3U5cGRVdEJvcHlSRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibjA5YzVtTXJqRHFFM3ZjZTVZd05pZW1sRDJ5WmtkcFhJNHpjVlVPYTZXTlJQSHVlNURHbkNNY2NHYmIzN1ZmcHZBZldBQVFGTmxWcG1NQUlhRHFyaHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNTA5MzQ3ODAzOTU6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQ5NzA2ODEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDN3dcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUM3dy5qc29uIjogIntcImtleURhdGFcIjpcIkZxNWVpM2ZOc1hNVjRINWZLYS9JcHptdDJYVTZUOWhEcFZwT0pyUUQzOU09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM0Nzk4MjU2NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzM0OTcwNjg0MTYxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
