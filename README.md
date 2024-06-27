# Discord Insta Video Bot

A Discord bot that downloads and posts Instagram videos or reels in response to shared Instagram links in a Discord channel.

## Features

- Detects Instagram video or reel links posted in the Discord channel.
- Downloads the video or reel from Instagram.
- Posts the video or reel in the same channel, tagging the original message.

## Prerequisites

- Node.js installed on your machine.
- A Discord bot token. Create a bot and get a token from the [Discord Developer Portal](https://discord.com/developers/applications).
- Git installed on your machine.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Dushyantgoswami/discord-insta-video-bot.git
    cd discord-insta-video-bot
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your Discord bot token:

    ```plaintext
    TOKEN=YOUR_DISCORD_BOT_TOKEN
    ```

4. Run the bot:

    ```bash
    node index.js
    ```

## Usage

1. Invite the bot to your Discord server using the OAuth2 URL with the appropriate permissions (Send Messages, Read Messages, Attach Files, etc.).
2. Post an Instagram video or reel link in any channel the bot has access to.
3. The bot will download the video or reel and post it in the same channel, tagging the original message.


## Dependencies

- `discord.js`: A powerful JavaScript library for interacting with the Discord API.
- `axios`: Promise-based HTTP client for the browser and Node.js.
- `dotenv`: Module that loads environment variables from a `.env` file into `process.env`.
- `instagram-url-direct`: Module to get direct URLs for Instagram media.
- `fs`: Node.js file system module.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any features, bug fixes, or enhancements.

## License

This project is licensed under the MIT License.
