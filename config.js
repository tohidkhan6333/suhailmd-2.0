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
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaGyP933bbVC7G0x0i2T";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaGyP933bbVC7G0x0i2T" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/M1BzE37.jpeg" || "https://i.imgur.com/M1BzE37.jpeg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© TOHIDKHAN" 


global.devs = "917849917350" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "917849917350";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.imgur.com/M1BzE37.jpeg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "917849917350,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_17_11_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzksXG4gICAgICAgIDgwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAzMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgODMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTksXG4gICAgICAgIDgxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDc5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTksXG4gICAgICAgIDU3LFxuICAgICAgICA2MSxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjksXG4gICAgICAgIDksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTU1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgNDcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDczLFxuICAgICAgICA3NCxcbiAgICAgICAgMTMyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTYyLFxuICAgICAgICA2NixcbiAgICAgICAgNDksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNixcbiAgICAgICAgMjI1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODksXG4gICAgICAgIDEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODksXG4gICAgICAgIDExMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5NixcbiAgICAgICAgODksXG4gICAgICAgIDkyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDYsXG4gICAgICAgIDMsXG4gICAgICAgIDI0LFxuICAgICAgICA4MCxcbiAgICAgICAgOSxcbiAgICAgICAgMTU3LFxuICAgICAgICA0MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDU1LFxuICAgICAgICA0OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDM1LFxuICAgICAgICAyMixcbiAgICAgICAgMTcyLFxuICAgICAgICA0MSxcbiAgICAgICAgOSxcbiAgICAgICAgNTksXG4gICAgICAgIDExNixcbiAgICAgICAgNTAsXG4gICAgICAgIDEwLFxuICAgICAgICAxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDksXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDU5LFxuICAgICAgICAxOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTYzLFxuICAgICAgICA1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MCxcbiAgICAgICAgNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjksXG4gICAgICAgIDU2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjAsXG4gICAgICAgIDgzLFxuICAgICAgICAxODUsXG4gICAgICAgIDQ2LFxuICAgICAgICA5MyxcbiAgICAgICAgMjIwLFxuICAgICAgICA1NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDUzLFxuICAgICAgICA2OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDMyLFxuICAgICAgICA0NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDYzLFxuICAgICAgICAxMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTM5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlZZby9GOFlmZ1lZM3M2Mjc0VDNPVXFTb1FRbng0UkNaNWgvSXRuN1pRRUE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE3ODQ5OTE3MzUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1NUQwQzhFNTZGNzg3QjUyNkU3RjQyQ0Q3REUwQ0EyRlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzIwMTg2NjFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTc4NDk5MTczNTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjFCNTQ2NUVDQjlFRDY5RTQ0Mzk5QURGRDY5MTM5NDE1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMjAxODY2MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxNzg0OTkxNzM1MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQUI1OEQzMzVFQ0NCNzhCREU3MDc5QzExQTQwOEFEN0RcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMyMDE4NjY1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE3ODQ5OTE3MzUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGMEMxRkIzOUJDRTI5QjExOEZBMUZBQjBBMDkyOTM0MVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzIwMTg2NjVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidFg2Qi0tVFBRVldyQ0U1a1lpUzNjZ1wiLFxuICBcInBob25lSWRcIjogXCI4ZGUxNzQwMy05NGIxLTQzY2EtYjcyMC0yZDk0OGQwNDQxYzZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM3LFxuICAgICAgMTE3LFxuICAgICAgOTgsXG4gICAgICA4NCxcbiAgICAgIDgwLFxuICAgICAgODgsXG4gICAgICAyMjQsXG4gICAgICAxNDQsXG4gICAgICAxMjYsXG4gICAgICAxNTksXG4gICAgICA3LFxuICAgICAgMjQ2LFxuICAgICAgMjYsXG4gICAgICAxMzEsXG4gICAgICAxMTEsXG4gICAgICAxOTgsXG4gICAgICAyNTEsXG4gICAgICAxMzgsXG4gICAgICAxOTAsXG4gICAgICA5NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDQsXG4gICAgICAxNzksXG4gICAgICAyMDQsXG4gICAgICAyMjAsXG4gICAgICA5LFxuICAgICAgMjExLFxuICAgICAgMTAsXG4gICAgICAxMjEsXG4gICAgICAyMzQsXG4gICAgICA5OCxcbiAgICAgIDMwLFxuICAgICAgMTYwLFxuICAgICAgMjM1LFxuICAgICAgMjQ4LFxuICAgICAgMzcsXG4gICAgICAxMjUsXG4gICAgICAxOTAsXG4gICAgICA0LFxuICAgICAgMjQyLFxuICAgICAgMjA1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjJOOFJFTU1HXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTc4NDk5MTczNTA6MzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZWE8J2Vo1xcblxcblxcblxcbvCdlYtcXG5cXG5cXG7wnZWgXFxuXFxuXFxu8J2VmVxcblxcblxcbvCdlZpcXG5cXG5cXG7wnZWVXCIsXG4gICAgXCJsaWRcIjogXCIxMTE4NjI2NTgxNTQ2Mjc6MzJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTi9QeHNjQ0VONkQ4cmtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJEL05URW9hRHhuWEkwTW1sdjM4R0ZOdGFNRGZSaUxpbEppM1R6TktDSnpJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkEwMFFoQkY4T3lLKzlDNVN3aGNBSlRNY0Zmc2NIWXpmSjkxcVUzVXJlM2RPWENPZy9aNTJYSU5ISHpwY3p5QjFjVEtFTHVVL1U3SWd2MHhRbWJIM0NBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkxKQkQ2UmQzWlJhMzJCWDZXajMrNms0VWw2ZnlNeDQ1dEZCaHZDVnJXdlo0NnQrUzRieCt3UkI2RGF6K2tOZ0VqRCs1U1BPVVVxZUxFOXJLbFRTMGpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxNzg0OTkxNzM1MDozMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA1MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyMDE4NjYwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTkJ4XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOQnguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJZNk9TWHZNY2xhSjhJdktxQmpwOFJFRVdYYXpvaGZMM3QxeTJJY1hIdUhvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY4NjkyNTc5MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMyMDE4NjYwMzczXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || " ᴘᴏᴡᴇʀᴇᴅ ʙʏ Tohid Khan ® 』" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "TOHID-KHAN",
  packname: process.env.PACK_NAME || "TOHID-KHAN",
  botname : process.env.BOT_NAME  || "TOHID-KHAN",
  ownername:process.env.OWNER_NAME|| "TOHID-KHAN",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "TOHID"  ).toUpperCase(),



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
