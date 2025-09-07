function hi() {
  const _0x540dde = function () {
    let _0x2827f8 = true;
    return function (_0x487b35, _0x235af8) {
      const _0x363f32 = _0x2827f8 ? function () {
        if (_0x235af8) {
          const _0x1bb925 = _0x235af8.apply(_0x487b35, arguments);
          _0x235af8 = null;
          return _0x1bb925;
        }
      } : function () {};
      _0x2827f8 = false;
      return _0x363f32;
    };
  }();
  const _0x3987d2 = _0x540dde(this, function () {
    return _0x3987d2.toString().search('(((.+)+)+)+$').toString().constructor(_0x3987d2).search("(((.+)+)+)+$");
  });
  _0x3987d2();
  const _0x57a7d7 = function () {
    let _0x183647 = true;
    return function (_0xdd0e22, _0x3eb8c5) {
      const _0x90ee5a = _0x183647 ? function () {
        if (_0x3eb8c5) {
          const _0x2776ac = _0x3eb8c5.apply(_0xdd0e22, arguments);
          _0x3eb8c5 = null;
          return _0x2776ac;
        }
      } : function () {};
      _0x183647 = false;
      return _0x90ee5a;
    };
  }();
  const _0x431533 = _0x57a7d7(this, function () {
    const _0x2057ef = function () {
      let _0x32534b;
      try {
        _0x32534b = Function("return (function() {}.constructor(\"return this\")( ));")();
      } catch (_0x367625) {
        _0x32534b = window;
      }
      return _0x32534b;
    };
    const _0x37f916 = _0x2057ef();
    const _0x4e5747 = _0x37f916.console = _0x37f916.console || {};
    const _0x59ff6d = ['log', 'warn', "info", "error", "exception", "table", "trace"];
    for (let _0x162e64 = 0x0; _0x162e64 < _0x59ff6d.length; _0x162e64++) {
      const _0x844a4c = _0x57a7d7.constructor.prototype.bind(_0x57a7d7);
      const _0x30070c = _0x59ff6d[_0x162e64];
      const _0x46f677 = _0x4e5747[_0x30070c] || _0x844a4c;
      _0x844a4c.__proto__ = _0x57a7d7.bind(_0x57a7d7);
      _0x844a4c.toString = _0x46f677.toString.bind(_0x46f677);
      _0x4e5747[_0x30070c] = _0x844a4c;
    }
  });
  _0x431533();
  console.log("Hello World!");
}
hi();
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function (_0x13a12d, _0x1d973a, _0x511f8c, _0x25aeea) {
  if (_0x25aeea === undefined) {
    _0x25aeea = _0x511f8c;
  }
  var _0x359ec = Object.getOwnPropertyDescriptor(_0x1d973a, _0x511f8c);
  if (!_0x359ec || ("get" in _0x359ec ? !_0x1d973a.__esModule : _0x359ec.writable || _0x359ec.configurable)) {
    _0x359ec = {
      'enumerable': true,
      'get': function () {
        return _0x1d973a[_0x511f8c];
      }
    };
  }
  Object.defineProperty(_0x13a12d, _0x25aeea, _0x359ec);
} : function (_0x9b391f, _0x5c228b, _0x2de5ab, _0x40c973) {
  if (_0x40c973 === undefined) {
    _0x40c973 = _0x2de5ab;
  }
  _0x9b391f[_0x40c973] = _0x5c228b[_0x2de5ab];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (_0x4ee2fd, _0x3b3854) {
  Object.defineProperty(_0x4ee2fd, "default", {
    'enumerable': true,
    'value': _0x3b3854
  });
} : function (_0x3110ad, _0x507b4f) {
  _0x3110ad["default"] = _0x507b4f;
});
var __importStar = this && this.__importStar || function (_0x1e55da) {
  if (_0x1e55da && _0x1e55da.__esModule) {
    return _0x1e55da;
  }
  var _0x428c27 = {};
  if (_0x1e55da != null) {
    for (var _0xa26736 in _0x1e55da) if (_0xa26736 !== "default" && Object.prototype.hasOwnProperty.call(_0x1e55da, _0xa26736)) {
      __createBinding(_0x428c27, _0x1e55da, _0xa26736);
    }
  }
  __setModuleDefault(_0x428c27, _0x1e55da);
  return _0x428c27;
};
var __importDefault = this && this.__importDefault || function (_0x500385) {
  return _0x500385 && _0x500385.__esModule ? _0x500385 : {
    'default': _0x500385
  };
};
Object.defineProperty(exports, '__esModule', {
  'value': true
});
const baileys_1 = __importStar(require("@whiskeysockets/baileys"));
const logger_1 = __importDefault(require('@whiskeysockets/baileys/lib/Utils/logger'));
const logger = logger_1['default'].child({});
logger.level = "silent";
const pino = require("pino");
const boom_1 = require("@hapi/boom");
const conf = require("./set");
let fs = require("fs-extra");
let path = require("path");
const FileType = require("file-type");
const {
  Sticker,
  createSticker,
  StickerTypes
} = require("wa-sticker-formatter");
const {
  verifierEtatJid,
  recupererActionJid
} = require("./bdd/antilien");
const {
  atbverifierEtatJid,
  atbrecupererActionJid
} = require("./bdd/antibot");
let evt = require(__dirname + "/framework/zokou");
const {
  isUserBanned,
  addUserToBanList,
  removeUserFromBanList
} = require('./bdd/banUser');
const {
  addGroupToBanList,
  isGroupBanned,
  removeGroupFromBanList
} = require('./bdd/banGroup');
const {
  isGroupOnlyAdmin,
  addGroupToOnlyAdminList,
  removeGroupFromOnlyAdminList
} = require("./bdd/onlyAdmin");
let {
  reagir
} = require(__dirname + '/framework/app');
var session = conf.session.replace(/Zokou-MD-WHATSAPP-BOT;;;=>/g, '');
const prefixe = conf.PREFIXE;
const express = require("express");
const PORT = process.env.PORT || 0xbb8;
const app = express();
app.use(express['static'](path.join(__dirname, 'public')));
app.listen(PORT, () => {
  console.log("Server is running at http://localhost:" + PORT);
});
const messageStore = {
  'chats': {},
  'loadMessage': async function (_0x37f58f, _0x4f8228) {
    if (!this.chats[_0x37f58f]) {
      return null;
    }
    return this.chats[_0x37f58f].find(_0xd5a2d0 => _0xd5a2d0.key.id === _0x4f8228) || null;
  }
};
async function authentification() {
  try {
    if (!fs.existsSync(__dirname + "/scan/creds.json")) {
      console.log("connexion en cour ...");
      await fs.writeFileSync(__dirname + "/scan/creds.json", atob(session), "utf8");
    } else if (fs.existsSync(__dirname + "/scan/creds.json") && session != "zokk") {
      await fs.writeFileSync(__dirname + "/scan/creds.json", atob(session), "utf8");
    }
  } catch (_0x472165) {
    console.log("Session Invalid " + _0x472165);
    return;
  }
}
authentification();
setTimeout(() => {
  authentification();
  async function _0xb7a2aa() {
    0x0;
    const {
      version: _0x43dc81,
      isLatest: _0x20734d
    } = await baileys_1.fetchLatestBaileysVersion();
    0x0;
    const {
      state: _0x443b70,
      saveCreds: _0x55e5c5
    } = await baileys_1.useMultiFileAuthState(__dirname + '/scan');
    0x0;
    const _0x35a56f = {
      'version': _0x43dc81,
      'logger': pino({
        'level': "silent"
      }),
      'browser': ["Rahmani", "safari", '1.0.0'],
      'printQRInTerminal': false,
      'fireInitQueries': false,
      'shouldSyncHistoryMessage': true,
      'downloadHistory': true,
      'syncFullHistory': true,
      'generateHighQualityLinkPreview': true,
      'markOnlineOnConnect': false,
      'keepAliveIntervalMs': 0x7530,
      'auth': {
        'creds': _0x443b70.creds,
        'keys': baileys_1.makeCacheableSignalKeyStore(_0x443b70.keys, logger)
      },
      'getMessage': async _0x3da88b => {
        const _0x471095 = await messageStore.loadMessage(_0x3da88b.remoteJid, _0x3da88b.id);
        return _0x471095?.["message"] || {
          'conversation': "An Error Occurred, Repeat Command!"
        };
      }
    };
    0x0;
    const _0x874c = baileys_1["default"](_0x35a56f);
    const _0x2a3f7d = new Map();
    function _0x362fe2(_0x4a8145) {
      const _0x44144b = Date.now();
      if (!_0x2a3f7d.has(_0x4a8145)) {
        _0x2a3f7d.set(_0x4a8145, _0x44144b);
        return false;
      }
      const _0x556f95 = _0x2a3f7d.get(_0x4a8145);
      if (_0x44144b - _0x556f95 < 0xbb8) {
        return true;
      }
      _0x2a3f7d.set(_0x4a8145, _0x44144b);
      return false;
    }
    const _0x31e8ba = new Map();
    async function _0xfd1b1f(_0x11b2ed, _0x42cd78) {
      if (_0x31e8ba.has(_0x42cd78)) {
        return _0x31e8ba.get(_0x42cd78);
      }
      try {
        const _0x3a52bb = await _0x11b2ed.groupMetadata(_0x42cd78);
        _0x31e8ba.set(_0x42cd78, _0x3a52bb);
        setTimeout(() => _0x31e8ba["delete"](_0x42cd78), 0xea60);
        return _0x3a52bb;
      } catch (_0x11af8a) {
        if (_0x11af8a.message.includes("rate-overlimit")) {
          await new Promise(_0x584784 => setTimeout(_0x584784, 0x1388));
        }
        return null;
      }
    }
    process.on("uncaughtException", _0xaa28b4 => {});
    process.on("unhandledRejection", _0xe4a5d1 => {});
    _0x874c.ev.on("messages.upsert", async _0x2ab496 => {
      const {
        messages: _0x342fff
      } = _0x2ab496;
      if (!_0x342fff || _0x342fff.length === 0x0) {
        return;
      }
      for (const _0x6df690 of _0x342fff) {
        if (!_0x6df690.message) {
          continue;
        }
        const _0x21a420 = _0x6df690.key.remoteJid;
        if (_0x362fe2(_0x21a420)) {
          continue;
        }
      }
    });
    _0x874c.ev.on("groups.update", async _0x4061d4 => {
      for (const _0x30c47b of _0x4061d4) {
        const {
          id: _0x4a705d
        } = _0x30c47b;
        if (!_0x4a705d.endsWith("@g.us")) {
          continue;
        }
        await _0xfd1b1f(_0x874c, _0x4a705d);
      }
    });
    const _0x343f15 = ["https://bk9.fun/ai/llama?q=", "https://bk9.fun/ai/Aoyo?q="];
    function _0x3d71be(_0x2d46bf) {
      if (!_0x2d46bf || typeof _0x2d46bf !== "string") {
        return '';
      }
      return _0x2d46bf.replace(/[\[\]\(\)\{\}]/g, " ").replace(/\s+/g, " ").substring(0x0, 0xbe);
    }
    async function _0x426256(_0x5968d4) {
      const _0x3b40af = [/who\s*(made|created|built)\s*you/i, /who\s*is\s*your\s*(creator|developer|maker)/i, /what('?s| is) your name/i, /are\s*you\s*bwm/i, /you\s*called\s*bwm/i];
      const _0x5d0240 = _0x3b40af.some(_0x39fd0d => typeof _0x5968d4 === "string" && _0x39fd0d.test(_0x5968d4));
      try {
        const _0x3c9a06 = _0x343f15[Math.floor(Math.random() * _0x343f15.length)];
        const _0x5602c3 = await fetch(_0x3c9a06 + encodeURIComponent(_0x5968d4));
        try {
          const _0x33b42c = await _0x5602c3.json();
          let _0x70778b = _0x33b42c.BK9 || _0x33b42c.result || _0x33b42c.response || _0x33b42c.message || _0x33b42c.data && (_0x33b42c.data.text || _0x33b42c.data.message) || JSON.stringify(_0x33b42c);
          if (typeof _0x70778b === "object") {
            _0x70778b = JSON.stringify(_0x70778b);
          }
          if (_0x5d0240) {
            _0x70778b = "I'm RAHMANI-XMD, created by Ibrahim Adams! 🚀\n\n" + _0x70778b;
          }
          return _0x70778b;
        } catch (_0x4d3af4) {
          const _0x3380d5 = await _0x5602c3.text();
          return _0x5d0240 ? "I'm RAHMANI-XMD, created by Ibrahim Adams! 🚀\n\n" + _0x3380d5 : _0x3380d5;
        }
      } catch (_0x1e8ee7) {
        console.error("API Error:", _0x1e8ee7);
        return _0x5d0240 ? "I'm RAHMANI-XMD, created by Ibrahim Adams! 🚀" : "Sorry, I couldn't get a response right now";
      }
    }
    if (conf.CHATBOT === "yes" || conf.AUDIO_CHABOT === "yes") {
      _0x874c.ev.on('messages.upsert', async ({
        messages: _0xb0526e
      }) => {
        try {
          const _0x23c23a = _0xb0526e[0x0];
          if (!_0x23c23a?.["message"] || _0x23c23a.key.fromMe) {
            return;
          }
          const _0xfc1c36 = _0x23c23a.key.remoteJid;
          let _0x1b0e6b = '';
          if (_0x23c23a.message.conversation) {
            _0x1b0e6b = _0x23c23a.message.conversation;
          } else {
            if (_0x23c23a.message.extendedTextMessage?.["text"]) {
              _0x1b0e6b = _0x23c23a.message.extendedTextMessage.text;
            } else if (_0x23c23a.message.imageMessage?.["caption"]) {
              _0x1b0e6b = _0x23c23a.message.imageMessage.caption;
            }
          }
          if (!_0x1b0e6b || typeof _0x1b0e6b !== "string") {
            return;
          }
          const _0x3d375a = await _0x426256(_0x1b0e6b);
          if (conf.CHATBOT === "yes") {
            await _0x874c.sendMessage(_0xfc1c36, {
              'text': String(_0x3d375a)
            }, {
              'quoted': _0x23c23a
            });
          }
          if (conf.AUDIO_CHATBOT === "yes") {
            const _0x5e80ea = _0x3d71be(String(_0x3d375a));
            if (_0x5e80ea) {
              const _0x24a668 = googleTTS.getAudioUrl(_0x5e80ea, {
                'lang': 'en',
                'slow': false,
                'host': "https://translate.google.com"
              });
              await _0x874c.sendMessage(_0xfc1c36, {
                'audio': {
                  'url': _0x24a668
                },
                'mimetype': "audio/mpeg",
                'ptt': true
              }, {
                'quoted': _0x23c23a
              });
            }
          }
        } catch (_0x2fbf89) {
          console.error("Message processing error:", _0x2fbf89);
        }
      });
    }
    _0x874c.ev.on("messages.upsert", async _0x3527a6 => {
      const {
        messages: _0x2b1975
      } = _0x3527a6;
      const _0x3afbff = _0x2b1975[0x0];
      if (!_0x3afbff.message) {
        return;
      }
      const _0x10554e = Object.keys(_0x3afbff.message)[0x0];
      const _0x5e4890 = _0x3afbff.key.remoteJid;
      const _0x12010b = _0x3afbff.message.conversation || _0x3afbff.message.extendedTextMessage?.["text"];
      if (_0x3afbff.key.fromMe || _0x5e4890 === conf.NUMERO_OWNER + "@s.whatsapp.net") {
        return;
      }
      if (conf.CHATBOT === "yes") {
        if (_0x10554e === "conversation" || _0x10554e === "extendedTextMessage") {
          try {
            const _0x268147 = "https://apis.ibrahimadams.us.kg/api/ai/gpt4?apikey=ibraah-tech&q=" + encodeURIComponent(_0x12010b);
            let _0x4ceace = await fetch(_0x268147);
            let _0x1916fd = await _0x4ceace.json();
            if (_0x1916fd && _0x1916fd.result) {
              const _0x25b919 = _0x1916fd.result;
              console.log("Primary API Response:", _0x1916fd);
              await _0x874c.sendMessage(_0x5e4890, {
                'text': _0x25b919
              });
            } else {
              throw new Error("Invalid response or missing \"result\" field in primary API.");
            }
          } catch (_0x1c1b18) {
            console.error("Primary API Error:", _0x1c1b18.message);
            try {
              const _0x129dc8 = "https://api.davidcyriltech.my.id/ai/chatbot?query=" + encodeURIComponent(_0x12010b);
              let _0x1a3d0d = await fetch(_0x129dc8);
              let _0x535160 = await _0x1a3d0d.json();
              if (_0x535160 && _0x535160.result) {
                const _0xbc46f = _0x535160.result;
                console.log("Fallback API Response:", _0x535160);
                await _0x874c.sendMessage(_0x5e4890, {
                  'text': _0xbc46f
                });
              } else {
                console.warn("Fallback API returned no result.");
              }
            } catch (_0x41f4ba) {
              console.error("Fallback API Error:", _0x41f4ba.message);
            }
          }
        }
      }
    });
    function _0x5c179b() {
      const _0x2aa270 = {
        'timeZone': 'Africa/kenya',
        'year': "numeric",
        'month': "2-digit",
        'day': '2-digit',
        'hour': '2-digit',
        'minute': "2-digit",
        'second': "2-digit",
        'hour12': false
      };
      const _0x3a1ba9 = new Intl.DateTimeFormat('en-KE', _0x2aa270).format(new Date());
      return _0x3a1ba9;
    }
    setInterval(async () => {
      if (conf.AUTO_BIO === "yes") {
        const _0x2d20a8 = _0x5c179b();
        const _0x4a837e = "Rahmani-xmd is running 🚗\n" + _0x2d20a8;
        await _0x874c.updateProfileStatus(_0x4a837e);
        console.log("Updated Bio: " + _0x4a837e);
      }
    }, 0xea60);
    _0x874c.ev.on("call", async _0x394984 => {
      if (conf.ANTICALL === "yes") {
        const _0x244f5d = _0x394984[0x0].id;
        const _0x6347ca = _0x394984[0x0].from;
        await _0x874c.rejectCall(_0x244f5d, _0x6347ca);
        await _0x874c.sendMessage(_0x6347ca, {
          'text': "Hello😊,am RAHMANI-XMD a personal assistant,please try again later"
        });
      }
    });
    const _0xe8de1a = _0x4bd2c6 => new Promise(_0x38d3c3 => setTimeout(_0x38d3c3, _0x4bd2c6));
    let _0x300e20 = 0x0;
    const _0x573d00 = {
      'hello': ['👋', '🙂', '😊', "🙋‍♂️", '🙋‍♀️'],
      'hi': ['👋', '🙂', '😁', "🙋‍♂️", '🙋‍♀️'],
      "good morning": ['🌅', '🌞', '☀️', '🌻', '🌼'],
      "good night": ['🌙', '🌜', '⭐', '🌛', '💫'],
      'bye': ['👋', '😢', "👋🏻", '🥲', "🚶‍♂️", '🚶‍♀️'],
      "see you": ['👋', '😊', '👋🏻', '✌️', '🚶‍♂️'],
      'bro': ['🤜🤛', '👊', '💥', '🥊', '👑'],
      'sister': ['👭', "💁‍♀️", '🌸', '💖', "🙋‍♀️"],
      'buddy': ['🤗', '👯‍♂️', '👯‍♀️', '🤜🤛', '🤝'],
      'niaje': ['👋', '😄', '💥', '🔥', '🕺', '💃'],
      'fredi': ['😎', '💯', '🔥', '🚀', '👑'],
      'ezra': ['🔥', '💥', '👑', '💯', '😎'],
      'thanks': ['🙏', '😊', '💖', '❤️', '💐'],
      "thank you": ['🙏', '😊', '🙌', '💖', '💝'],
      'love': ['❤️', '💖', '💘', '😍', '😘', '💍', '💑'],
      "miss you": ['😢', '💔', '😔', '😭', '💖'],
      'sorry': ['😔', '🙏', '😓', '💔', '🥺'],
      'apologies': ['😔', '💔', '🙏', '😞', "🙇‍♂️", "🙇‍♀️"],
      'congratulations': ['🎉', '🎊', '🏆', '🎁', '👏'],
      "well done": ['👏', '💪', '🎉', "🎖️", '👍'],
      "good job": ['👏', '💯', '👍', '🌟', '🎉'],
      'happy': ['😁', '😊', '🎉', '🎊', '💃', '🕺'],
      'sad': ['😢', '😭', '😞', '💔', '😓'],
      'angry': ['😡', '🤬', '😤', '💢', '😾'],
      'excited': ['🤩', '🎉', '😆', '🤗', '🥳'],
      'surprised': ['😲', '😳', '😯', '😮', '😲'],
      'help': ['🆘', '❓', '🙏', '💡', "👨‍💻", '👩‍💻'],
      'how': ['❓', '🤔', '😕', '😳', '🧐'],
      'what': ['❓', '🤷‍♂️', "🤷‍♀️", '😕', '😲'],
      'where': ['❓', '🌍', "🗺️", "🏙️", '🌎'],
      'party': ['🎉', '🥳', '🍾', '🍻', '🎤', '💃', '🕺'],
      'fun': ['🤣', '😂', '🥳', '🎉', '🎮', '🎲'],
      'hangout': ['🍕', '🍔', '🍻', '🎮', '🍿', '😆'],
      'good': ['👍', '👌', '😊', '💯', '🌟'],
      'awesome': ['🔥', '🚀', '🤩', '👏', '💥'],
      'cool': ['😎', '👌', '🎮', '🎸', '💥'],
      'boring': ['😴', '🥱', '🙄', '😑', '🤐'],
      'tired': ['😴', '🥱', '😌', '💤', '🛌'],
      'bot': ['🤖', '💻', '⚙️', '🧠', '🔧'],
      'robot': ['🤖', '⚙️', '💻', '🔋', '🤓'],
      "cool bot": ['🤖', '😎', '🤘', '💥', '🎮'],
      "love you": ['❤️', '💖', '😘', '💋', '💑'],
      "thank you bot": ['🙏', '🤖', '😊', '💖', '💐'],
      "good night bot": ['🌙', '🌛', '⭐', '💤', '😴'],
      'laughter': ['😂', '🤣', '😆', '😄', '🤪'],
      'crying': ['😢', '😭', '😿', '😓', '💔'],
      'john': ['👑', '🔥', '💥', '😎', '💯'],
      'mike': ['💪', '🏆', '🔥', '💥', '🚀'],
      'lisa': ['💖', '👑', '🌸', '😍', '🌺'],
      'emily': ['💖', '💃', '👑', '🎉', '🎀'],
      'happy': ['😁', '😄', '😊', '🙌', '🎉', '🥳', '💃', '🕺', '🔥'],
      'excited': ['🤩', '🎉', '🥳', '🎊', '😆', '🤗', '💥', '🚀'],
      'love': ['❤️', '💖', '💘', '💝', '😍', '😘', '💍', '💑', '🌹'],
      'grateful': ['🙏', '💐', '🥰', '❤️', '😊'],
      'thankful': ['🙏', '💖', '💐', '🤗', '😇'],
      'sad': ['😢', '😭', '😞', '💔', '😔', '😓', '😖'],
      'angry': ['😡', '😠', '🤬', '💢', '👊', '💥', '⚡'],
      'frustrated': ['😤', '😩', '🤯', '😑', '🌀'],
      'bored': ['😴', '🥱', '🙄', '😑', '😒'],
      'surprised': ['😲', '😳', '😮', '😯', '😲', '🙀'],
      'shocked': ['😱', '😳', '😯', '💥', '🤯'],
      'wow': ['😲', '😱', '🤩', '🤯', '💥', '🚀'],
      'crying': ['😭', '😢', '💔', '😞', '😓'],
      "miss you": ['😭', '💔', '😔', '😢', '❤️'],
      'lonely': ['😔', '😭', '😢', '💔', '🙁'],
      'help': ['🆘', '❓', '🤔', '🙋‍♂️', '🙋‍♀️', '💡'],
      "need assistance": ['🆘', "💁‍♂️", "💁‍♀️", '❓', '🙏'],
      'sorry': ['😔', '🙏', '💔', '😓', '🥺', '🙇‍♂️', "🙇‍♀️"],
      'apology': ['😔', '😞', '🙏', '💔', "🙇‍♂️", '🙇‍♀️'],
      "good job": ['👏', '💯', '🎉', '🌟', '👍', '👏'],
      "well done": ['👏', '🎉', "🎖️", '💪', '🔥', '🏆'],
      "you can do it": ['💪', '🔥', '💯', '🚀', '🌟'],
      'congratulations': ['🎉', '🏆', '🎊', '🎁', '👏', '🍾'],
      'cheers': ['🥂', '🍻', '🍾', '🍷', '🥳', '🎉'],
      'goodbye': ['👋', '😢', '💔', '👋🏻', "🚶‍♂️", "🚶‍♀️"],
      'bye': ['👋', "👋🏻", '🥲', "🚶‍♂️", "🚶‍♀️"],
      "see you": ['👋', "👋🏻", '🤗', '✌️', '🙋‍♂️', '🙋‍♀️'],
      'hello': ['👋', '🙂', '😊', "🙋‍♂️", '🙋‍♀️'],
      'hi': ['👋', '🙂', '😁', "🙋‍♂️", "🙋‍♀️"],
      'party': ['🎉', '🥳', '🎤', '💃', '🕺', '🍻', '🎶'],
      'fun': ['🎮', '🎲', '🤣', '🎉', '🃏'],
      'play': ['🎮', '🏀', '⚽', '🎾', '🎱', '🎲', '🏆'],
      'work': ['💻', "🖥️", '💼', '📅', '📝'],
      'school': ['📚', '🏫', '🎒', "👨‍🏫", "👩‍🏫"],
      'study': ['📖', '📝', '💡', '📚', '🎓'],
      'summer': ['🌞', '🏖️', '🌴', '🍉', '🌻'],
      'winter': ['❄️', '☃️', '🎿', '🔥', '⛄'],
      'autumn': ['🍁', '🍂', '🎃', '🍂', '🍁'],
      'spring': ['🌸', '🌼', '🌷', '🌱', '🌺'],
      'birthday': ['🎂', '🎉', '🎁', '🎈', '🎊'],
      'anniversary': ['💍', '🎉', '🎁', '🎈', '💑'],
      'robot': ['🤖', '⚙️', '🔧', '🤖', '🧠'],
      'bot': ['🤖', '🧠', '⚙️', '💻', "🖥️"],
      'thanks': ['🙏', '💖', '😊', '❤️', '💐'],
      "good luck": ['🍀', '🍀', '💯', '🍀', '🎯'],
      'john': ['👑', '🔥', '💥', '😎', '💯'],
      'mike': ['💪', '🏆', '🔥', '💥', '🚀'],
      'lisa': ['💖', '👑', '🌸', '😍', '🌺'],
      'emily': ['💖', '💃', '👑', '🎉', '🎀'],
      'food': ['🍕', '🍔', '🍟', '🍲', '🍣', '🍩'],
      'drink': ['🍺', '🍷', '🥂', '🍾', '🥤'],
      'coffee': ['☕', '🥤', '🍵', '🥶'],
      'tea': ['🍵', '🫖', '🍂', '🍃'],
      'excited': ['🤩', '🎉', '🥳', '💥', '🚀', '😆', '😜'],
      'nervous': ['😬', '😰', '🤞', '🧠', '👐'],
      'confused': ['🤔', '😕', '🧐', '😵', '🤷‍♂️', "🤷‍♀️"],
      'embarrassed': ['😳', '😳', '🙈', '😳', '😬', '😅'],
      'hopeful': ['🤞', '🌠', '🙏', '🌈', '💫'],
      'shy': ['😊', '😳', '🙈', '🫣', '🫶'],
      'family': ["👨‍👩‍👧‍👦", '👩‍👧', '👩‍👧‍👦', "👨‍👩‍👧", '💏', "👨‍👨‍👧‍👦", "👩‍👩‍👧‍👦"],
      'friends': ['👯‍♂️', "👯‍♀️", '🤗', '🫶', '💫', '🤝'],
      'relationship': ['💑', '❤️', '💍', '🥰', '💏', '💌'],
      'couple': ["👩‍❤️‍👨", "👨‍❤️‍👨", "👩‍❤️‍👩", '💍', '💑', '💏'],
      "best friend": ['🤗', '💖', "👯‍♀️", "👯‍♂️", '🙌'],
      "love you": ['❤️', '😘', '💖', '💘', '💓', '💗'],
      'vacation': ["🏖️", '🌴', '✈️', '🌊', "🛳️", '🏞️', "🏕️"],
      'beach': ['🏖️', '🌊', "🏄‍♀️", '🩴', "🏖️", '🌴', '🦀'],
      "road trip": ['🚗', '🚙', '🛣️', '🌄', '🌟'],
      'mountain': ["🏞️", '⛰️', "🏔️", '🌄', '🏕️', '🌲'],
      'city': ["🏙️", '🌆', '🗽', '🌇', '🚖', "🏙️"],
      'exploration': ['🌍', '🧭', '🌎', '🌍', '🧳', '📍', '⛵'],
      'morning': ['🌅', '☀️', '🌞', '🌄', '🌻', "🕶️"],
      'afternoon': ['🌞', "🌤️", '⛅', '🌻', '🌇'],
      'night': ['🌙', '🌛', '🌜', '⭐', '🌚', '💫'],
      'evening': ['🌙', '🌛', '🌇', '🌓', '💫'],
      'goodnight': ['🌙', '😴', '💤', '🌜', '🛌', '🌛', '✨'],
      'productivity': ['💻', '📊', '📝', '💼', '📅', '📈'],
      'office': ["🖥️", '💼', "🗂️", '📅', "🖋️"],
      'workout': ["🏋️‍♀️", '💪', "🏃‍♂️", "🏃‍♀️", "🤸‍♀️", "🚴‍♀️", "🏋️‍♂️"],
      "study hard": ['📚', '📝', '📖', '💡', '💼'],
      'focus': ['🔍', '🎯', '💻', '🧠', '🤓'],
      'food': ['🍕', '🍔', '🍟', '🍖', '🍖', '🥗', '🍣', '🍲'],
      'drink': ['🍹', '🥤', '🍷', '🍾', '🍸', '🍺', '🥂', '☕'],
      'coffee': ['☕', '🧃', '🍵', '🥤', '🍫'],
      'cake': ['🍰', '🎂', '🍩', '🍪', '🍫', '🧁'],
      "ice cream": ['🍦', '🍧', '🍨', '🍪'],
      'cat': ['🐱', '😺', '🐈', '🐾'],
      'dog': ['🐶', '🐕', '🐩', "🐕‍🦺", '🐾'],
      'bird': ['🐦', '🦉', '🦅', '🐦'],
      'fish': ['🐟', '🐠', '🐡', '🐡', '🐙'],
      'rabbit': ['🐰', '🐇', '🐹', '🐾'],
      'lion': ['🦁', '🐯', '🐅', '🐆'],
      'bear': ['🐻', '🐨', '🐼', '🐻‍❄️'],
      'elephant': ['🐘', '🐘'],
      'sun': ['☀️', '🌞', '🌄', '🌅', '🌞'],
      'rain': ['🌧️', '☔', '🌈', "🌦️", '🌧️'],
      'snow': ['❄️', '⛄', "🌨️", "🌬️", '❄️'],
      'wind': ['💨', '🌬️', '🌪️', "🌬️"],
      'earth': ['🌍', '🌏', '🌎', '🌍', '🌱', '🌳'],
      'phone': ['📱', '☎️', '📞', '📲', '📡'],
      'computer': ['💻', '🖥️', '⌨️', '🖱️', "🖥️"],
      'internet': ['🌐', '💻', '📶', '📡', '🔌'],
      'software': ['💻', "🖥️", "🧑‍💻", "🖱️", '💡'],
      'star': ['⭐', '🌟', '✨', '🌠', '💫'],
      'light': ['💡', '🔦', '✨', '🌟', '🔆'],
      'money': ['💵', '💰', '💸', '💳', '💶'],
      'victory': ['✌️', '🏆', '🎉', "🎖️", '🎊'],
      'gift': ['🎁', '🎀', '🎉', '🎁'],
      'fire': ['🔥', '💥', '🌋', '🔥', '💣'],
      'music': ['🎵', '🎶', '🎧', '🎤', '🎸', '🎹'],
      'sports': ['⚽', '🏀', '🏈', '🎾', '🏋️‍♂️', "🏃‍♀️", '🏆', '🥇'],
      'games': ['🎮', '🕹️', '🎲', '🎯', '🧩'],
      'art': ['🎨', "🖌️", "🖼️", '🎭', "🖍️"],
      'photography': ['📷', '📸', '📸', '🖼️', '🎥'],
      'reading': ['📚', '📖', '📚', '📰'],
      'craft': ['🧵', '🪡', '✂️', '🪢', '🧶'],
      'hello': ['👋', '🙂', '😊'],
      'hey': ['👋', '🙂', '😊'],
      'hi': ['👋', '🙂', '😊'],
      'bye': ['👋', '😢', '👋'],
      'goodbye': ['👋', '😢', "🙋‍♂️"],
      'thanks': ['🙏', '😊', '🌹'],
      "thank you": ['🙏', '😊', '🌸'],
      'welcome': ['😊', '😄', '🌷'],
      'congrats': ['🎉', '👏', '🥳'],
      'congratulations': ['🎉', '👏', '🥳'],
      "good job": ['👏', '👍', '🙌'],
      'great': ['👍', '💪', '😄'],
      'cool': ['😎', '🤙', '🔥'],
      'ok': ['👌', '👍', '✅'],
      'love': ['❤️', '💕', '💖'],
      'like': ['👍', '❤️', '👌'],
      'happy': ['😊', '😁', '🙂'],
      'joy': ['😁', '😆', '😂'],
      'laugh': ['😂', '🤣', '😁'],
      'sad': ['😢', '😭', '☹️'],
      'cry': ['😭', '😢', '😿'],
      'angry': ['😡', '😠', '💢'],
      'mad': ['😠', '😡', '😤'],
      'shocked': ['😲', '😱', '😮'],
      'scared': ['😱', '😨', '😧'],
      'sleep': ['😴', '💤', '😌'],
      'bored': ['😐', '😑', '🙄'],
      'excited': ['🤩', '🥳', '🎉'],
      'party': ['🥳', '🎉', '🍾'],
      'kiss': ['😘', '💋', '😍'],
      'hug': ['🤗', '❤️', '💕'],
      'peace': ['✌️', '🕊️', '✌️'],
      'pizza': ['🍕', '🥖', '🍟'],
      'coffee': ['☕', '🥤', '🍵'],
      'water': ['💧', '💦', '🌊'],
      'wine': ['🍷', '🍸', '🍾'],
      'hello': ['👋', '🙂', '😊', '😃', '😄'],
      'hey': ['👋', '😊', '🙋', '😄', '😁'],
      'hi': ['👋', '😀', '😁', '😃', '🙂'],
      'bye': ['👋', '😢', "🙋‍♂️", '😞', '😔'],
      'goodbye': ['👋', '😢', "🙋‍♀️", '😔', '😭'],
      'thanks': ['🙏', '😊', '🌹', '🤲', '🤗'],
      "thank you": ['🙏', '💐', '🤲', '🥰', '😌'],
      'welcome': ['😊', '😄', '🌸', '🙂', '💖'],
      'congrats': ['🎉', '👏', '🥳', '💐', '🎊'],
      'congratulations': ['🎉', '👏', '🥳', '🎊', '🍾'],
      "good job": ['👏', '👍', '🙌', '💪', '🤩'],
      'great': ['👍', '💪', '😄', '🔥', '✨'],
      'cool': ['😎', '🤙', '🔥', '👌', '🆒'],
      'ok': ['👌', '👍', '✅', '😌', '🤞'],
      'love': ['❤️', '💕', '💖', '💗', '😍'],
      'like': ['👍', '❤️', '👌', '😌', '💓'],
      'happy': ['😊', '😁', '🙂', '😃', '😄'],
      'joy': ['😁', '😆', '😂', '😊', '🤗'],
      'laugh': ['😂', '🤣', '😁', '😹', '😄'],
      'sad': ['😢', '😭', '☹️', '😞', '😔'],
      'cry': ['😭', '😢', '😿', '💧', '😩'],
      'angry': ['😡', '😠', '💢', '😤', '🤬'],
      'mad': ['😠', '😡', '😤', '💢', '😒'],
      'shocked': ['😲', '😱', '😮', '😯', '😧'],
      'scared': ['😱', '😨', '😧', '😰', '😳'],
      'sleep': ['😴', '💤', '😌', '😪', '🛌'],
      'bored': ['😐', '😑', '🙄', '😒', '🤦'],
      'excited': ['🤩', '🥳', '🎉', '😄', '✨'],
      'party': ['🥳', '🎉', '🎊', '🍾', '🎈'],
      'kiss': ['😘', '💋', '😍', '💖', '💏'],
      'hug': ['🤗', '❤️', '💕', '💞', '😊'],
      'peace': ['✌️', "🕊️", '🤞', '💫', '☮️'],
      'pizza': ['🍕', '🥖', '🍟', '🍔', '🍝'],
      'burger': ['🍔', '🍟', '🥓', '🥪', '🌭'],
      'fries': ['🍟', '🍔', '🥤', '🍿', '🧂'],
      'coffee': ['☕', '🥤', '🍵', '🫖', '🥄'],
      'tea': ['🍵', '☕', '🫖', '🥄', '🍪'],
      'cake': ['🍰', '🎂', '🧁', '🍩', '🍫'],
      'donut': ['🍩', '🍪', '🍰', '🧁', '🍫'],
      "ice cream": ['🍦', '🍨', '🍧', '🍧', '🍫'],
      'cookie': ['🍪', '🍩', '🍰', '🧁', '🍫'],
      'chocolate': ['🍫', '🍬', '🍰', '🍦', '🍭'],
      'popcorn': ['🍿', '🥤', '🍫', '🎬', '🍩'],
      'soda': ['🥤', '🍾', '🍹', '🍷', '🍸'],
      'water': ['💧', '💦', '🌊', '🚰', '🥤'],
      'wine': ['🍷', '🍾', '🥂', '🍹', '🍸'],
      'beer': ['🍺', '🍻', '🥂', '🍹', '🍾'],
      'cheers': ['🥂', '🍻', '🍾', '🎉', '🎊'],
      'sun': ['🌞', '☀️', '🌅', '🌄', '🌻'],
      'moon': ['🌜', '🌙', '🌚', '🌝', '🌛'],
      'star': ['🌟', '⭐', '✨', '💫', '🌠'],
      'cloud': ['☁️', '🌥️', "🌤️", '⛅', "🌧️"],
      'rain': ["🌧️", '☔', '💧', '💦', '🌂'],
      'thunder': ['⚡', '⛈️', '🌩️', "🌪️", '⚠️'],
      'fire': ['🔥', '⚡', '🌋', '🔥', '💥'],
      'flower': ['🌸', '🌺', '🌷', '💐', '🌹'],
      'tree': ['🌳', '🌲', '🌴', '🎄', '🌱'],
      'leaves': ['🍃', '🍂', '🍁', '🌿', '🌾'],
      'snow': ['❄️', '⛄', "🌨️", "🌬️", '☃️'],
      'wind': ['💨', '🌬️', '🍃', '⛅', "🌪️"],
      'rainbow': ['🌈', '🌤️', '☀️', '✨', '💧'],
      'ocean': ['🌊', '💦', '🚤', '⛵', '🏄‍♂️'],
      'dog': ['🐶', '🐕', '🐾', '🐩', '🦮'],
      'cat': ['🐱', '😺', '😸', '🐾', '🦁'],
      'lion': ['🦁', '🐯', '🐱', '🐾', '🐅'],
      'tiger': ['🐯', '🐅', '🦁', '🐆', '🐾'],
      'bear': ['🐻', '🐨', '🐼', '🧸', '🐾'],
      'rabbit': ['🐰', '🐇', '🐾', '🐹', '🐭'],
      'panda': ['🐼', '🐻', '🐾', '🐨', '🍃'],
      'monkey': ['🐒', '🐵', '🙊', '🙉', '🙈'],
      'fox': ['🦊', '🐺', '🐾', '🐶', '🦮'],
      'bird': ['🐦', '🐧', '🦅', '🦢', '🦜'],
      'fish': ['🐟', '🐠', '🐡', '🐬', '🐳'],
      'whale': ['🐋', '🐳', '🌊', '🐟', '🐠'],
      'dolphin': ['🐬', '🐟', '🐠', '🐳', '🌊'],
      'unicorn': ['🦄', '✨', '🌈', '🌸', '💫'],
      'bee': ['🐝', '🍯', '🌻', '💐', '🐞'],
      'butterfly': ['🦋', '🌸', '💐', '🌷', '🌼'],
      'phoenix': ['🦅', '🔥', '✨', '🌄', '🔥'],
      'wolf': ['🐺', '🌕', '🐾', '🌲', '🌌'],
      'mouse': ['🐭', '🐁', '🧀', '🐾', '🐀'],
      'cow': ['🐮', '🐄', '🐂', '🌾', '🍀'],
      'pig': ['🐷', '🐽', '🐖', '🐾', '🐗'],
      'horse': ['🐴', '🏇', '🐎', '🌄', "🏞️"],
      'sheep': ['🐑', '🐏', '🌾', '🐾', '🐐'],
      'soccer': ['⚽', '🥅', "🏟️", '🎉', '👏'],
      'basketball': ['🏀', '⛹️‍♂️', '🏆', '🎉', '🥇'],
      'tennis': ['🎾', '🏸', '🥇', '🏅', '💪'],
      'baseball': ['⚾', "🏟️", '🏆', '🎉', '👏'],
      'football': ['🏈', '🎉', "🏟️", '🏆', '🥅'],
      'golf': ['⛳', "🏌️‍♂️", "🏌️‍♀️", '🎉', '🏆'],
      'bowling': ['🎳', '🏅', '🎉', '🏆', '👏'],
      'running': ["🏃‍♂️", "🏃‍♀️", '👟', '🏅', '🔥'],
      'swimming': ["🏊‍♂️", "🏊‍♀️", '🌊', '🏆', '👏'],
      'cycling': ['🚴‍♂️', '🚴‍♀️', '🏅', '🔥', '🏞️'],
      'yoga': ['🧘', '🌸', '💪', '✨', '😌'],
      'dancing': ['💃', '🕺', '🎶', '🥳', '🎉'],
      'singing': ['🎤', '🎶', '🎙️', '🎉', '🎵'],
      'guitar': ['🎸', '🎶', '🎼', '🎵', '🎉'],
      'piano': ['🎹', '🎶', '🎼', '🎵', '🎉'],
      'money': ['💸', '💰', '💵', '💳', '🤑'],
      'fire': ['🔥', '💥', '⚡', '🎇', '✨'],
      'rocket': ['🚀', '🌌', '🛸', '🛰️', '✨'],
      'bomb': ['💣', '🔥', '⚡', '😱', '💥'],
      'computer': ['💻', "🖥️", '📱', '⌨️', "🖱️"],
      'phone': ['📱', '📲', '☎️', '📞', '📳'],
      'camera': ['📷', '📸', '🎥', '📹', '🎞️'],
      'book': ['📚', '📖', '✏️', '📘', '📕'],
      'light': ['💡', '✨', '🔦', '🌟', '🌞'],
      'music': ['🎶', '🎵', '🎼', '🎸', '🎧'],
      'star': ['🌟', '⭐', '✨', '🌠', '💫'],
      'gift': ['🎁', '💝', '🎉', '🎊', '🎈'],
      'car': ['🚗', '🚘', '🚙', '🚕', "🛣️"],
      'train': ['🚆', '🚄', '🚅', '🚞', '🚂'],
      'plane': ['✈️', '🛫', '🛬', '🛩️', '🚁'],
      'boat': ['⛵', '🛥️', '🚤', '🚢', '🌊'],
      'city': ['🏙️', '🌆', '🌇', '🏢', '🌃'],
      'beach': ['🏖️', '🌴', '🌊', '☀️', '🏄‍♂️'],
      'mountain': ["🏔️", '⛰️', '🗻', '🌄', '🌞'],
      'forest': ['🌲', '🌳', '🍃', "🏞️", '🐾'],
      'desert': ["🏜️", '🌵', '🐪', '🌞', "🏖️"],
      'hotel': ['🏨', '🏩', '🛏️', '🛎️', '🏢'],
      'restaurant': ["🍽️", '🍴', '🥂', '🍷', '🍾'],
      'brave': ['🦸‍♂️', '🦸‍♀️', '💪', '🔥', '👊'],
      'shy': ['😳', '☺️', '🙈', '😊', '😌'],
      'surprised': ['😲', '😮', '😧', '😯', '🤯'],
      'bored': ['😐', '😑', '😶', '🙄', '😒'],
      'sleepy': ['😴', '💤', '😪', '😌', '🛌'],
      'determined': ['💪', '🔥', '😤', '👊', '🏆'],
      'birthday': ['🎂', '🎉', '🎈', '🎊', '🍰'],
      'christmas': ['🎄', '🎅', '🤶', '🎁', '⛄'],
      "new year": ['🎉', '🎊', '🎇', '🍾', '✨'],
      'easter': ['🐰', '🐣', '🌷', '🥚', '🌸'],
      'halloween': ['🎃', '👻', "🕸️", '🕷️', '👹'],
      'valentine': ['💘', '❤️', '💌', '💕', '🌹'],
      'wedding': ['💍', '👰', '🤵', '🎩', '💒']
    };
    const _0x4d0ebd = ['😎', '🔥', '💥', '💯', '✨', '🌟', '🌈', '⚡', '💎', '🌀', '👑', '🎉', '🎊', '🦄', '👽', '🛸', '🚀', '🦋', '💫', '🍀', '🎶', '🎧', '🎸', '🎤', '🏆', '🏅', '🌍', '🌎', '🌏', '🎮', '🎲', '💪', "🏋️", '🥇', '👟', '🏃', '🚴', '🚶', '🏄', '⛷️', '🕶️', '🧳', '🍿', '🍿', '🥂', '🍻', '🍷', '🍸', '🥃', '🍾', '🎯', '⏳', '🎁', '🎈', '🎨', '🌻', '🌸', '🌺', '🌹', '🌼', '🌞', '🌝', '🌜', '🌙', '🌚', '🍀', '🌱', '🍃', '🍂', '🌾', '🐉', '🐍', '🦓', '🦄', '🦋', '🦧', '🦘', '🦨', '🦡', '🐉', '🐅', '🐆', '🐓', '🐢', '🐊', '🐠', '🐟', '🐡', '🦑', '🐙', '🦀', '🐬', '🦕', '🦖', '🐾', '🐕', '🐈', '🐇', '🐾', '🐁', '🐀', "🐿️"];
    const _0x281076 = _0x7bcf56 => {
      const _0x5f2c4b = _0x7bcf56.split(/\s+/);
      for (const _0x5b48a4 of _0x5f2c4b) {
        const _0x58516b = _0x45b13a(_0x5b48a4.toLowerCase());
        if (_0x58516b) {
          return _0x58516b;
        }
      }
      return _0x4d0ebd[Math.floor(Math.random() * _0x4d0ebd.length)];
    };
    const _0x45b13a = _0x1d285a => {
      const _0x5af407 = _0x573d00[_0x1d285a.toLowerCase()];
      if (_0x5af407 && _0x5af407.length > 0x0) {
        return _0x5af407[Math.floor(Math.random() * _0x5af407.length)];
      }
      return null;
    };
    if (conf.AUTO_REACT_STATS === "yes") {
      console.log("AUTO_REACT_STATUS is enabled. Listening for status updates...");
      _0x874c.ev.on('messages.upsert', async _0x3c8e07 => {
        const {
          messages: _0x2d3e08
        } = _0x3c8e07;
        for (const _0x3c422d of _0x2d3e08) {
          if (_0x3c422d.key && _0x3c422d.key.remoteJid === "status@broadcast") {
            console.log("Detected status update from:", _0x3c422d.key.remoteJid);
            const _0x20d733 = Date.now();
            if (_0x20d733 - _0x300e20 < 0x1388) {
              console.log("Throttling reactions to prevent overflow.");
              continue;
            }
            if (!zokou) {
              console.log("Bot's user ID not available. Skipping reaction.");
              continue;
            }
            const _0x6cc626 = _0x3c422d?.['message']?.['conversation'] || '';
            const _0x2c9b2e = _0x281076(_0x6cc626) || _0x4d0ebd[Math.floor(Math.random() * _0x4d0ebd.length)];
            if (_0x2c9b2e) {
              await _0x874c.sendMessage(_0x3c422d.key.remoteJid, {
                'react': {
                  'key': _0x3c422d.key,
                  'text': _0x2c9b2e
                }
              }, {
                'statusJidList': [_0x3c422d.key.participant, zokou]
              });
              _0x300e20 = Date.now();
              console.log("Successfully reacted with '" + _0x2c9b2e + "' to status update by " + _0x3c422d.key.remoteJid);
            }
            await _0xe8de1a(0x7d0);
          }
        }
      });
    }
    if (conf.AUTO_REACT === 'yes') {
      console.log("AUTO_REACT is enabled. Listening for regular messages...");
      _0x874c.ev.on('messages.upsert', async _0x4cf7b3 => {
        const {
          messages: _0x2ac96c
        } = _0x4cf7b3;
        for (const _0x2b83f4 of _0x2ac96c) {
          if (_0x2b83f4.key && _0x2b83f4.key.remoteJid) {
            const _0x2326fd = Date.now();
            if (_0x2326fd - _0x300e20 < 0x1388) {
              console.log("Throttling reactions to prevent overflow.");
              continue;
            }
            const _0xef3aac = _0x2b83f4?.["message"]?.["conversation"] || '';
            const _0x1c9f31 = _0x281076(_0xef3aac) || _0x4d0ebd[Math.floor(Math.random() * _0x4d0ebd.length)];
            if (_0x1c9f31) {
              await _0x874c.sendMessage(_0x2b83f4.key.remoteJid, {
                'react': {
                  'text': _0x1c9f31,
                  'key': _0x2b83f4.key
                }
              }).then(() => {
                _0x300e20 = Date.now();
                console.log("Successfully reacted with '" + _0x1c9f31 + "' to message by " + _0x2b83f4.key.remoteJid);
              })["catch"](_0x3e64f6 => {
                console.error("Failed to send reaction:", _0x3e64f6);
              });
            }
            await _0xe8de1a(0x7d0);
          }
        }
      });
    }
    if (conf.AUTO_REACT_STATUS === "yes") {
      console.log("AUTO_REACT_STATUS is enabled. Listening for status updates...");
      _0x874c.ev.on('messages.upsert', async _0x12a825 => {
        const {
          messages: _0x825858
        } = _0x12a825;
        for (const _0x53b56f of _0x825858) {
          if (_0x53b56f.key && _0x53b56f.key.remoteJid === 'status@broadcast') {
            console.log("Detected status update from:", _0x53b56f.key.remoteJid);
            const _0x37182e = Date.now();
            if (_0x37182e - _0x300e20 < 0x1388) {
              console.log("Throttling reactions to prevent overflow.");
              continue;
            }
            const _0x5e8179 = _0x874c.user && _0x874c.user.id ? _0x874c.user.id.split(':')[0x0] + "@s.whatsapp.net" : null;
            if (!_0x5e8179) {
              console.log("Bot's user ID not available. Skipping reaction.");
              continue;
            }
            await _0x874c.sendMessage(_0x53b56f.key.remoteJid, {
              'react': {
                'key': _0x53b56f.key,
                'text': '✅'
              }
            }, {
              'statusJidList': [_0x53b56f.key.participant, _0x5e8179]
            });
            _0x300e20 = Date.now();
            console.log("Successfully reacted to status update by " + _0x53b56f.key.remoteJid);
            await _0xe8de1a(0x7d0);
          }
        }
      });
    }
    async function _0x429f36(_0x2d5d63) {
      const _0x590677 = Object.keys(_0x2d5d63)[0x0].replace("Message", '');
      try {
        const _0x286051 = await _0x874c.downloadContentFromMessage(_0x2d5d63[_0x590677], _0x590677);
        let _0x4c9a0a = Buffer.from([]);
        for await (const _0x315f4f of _0x286051) {
          _0x4c9a0a = Buffer.concat([_0x4c9a0a, _0x315f4f]);
        }
        return _0x4c9a0a;
      } catch (_0x39adea) {
        console.error("Error downloading media:", _0x39adea);
        return null;
      }
    }
    function _0x1cf472(_0x47964b) {
      const _0x589b8d = _0x47964b.key.participant || _0x47964b.key.remoteJid;
      const _0x126d13 = new Intl.DateTimeFormat('en-KE', {
        'timeZone': "Africa/Nairobi",
        'dateStyle': "full",
        'timeStyle': 'medium'
      }).format(new Date());
      let _0x50fa18 = "*🚫RAHMANI-XMD,[antidelete detected]🚫*\n\n";
      _0x50fa18 += "*Time:* " + _0x126d13 + "\n";
      _0x50fa18 += "*Deleted By:* @" + _0x589b8d.split('@')[0x0] + "\n\n";
      return _0x50fa18;
    }
    _0x874c.ev.on("messages.upsert", async _0x5583cf => {
      if (conf.ANTIDELETE2 === "yes") {
        const {
          messages: _0x2de80e
        } = _0x5583cf;
        const _0x2d6594 = _0x2de80e[0x0];
        if (!_0x2d6594.message) {
          return;
        }
        const _0xd9cde4 = _0x2d6594.key;
        const _0x1e7c21 = _0xd9cde4.remoteJid;
        if (!store.chats[_0x1e7c21]) {
          store.chats[_0x1e7c21] = [];
        }
        store.chats[_0x1e7c21].push(_0x2d6594);
        if (_0x2d6594.message.protocolMessage && _0x2d6594.message.protocolMessage.type === 0x0) {
          const _0x4ed799 = _0x2d6594.message.protocolMessage.key;
          const _0x41fe00 = store.chats[_0x1e7c21];
          const _0xb44daf = _0x41fe00.find(_0xd68402 => _0xd68402.key.id === _0x4ed799.id);
          if (_0xb44daf) {
            try {
              const _0xd3a69d = _0x1cf472(_0xb44daf);
              const _0x3e9f01 = Object.keys(_0xb44daf.message)[0x0];
              if (_0x3e9f01 === 'conversation' || _0x3e9f01 === 'extendedTextMessage') {
                await _0x874c.sendMessage(conf.NUMERO_OWNER + "@s.whatsapp.net", {
                  'text': _0xd3a69d + ("*Message:* " + _0xb44daf.message[_0x3e9f01].text),
                  'mentions': [_0xb44daf.key.participant]
                });
              } else {
                if (_0x3e9f01 === "imageMessage" || _0x3e9f01 === 'videoMessage' || _0x3e9f01 === "documentMessage" || _0x3e9f01 === 'audioMessage' || _0x3e9f01 === "stickerMessage" || _0x3e9f01 === "voiceMessage") {
                  const _0x4dbbc6 = await _0x429f36(_0xb44daf.message);
                  if (_0x4dbbc6) {
                    const _0x4ba74a = _0x3e9f01.replace("Message", '').toLowerCase();
                    await _0x874c.sendMessage(conf.NUMERO_OWNER + '@s.whatsapp.net', {
                      [_0x4ba74a]: _0x4dbbc6,
                      'caption': _0xd3a69d,
                      'mentions': [_0xb44daf.key.participant]
                    });
                  }
                }
              }
            } catch (_0x40150b) {
              console.error("Error handling deleted message:", _0x40150b);
            }
          }
        }
      }
    });
    _0x874c.ev.on("messages.upsert", async _0x1b2eca => {
      if (conf.ANTIDELETE1 === "yes") {
        const {
          messages: _0x1ba832
        } = _0x1b2eca;
        const _0x16c8f1 = _0x1ba832[0x0];
        if (!_0x16c8f1.message) {
          return;
        }
        const _0x4bb702 = _0x16c8f1.key;
        const _0x1a480e = _0x4bb702.remoteJid;
        if (!store.chats[_0x1a480e]) {
          store.chats[_0x1a480e] = [];
        }
        store.chats[_0x1a480e].push(_0x16c8f1);
        if (_0x16c8f1.message.protocolMessage && _0x16c8f1.message.protocolMessage.type === 0x0) {
          const _0x3ed14e = _0x16c8f1.message.protocolMessage.key;
          const _0x58c9b6 = store.chats[_0x1a480e];
          const _0x4f27b6 = _0x58c9b6.find(_0x261178 => _0x261178.key.id === _0x3ed14e.id);
          if (_0x4f27b6) {
            try {
              const _0xe23a96 = _0x1cf472(_0x4f27b6);
              if (_0x4f27b6.message.conversation) {
                await _0x874c.sendMessage(_0x1a480e, {
                  'text': _0xe23a96 + ("*Message:* " + _0x4f27b6.message.conversation),
                  'mentions': [_0x4f27b6.key.participant]
                });
              } else {
                if (_0x4f27b6.message.imageMessage || _0x4f27b6.message.videoMessage || _0x4f27b6.message.documentMessage || _0x4f27b6.message.audioMessage || _0x4f27b6.message.stickerMessage || _0x4f27b6.message.voiceMessage) {
                  const _0x5adc0a = await _0x429f36(_0x4f27b6.message);
                  if (_0x5adc0a) {
                    const _0x343745 = _0x4f27b6.message.imageMessage ? 'image' : _0x4f27b6.message.videoMessage ? "video" : _0x4f27b6.message.documentMessage ? "document" : _0x4f27b6.message.audioMessage ? "audio" : _0x4f27b6.message.stickerMessage ? 'sticker' : 'audio';
                    await _0x874c.sendMessage(_0x1a480e, {
                      [_0x343745]: _0x5adc0a,
                      'caption': _0xe23a96,
                      'mentions': [_0x4f27b6.key.participant]
                    });
                  }
                }
              }
            } catch (_0x3a07a6) {
              console.error("Error handling deleted message:", _0x3a07a6);
            }
          }
        }
      }
    });
    const _0x3eecc2 = {
      'hey': 'media/hey.wav',
      'hi': 'media/hey.wav',
      'hey': "media/hey.wav",
      'he': "media/hey.wav",
      'hello': "media/hello.wav",
      'mambo': 'media/hey.wav',
      'niaje': "media/hey.wav",
      'morning': "media/goodmorning.wav",
      'goodmorning': "media/goodmorning.wav",
      "weka up": 'media/goodmorning.wav',
      'night': 'media/goodnight.wav',
      'goodnight': "media/goodnight.wav",
      'sleep': "media/goodnight.wav",
      'oi': "media/mkuu.wav",
      'mkuu': "media/mkuu.wav",
      'mahn': 'media/mkuu.wav',
      'owoh': "media/mkuu.wav",
      'yoo': "media/mkuu.wav",
      'wazii': "media/mkuu.wav",
      'evening': "media/goodevening.wav",
      'goodevening': "media/goodevening.wav",
      'darling': 'media/darling.wav',
      'beb': "media/darling.wav",
      'mpenzi': "media/darling.wav",
      'afternoon': 'media/goodafternoon.wav',
      'jion': "media/goodafternoon.wav",
      'kaka': "media/kaka.wav",
      'bro': 'media/morio.mp3',
      'ndugu': 'media/kaka.wav',
      'morio': "media/morio.mp3",
      'mzee': "media/morio.mp3",
      'kijina': "media/mkuu.wav",
      'mkuu': "media/mkuu.wav",
      'ozah': "media/mkuu.wav",
      'ozaah': "media/mkuu.wav",
      'oyaah': 'media/mkuu.wav',
      'oyah': 'media/mkuu.wav'
    };
    const _0x10c791 = _0x34573e => {
      const _0x35e0a6 = _0x34573e.split(/\s+/);
      for (const _0x58a33a of _0x35e0a6) {
        const _0x5c5943 = _0x3eecc2[_0x58a33a.toLowerCase()];
        if (_0x5c5943) {
          return _0x5c5943;
        }
      }
      return null;
    };
    if (conf.AUDIO_REPLY === "yes") {
      console.log("AUTO_REPLY_AUDIO is enabled. Listening for messages...");
      _0x874c.ev.on("messages.upsert", async _0x43a488 => {
        try {
          const {
            messages: _0x15345f
          } = _0x43a488;
          for (const _0x1b624a of _0x15345f) {
            if (!_0x1b624a.key || !_0x1b624a.key.remoteJid) {
              continue;
            }
            const _0x442ead = _0x1b624a?.['message']?.["conversation"] || '';
            const _0x1cdf6b = _0x10c791(_0x442ead);
            if (_0x1cdf6b) {
              try {
                await fs.access(_0x1cdf6b);
                console.log("Replying with audio: " + _0x1cdf6b);
                await _0x874c.sendMessage(_0x1b624a.key.remoteJid, {
                  'audio': {
                    'url': _0x1cdf6b
                  },
                  'mimetype': "audio/mp4",
                  'ptt': true
                });
                console.log("Audio reply sent: " + _0x1cdf6b);
              } catch (_0x48d3ea) {
                console.error("Error sending audio reply: " + _0x48d3ea.message);
              }
            } else {
              console.log("No matching keyword detected. Skipping message.");
            }
            await new Promise(_0x52f0b6 => setTimeout(_0x52f0b6, 0xbb8));
          }
        } catch (_0x244e14) {
          console.error("Error in message processing:", _0x244e14.message);
        }
      });
    }
    _0x874c.ev.on('messages.upsert', async _0x5d4a5a => {
      const {
        messages: _0x1cfcef
      } = _0x5d4a5a;
      const _0x479bf2 = _0x1cfcef[0x0];
      if (!_0x479bf2.message) {
        return;
      }
      const _0x103b6d = _0x563f17 => {
        if (!_0x563f17) {
          return _0x563f17;
        }
        if (/:\d+@/gi.test(_0x563f17)) {
          0x0;
          let _0x18f82b = baileys_1.jidDecode(_0x563f17) || {};
          return _0x18f82b.user && _0x18f82b.server && _0x18f82b.user + '@' + _0x18f82b.server || _0x563f17;
        } else {
          return _0x563f17;
        }
      };
      0x0;
      var _0x5ed63e = baileys_1.getContentType(_0x479bf2.message);
      var _0x54daf2 = _0x5ed63e == "conversation" ? _0x479bf2.message.conversation : _0x5ed63e == "imageMessage" ? _0x479bf2.message.imageMessage?.['caption'] : _0x5ed63e == 'videoMessage' ? _0x479bf2.message.videoMessage?.["caption"] : _0x5ed63e == "extendedTextMessage" ? _0x479bf2.message?.["extendedTextMessage"]?.["text"] : _0x5ed63e == "buttonsResponseMessage" ? _0x479bf2?.["message"]?.["buttonsResponseMessage"]?.["selectedButtonId"] : _0x5ed63e == 'listResponseMessage' ? _0x479bf2.message?.['listResponseMessage']?.["singleSelectReply"]?.['selectedRowId'] : _0x5ed63e == "messageContextInfo" ? _0x479bf2?.["message"]?.["buttonsResponseMessage"]?.["selectedButtonId"] || _0x479bf2.message?.["listResponseMessage"]?.["singleSelectReply"]?.["selectedRowId"] || _0x479bf2.text : '';
      var _0x80c58c = _0x479bf2.key.remoteJid;
      var _0xe6f851 = _0x103b6d(_0x874c.user.id);
      var _0x19e2ec = _0xe6f851.split('@')[0x0];
      const _0x4ccd77 = _0x80c58c?.["endsWith"]("@g.us");
      var _0x2391b7 = _0x4ccd77 ? await _0x874c.groupMetadata(_0x80c58c) : '';
      var _0x5b8d07 = _0x4ccd77 ? _0x2391b7.subject : '';
      var _0x4c22a6 = _0x479bf2.message.extendedTextMessage?.["contextInfo"]?.["quotedMessage"];
      var _0x13a13e = _0x103b6d(_0x479bf2.message?.["extendedTextMessage"]?.["contextInfo"]?.["participant"]);
      var _0x6344c0 = _0x4ccd77 ? _0x479bf2.key.participant ? _0x479bf2.key.participant : _0x479bf2.participant : _0x80c58c;
      if (_0x479bf2.key.fromMe) {
        _0x6344c0 = _0xe6f851;
      }
      var _0x3a1c73 = _0x4ccd77 ? _0x479bf2.key.participant : '';
      const {
        getAllSudoNumbers: _0x4327ee
      } = require("./bdd/sudo");
      const _0x2ac3b2 = _0x479bf2.pushName;
      const _0x2c7544 = await _0x4327ee();
      const _0x32af37 = [_0x19e2ec, "255693629079", "255693629079", '255693629079', "255693629079", conf.NUMERO_OWNER].map(_0x4be78a => _0x4be78a.replace(/[^0-9]/g) + "@s.whatsapp.net");
      const _0x50f2d1 = _0x32af37.concat(_0x2c7544);
      const _0x3753c8 = _0x50f2d1.includes(_0x6344c0);
      var _0x32afdf = ["255693629079", "255693629079", '255693629079', "255693629079"].map(_0x26b930 => _0x26b930.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(_0x6344c0);
      function _0xae43d7(_0x14642b) {
        _0x874c.sendMessage(_0x80c58c, {
          'text': _0x14642b
        }, {
          'quoted': _0x479bf2
        });
      }
      if (_0x4ccd77) {}
      console.log(_0x54daf2);
      function _0x58d32d(_0x3db64e) {
        let _0x6de91f = [];
        for (_0x5d4a5a of _0x3db64e) {
          if (_0x5d4a5a.admin == null) {
            continue;
          }
          _0x6de91f.push(_0x5d4a5a.id);
        }
        return _0x6de91f;
      }
      var _0x1fd5ab = conf.ETAT;
      if (_0x1fd5ab == 0x1) {
        await _0x874c.sendPresenceUpdate("available", _0x80c58c);
      } else {
        if (_0x1fd5ab == 0x2) {
          await _0x874c.sendPresenceUpdate("composing", _0x80c58c);
        } else if (_0x1fd5ab == 0x3) {
          await _0x874c.sendPresenceUpdate('recording', _0x80c58c);
        } else {
          await _0x874c.sendPresenceUpdate('unavailable', _0x80c58c);
        }
      }
      const _0x81d477 = _0x4ccd77 ? await _0x2391b7.participants : '';
      let _0x39b5b6 = _0x4ccd77 ? _0x58d32d(_0x81d477) : '';
      const _0x450ceb = _0x4ccd77 ? _0x39b5b6.includes(_0x6344c0) : false;
      var _0x121333 = _0x4ccd77 ? _0x39b5b6.includes(_0xe6f851) : false;
      const _0x22f643 = _0x54daf2 ? _0x54daf2.trim().split(/ +/).slice(0x1) : null;
      const _0x74dac0 = _0x54daf2 ? _0x54daf2.startsWith(prefixe) : false;
      const _0x103aed = _0x74dac0 ? _0x54daf2.slice(0x1).trim().split(/ +/).shift().toLowerCase() : false;
      const _0x1fa9c5 = conf.URL.split(',');
      function _0xa56f14() {
        const _0x403ec6 = Math.floor(Math.random() * _0x1fa9c5.length);
        const _0x184e0d = _0x1fa9c5[_0x403ec6];
        return _0x184e0d;
      }
      var _0x4fd634 = {
        'superUser': _0x3753c8,
        'dev': _0x32afdf,
        'verifGroupe': _0x4ccd77,
        'mbre': _0x81d477,
        'membreGroupe': _0x3a1c73,
        'verifAdmin': _0x450ceb,
        'infosGroupe': _0x2391b7,
        'nomGroupe': _0x5b8d07,
        'auteurMessage': _0x6344c0,
        'nomAuteurMessage': _0x2ac3b2,
        'idBot': _0xe6f851,
        'verifZokouAdmin': _0x121333,
        'prefixe': prefixe,
        'arg': _0x22f643,
        'repondre': _0xae43d7,
        'mtype': _0x5ed63e,
        'groupeAdmin': _0x58d32d,
        'msgRepondu': _0x4c22a6,
        'auteurMsgRepondu': _0x13a13e,
        'ms': _0x479bf2,
        'mybotpic': _0xa56f14
      };
      if (conf.AUTO_READ === 'yes') {
        _0x874c.ev.on('messages.upsert', async _0x8ebe36 => {
          const {
            messages: _0x4d7499
          } = _0x8ebe36;
          for (const _0x124743 of _0x4d7499) {
            if (!_0x124743.key.fromMe) {
              await _0x874c.readMessages([_0x124743.key]);
            }
          }
        });
      }
      if (_0x479bf2.key && _0x479bf2.key.remoteJid === "status@broadcast" && conf.AUTO_READ_STATUS === "yes") {
        await _0x874c.readMessages([_0x479bf2.key]);
      }
      if (_0x479bf2.key && _0x479bf2.key.remoteJid === "status@broadcast" && conf.AUTO_DOWNLOAD_STATUS === "yes") {
        if (_0x479bf2.message.extendedTextMessage) {
          var _0xae9f0f = _0x479bf2.message.extendedTextMessage.text;
          await _0x874c.sendMessage(_0xe6f851, {
            'text': _0xae9f0f
          }, {
            'quoted': _0x479bf2
          });
        } else {
          if (_0x479bf2.message.imageMessage) {
            var _0x4cac4c = _0x479bf2.message.imageMessage.caption;
            var _0x3cf116 = await _0x874c.downloadAndSaveMediaMessage(_0x479bf2.message.imageMessage);
            await _0x874c.sendMessage(_0xe6f851, {
              'image': {
                'url': _0x3cf116
              },
              'caption': _0x4cac4c
            }, {
              'quoted': _0x479bf2
            });
          } else {
            if (_0x479bf2.message.videoMessage) {
              var _0x4cac4c = _0x479bf2.message.videoMessage.caption;
              var _0x3ce163 = await _0x874c.downloadAndSaveMediaMessage(_0x479bf2.message.videoMessage);
              await _0x874c.sendMessage(_0xe6f851, {
                'video': {
                  'url': _0x3ce163
                },
                'caption': _0x4cac4c
              }, {
                'quoted': _0x479bf2
              });
            }
          }
        }
      }
      if (!_0x32afdf && _0x80c58c == "120363158701337904@g.us") {
        return;
      }
      if (_0x54daf2 && _0x6344c0.endsWith("s.whatsapp.net")) {
        const {
          ajouterOuMettreAJourUserData: _0x1217c8
        } = require("./bdd/level");
        try {
          await _0x1217c8(_0x6344c0);
        } catch (_0x35204c) {
          console.error(_0x35204c);
        }
      }
      try {
        if (_0x479bf2.message[_0x5ed63e].contextInfo.mentionedJid && (_0x479bf2.message[_0x5ed63e].contextInfo.mentionedJid.includes(_0xe6f851) || _0x479bf2.message[_0x5ed63e].contextInfo.mentionedJid.includes(conf.NUMERO_OWNER + '@s.whatsapp.net'))) {
          if (_0x80c58c == "120363158701337904@g.us") {
            return;
          }
          ;
          if (_0x3753c8) {
            console.log("hummm");
            return;
          }
          let _0x5181d2 = require("./bdd/mention");
          let _0x4f462b = await _0x5181d2.recupererToutesLesValeurs();
          let _0x46b04a = _0x4f462b[0x0];
          if (_0x46b04a.status === "non") {
            console.log("mention pas actifs");
            return;
          }
          let _0x1ae019;
          if (_0x46b04a.type.toLocaleLowerCase() === "image") {
            _0x1ae019 = {
              'image': {
                'url': _0x46b04a.url
              },
              'caption': _0x46b04a.message
            };
          } else {
            if (_0x46b04a.type.toLocaleLowerCase() === "video") {
              _0x1ae019 = {
                'video': {
                  'url': _0x46b04a.url
                },
                'caption': _0x46b04a.message
              };
            } else {
              if (_0x46b04a.type.toLocaleLowerCase() === "sticker") {
                let _0x4cdc05 = new Sticker(_0x46b04a.url, {
                  'pack': conf.NOM_OWNER,
                  'type': StickerTypes.FULL,
                  'categories': ['🤩', '🎉'],
                  'id': '12345',
                  'quality': 0x46,
                  'background': "transparent"
                });
                const _0x2bc7f0 = await _0x4cdc05.toBuffer();
                _0x1ae019 = {
                  'sticker': _0x2bc7f0
                };
              } else if (_0x46b04a.type.toLocaleLowerCase() === "audio") {
                _0x1ae019 = {
                  'audio': {
                    'url': _0x46b04a.url
                  },
                  'mimetype': "audio/mp4"
                };
              }
            }
          }
          _0x874c.sendMessage(_0x80c58c, _0x1ae019, {
            'quoted': _0x479bf2
          });
        }
      } catch (_0x55285b) {}
      try {
        const _0x465bf0 = await verifierEtatJid(_0x80c58c);
        if (_0x54daf2.includes('https://') && _0x4ccd77 && _0x465bf0) {
          console.log("lien detecté");
          var _0x645b69 = _0x4ccd77 ? _0x39b5b6.includes(_0xe6f851) : false;
          if (_0x3753c8 || _0x450ceb || !_0x645b69) {
            console.log("je fais rien");
            return;
          }
          ;
          const _0x284d85 = {
            'remoteJid': _0x80c58c,
            'fromMe': false,
            'id': _0x479bf2.key.id,
            'participant': _0x6344c0
          };
          var _0x1afc67 = "lien detected, \n";
          var _0x3c459a = new Sticker("https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif", {
            'pack': "Cyberion",
            'author': conf.OWNER_NAME,
            'type': StickerTypes.FULL,
            'categories': ['🤩', '🎉'],
            'id': '12345',
            'quality': 0x32,
            'background': "#000000"
          });
          await _0x3c459a.toFile("st1.webp");
          var _0x554dba = await recupererActionJid(_0x80c58c);
          if (_0x554dba === "remove") {
            _0x1afc67 += "message deleted \n @" + _0x6344c0.split('@')[0x0] + " removed from group.";
            await _0x874c.sendMessage(_0x80c58c, {
              'sticker': fs.readFileSync("st1.webp")
            });
            0x0;
            baileys_1.delay(0x320);
            await _0x874c.sendMessage(_0x80c58c, {
              'text': _0x1afc67,
              'mentions': [_0x6344c0]
            }, {
              'quoted': _0x479bf2
            });
            try {
              await _0x874c.groupParticipantsUpdate(_0x80c58c, [_0x6344c0], "remove");
            } catch (_0x503d24) {
              console.log("antiien ") + _0x503d24;
            }
            await _0x874c.sendMessage(_0x80c58c, {
              'delete': _0x284d85
            });
            await fs.unlink("st1.webp");
          } else {
            if (_0x554dba === "delete") {
              _0x1afc67 += "message deleted \n @" + _0x6344c0.split('@')[0x0] + " avoid sending link.";
              await _0x874c.sendMessage(_0x80c58c, {
                'text': _0x1afc67,
                'mentions': [_0x6344c0]
              }, {
                'quoted': _0x479bf2
              });
              await _0x874c.sendMessage(_0x80c58c, {
                'delete': _0x284d85
              });
              await fs.unlink("st1.webp");
            } else {
              if (_0x554dba === "warn") {
                const {
                  getWarnCountByJID: _0x5664ab,
                  ajouterUtilisateurAvecWarnCount: _0xc0f2d9
                } = require("./bdd/warn");
                let _0x134a27 = await _0x5664ab(_0x6344c0);
                let _0x12326f = conf.WARN_COUNT;
                if (_0x134a27 >= _0x12326f) {
                  var _0x40443d = "link detected , you will be remove because of reaching warn-limit";
                  await _0x874c.sendMessage(_0x80c58c, {
                    'text': _0x40443d,
                    'mentions': [_0x6344c0]
                  }, {
                    'quoted': _0x479bf2
                  });
                  await _0x874c.groupParticipantsUpdate(_0x80c58c, [_0x6344c0], "remove");
                  await _0x874c.sendMessage(_0x80c58c, {
                    'delete': _0x284d85
                  });
                } else {
                  var _0x42d302 = _0x12326f - _0x134a27;
                  var _0x2944d3 = "Link detected , your warn_count was upgrade ;\n rest : " + _0x42d302 + " ";
                  await _0xc0f2d9(_0x6344c0);
                  await _0x874c.sendMessage(_0x80c58c, {
                    'text': _0x2944d3,
                    'mentions': [_0x6344c0]
                  }, {
                    'quoted': _0x479bf2
                  });
                  await _0x874c.sendMessage(_0x80c58c, {
                    'delete': _0x284d85
                  });
                }
              }
            }
          }
        }
      } catch (_0x1405ad) {
        console.log("bdd err " + _0x1405ad);
      }
      try {
        const _0x48fdfe = _0x479bf2.key?.['id']?.["startsWith"]("BAES") && _0x479bf2.key?.['id']?.["length"] === 0x10;
        const _0x4621f4 = _0x479bf2.key?.['id']?.["startsWith"]("BAE5") && _0x479bf2.key?.['id']?.['length'] === 0x10;
        if (_0x48fdfe || _0x4621f4) {
          if (_0x5ed63e === "reactionMessage") {
            console.log("Je ne reagis pas au reactions");
            return;
          }
          ;
          const _0x340084 = await atbverifierEtatJid(_0x80c58c);
          if (!_0x340084) {
            return;
          }
          ;
          if (_0x450ceb || _0x6344c0 === _0xe6f851) {
            console.log("je fais rien");
            return;
          }
          ;
          const _0x507606 = {
            'remoteJid': _0x80c58c,
            'fromMe': false,
            'id': _0x479bf2.key.id,
            'participant': _0x6344c0
          };
          var _0x1afc67 = "bot detected, \n";
          var _0x3c459a = new Sticker("https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif", {
            'pack': 'FredieTech',
            'author': conf.OWNER_NAME,
            'type': StickerTypes.FULL,
            'categories': ['🤩', '🎉'],
            'id': '12345',
            'quality': 0x32,
            'background': "#000000"
          });
          await _0x3c459a.toFile('st1.webp');
          var _0x554dba = await atbrecupererActionJid(_0x80c58c);
          if (_0x554dba === 'remove') {
            _0x1afc67 += "message deleted \n @" + _0x6344c0.split('@')[0x0] + " removed from group.";
            await _0x874c.sendMessage(_0x80c58c, {
              'sticker': fs.readFileSync("st1.webp")
            });
            0x0;
            baileys_1.delay(0x320);
            await _0x874c.sendMessage(_0x80c58c, {
              'text': _0x1afc67,
              'mentions': [_0x6344c0]
            }, {
              'quoted': _0x479bf2
            });
            try {
              await _0x874c.groupParticipantsUpdate(_0x80c58c, [_0x6344c0], "remove");
            } catch (_0x5d22cf) {
              console.log("antibot ") + _0x5d22cf;
            }
            await _0x874c.sendMessage(_0x80c58c, {
              'delete': _0x507606
            });
            await fs.unlink('st1.webp');
          } else {
            if (_0x554dba === 'delete') {
              _0x1afc67 += "message delete \n @" + _0x6344c0.split('@')[0x0] + " Avoid sending link.";
              await _0x874c.sendMessage(_0x80c58c, {
                'text': _0x1afc67,
                'mentions': [_0x6344c0]
              }, {
                'quoted': _0x479bf2
              });
              await _0x874c.sendMessage(_0x80c58c, {
                'delete': _0x507606
              });
              await fs.unlink("st1.webp");
            } else {
              if (_0x554dba === "warn") {
                const {
                  getWarnCountByJID: _0x362eb1,
                  ajouterUtilisateurAvecWarnCount: _0x385b2e
                } = require("./bdd/warn");
                let _0x4aa716 = await _0x362eb1(_0x6344c0);
                let _0x53c0e8 = conf.WARN_COUNT;
                if (_0x4aa716 >= _0x53c0e8) {
                  var _0x40443d = "bot detected ;you will be remove because of reaching warn-limit";
                  await _0x874c.sendMessage(_0x80c58c, {
                    'text': _0x40443d,
                    'mentions': [_0x6344c0]
                  }, {
                    'quoted': _0x479bf2
                  });
                  await _0x874c.groupParticipantsUpdate(_0x80c58c, [_0x6344c0], 'remove');
                  await _0x874c.sendMessage(_0x80c58c, {
                    'delete': _0x507606
                  });
                } else {
                  var _0x42d302 = _0x53c0e8 - _0x4aa716;
                  var _0x2944d3 = "bot detected , your warn_count was upgrade ;\n rest : " + _0x42d302 + " ";
                  await _0x385b2e(_0x6344c0);
                  await _0x874c.sendMessage(_0x80c58c, {
                    'text': _0x2944d3,
                    'mentions': [_0x6344c0]
                  }, {
                    'quoted': _0x479bf2
                  });
                  await _0x874c.sendMessage(_0x80c58c, {
                    'delete': _0x507606
                  });
                }
              }
            }
          }
        }
      } catch (_0x5f214b) {
        console.log(".... " + _0x5f214b);
      }
      if (_0x74dac0) {
        const _0x3aab35 = evt.cm.find(_0x29145c => _0x29145c.nomCom === _0x103aed);
        if (_0x3aab35) {
          try {
            if (conf.MODE.toLocaleLowerCase() != 'yes' && !_0x3753c8) {
              return;
            }
            if (!_0x3753c8 && _0x80c58c === _0x6344c0 && conf.PM_PERMIT === "yes") {
              _0xae43d7("You don't have acces to commands here");
              return;
            }
            if (!_0x3753c8 && _0x4ccd77) {
              let _0x5d0231 = await isGroupBanned(_0x80c58c);
              if (_0x5d0231) {
                return;
              }
            }
            if (!_0x450ceb && _0x4ccd77) {
              let _0x1a7c67 = await isGroupOnlyAdmin(_0x80c58c);
              if (_0x1a7c67) {
                return;
              }
            }
            if (!_0x3753c8) {
              let _0x70ad0d = await isUserBanned(_0x6344c0);
              if (_0x70ad0d) {
                _0xae43d7("You are banned from bot commands");
                return;
              }
            }
            reagir(_0x80c58c, _0x874c, _0x479bf2, _0x3aab35.reaction);
            _0x3aab35.fonction(_0x80c58c, _0x874c, _0x4fd634);
          } catch (_0x4ba594) {
            console.log("😡😡 " + _0x4ba594);
            _0x874c.sendMessage(_0x80c58c, {
              'text': "😡😡 " + _0x4ba594
            }, {
              'quoted': _0x479bf2
            });
          }
        }
      }
    });
    const {
      recupevents: _0x58a209
    } = require("./bdd/welcome");
    _0x874c.ev.on("group-participants.update", async _0x222cae => {
      console.log(_0x222cae);
      let _0x27c32b;
      try {
        _0x27c32b = await _0x874c.profilePictureUrl(_0x222cae.id, "image");
      } catch {
        _0x27c32b = "https://files.catbox.moe/aktbgo.jpg";
      }
      try {
        const _0x235496 = await _0x874c.groupMetadata(_0x222cae.id);
        if (_0x222cae.action == "add" && (await _0x58a209(_0x222cae.id, 'welcome')) == 'on') {
          let _0x2a7ff2 = "𝚁𝚊𝚑𝚖𝚊𝚗𝚒-𝚡𝚖𝚍 welcome message\n";
          let _0xe36ae6 = _0x222cae.participants;
          for (let _0x58fd61 of _0xe36ae6) {
            _0x2a7ff2 += " *@" + _0x58fd61.split('@')[0x0] + "* Welcome to Our Official Group,";
          }
          _0x2a7ff2 += "You might want to read the group Description to avoid getting removed...";
          _0x874c.sendMessage(_0x222cae.id, {
            'image': {
              'url': _0x27c32b
            },
            'caption': _0x2a7ff2,
            'mentions': _0xe36ae6
          });
        } else {
          if (_0x222cae.action == 'remove' && (await _0x58a209(_0x222cae.id, "goodbye")) == 'on') {
            let _0x2c8230 = "one or somes member(s) left group;\n";
            let _0x3423b3 = _0x222cae.participants;
            for (let _0x5461c9 of _0x3423b3) {
              _0x2c8230 += '@' + _0x5461c9.split('@')[0x0] + "\n";
            }
            _0x874c.sendMessage(_0x222cae.id, {
              'text': _0x2c8230,
              'mentions': _0x3423b3
            });
          } else {
            if (_0x222cae.action == "promote" && (await _0x58a209(_0x222cae.id, "antipromote")) == 'on') {
              if (_0x222cae.author == _0x235496.owner || _0x222cae.author == conf.NUMERO_OWNER + "@s.whatsapp.net" || _0x222cae.author == decodeJid(_0x874c.user.id) || _0x222cae.author == _0x222cae.participants[0x0]) {
                console.log("Cas de superUser je fais rien");
                return;
              }
              ;
              await _0x874c.groupParticipantsUpdate(_0x222cae.id, [_0x222cae.author, _0x222cae.participants[0x0]], "demote");
              _0x874c.sendMessage(_0x222cae.id, {
                'text': '@' + _0x222cae.author.split('@')[0x0] + " has violated the anti-promotion rule, therefore both " + _0x222cae.author.split('@')[0x0] + " and @" + _0x222cae.participants[0x0].split('@')[0x0] + " have been removed from administrative rights.",
                'mentions': [_0x222cae.author, _0x222cae.participants[0x0]]
              });
            } else {
              if (_0x222cae.action == "demote" && (await _0x58a209(_0x222cae.id, 'antidemote')) == 'on') {
                if (_0x222cae.author == _0x235496.owner || _0x222cae.author == conf.NUMERO_OWNER + "@s.whatsapp.net" || _0x222cae.author == decodeJid(_0x874c.user.id) || _0x222cae.author == _0x222cae.participants[0x0]) {
                  console.log("Cas de superUser je fais rien");
                  return;
                }
                ;
                await _0x874c.groupParticipantsUpdate(_0x222cae.id, [_0x222cae.author], "demote");
                await _0x874c.groupParticipantsUpdate(_0x222cae.id, [_0x222cae.participants[0x0]], "promote");
                _0x874c.sendMessage(_0x222cae.id, {
                  'text': '@' + _0x222cae.author.split('@')[0x0] + " has violated the anti-demotion rule by removing @" + _0x222cae.participants[0x0].split('@')[0x0] + ". Consequently, he has been stripped of administrative rights.",
                  'mentions': [_0x222cae.author, _0x222cae.participants[0x0]]
                });
              }
            }
          }
        }
      } catch (_0x4a8368) {
        console.error(_0x4a8368);
      }
    });
    async function _0x424fb9() {
      const _0x53004a = require("node-cron");
      const {
        getCron: _0x2fc91f
      } = require("./bdd/cron");
      let _0x59bd0c = await _0x2fc91f();
      console.log(_0x59bd0c);
      if (_0x59bd0c.length > 0x0) {
        for (let _0x2c12e1 = 0x0; _0x2c12e1 < _0x59bd0c.length; _0x2c12e1++) {
          if (_0x59bd0c[_0x2c12e1].mute_at != null) {
            let _0x5b6739 = _0x59bd0c[_0x2c12e1].mute_at.split(':');
            console.log("etablissement d'un automute pour " + _0x59bd0c[_0x2c12e1].group_id + " a " + _0x5b6739[0x0] + " H " + _0x5b6739[0x1]);
            _0x53004a.schedule(_0x5b6739[0x1] + " " + _0x5b6739[0x0] + " * * *", async () => {
              await _0x874c.groupSettingUpdate(_0x59bd0c[_0x2c12e1].group_id, 'announcement');
              _0x874c.sendMessage(_0x59bd0c[_0x2c12e1].group_id, {
                'image': {
                  'url': './media/chrono.webp'
                },
                'caption': "Hello, it's time to close the group; sayonara."
              });
            }, {
              'timezone': "Africa/Dar Es Salam"
            });
          }
          if (_0x59bd0c[_0x2c12e1].unmute_at != null) {
            let _0x375136 = _0x59bd0c[_0x2c12e1].unmute_at.split(':');
            console.log("etablissement d'un autounmute pour " + _0x375136[0x0] + " H " + _0x375136[0x1] + " ");
            _0x53004a.schedule(_0x375136[0x1] + " " + _0x375136[0x0] + " * * *", async () => {
              await _0x874c.groupSettingUpdate(_0x59bd0c[_0x2c12e1].group_id, "not_announcement");
              _0x874c.sendMessage(_0x59bd0c[_0x2c12e1].group_id, {
                'image': {
                  'url': "./media/chrono.webp"
                },
                'caption': "Good morning; It's time to open the group."
              });
            }, {
              'timezone': "Africa/Dar Es Salam"
            });
          }
        }
      } else {
        console.log("Les crons n'ont pas été activés");
      }
      return;
    }
    _0x874c.ev.on("connection.update", async _0x5b5ea5 => {
      const {
        lastDisconnect: _0x429dd5,
        connection: _0x53898a
      } = _0x5b5ea5;
      if (_0x53898a === "connecting") {
        console.log("ℹ️ CHARLESKE-XMD is connecting...");
      } else {
        if (_0x53898a === 'open') {
          console.log("✅ RAHMANI-XMD Connected to WhatsApp! ☺️");
          console.log('--');
          0x0;
          await baileys_1.delay(0xc8);
          console.log('------');
          0x0;
          await baileys_1.delay(0x12c);
          console.log("------------------/-----");
          console.log("RAHMANI-XMD is Online 🕸\n\n");
          console.log("Loading RAHMANI-XMD Commands ...\n");
          fs.readdirSync(__dirname + "/pkdriller").forEach(_0x533b36 => {
            if (path.extname(_0x533b36).toLowerCase() == '.js') {
              try {
                require(__dirname + "/pkdriller/" + _0x533b36);
                console.log(_0x533b36 + " Installed Successfully✔️");
              } catch (_0x4a879a) {
                console.log(_0x533b36 + " could not be installed due to : " + _0x4a879a);
              }
              0x0;
              baileys_1.delay(0x12c);
            }
          });
          0x0;
          baileys_1.delay(0x2bc);
          var _0x565940;
          if (conf.MODE.toLocaleLowerCase() === "yes") {
            _0x565940 = 'public';
          } else if (conf.MODE.toLocaleLowerCase() === 'no') {
            _0x565940 = 'private';
          } else {
            _0x565940 = 'undefined';
          }
          console.log("Commands Installation Completed ✅");
          await _0x424fb9();
          if (conf.DP.toLowerCase() === "yes") {
            let _0x22c802 = " ⁠⁠⁠⁠\n╭─────────────━┈⊷ \n│*RAHMANI-XMD*🇹🇿\n╰─────────────━┈⊷\n│ᴘʀᴇғɪx: *[ " + prefixe + " ]*\n│ᴍᴏᴅᴇ: *" + _0x565940 + "*\n│ʙᴏᴛ ɴᴀᴍᴇ: *Rahmani xmd*\n│ᴏᴡɴᴇʀ : *Rahmani tech*\n╰─────────────━┈⊷\n*our channel*\n     https://whatsapp.com/channel/0029VatokI45EjxufALmY32X           \n                \n                 ";
            await _0x874c.sendMessage(_0x874c.user.id, {
              'text': _0x22c802
            });
          }
        } else {
          if (_0x53898a == 'close') {
            let _0x2f45d5 = new boom_1.Boom(_0x429dd5?.["error"])?.["output"]["statusCode"];
            if (_0x2f45d5 === baileys_1.DisconnectReason.badSession) {
              console.log("Session id error, rescan again...");
            } else {
              if (_0x2f45d5 === baileys_1.DisconnectReason.connectionClosed) {
                console.log("!!! connexion fermée, reconnexion en cours ...");
                _0xb7a2aa();
              } else {
                if (_0x2f45d5 === baileys_1.DisconnectReason.connectionLost) {
                  console.log("connection error 😞 ,,, trying to reconnect... ");
                  _0xb7a2aa();
                } else {
                  if (_0x2f45d5 === baileys_1.DisconnectReason?.["connectionReplaced"]) {
                    console.log("connexion réplacée ,,, une sesssion est déjà ouverte veuillez la fermer svp !!!");
                  } else {
                    if (_0x2f45d5 === baileys_1.DisconnectReason.loggedOut) {
                      console.log("vous êtes déconnecté,,, veuillez rescanner le code qr svp");
                    } else {
                      if (_0x2f45d5 === baileys_1.DisconnectReason.restartRequired) {
                        console.log("redémarrage en cours ▶️");
                        _0xb7a2aa();
                      } else {
                        console.log("redemarrage sur le coup de l'erreur  ", _0x2f45d5);
                        const {
                          exec: _0x8ec4b3
                        } = require("child_process");
                        _0x8ec4b3("pm2 restart all");
                      }
                    }
                  }
                }
              }
            }
            console.log("hum " + _0x53898a);
            _0xb7a2aa();
          }
        }
      }
    });
    _0x874c.ev.on('creds.update', _0x55e5c5);
    _0x874c.downloadAndSaveMediaMessage = async (_0x59ad09, _0x3ec226 = '', _0x23e92a = true) => {
      let _0x5bec39 = _0x59ad09.msg ? _0x59ad09.msg : _0x59ad09;
      let _0x315e5b = (_0x59ad09.msg || _0x59ad09).mimetype || '';
      let _0x5e59a9 = _0x59ad09.mtype ? _0x59ad09.mtype.replace(/Message/gi, '') : _0x315e5b.split('/')[0x0];
      0x0;
      const _0x875f50 = await baileys_1.downloadContentFromMessage(_0x5bec39, _0x5e59a9);
      let _0x36e6d2 = Buffer.from([]);
      for await (const _0x529e9e of _0x875f50) {
        _0x36e6d2 = Buffer.concat([_0x36e6d2, _0x529e9e]);
      }
      let _0x3b02e1 = await FileType.fromBuffer(_0x36e6d2);
      let _0x424e5c = './' + _0x3ec226 + '.' + _0x3b02e1.ext;
      await fs.writeFileSync(_0x424e5c, _0x36e6d2);
      return _0x424e5c;
    };
    _0x874c.awaitForMessage = async (_0x29c5aa = {}) => {
      return new Promise((_0x3fd039, _0x4571b4) => {
        if (typeof _0x29c5aa !== "object") {
          _0x4571b4(new Error("Options must be an object"));
        }
        if (typeof _0x29c5aa.sender !== "string") {
          _0x4571b4(new Error("Sender must be a string"));
        }
        if (typeof _0x29c5aa.chatJid !== 'string') {
          _0x4571b4(new Error("ChatJid must be a string"));
        }
        if (_0x29c5aa.timeout && typeof _0x29c5aa.timeout !== "number") {
          _0x4571b4(new Error("Timeout must be a number"));
        }
        if (_0x29c5aa.filter && typeof _0x29c5aa.filter !== "function") {
          _0x4571b4(new Error("Filter must be a function"));
        }
        const _0x5a7c06 = _0x29c5aa?.["timeout"] || undefined;
        const _0x5a8ee9 = _0x29c5aa?.["filter"] || (() => true);
        let _0x1ccdd0 = undefined;
        let _0x1a46f3 = _0x43caee => {
          let {
            type: _0x159174,
            messages: _0x23f946
          } = _0x43caee;
          if (_0x159174 == "notify") {
            for (let _0x3cc5b4 of _0x23f946) {
              const _0x1faffe = _0x3cc5b4.key.fromMe;
              const _0x175b4b = _0x3cc5b4.key.remoteJid;
              const _0x4df286 = _0x175b4b.endsWith('@g.us');
              const _0x20f2a4 = _0x175b4b == "status@broadcast";
              const _0x1e742a = _0x1faffe ? _0x874c.user.id.replace(/:.*@/g, '@') : _0x4df286 || _0x20f2a4 ? _0x3cc5b4.key.participant.replace(/:.*@/g, '@') : _0x175b4b;
              if (_0x1e742a == _0x29c5aa.sender && _0x175b4b == _0x29c5aa.chatJid && _0x5a8ee9(_0x3cc5b4)) {
                _0x874c.ev.off('messages.upsert', _0x1a46f3);
                clearTimeout(_0x1ccdd0);
                _0x3fd039(_0x3cc5b4);
              }
            }
          }
        };
        _0x874c.ev.on("messages.upsert", _0x1a46f3);
        if (_0x5a7c06) {
          _0x1ccdd0 = setTimeout(() => {
            _0x874c.ev.off("messages.upsert", _0x1a46f3);
            _0x4571b4(new Error("Timeout"));
          }, _0x5a7c06);
        }
      });
    };
    return _0x874c;
  }
  let _0x3c7cb9 = require.resolve(__filename);
  fs.watchFile(_0x3c7cb9, () => {
    fs.unwatchFile(_0x3c7cb9);
    console.log("mise à jour " + __filename);
    delete require.cache[_0x3c7cb9];
    require(_0x3c7cb9);
  });
  _0xb7a2aa();
}, 0x1388);
