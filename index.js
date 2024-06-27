require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios');
const fs = require('fs');
const instagramGetUrl = require('instagram-url-direct');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once('ready', () => {
    console.log('Bot is online!');
});

client.on('messageCreate', async message => {
    if (message.author.bot) return;
    
    // Check if the message contains an Instagram link
    const instaLink = message.content.match(/(?:https?:\/\/)?(?:www\.)?instagram\.com\/(?:p|reel)\/[A-Za-z0-9-_]+/);
    if (instaLink) {
        try {
            const videoUrl = await getInstagramVideoUrl(instaLink[0]);
            if (videoUrl) {
                const videoPath = await downloadVideo(videoUrl);
                await message.reply({
                    files: [videoPath]
                });
                fs.unlinkSync(videoPath); // Clean up the downloaded file
            } else {
                message.channel.send('Could not retrieve the video. Please check the link and try again.');
            }
        } catch (error) {
            console.error(error);
            message.channel.send('An error occurred while retrieving the video.');
        }
    }
});

async function getInstagramVideoUrl(url) {
    try {
        const { url_list } = await instagramGetUrl(url);
        return url_list[0];
    } catch (error) {
        console.error('Error fetching Instagram video URL:', error);
        return null;
    }
}

async function downloadVideo(url) {
    const videoPath = './video.mp4';
    const response = await axios({
        url,
        method: 'GET',
        responseType: 'stream'
    });

    return new Promise((resolve, reject) => {
        const writer = fs.createWriteStream(videoPath);
        response.data.pipe(writer);
        writer.on('finish', () => resolve(videoPath));
        writer.on('error', reject);
    });
}

client.login(process.env.TOKEN);
