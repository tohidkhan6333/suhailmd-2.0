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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_54_11_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDgwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTIxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTcwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDk4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTMyLFxuICAgICAgICA2NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDgzLFxuICAgICAgICA4NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDQ2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTgyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTksXG4gICAgICAgIDcyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDU1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxODQsXG4gICAgICAgIDI0LFxuICAgICAgICA3NixcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE0LFxuICAgICAgICA1NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODcsXG4gICAgICAgIDksXG4gICAgICAgIDM3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTc5LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICA3OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExLFxuICAgICAgICAyNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDUxLFxuICAgICAgICAyNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0LFxuICAgICAgICAyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDMwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTksXG4gICAgICAgIDY0LFxuICAgICAgICAyMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDksXG4gICAgICAgIDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjAwLFxuICAgICAgICA1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY3LFxuICAgICAgICA1NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDc0LFxuICAgICAgICA2LFxuICAgICAgICA0MCxcbiAgICAgICAgOTksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTI4LFxuICAgICAgICA5NCxcbiAgICAgICAgOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTMwLFxuICAgICAgICA0NixcbiAgICAgICAgNDcsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDc5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMSxcbiAgICAgICAgMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDM4LFxuICAgICAgICA0MCxcbiAgICAgICAgMzksXG4gICAgICAgIDI0NixcbiAgICAgICAgMzMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzksXG4gICAgICAgIDExMCxcbiAgICAgICAgMjA3LFxuICAgICAgICA0OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjEyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIms2a2FrQ2t1dTNkWWFOeGtORGgwbyt3bURpMlR1dVg4NXBnSG1IV3hVeUk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInhZTWY5NjhfUTVhTlUwVmVBR0p3eVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzJlYTQ4Y2QtNWZjNi00MmU5LThkM2EtYjc0N2VkYjVjYjVjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ2LFxuICAgICAgMTQ3LFxuICAgICAgNzYsXG4gICAgICAxNTAsXG4gICAgICA2OCxcbiAgICAgIDUzLFxuICAgICAgMTg5LFxuICAgICAgODMsXG4gICAgICAxLFxuICAgICAgNDUsXG4gICAgICAyMzUsXG4gICAgICAxNzEsXG4gICAgICAxNDgsXG4gICAgICA3NSxcbiAgICAgIDExNSxcbiAgICAgIDIxMSxcbiAgICAgIDQwLFxuICAgICAgMjMwLFxuICAgICAgMzAsXG4gICAgICAxNjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzcsXG4gICAgICAyNDUsXG4gICAgICAxMixcbiAgICAgIDEwNSxcbiAgICAgIDE4MCxcbiAgICAgIDQxLFxuICAgICAgMjksXG4gICAgICAxMjIsXG4gICAgICAxMTQsXG4gICAgICAyOCxcbiAgICAgIDMzLFxuICAgICAgOSxcbiAgICAgIDMwLFxuICAgICAgOTUsXG4gICAgICA3NixcbiAgICAgIDE2NyxcbiAgICAgIDIxMixcbiAgICAgIDI1MyxcbiAgICAgIDI1NSxcbiAgICAgIDIyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3WDdSNFoyS1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE3ODQ5OTE3MzUwOjI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2VhPCdlaNcXG5cXG5cXG5cXG7wnZWLXFxuXFxuXFxu8J2VoFxcblxcblxcbvCdlZlcXG5cXG5cXG7wnZWaXFxuXFxuXFxu8J2VlVwiLFxuICAgIFwibGlkXCI6IFwiMTExODYyNjU4MTU0NjI3OjI1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01xdTI3OENFT0t0MTdrR0dCVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiN296eVRqcjdka1pGOEpnSGR6Umg3VFh2eHpXS1Ava3FJc2tDUEQ3T0RWcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI5M29IaEUzZE84VVVNTHU5NHJjeldkNGR3ek4vd3M4TDlDbDU5ZXphaFNsbStYZUh3RmVUbmVKRm9DeGxZUHN6OCtlSEdlUWNHVlJ0NTMwc3liR3BBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJvbk81VWJSMi9QM0ZhdXUwakFWN1AzaGNZbjJ0SDl2a05pNUZWWG9SdDN4aG9RQUI3K1NxOEpMNWF0ZDNJODk4dG5YYVdEUUw3bnIxdWVaTXdHbmdnUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTc4NDk5MTczNTA6MjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTU4MTY3MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU5CSVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTkJJLmpzb24iOiAie1wia2V5RGF0YVwiOlwiS3daUUJFd21rSWhvRHFJZ2pZNU9sUnJnT0NVTXVQZXF6eHM5SHJXN0JUVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2NzA0ODgzOTQsXCJjdXJyZW50SW5kZXhcIjoxMixcImRldmljZUluZGV4ZXNcIjpbMCwyLDEwXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
