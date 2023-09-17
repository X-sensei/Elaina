const fs = require("fs");
const axios = require("axios");
const path = require("path");
let mergedCommands = [
  "help",
  "h",
  "menu",
  "support",
  "supportgc",
	"report",
];

module.exports = {
  name: "others",
  alias: [...mergedCommands],
  uniquecommands: ["help", "support", "report", "info"],
  description: "All miscleaneous commands",
  start: async (Atlas, m, { pushName, prefix, inputCMD, doReact }) => {
    let pic = fs.readFileSync("./Assets/Atlas.jpg");
    switch (inputCMD) {
            case "support":
      case "supportgc":
        await doReact("🎀");
        let txt2 = `              🧣 *Support Group* 🧣\n\n*${botName}* is a Public Bot, and we are always happy to help you.\n\n*Link:* ${suppL}\n\n*Note:* Please don't spam in the group, and don't message *Admins directly* without permission. Ask for help inside *Group*.\n\n*Thanks for using Elaina✨.*`;
        Atlas.sendMessage(m.from, { image: pic, caption: txt2 }, { quoted: m });
        break;
		   
      case "help":
      case "h":
      case "menu":
        await doReact("🎐");
        await Atlas.sendPresenceUpdate("composing", m.from);
        function readUniqueCommands(dirPath) {
          const allCommands = [];

          const files = fs.readdirSync(dirPath);

          for (const file of files) {
            const filePath = path.join(dirPath, file);
            const stat = fs.statSync(filePath);

            if (stat.isDirectory()) {
              const subCommands = readUniqueCommands(filePath);
              allCommands.push(...subCommands);
            } else if (stat.isFile() && file.endsWith(".js")) {
              const command = require(filePath);

              if (Array.isArray(command.uniquecommands)) {
                const subArray = [file, ...command.uniquecommands];
                allCommands.push(subArray);
              }
            }
          }

          return allCommands;
        }

        function formatCommands(allCommands) {
          let formatted = "";

          for (const [file, ...commands] of allCommands) {
            const capitalizedFile =
              file.replace(".js", "").charAt(0).toUpperCase() +
              file.replace(".js", "").slice(1);

            formatted += `🔖 *Yo*`;
            //formatted += `\`\`\`${commands.join("\n")}\`\`\`\n\n\n`;
            // Adding a - before each command
            /*formatted += `\`\`\`${commands
              .map((cmd) => `${cmd}`)
              .join(",")}\`\`\`\n\n`;*/
          }

          return formatted.trim();
        }

        const pluginsDir = path.join(process.cwd(), "Plugins");

        const allCommands = readUniqueCommands(pluginsDir);
        const formattedCommands = formatCommands(allCommands);
        var helpText = `「(💙^💙」
│⋊ 𝕌𝕤𝕖𝕣: *${pushName}*
│⋊ ℕ𝕒𝕞𝕖: *${botName}*
│⋊ ℙ𝕣𝕖𝕗𝕚𝕩: *${prefix}*
│⋊ 𝕆𝕨𝕟𝕖𝕣: *Ronen🎐*
│⋊ 𝕆𝕗𝕗𝕚𝕔𝕚𝕒𝕝 𝔾𝕣𝕠𝕦𝕡: https://tinyurl.com/yw5lxtlf
╰────────────┈エリーナ  

*Here's the list of my Commands.*

🎧 *Aᴜᴅɪᴏ-ᴇᴅɪᴛ:* 🎧
ʙᴀꜱꜱ, ᴅᴇᴇᴘ, ɴɪɢʜᴛᴄᴏʀᴇ, ʀᴇᴠᴇʀꜱᴇ, ʀᴏʙᴏᴛ, ꜱʟᴏᴡ, ꜱᴍᴏᴏᴛʜ, ᴛᴇᴍᴘᴏ

🤖 *Cʜᴀᴛ-GPT:* 🤖
ᴀɪ, ᴅᴀʟʟᴇ

⚙️ *Cᴏᴅᴇ-Rᴜɴɴᴇʀ:* ⚙️
ᴇxᴇᴄ

🎑 *Cᴏɴᴠᴇʀᴛᴇʀ:* 🎑
ᴛᴏɪᴍɢ, ᴛᴏɢɪꜰ, ᴛᴏᴍᴘ4, ᴛᴏᴍᴘ3, ᴛᴏᴀᴜᴅɪᴏ, ᴛᴏᴜʀʟ, ᴛᴏᴘᴅꜰ, ɪᴍɢᴛᴏᴘᴅꜰ

📌 *Cᴏʀᴇ:* 📌
ʜᴇʟᴘ, ꜱᴜᴘᴘᴏʀᴛ, ʀᴇᴘᴏʀᴛ, ɪɴꜰᴏ

💽 *Dᴏᴡɴʟᴏᴀᴅᴇʀ:* 💽
ɪɢᴅʟ, ꜰʙᴅʟ, ᴍᴇᴅɪᴀꜰɪʀᴇᴅʟ

🎍 *Fᴜɴ:* 🎍
ᴛʀᴜᴛʜ, ᴅᴀʀᴇ, ᴄᴏɪɴꜰʟɪᴘ, ᴅɪᴄᴇ, ꜰᴀᴄᴛ, ᴀᴡᴇꜱᴏᴍᴇᴄʜᴇᴄᴋ, ᴄʜᴀʀᴀᴄᴛᴇʀᴄʜᴇᴄᴋ, ᴄᴜᴛᴇᴄʜᴇᴄᴋ,ɢᴀʏᴄʜᴇᴄᴋ, ɢʀᴇᴀᴛᴄʜᴇᴄᴋ, ʜᴀɴᴅꜱᴏᴍᴇᴄʜᴇᴄᴋ, ʜᴏʀɴʏᴄʜᴇᴄᴋ, ʟᴇꜱʙɪᴀɴᴄʜᴇᴄᴋ, ᴍᴀᴛᴜʀᴇᴄʜᴇᴄᴋ, ᴘʀᴇᴛᴛʏᴄʜᴇᴄᴋ, ꜱᴛᴀᴍɪɴᴀᴄʜᴇᴄᴋ, ᴜɢʟʏᴄʜᴇᴄᴋ

🎗️ *Gʀᴏᴜᴘ:* 🎗️
ᴀᴅᴍɪɴꜱ, ꜱᴇᴛɢᴄɴᴀᴍᴇ, ᴅᴇʟᴇᴛᴇ, ᴅᴇᴍᴏᴛᴇ, ɢᴄʟɪɴᴋ, ᴀɴᴛɪʟɪɴᴋ, ᴡᴇʟᴄᴏᴍᴇ, ɢʀᴏᴜᴘ, ɢᴄ, ɢᴄɪɴꜰᴏ, ᴛᴀɢᴀʟʟ, ʜɪᴅᴇᴛᴀɢ, ʟᴇᴀᴠᴇ, ᴘʀᴏᴍᴏᴛᴇ, ʀᴇᴍᴏᴠᴇ, ʀᴇᴠᴏᴋᴇ, ꜱᴇᴛɢᴄᴅᴇꜱᴄ, ꜱᴇᴛᴘᴘɢᴄ, ᴄʜᴀᴛʙᴏᴛɢᴄ

📸 *Iᴍᴀɢᴇ-Eᴅɪᴛ:* 📸
ʙʟᴜʀ, ᴄɪʀᴄʟᴇ, ᴊᴀɪʟ, ʀᴇᴍᴏᴠᴇʙɢ

🎀 *Lᴏɢᴏ-ᴍᴀᴋᴇʀ:* 🎀
3ᴅᴄʜʀɪꜱᴛᴍᴀꜱ, 3ᴅɴᴇᴏɴ,3ᴅꜱᴘᴀᴄᴇ, 3ᴅꜱᴛᴏɴᴇ, ʙᴇᴀʀ, ʙʟᴀᴄᴋᴘɪɴᴋ, ʙʟᴏᴏᴅ, ʙᴏᴏᴋᴇʜ, ᴄᴀɴᴅʏ, ᴄᴀʀʙᴏɴ, ᴄʜᴏᴄᴏʟᴀᴛᴇ, ᴄʜʀɪꜱᴛᴍᴀꜱ,ᴄʟᴏᴜᴅ, ᴄɪʀᴄᴜɪᴛ, ᴅᴇᴇᴘꜱᴇᴀ, ᴅʀᴏᴘᴡᴀᴛᴇʀ, ɢʟɪᴛᴄʜ, ɢʟɪᴛᴄʜ2, ɢʟɪᴛᴄʜ3, ɢʀᴀꜰꜰɪᴛɪ, ᴊᴏᴋᴇʀ, ʟɪᴏɴ, ʜᴏʟᴏɢʀᴀᴘʜɪᴄ, ᴍᴀɢᴍᴀ, ᴍᴀᴛʀɪx, ɴᴇᴏɴ, ɴᴇᴏɴʟɪɢʜᴛ, ɴᴇᴏɴɢʀᴇᴇɴ, ᴘᴀᴘᴇʀᴄᴜᴛ, ᴘᴇɴᴄɪʟ, ᴘᴏʀɴʜᴜʙ, ꜱᴄɪꜰɪ, ꜱᴘᴀʀᴋʟᴇᴄʜʀɪꜱᴛᴍᴀꜱ, ᴛʜᴜɴᴅᴇʀ, ᴛʜᴜɴᴅᴇʀ2, ᴡᴏʟꜰ, ᴡᴀʟʟ, ᴛʀᴀɴꜱꜰᴏʀᴍᴇʀ

🏅 *Mᴏᴅᴇʀᴀᴛᴏʀ:* 🏅
ᴀᴅᴅᴍᴏᴅ, ᴅᴇʟᴍᴏᴅ, ᴍᴏᴅꜱ, ʙᴀɴ, ᴜɴʙᴀɴ, ʙᴀɴʟɪꜱᴛ, ꜱᴇᴛᴄʜᴀʀ, ᴘᴍᴄʜᴀᴛʙᴏᴛ, ʙᴀɴɢʀᴏᴜᴘ, ᴜɴʙᴀɴɢʀᴏᴜᴘ, ᴍᴏᴅᴇ

🖼️ *Pɪᴄᴛᴜʀᴇꜱ:* 🖼️
ɪᴍᴀɢᴇ, ᴄᴏᴜᴘʟᴇᴘᴘ, ɢɪꜰ, ᴘɪɴ

🎭 *Pʟᴜɢɪɴ:* 🎭
ɪɴꜱᴛᴀʟʟ, ᴜɴɪɴꜱᴛᴀʟʟ, ᴘʟᴜɢɪɴꜱ, ᴘʟᴜɢɪɴʟɪꜱᴛ

✨ *Rᴇᴀᴄᴛɪᴏɴꜱ:* ✨
ʙɪᴛᴇ, ʙʟᴜꜱʜ, ʙᴏɴᴋ, ʙᴜʟʟʏ, ᴄʀɪɴɢᴇ, ᴄʀʏ, ᴄᴜᴅᴅʟᴇ, ᴅᴀɴᴄᴇ, ɢʟᴏᴍᴘ, ʜᴀɴᴅʜᴏʟᴅ, ʜᴀᴘᴘʏ, ʜɪɢʜꜰɪᴠᴇ, ʜᴜɢ, ᴋɪᴄᴋ, ᴋɪʟʟ, ᴋɪꜱꜱ, ʟɪᴄᴋ, ɴᴏᴍ, ᴘᴀᴛ, ᴘᴏᴋᴇ, ꜱʟᴀᴘ, ꜱᴍɪʟᴇ, ꜱᴍᴜɢ, ᴡᴀᴠᴇ, ᴡɪɴᴋ, ʏᴇᴇᴛ

🔍 *Sᴇᴀʀᴄʜ:* 🔍
ɢᴏᴏɢʟᴇ, ʟʏʀɪᴄꜱ, ʏᴛꜱ, ʀɪɴɢᴛᴏɴᴇ, ꜱᴛɪᴄᴋᴇʀꜱᴇᴀʀᴄʜ, ᴡᴇᴀᴛʜᴇʀ, ɢɪᴛʜᴜʙ

🔖 *Sᴛɪᴄᴋᴇʀ:* 🔖
ꜱᴛɪᴄᴋᴇʀ, ꜱᴛᴇᴀʟ, ꜱᴄʀᴏᴘ, ꜱᴍᴇᴍᴇ, ꜱᴛɪᴄᴋᴇʀᴍᴇᴍᴇ, ϙ, ᴇᴍᴏᴊɪᴍɪx

⚜️ *Tᴇxᴛ-ᴛᴏ-ꜱᴘᴇᴇᴄʜ:* ⚜️
ꜱᴀʏ, ꜱᴘᴇᴀᴋ, ᴛᴛꜱ, ꜱᴀʏʙᴇɴɢᴀʟɪ, ꜱᴀʏʜɪɴᴅɪ, ꜱᴀʏᴊᴀᴘᴀɴᴇꜱᴇ, ꜱᴀʏᴋᴏʀᴇᴀɴ, ꜱᴀʏᴄʜɪɴᴇꜱᴇ, ꜱᴀʏɪɴᴅᴏ

♂️ *Tɪᴋᴛᴏᴋᴅʟ:* ♂️
ᴛɪᴋᴛᴏᴋ, ᴛɪᴋᴛᴏᴋᴍᴘ3, ᴛɪᴋᴛᴏᴋᴍᴘ4, ᴛɪᴋᴛᴏᴋᴅᴏᴄ

🔰 *Yᴏᴜᴛᴜʙᴇ-ᴅʟ:* 🔰
ꜱᴏɴɢ, ᴠɪᴅᴇᴏ, ʏᴛᴍᴘ3, ʏᴛᴍᴘ4


〽️Use *${prefix}report* to report the developer if you face any issue regarding the bot.\n\n*💗Have a nice day*\n\n*🔱 Ronen-Bots- 2023*`;
        await Atlas.sendMessage(
          m.from,
          { video: { url: botVideo }, gifPlayback: true, caption: helpText },
          { quoted: m }
        ); 

        break;
      default:
        break;
    }
  },
};
