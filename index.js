// index.js
import baileys, {
  makeWASocket,
  DisconnectReason,
  fetchLatestBaileysVersion,
  useMultiFileAuthState
} from "wileys";
import pino from "pino";
import chalk from "chalk";
import readline from "readline";
import handleMessage from "./case.js";
import fs from "fs";

const logger = pino({ level: "silent" });
const usePairingCode = true;

async function question(prompt) {
  process.stdout.write(prompt);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) =>
    rl.question("", (ans) => {
      rl.close();
      resolve(ans);
    })
  );
}

async function connectToWhatsapp() {
  console.log(chalk.blue("🌐 Menghubungkan..."));

  const { version, isLatest } = await fetchLatestBaileysVersion();

  console.log(`⚙️  Wileys v0.4.2 | WA v${version.join(".")} | isLatest: ${isLatest}`);

  const { state, saveCreds } = await useMultiFileAuthState("./session");

  const sock = makeWASocket({
    version,
    logger,
    printQRInTerminal: !usePairingCode,
    browser: ["Ubuntu", "Chrome", "20.0.04"],
    generateHighQualityLinkPreview: true,
    syncFullHistory: true,
    auth: state,
    getMessage: async () => undefined,
  });

if (usePairingCode && !sock.authState.creds.registered) {
  try {
    console.log(chalk.green("🪴 Masukan Nomor Kamu +62xxx:"));
    const phoneNumber = await question("> ");
    const code = await sock.requestPairingCode(phoneNumber.trim(), "SKYXHO22");
    console.log(chalk.cyan(`🔗 Kode Pairing: ${code}`));
  } catch (err) {
    console.error(chalk.red("Gagal ambil pairing code:"), err);
  }
}

  sock.ev.on("connection.update", async (update) => {
    const { connection, lastDisconnect } = update;
    if (connection === "close") {
      const reason = lastDisconnect?.error?.output?.statusCode;
      const shouldReconnect = reason !== DisconnectReason.loggedOut;

      console.log(chalk.red("❌ Koneksi terputus, mencoba ulang..."));
      if (shouldReconnect) {
        await new Promise((r) => setTimeout(r, 3000));
        connectToWhatsapp();
      } else {
        console.log(chalk.red("💀 Logout terdeteksi. Hapus session & scan ulang."));
      }
    } else if (connection === "open") {
      console.log(chalk.green("✅ Terhubung ke WhatsApp!"));
    }
  });

  sock.ev.on("creds.update", saveCreds);

  sock.ev.on("messages.upsert", async (msgUpdate) => {
    try {
      if (!msgUpdate.messages?.length) return;
      const m = msgUpdate.messages[0];
      if (!m.message) return;
      await handleMessage(sock, msgUpdate);
    } catch (err) {
      console.error(chalk.red("⚠️ Error di handler pesan:"), err);
    }
  });
}

console.log(
  chalk.yellow.bold(`
⡏⠉⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿
⣿⠀⠀⠀⠈⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠉⠁⠀⣿
⣿⣧⡀⠀⠀⠀⠀⠙⠿⠿⠿⠻⠿⠿⠟⠿⠛⠉⠀⠀⠀⠀⠀⣸⣿
⣿⣿⣷⣄⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿
⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣴⣿⣿⣿⣿
⣿⣿⣿⡟⠀⠀⢰⣹⡆⠀⠀⠀⠀⠀⠀⣭⣷⠀⠀⠀⠸⣿⣿⣿⣿
⣿⣿⣿⠃⠀⠀⠈⠉⠀⠀⠤⠄⠀⠀⠀⠉⠁⠀⠀⠀⠀⢿⣿⣿⣿
⣿⣿⣿⢾⣿⣷⠀⠀⠀⠀⡠⠤⢄⠀⠀⠀⠠⣿⣿⣷⠀⢸⣿⣿⣿
⣿⣿⣿⡀⠉⠀⠀⠀⠀⠀⢄⠀⢀⠀⠀⠀⠀⠉⠉⠁⠀⠀⣿⣿⣿
⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿
⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿
`) + chalk.cyan.bold(`@𝗟𝗲𝘅𝘇𝗦𝘁𝗼𝗿𝗲`) + "\n\n" + 
chalk.yellow.bold(`𝗥𝗲𝘅𝘇𝗦𝘂𝗸𝗶 𝗕𝗼𝘁 [ 𝗱𝗲𝘃 ] 𝗯𝗲𝘁𝗮 𝘃𝗲𝗿𝘀𝗶𝗼𝗻`)
);

connectToWhatsapp();