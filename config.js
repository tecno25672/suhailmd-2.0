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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "50934780395,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_02_12_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc1LFxuICAgICAgICA0NixcbiAgICAgICAgNjgsXG4gICAgICAgIDUxLFxuICAgICAgICA0MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDM0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA1LFxuICAgICAgICA0MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjAxLFxuICAgICAgICA1MyxcbiAgICAgICAgMzksXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDQ0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDM4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTA4LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQxLFxuICAgICAgICA0MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjMxLFxuICAgICAgICA0MixcbiAgICAgICAgMTIyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDgxLFxuICAgICAgICA2MixcbiAgICAgICAgMTAzLFxuICAgICAgICAyNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDUsXG4gICAgICAgIDI0LFxuICAgICAgICAzMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzksXG4gICAgICAgIDExNixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjM0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjUyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDk4LFxuICAgICAgICAxODUsXG4gICAgICAgIDEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTkwLFxuICAgICAgICA1NCxcbiAgICAgICAgMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU3LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDM4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDQwLFxuICAgICAgICA4NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTksXG4gICAgICAgIDY3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTgzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTc5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTY4LFxuICAgICAgICA5MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDQ3LFxuICAgICAgICA3MCxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjksXG4gICAgICAgIDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODcsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjIzLFxuICAgICAgICA4LFxuICAgICAgICAyMDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDU0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDg4LFxuICAgICAgICAxMCxcbiAgICAgICAgMzksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDksXG4gICAgICAgIDg0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTU4LFxuICAgICAgICA0NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDExLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQyLFxuICAgICAgICA4MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSm5iclk4MS9KOWZMMjhoaVNLVnI1OW1RUGsydVdhNEcxQm0wRUlwdytLOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI1MDkzNDc4MDM5NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOTVFQjE4QjQwQzZBQURGNzZCMUY5N0U3NzkxRkZCMkRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM0ODE4NTQyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNTA5MzQ3ODAzOTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjdCQkUxRjBDNEZCMUM3NDgyNTcxOEMzQUNBQTI5ODE5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNDgxODU0M1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJBc1VvSjhPUlEtcTRTLUxPZ2FEbWlBXCIsXG4gIFwicGhvbmVJZFwiOiBcImIxZWM2ODA2LWVmMjUtNDlhOS1iYjA2LWZlNzQzYmRiNTgzZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzQsXG4gICAgICAxMjIsXG4gICAgICAyMDUsXG4gICAgICA1OCxcbiAgICAgIDExMSxcbiAgICAgIDIwNSxcbiAgICAgIDExOSxcbiAgICAgIDAsXG4gICAgICA5NyxcbiAgICAgIDI0MCxcbiAgICAgIDE1NixcbiAgICAgIDExMSxcbiAgICAgIDYxLFxuICAgICAgNzEsXG4gICAgICAxMTksXG4gICAgICAxNzQsXG4gICAgICA1OCxcbiAgICAgIDcxLFxuICAgICAgMjU0LFxuICAgICAgMTc1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1LFxuICAgICAgMjMyLFxuICAgICAgMTg5LFxuICAgICAgMTEwLFxuICAgICAgMjUwLFxuICAgICAgMTY4LFxuICAgICAgNzUsXG4gICAgICAxNjEsXG4gICAgICAxMTgsXG4gICAgICA3OCxcbiAgICAgIDExOCxcbiAgICAgIDExMCxcbiAgICAgIDIxNCxcbiAgICAgIDEzMCxcbiAgICAgIDE0OSxcbiAgICAgIDE0OCxcbiAgICAgIDE2NixcbiAgICAgIDE1NCxcbiAgICAgIDE0MCxcbiAgICAgIDE1NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJaWVlDWkFIMlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNTA5MzQ3ODAzOTU6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjYxMzUzNTU4MzAyODMxOjFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiUmFjaG914p2k77iPXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT09wNG9JRkVPZjFuTHNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJrb3hEY0xaVFppbU16cWluUW1OK2V5eTIrT1RwL2ZUTE1nU2ZYbWhDNUdVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlZleUtUVlRNdlhVUXNvM0RhUUpmTmxPYTIzVnpXUGpNVnhpaFFZMHRUU29XSkJMVS82enk3aXVTRENqT3Fyai9oWjVleE1CdjN1bGIzdUIwdXQzeUNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIklNNVFHUXNabHMwL0g3d2NYNXFWUmxrUnJHOElkZ2ZKN1ppSG1yZmh4cTl0TWl6b0xBWk8rMFU2SjVuSElLcEsyVTdZalV2Q1Y5SUlSUGJZZm43eUJ3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjUwOTM0NzgwMzk1OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0ODE4NTM5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQk9sXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCT2wuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJZUVh6czdTS3c3MWIzeGVPZVM1TzlzRWNVc0d5K1cvRVBJb3lsdjBFN0FvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzNDc5ODI1NjMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczNDgxODU0MTk0NFwifSIKfQ=="  // PUT your SESSION_ID


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
