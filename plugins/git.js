/* Copyright (C) Turbo
Mwonu credits kalayalle
Shadow-Turbo
*/

const Maalutty = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Maalutty.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://i.imgur.com/NLanTBv.jpeg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `◄━⦁💝 Toxic-Shadow 💝⦁━►


*owner number Turbo* :https://wa.me/916380260672.
            

*owner number Jifi* :https://wa.me/919995801023.


*owner id instagram* :https://instagram.comtoxic_turbo777.


*github* : coming soon.


*audio commands* :coming soon.


*sticker commands* :coming soon.

◄━⦁💝 Toxic-Shadow 💝⦁━►
■□ ~Turbo~ AND ~Jifi~■□ 

`}) 

}));
