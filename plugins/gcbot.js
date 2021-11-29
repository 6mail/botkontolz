let handler = async m => m.reply(`
*⚠GRUP BOT⚠*

1. dah gw bubarin 
`.trim('dah gw bubarin') // Tambah sendiri kalo mau
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i

module.exports = handler
