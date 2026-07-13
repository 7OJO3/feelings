const { Client, GatewayIntentBits, AttachmentBuilder } = require('discord.js');
const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.MessageContent 
    ] 
});

const TARGET_CHANNEL_ID = '1524263644630749194';

client.on('messageCreate', async (message) => {
    // التأكد من أن الرسالة في الروم المطلوب وأن المرسل ليس البوت نفسه
    if (message.channel.id === TARGET_CHANNEL_ID && !message.author.bot) {
        try {
            const attachment = new AttachmentBuilder('./IMG_9244.jpg');
            await message.channel.send({ files: [attachment] });
        } catch (error) {
            console.error('حدث خطأ أثناء إرسال الصورة:', error);
        }
    }
});

client.login(process.env.TOKEN);
