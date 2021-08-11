const axios = require('axios');
const { MessageType, Mimetype } = require("@adiwajshing/baileys");
const { text, image } = MessageType;
const fs = require("fs");
const path = require("path");

path.join(__dirname,"../readme/images/logo.jpeg")
const sourcecode = (infor, client, xxx) => new Promise((resolve, reject) => {
    from = infor.from;
    axios.get(`https://api.github.com/repos/akm-akm/xxx-bot`)
        .then((response) => {
            let data = response.data;

            msg = "🧠🧠 *Sharing is caring* 🧠🧠\n\n" +
                "🛰️ *Github Repository-*\n```https://github.com/akm-akm/xxx-bot```\n\n"+
                "👨‍💻 *Repo Owner:* ```" + data.owner.login + "```\n" +
                "💻 *Repo Name:*  ```" + data.name + "```\n" +
               // "🪀 *Desc:*              ```" + data.description + "```\n" +
                "🉐 *Language:*     ```" + data.language + "```\n" +
                "⭐ *Stars:*             ```" + data.stargazers_count + "```\n" +
                "🔀 *Forks:*            ```" + data.forks_count + "```\n" +
                "🧰 *Issues:*           ```" + data.open_issues + "```\n" +
                "🎨 *Watchers:*      ```" + data.watchers_count + "```\n" +
                "💾 *Size:*               ```" + (data.size / 1024).toFixed(0) + " KB```\n"+
                "📄 *License:*         ```" + data.license.key + " ```\n"+
                "\n🤖🤖 *_Bot made by AKM_* 🤖🤖"
            client.sendMessage(from,
                fs.readFileSync(path.join(__dirname, "../readme/images/logo.jpeg")
                ), image, {
                quoted: xxx,
                detectLinks: false,
                caption: msg,
                mimetype: Mimetype.jpeg
            })
            resolve();

        })
        .catch((e) => {
            console.log(e);
            client.sendMessage(from, "🤖  ```Server error.```", text, {
                quoted: xxx
            });
            reject();
        })
})
module.exports.sourcecode = sourcecode;