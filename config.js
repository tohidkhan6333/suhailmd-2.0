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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_53_11_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjMyLFxuICAgICAgICA3MixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDkwLFxuICAgICAgICA4NixcbiAgICAgICAgMTYyLFxuICAgICAgICA1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDgzLFxuICAgICAgICA1MixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDg2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNixcbiAgICAgICAgMTU0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjEsXG4gICAgICAgIDEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDcxLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTksXG4gICAgICAgIDU4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDY1LFxuICAgICAgICA0MCxcbiAgICAgICAgNzksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTkxLFxuICAgICAgICA4MixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTkwLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzgsXG4gICAgICAgIDgwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjgsXG4gICAgICAgIDQwLFxuICAgICAgICA5MixcbiAgICAgICAgMTMxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDU0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTEyLFxuICAgICAgICA5NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDY3LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDc3LFxuICAgICAgICA3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjksXG4gICAgICAgIDEyNixcbiAgICAgICAgMjA5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDc4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEyLFxuICAgICAgICA4LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxLFxuICAgICAgICA2NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxODYsXG4gICAgICAgIDEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjM3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDksXG4gICAgICAgIDI0MixcbiAgICAgICAgOTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwLFxuICAgICAgICAxODgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJNQ3dudzlvd2d6RnJjdnVxM3Z2QVNQRlpmcElpajJXOW1uMVMwV3cvUURRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxNzg0OTkxNzM1MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMDY3OTU3NkE0MTUzOTRGMzY5ODJEOThEMUYxQ0EyNEZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMyNDU5OTc3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkFHM3FBMHNpVEJDRGY1UTJGNWhNeUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmQ5ODFmODQtMjRjOS00NWE3LWFlYWQtMDU1NDQ1NjhmMzliXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMCxcbiAgICAgIDEyNyxcbiAgICAgIDQ2LFxuICAgICAgNzksXG4gICAgICA3NSxcbiAgICAgIDE5MSxcbiAgICAgIDIwNyxcbiAgICAgIDU5LFxuICAgICAgMTcsXG4gICAgICAyMzksXG4gICAgICA1OSxcbiAgICAgIDE3MyxcbiAgICAgIDI0MixcbiAgICAgIDE2MCxcbiAgICAgIDc5LFxuICAgICAgODgsXG4gICAgICAxMjgsXG4gICAgICAyMjEsXG4gICAgICA0OCxcbiAgICAgIDE5NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4OCxcbiAgICAgIDEzNyxcbiAgICAgIDQwLFxuICAgICAgMTgyLFxuICAgICAgMTA0LFxuICAgICAgNjQsXG4gICAgICAxLFxuICAgICAgMjQ3LFxuICAgICAgMTcyLFxuICAgICAgNjcsXG4gICAgICAxMTMsXG4gICAgICAyMTMsXG4gICAgICA2OSxcbiAgICAgIDEwOCxcbiAgICAgIDE4LFxuICAgICAgMjA3LFxuICAgICAgODAsXG4gICAgICAxNjksXG4gICAgICA5OSxcbiAgICAgIDI0OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJZTDhRVDlXRFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE3ODQ5OTE3MzUwOjM2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2VhPCdlaNcXG5cXG5cXG5cXG7wnZWLXFxuXFxuXFxu8J2VoFxcblxcblxcbvCdlZlcXG5cXG5cXG7wnZWaXFxuXFxuXFxu8J2VlVwiLFxuICAgIFwibGlkXCI6IFwiMTExODYyNjU4MTU0NjI3OjM2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ04vUHhzY0NFTUQ3akxvR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRC9OVEVvYUR4blhJME1tbHYzOEdGTnRhTURmUmlMaWxKaTNUek5LQ0p6ST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ1amdSVTJlWVZpYm9hNFpCR2VHUEREcFU1YURLaE90WXBheUlEMkFkdHZVUXJjcVVZTmZkeE5lc0t0U1FKTS84SkxuR0w4bUpkRk9Ybi9PNGhRcjVDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJiNVdTdmd4R2xsMUJjNmkyaGc3R0p1TVFlOTVMeDU2a0J3UWlicGwyVkRKVG0xb0VQQ1E4SEFwNjZYM0tNV3ovY0pvcW9tL2RWamIzb0Jxa1hVWlBqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTc4NDk5MTczNTA6MzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjQ1OTk3MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU5CeVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTkJ5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiRitocVQ2dEFyZm1ZcEF2MDlTejhQaXN4VWJPeGVUb21YZXlwYzNOcHI4bz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2ODY5MjU3OTEsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
