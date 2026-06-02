const btn = document.getElementById("btn");

const emojiNames = document.getElementById("emoji-name");

const emoji = [
  { emojiCode: "😂", emojiName: "Face with Tears of Joy" },
  { emojiCode: "😍", emojiName: "Smiling Face with Heart-Eyes" },
  { emojiCode: "😎", emojiName: "Smiling Face with Sunglasses" },
  { emojiCode: "🥳", emojiName: "Partying Face" },
  { emojiCode: "🤔", emojiName: "Thinking Face" },
  { emojiCode: "😭", emojiName: "Loudly Crying Face" },
  { emojiCode: "😴", emojiName: "Sleeping Face" },
  { emojiCode: "🔥", emojiName: "Fire" },
  { emojiCode: "💯", emojiName: "Hundred Points" },
  { emojiCode: "❤️", emojiName: "Red Heart" },
  { emojiCode: "👍", emojiName: "Thumbs Up" },
  { emojiCode: "👏", emojiName: "Clapping Hands" },
  { emojiCode: "🎉", emojiName: "Party Popper" },
  { emojiCode: "🚀", emojiName: "Rocket" },
  { emojiCode: "🌟", emojiName: "Glowing Star" },
  { emojiCode: "🍕", emojiName: "Pizza" },
  { emojiCode: "🍔", emojiName: "Hamburger" },
  { emojiCode: "😀", emojiName: "Grinning Face" },
  { emojiCode: "🐱", emojiName: "Cat Face" },
  { emojiCode: "🐶", emojiName: "Dog Face" },
];

const getEmoji = async () => {
  let response = await fetch(
    "https://emoji-api.com/emojis?access_key=<your-acess-key>",
  );

  let data = await response.json();

  for (let index = 0; index < 500; index++) {
    emoji.push({
      emojiName: data[index].character,
      emojiCode: data[index].unicodeName,
    });
  }
};

// getEmoji();

btn.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * emoji.length);
  btn.innerText = emoji[randomNum].emojiCode;
  emojiNames.innerText = emoji[randomNum].emojiName;
});
