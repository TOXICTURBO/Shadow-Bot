const Asena = require('../Utilis/events');
const {MessageType} = require('@adiwajshing/baileys');

Asena.addCommand({pattern: 'owner', fromMe: true, desc: 'get the number of creator', dontAddCommandList: true}, (async (message, match) => {
const buff = await getBuffer(url)
const url = 'https://i.imgur.com/NLanTBv.jpeg'
const Dqz = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:Toxic-Turbo\n'
            + 'ORG:Userbot;\n'
            + 'TEL;type=CELL;type=VOICE;waid=916380260672:+91 63802 60672\n' 
            + 'END:VCARD'
await message.client.sendMessage(message.jid, {displayname: "Toxic-Turbo", vcard: Dqz}, MessageType.contact,quoted : {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "status@broadcast"
      },
      message: {
        "imageMessage": {
          "jpegThumbnail": buff.buffer,
          "caption": "© Toxic-Turbo"
        }
      }
 }));           
