const characters = [
  {
    name: "Narrator",
    description:
      "The main character who works at Joysticks and deals with work-related and personal issues.",
    image: "path_to_narrator_image.jpg",
    audio: "path_to_narrator_audio.mp3",
  },
  {
    name: "Mr. Frendt",
    description:
      "The manager at Joysticks who makes announcements and eventually fires Lloyd.",
    image: "path_to_frendt_image.jpg",
    audio: "path_to_frendt_audio.mp3",
  },
    {
        name: "Lloyd",
        description:
        "A coworker at Joysticks who is fired by Mr. Frendt for not following the rules.",
        image: "path_to_lloyd_image.jpg",
        audio: "path_to_lloyd_audio.mp3",
    },
    {
        name: "Tina",
        description:
        "A coworker at Joysticks who is fired by Mr. Frendt for not following the rules.",
        image: "path_to_tina_image.jpg",
        audio: "path_to_tina_audio.mp3",
    },
    {
        name: "Dennis",
        description:
        "A coworker at Joysticks who is fired by Mr. Frendt for not following the rules.",
        image: "path_to_dennis_image.jpg",
        audio: "path_to_dennis_audio.mp3",
    },
    {
        name: "Customer",
        description:
        "A customer at Joysticks who is upset with the service and demands a refund.",
        image: "path_to_customer_image.jpg",
        audio: "path_to_customer_audio.mp3",
    },
    {
        name: "Security Guard",
        description:
        "A security guard at Joysticks who escorts Lloyd out of the building.",
        image: "path_to_guard_image.jpg",
        audio: "path_to_guard_audio.mp3",
    },
    {
        name: "Police Officer",
        description:
        "A police officer who arrives at Joysticks to investigate a disturbance.",
        image: "path_to_officer_image.jpg",
        audio: "path_to_officer_audio.mp3",
    },
    {
        name: "Reporter",
        description:
        "A reporter who interviews Mr. Frendt about the incident at Joysticks.",
        image: "path_to_reporter_image.jpg",
        audio: "path_to_reporter_audio.mp3",
    },
    {
        name: "News Anchor",
        description:
        "A news anchor who reports on the incident at Joysticks and the arrest of Lloyd.",
        image: "path_to_anchor_image.jpg",
        audio: "path_to_anchor_audio.mp3",
    },
    {
        name: "Judge",
        description:
        "A judge who presides over Lloyd's trial and delivers the verdict.",
        image: "path_to_judge_image.jpg",
        audio: "path_to_judge_audio.mp3",
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
