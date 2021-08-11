const path = require("path");
const { count } = require(path.join(__dirname, "./count"));
const { deleteit } = require(path.join(__dirname, "../plugins/delete"));
const { read } = require(path.join(__dirname, "./read"));
const { crypto } = require(path.join(__dirname, "../plugins/crypto"));
const { owner } = require(path.join(__dirname, "../plugins/owner"));
const { shorturl } = require(path.join(__dirname, "../plugins/shorturl"));
const { savedsticker } = require(path.join(__dirname, "../plugins/savedsticker"));
const { sourcecode } = require(path.join(__dirname, "../plugins/sourcecode"));
const { stickermaker } = require(path.join(__dirname, "../plugins/sticker"));
const { pinterest } = require(path.join(__dirname, "../plugins/pinterest"));
const { coderunner } = require(path.join(__dirname, "../plugins/coderunner"));
const { grp } = require(path.join(__dirname, "../plugins/groupsettings"));
const { xdafootball } = require(path.join(__dirname, "../plugins/twitter"));
const { market } = require(path.join(__dirname, "../plugins/market"));
const { newgroup } = require(path.join(__dirname, "./newgroup"));
const { help } = require(path.join(__dirname, "../plugins/help"));
const { youtube } = require(path.join(__dirname, "../plugins/yt"));
const { faqs } = require(path.join(__dirname, "../plugins/faq"));
const { MessageType } = require("@adiwajshing/baileys");
const { text } = MessageType;


async function switchcase(infor, client, xxx) {
  number = infor.number;
  arg = infor.arg;
  d = infor.from;
  from = d;

  if (infor.abusepresent.length != 0) {
    client.sendMessage(from, "⚠️ ```Tu " + infor.abusepresent[0] + "```", text, {
      quoted: xxx,
    });
    count(infor, 1)
    return;
  }
  if (infor.from.endsWith("@g.us") && infor.isMedia && infor.groupdata.autosticker && infor.arg[0] !== "sticker") {
    console.log("making auto sticker");
    stickermaker(infor, client, xxx).then(() => {
      count(infor, 2)
    })
      .catch((err) => {
        console.log(err);
      });
  }

  switch (arg[0]) {


    case "run":
      coderunner(infor, client, xxx)
        .then((resolve) => {
          count(infor)
        })
        .catch((err) => {
          console.log(err);
        });

      break;

    case "delete":
      deleteit(infor, client, xxx)
        .then((resolve) => {
          count(infor)
        })
        .catch((err) => {
          console.log(err);
        });

      break;

    case "sql":
    case "dl":
    case "dgl":
    case "mdr":
    case "mgs":
    case "restart":
      owner(infor, client, xxx)
        .then((resolve) => {
          count(infor)
        })
        .catch((err) => {
          console.log(err);
        });

      break;


    case "sourcecode":
   
      sourcecode(infor, client, xxx)
        .then((resolve) => {
          count(infor)
        })
        .catch((error) => {
          console.log("error");
        });

      break;
    case "crypto":
      crypto(infor, client, xxx)
        .then((resolve) => {
          count(infor)
        })
        .catch((error) => {
          console.log("error");
        });

      break;

    case "tweet":
      xdafootball(infor, client, xxx)
        .then((resolve) => {
          count(infor)
        })
        .catch((error) => {
          console.log("error");
        });

      break;

    case "shorturl":
      shorturl(infor, client, xxx)
        .then((resolve) => {
          count(infor)
        })
        .catch((error) => {
          console.log("error");
        });

      break;

    case "market":
      market(infor, client, xxx)
        .then(() => {
          count(infor)
        })
        .catch((error) => {
          console.log("Error");
        });

      break;

    case "sticker":
      stickermaker(infor, client, xxx)
        .then(() => {
          console.log("sent");
          count(infor)
        })
        .catch((error) => {
          console.log("error");
        });

      break;

    case "rs":
    case "rashmika":
      savedsticker(infor, client, xxx)
        .then((resolve) => {
          count(infor)
        })
        .catch((error) => {
          console.log("rashmika error");
        });

      break;

    case "pin":
      pinterest(infor, client, xxx)
        .then(() => {
          count(infor)
        })
        .catch((error) => {
          console.log("pin error");
          console.log(error);
        });

      break;

    case "setprefix":
    case "botaccess":
    case "promote":
    case "demote":
    case "kick":
    case "prefix":
    case "grouplink":
    //case "changedp":
    case "botleave":
    case "close":
    case "open":
    // case "add":
    // case "purge":
    case "autosticker":
    case "tagall":
    case "ban":
    case "unban":
    case "banlist":
    case "filterabuse":
      grp(infor, client, xxx)
        .then(() => {
          count(infor, 3)
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    case "help":
    case "menu":
    case "command":
    case "commands":
      help(infor, client, xxx)
        .then(() => {
          count(infor)
        })
        .catch((error) => {
          console.log(error);
        });
      break;


    case "limit":
      x =
        "🤖 ```Daily credit used:``` " +infor.noofmsgtoday + "/ *" + infor.botdata.dailylimit+"*";
      client.sendMessage(from, x, text, {
        quoted: xxx,
      });

      break;

    case "ytv":
      youtube(infor, client, xxx)
        .then((resolve) => {
          count(infor)
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    case "faq":
      faqs(infor, client, xxx)
        .then((resolve) => {
          count(infor)
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    case "xxdfbx":
      client.sendMessage(
        from,
        "```Bot down. New features being added.```",
        text,
        {
          quoted: xxx,
        }
      );
      count(infor).then(() => console.log(number + "+1"));
      break;

    case "newg":
      newgroup(infor.from, client);
      break;

    case "hello":
    case "hi":
    case "hii":
    case "hiii":
    case "howdy":
    case "heyy":
    case "heyyyy":
    case "heyyy":
      client.sendMessage(from, "👋 ```Hello```", text, {
        quoted: xxx,
      });
      count(infor)
      break;

    default:
      break;
  }
}

module.exports.switchcase = switchcase;