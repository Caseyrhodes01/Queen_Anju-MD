const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')
cmd({
    pattern: "song",
    desc: "To download songs.",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please give me a url or title")  
const search = await yts(q)
const data = search.videos[0];
const url = data.url
    
    
let desc = `
⫷⦁[ * '-'_꩜ 𝘘𝘜𝘌𝘌𝘕 𝘈𝘕𝘑𝘜 𝘠𝘛 𝘚𝘖𝘕𝘎 𝘋𝘖𝘞𝘕𝘓𝘖𝘈𝘋𝘌𝘙 ꩜_'-' * ]⦁⫸
        
*ɪ ꜰᴏᴜɴ ᴛʜɪꜱ ʀᴇsᴜʟᴛ...*

 ➥ ᴛɪᴛʟᴇ -  ${data.title}

 ➥ ᴜʀʟ - : ${data.url}

 ➥ ᴅᴜʀᴀᴛɪᴏɴ - : ${data.timestamp}

 ➥ ᴠɪᴇᴡs - : ${data.views}

 ➥ ᴜᴘʟᴏᴀᴅ ᴏɴ - ${data.ago}


> *© 𝘘𝘜𝘌𝘌𝘕 𝘈𝘕𝘑𝘜 ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ*
> *ɢɪᴛʜᴜʙ :* github.com/Mrrashmika/Queen_Anju-MD
`

await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download audio

let down = await fg.yta(url)
let downloadUrl = down.dl_url

//send audio message
if (body === 1){
   await conn.sendMessage(from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek});
}else if (body === 2){
   await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"audio/mpeg",fileName:data.title + ".mp3",caption:"*© 𝘘𝘜𝘌𝘌𝘕 𝘈𝘕𝘑𝘜 ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ*"},{quoted:mek});
}
}catch(e){
console.log(e)
  reply(`${e}`)
}
})

//====================video_dl=======================

cmd({
    pattern: "video",
    desc: "To download videos.",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please give me a url or title")  
const search = await yts(q)
const data = search.videos[0];
const url = data.url
    
    
let desc = `
⫷⦁[ * '-'_꩜ 𝘘𝘜𝘌𝘌𝘕 𝘈𝘕𝘑𝘜 𝘠𝘛 𝘝𝘐𝘋𝘌𝘖 𝘋𝘖𝘞𝘕𝘓𝘖𝘈𝘋𝘌𝘙 ꩜_'-' * ]⦁⫸
        
*ɪ ꜰᴏᴜɴ ᴛʜɪꜱ ʀᴇsᴜʟᴛ...*

 ➥ ᴛɪᴛʟᴇ -  ${data.title}

 ➥ ᴜʀʟ - : ${data.url}

 ➥ ᴅᴜʀᴀᴛɪᴏɴ - : ${data.timestamp}

 ➥ ᴠɪᴇᴡs - : ${data.views}

 ➥ ᴜᴘʟᴏᴀᴅ ᴏɴ - ${data.ago}


> *© 𝘘𝘜𝘌𝘌𝘕 𝘈𝘕𝘑𝘜 ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ*
> *ɢɪᴛʜᴜʙ :* github.com/Mrrashmika/Queen_Anju-MD
`

await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download video

let down = await fg.ytv(url)
let downloadUrl = down.dl_url

//send video message
await conn.sendMessage(from,{video: {url:downloadUrl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"video/mp4",fileName:data.title + ".mp4",caption:"*© 𝘘𝘜𝘌𝘌𝘕 𝘈𝘕𝘑𝘜 ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ*"},{quoted:mek})

}catch(e){
console.log(e)
  reply(`${e}`)
}
})
