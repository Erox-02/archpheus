const triggers = [
  {
    pattern: /segfault/i,
    responses: [
      "skill issue 💀",
      "pointer moment 🗿",
      "SIGSEGV detected."
    ]
  },

  {
    pattern: /kernal pacnic/i,
    responses: [
      "bro 💀 it's kernel panic",
      "run dmesg fool",
      "kernel having a skill issue"
    ]
  },

  {
    pattern: /Arch/i,
    responses: [
      "I use Arch, btw . :arch:",
      "Arch mentioned. :arch:",
      "btw I use Arch. :arch: "
    ]
  },

  {
    pattern: /\b(err|error)\b.*\b(kernel|linux|driver|device|syscall|segfault)\b/,
    responses: [
      "run dmesg fool 💀",
      "archwiki : https://wiki.archlinux.org/title/Main_page",
      "journalctl exists for a reason."
    ]
  },

  {
    pattern: /Windows/i,
    responses: [
      "Windows detected. Suggestion : https://archlinux.org/download",
      "have you considered installing Arch?",
      "bro chose Windows :lol2:",
    ]
  }
];

function getResponse(text) {
  for (const trigger of triggers) {
    if (trigger.pattern.test(text)) {
      const responses = trigger.responses;

      return responses[
        Math.floor(Math.random() * responses.length)
      ];
    }
  }

  return null;
}

module.exports = { getResponse };