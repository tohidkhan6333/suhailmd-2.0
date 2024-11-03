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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_03_11_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjM3LFxuICAgICAgICA1NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTIxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjE5LFxuICAgICAgICA1MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDcwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjM5LFxuICAgICAgICA5MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDgyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExMixcbiAgICAgICAgNzQsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDYwLFxuICAgICAgICAzNyxcbiAgICAgICAgODksXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODksXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTc3LFxuICAgICAgICA4NixcbiAgICAgICAgMyxcbiAgICAgICAgOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDMwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTksXG4gICAgICAgIDMzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDQ1LFxuICAgICAgICA2NixcbiAgICAgICAgMjQyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5LFxuICAgICAgICA1LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA3MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjksXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjMyLFxuICAgICAgICA2NixcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTYxLFxuICAgICAgICA2MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDgzLFxuICAgICAgICA5MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAzMyxcbiAgICAgICAgNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTksXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTg5LFxuICAgICAgICA5MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjM4LFxuICAgICAgICA0NixcbiAgICAgICAgMTUwLFxuICAgICAgICA5NixcbiAgICAgICAgMixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTksXG4gICAgICAgIDE3MixcbiAgICAgICAgNDEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTYyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgODEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNixcbiAgICAgICAgODksXG4gICAgICAgIDE2NixcbiAgICAgICAgNjQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTk3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA0LFxuICAgICAgICA2NixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDU3LFxuICAgICAgICAzMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAzNixcbiAgICAgICAgMjQ0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzLFxuICAgICAgICA0MixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDY5LFxuICAgICAgICA0NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxODQsXG4gICAgICAgIDExLFxuICAgICAgICA5OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDgzLFxuICAgICAgICA5NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDMzLFxuICAgICAgICA0NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDk0LFxuICAgICAgICA4MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMSxcbiAgICAgICAgMTMyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiV1hDVEJJUVpoSXRuVFo1bnBXSkRVVEdGWEUxUURESFpBYjV1a1owbkJWbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNUNpSmJpRXRSZ3FSN05tOXVrcDZ4Z1wiLFxuICBcInBob25lSWRcIjogXCJhNWEwZWZmZi1hYjZhLTRhNzQtYmU3Yy0wOTYzMTIwNWJiMDNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE4LFxuICAgICAgMTcwLFxuICAgICAgMjUsXG4gICAgICAxNTMsXG4gICAgICAyMTAsXG4gICAgICA3MCxcbiAgICAgIDE4MixcbiAgICAgIDE0NSxcbiAgICAgIDIxOSxcbiAgICAgIDE2NCxcbiAgICAgIDIzMixcbiAgICAgIDgwLFxuICAgICAgOTUsXG4gICAgICAxNDUsXG4gICAgICAyNixcbiAgICAgIDEzOSxcbiAgICAgIDc4LFxuICAgICAgMTIxLFxuICAgICAgMTIsXG4gICAgICA5OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzNCxcbiAgICAgIDE5NixcbiAgICAgIDE3MyxcbiAgICAgIDY1LFxuICAgICAgMTMsXG4gICAgICA5NSxcbiAgICAgIDMzLFxuICAgICAgMTgzLFxuICAgICAgMjE4LFxuICAgICAgODUsXG4gICAgICA5MSxcbiAgICAgIDEzMCxcbiAgICAgIDEwOCxcbiAgICAgIDE5LFxuICAgICAgMjIzLFxuICAgICAgNjYsXG4gICAgICA1NixcbiAgICAgIDIzOCxcbiAgICAgIDI0MyxcbiAgICAgIDIwMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTR0FWWFc0UVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE4OTMwMzU4NDUyOjM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDE4MzcxNzY1NjU4Nzg6MzhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSWZqZ2RVRkVNclpucmtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI1K1A2cjJMS0g2RVBaVGRHc3dzczVUdzhrZzJnNXVXMVp2ODM5RlZlTmg0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlNwYTh0U1I4aUIrYndmbnRwK1YxWW9UbzYreFoxYnlFWDNGcFk4YlFnUmduR1BsWmdzeEkvbmNMWUhUMStobUIrLyt6RGdORGFJVmhFeHFiVCs1ZERBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlZ1NjNFenBEaTJQZmtRY3AwaTI3bzZyZVJ0NVNDYTlHZTBnMFlCdDhrZmFUM09hV1pNU3JhNXluVHg3c2tZeTk4MEVSS1phc0NYK2Nra1VDUDNEdEFBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxODkzMDM1ODQ1MjozOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDY1MzM5MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNZMlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ1kyLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUGY2ejdLa3VYMDU4MGpQM3dTeVMxOWd0dDhMVzB2bWtSQVlmcW92KzVVND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTIwNDY0MjYxLFwiY3VycmVudEluZGV4XCI6NSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzMwNTcyMTQ0MDcyXCJ9Igp9"  // PUT your SESSION_ID 


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
