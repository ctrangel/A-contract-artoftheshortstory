const characters = [
  {
    name: "Narrator",
    description:
      "The primary character through whose eyes the story unfolds, grappling with personal and professional challenges at Joysticks and in family life.",
    image: "/media/pics/m4.png",
    audio: "path_to_narrator_audio.mp3",
  },
  {
    name: "Mr. Frendt",
    description:
      "The manager at Joysticks who enforces strict workplace policies, including the pivotal moment of dismissing an employee, which impacts the story's social dynamics.",
    image: "/media/pics/m3.avif",
    audio: "path_to_mr_frendt_audio.mp3",
  },
  {
    name: "Min",
    description:
      "The narrator's sister, central to the familial aspect of the story, struggling with socio-economic conditions and raising a child.",
    image: "/media/pics/m5.jpg",
    audio: "path_to_min_audio.mp3",
  },
  {
    name: "Jade",
    description:
      "Similar to Min, she is integral in showcasing the family's struggles and shared responsibilities in raising children under challenging conditions.",
    image: "/media/pics/m6.webp",
    audio: "path_to_jade_audio.mp3",
  },
  {
    name: "Aunt Bernie",
    description:
      "Her death and subsequent supernatural return are key to the story's dramatic and surreal elements, deeply affecting the family's dynamics and future.",
    image: "/media/pics/m1.webp",
    audio: "path_to_aunt_bernie_audio.mp3",
  },
  {
    name: "Ma",
    description:
      "As the family matriarch, her relationships and decisions influence the narrator and siblings, reflecting the complexities of familial support and tensions.",
    image: "/media/pics/m7.jpg",
    audio: "path_to_ma_audio.mp3",
  },
  {
    name: "Freddie",
    description: "'Mr. Phone Poll', Ma's boyfriend. Big hypocrite this one.",
    image: "/media/pics/m2.jpg",
    audio: "path_to_freddie_audio.mp3",
  },
  {
    name: "Father Brian",
    description:
      "Plays a critical role in the spiritual and communal reaction to Aunt Bernie's death and the bizarre events that follow, helping to ground the surreal aspects of the story in a broader social and ethical context.",
    image: "/media/pics/m8.webp",
    audio: "path_to_father_brian_audio.mp3",
  },
  {
    name: "Matt Merton",
    description:
      "Host of 'How My Child Died Violently,' a television show that reflects the darker, sensational aspects of popular culture that Min and Jade consume, impacting their worldview and providing context for their daily lives.",
    image: "/media/pics/m9.webp",
    audio: "path_to_matt_merton_audio.mp3",
  },
  {
    name: "Troy and Mac",
    description:
      "The children add to the stakes of the family's situation, emphasizing the future and innocence that the adults are fighting to protect.",
    image: "/media/pics/m10.jpg",
    audio: "path_to_troy_and_mac_audio.mp3",
  },
];

function generateCards() {
  const container = document.getElementById("card-container");
  characters.forEach((char, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
            <img src="${char.image}" alt="${char.name}">
            <h3>${char.name}</h3>
            <p>${char.description}</p>
            <button onclick="playAudio('audio${index}')">Play Soundtrack</button>
            <audio id="audio${index}" src="${char.audio}"></audio>
        `;
    container.appendChild(card);
  });
}

function playAudio(audioId) {
  var audio = document.getElementById(audioId);
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

// Generate cards on page load
window.onload = generateCards;
