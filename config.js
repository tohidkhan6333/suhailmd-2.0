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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_42_11_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTgxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTg0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwLFxuICAgICAgICA0MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDUxLFxuICAgICAgICA1MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI5LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDksXG4gICAgICAgIDczLFxuICAgICAgICAyMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjAwLFxuICAgICAgICA0OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTg0LFxuICAgICAgICA0OSxcbiAgICAgICAgODUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc3LFxuICAgICAgICA4NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDU0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDM4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTA4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY3LFxuICAgICAgICA1NCxcbiAgICAgICAgOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDExMixcbiAgICAgICAgOTgsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMSxcbiAgICAgICAgMjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTAsXG4gICAgICAgIDQsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTc1LFxuICAgICAgICAxODYsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzgsXG4gICAgICAgIDQ1LFxuICAgICAgICA0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTg1LFxuICAgICAgICA5NixcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDc2LFxuICAgICAgICA4NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTY0LFxuICAgICAgICA1OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDExMixcbiAgICAgICAgNjksXG4gICAgICAgIDExMixcbiAgICAgICAgNDMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDksXG4gICAgICAgIDExLFxuICAgICAgICA1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNyxcbiAgICAgICAgMSxcbiAgICAgICAgMTg3LFxuICAgICAgICA5NixcbiAgICAgICAgODgsXG4gICAgICAgIDE1NixcbiAgICAgICAgNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDg5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjksXG4gICAgICAgIDE1LFxuICAgICAgICAxMDksXG4gICAgICAgIDk2LFxuICAgICAgICAxNzksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDMwLFxuICAgICAgICA0OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTIwLFxuICAgICAgICAxODAsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDMsXG4gICAgICAgIDY1LFxuICAgICAgICA2MixcbiAgICAgICAgMTIyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTksXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI0RmM4YjVVV3RaZGxOS3hycHI0ZSt3aWtrMFNIS0dpSDF0UWExOUVkK25RPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxODkzMDM1ODQ1MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQ0Q3QzdCMUZFNjJFM0VCQTI3QzAyMUIwMUJDNzA0QjhcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMxMzk3MzUwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE4OTMwMzU4NDUyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4QjEyRUE5MDBBMERERDE0NTcyNzcyNkM3MkNBODAzN1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzEzOTczNTBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicGR3X2hYZlVTRWlmRFhFckphS1Zid1wiLFxuICBcInBob25lSWRcIjogXCIxZDNiNGU1OC1mMGU3LTQ4YjEtOWZlNy01MjMyNTI4MTEzYzVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ5LFxuICAgICAgMjUwLFxuICAgICAgODksXG4gICAgICAyOSxcbiAgICAgIDE4NSxcbiAgICAgIDI0NSxcbiAgICAgIDIwOCxcbiAgICAgIDE4NyxcbiAgICAgIDE2NCxcbiAgICAgIDE2LFxuICAgICAgMTMxLFxuICAgICAgMTg4LFxuICAgICAgNDYsXG4gICAgICA3MCxcbiAgICAgIDIwNyxcbiAgICAgIDE4NyxcbiAgICAgIDE5NyxcbiAgICAgIDEsXG4gICAgICAxMTAsXG4gICAgICA3M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTYsXG4gICAgICA4NCxcbiAgICAgIDY3LFxuICAgICAgMjMwLFxuICAgICAgMTI2LFxuICAgICAgMTk1LFxuICAgICAgMzYsXG4gICAgICAxOTcsXG4gICAgICAxMzMsXG4gICAgICA0MyxcbiAgICAgIDE5NCxcbiAgICAgIDEyNCxcbiAgICAgIDE4LFxuICAgICAgMzcsXG4gICAgICAxOCxcbiAgICAgIDE5NCxcbiAgICAgIDE4MSxcbiAgICAgIDQsXG4gICAgICA1LFxuICAgICAgMTY2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlFEU0c3NzVHXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTg5MzAzNTg0NTI6NTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI0MTgzNzE3NjU2NTg3ODo1MkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwnZWE8J2Vo1xcblxcblxcbvCdlYtcXG5cXG5cXG7wnZWgXFxuXFxuXFxu8J2VmVxcblxcblxcbvCdlZpcXG5cXG5cXG7wnZWVXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSWpqZ2RVRkVOK056TGtHR0FnZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI1K1A2cjJMS0g2RVBaVGRHc3dzczVUdzhrZzJnNXVXMVp2ODM5RlZlTmg0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImpyNkxzejdhVlBNUnpuSHp2aEpuZzgzU2pHeDMwY3JvVE5HUitYVm10NnhSWG1NdUlrU0ZmdFFhbDZmeTR4T1BzUU5WdU8wSzJmZWJNb3cvVzZ4V0NRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIklmRVVTanRKVCt0RllZWGwzQXBTYXJEZzlLRnVoa2FGV2tlSFZCU3VZVXhMbkM0RUhEMG5rLzZ2SlZFcTNoa3Nrc2V4R3Z0anJ2YnhGeWJaUldISURRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxODkzMDM1ODQ1Mjo1MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTM5NzM0NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNZK1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ1krLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMHp6MFhQdFpFRTRmQzluZnQ5ZmRXUXdCcStEVTJJOXVtMVhnU3VvQVc2dz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTIwNDY0MjYzLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwzXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
