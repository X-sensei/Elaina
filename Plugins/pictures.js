const gis = require("g-i-s");
const axios = require("axios");
const hxzapi = require("hxz-api");
const Jimp = require("jimp");
let mergedCommands = [
  "gig",
  "gimage",
  "googleimage",
  "image",
  "ppcouple",
  "couplepp",
  "gifsearch",
  "gif",
  "pin",
  "pinterest",
  "imagine",
  "ai2",
];

module.exports = {
  name: "pictures",
  alias: [...mergedCommands],
  uniquecommands:[
    "image",
    "couplepp",
    "gif",
    "pin",
  ],
  description: "All picture related commands",
  start: async (Atlas, m, { mime, quoted, botName, inputCMD, text, doReact, prefix}) => {
    switch (inputCMD) {
      case "ppcouple":
      case "couplepp":
       await doReact("❤️");
        let imgRes = await axios.get("https://zany-teal-alligator-suit.cyclic.app/couple");
        Atlas.sendMessage(
          m.from,
          { image: { url: imgRes.data.male }, caption: `_For Him..._` },
          { quoted: m }
        );
        Atlas.sendMessage(
          m.from,
          { image: { url: imgRes.data.female }, caption: `_For Her..._` },
          { quoted: m }
        );
        break;

      case "gig":
      case "gimage":
      case "googleimage":
      case "image":
        if (!text) {
          await doReact("❔");
          return m.reply(`Please provide an image Search Term !\n\nExample: *${prefix}image Elaina*`);
        }
        await doReact("🎴");
        gis(text, async (error, result) => {
          n = result;
          let images = n[Math.floor(Math.random() * n.length)].url;
          let resText = `\n_🎀 Image Search Term:_ *${text}*\n\n_🧩 Powered by_ *${botName}*\n`;
          /*
          let buttons = [
            {
                buttonId: `${prefix}gimage ${text}`,
                buttonText: { displayText: ">>" },
                type: 1,
            },
          ];
          */
          await Atlas.sendMessage(
            m.from,
            {
              image: { url: images },
              caption: resText,
              //footer: `*${botName}*`,
              //buttons: buttons,
              //headerType: 4,
            },
            { quoted: m }
          );
        });
        break;
      case "gif":
      case "gifsearch":
        if (!text) {
          await doReact("❔")
            return m.reply(`Please provide an Tenor gif Search Term !\n\nExample: *${prefix}gif Elaina bonk*`);
        }
        await doReact("🎴");
        let resGif = await axios.get(
          `https://tenor.googleapis.com/v2/search?q=${text}&key=${tenorApiKey}&client_key=my_project&limit=12&media_filter=mp4`
        );
        let resultGif = Math.floor(Math.random() * 12);
        let gifUrl = resGif.data.results[resultGif].media_formats.mp4.url;
        await Atlas.sendMessage(
          m.from,
          {
            video: { url: gifUrl },
            gifPlayback: true,
            caption: `🎀 Gif serach result for: *${text}*\n`,
          },
          { quoted: m }
        );
        break;

      case "pin":
      case "pinterest":
        if (!text) {
          await doReact("❔")
            return m.reply(`Please provide an Pinterest image Search Term !\n\nExample: *${prefix}pin Elaina*`);
          
        }
        await doReact("📍");
        hxzapi
          .pinterest(text)
          .then(async (res) => {
            imgnyee = res[Math.floor(Math.random() * res.length)];
            /*let buttons = [
          {
            buttonId: `${prefix}pinterest ${args.join(" ")}`,
            buttonText: { displayText: ">>" },
            type: 1,
          },
        ];*/
            let txt = `\n_🎀 Pinterest Search Term:_ *${text}*\n\n_🧩 Powered by_ *${botName}*\n`;
            let buttonMessage = {
              image: { url: imgnyee },
              caption: txt,
              //footer: `*${botName}*`,
              //buttons: buttons,
              //headerType: 4,
            };
            Atlas.sendMessage(m.from, buttonMessage, { quoted: m });
          })
          .catch((_) => _);

        break;



  case "imagine":
    const imagineEndpoint = 'http://localhost:8080/v2/imagine';
    const authorizationHeader = '590289a6-e2e1-4b24-9af6-e8fe69fe8d5a';

    if (!text) {
      await doReact("❔");
      return m.reply(`Please provide an Imagine prompt!\n\nExample: *${prefix}imagine A futuristic city at night*`);
    }

    await doReact("🎨");

    const imagineData = {
      prompt: text,
      mode: "turbo"
    };

    try {
      const imagineResponse = await axios.post(imagineEndpoint, imagineData, {
        headers: {
          Authorization: authorizationHeader
        }
      });

      const generatedImage = imagineResponse.data.image; // Assuming the response structure has an "image" property

      let txt = `\n_🌌 Imagine Prompt:_ *${text}*\n\n_🖼️ Generated Image_`;
      let buttonMessage = {
        image: { url: generatedImage },
        caption: txt,
      };

      Atlas.sendMessage(m.from, buttonMessage, { quoted: m });
    } catch (error) {
      console.error("Error generating image:", error);
      // Handle error response, perhaps send an error message back to the user
      await doReact("❌");
      return m.reply("Error generating image. Please try again later.");
    }

    break;

        const axios = require('axios');

// Assume that the 'doReact', 'Jimp', 'Atlas', 'm', 'quoted', 'prefix', and 'botName' variables are defined elsewhere in your code.

case "ai2":
    if (/image/.test(mime)) {
        let mediaMess = await quoted.download();
        await doReact("🚀");

        // Convert the image to base64
        const imageBase64 = mediaMess.toString('base64');

        // Your API endpoint for image analysis
        const apiUrl = `https://api.guruapi.tech/api/bardimg?text=${encodeURIComponent(m.text)}&image=${imageBase64}`;

        // Make a POST request to the API
        try {
            const response = await axios.post(apiUrl);
            const result = response.data; // Assuming the API returns the details of the image

            // Handle the result, you may want to customize this part
            Atlas.sendMessage(
                m.from,
                { text: `Image Details: ${JSON.stringify(result)}`, quoted: m },
            );
        } catch (error) {
            console.error(error);
            return m.reply('Error processing the image. Please try again.');
        }
    } else {
        await doReact("❌");
        return m.reply(
            `Please mention an *image* and type *${prefix}ai2*`
        );
    }
    break;

      default:
        break;
    }
  },
};
