// Hafez Faal — English translations of famous couplets from Hafez of Shiraz
// Each entry is a two-line couplet (beyt) with an English poetic translation

export interface HafezFaal {
  id: number;
  lines: [string, string]; // Two lines of the couplet
  interpretation: string;  // A brief, friendly interpretation
}

export const hafezFaals: HafezFaal[] = [
  {
    id: 1,
    lines: [
      "Come, let us scatter roses and pour wine in the glass;",
      "Let us shatter the ceiling of the sky and create a new design."
    ],
    interpretation: "Time to dream bigger. Break the old patterns and build something extraordinary.",
  },
  {
    id: 2,
    lines: [
      "I have learned so much from God",
      "that I can no longer call myself a Christian, a Hindu, a Muslim, a Buddhist, a Jew."
    ],
    interpretation: "We are beyond labels. What connects us is far greater than what divides us.",
  },
  {
    id: 3,
    lines: [
      "The green garden of love has no walls or fences,",
      "Its vast meadow stretches beyond what the eye can see."
    ],
    interpretation: "Love has no limits. Let it expand without trying to contain it.",
  },
  {
    id: 4,
    lines: [
      "Do not judge the grain of truth in what others speak,",
      "For every pearl that shines was once a humble grain of sand."
    ],
    interpretation: "Stay humble. Even the smallest idea can become something brilliant.",
  },
  {
    id: 5,
    lines: [
      "The hour of departure has arrived, and we have not said half of what we meant to say.",
      "Our story is like water — it flows even while we sleep."
    ],
    interpretation: "Life moves fast. Say what matters now, and let the rest flow naturally.",
  },
  {
    id: 6,
    lines: [
      "Plant the tree of friendship, for its fruit brings the heart's desire;",
      "Uproot the sapling of enmity, for it brings endless sorrow."
    ],
    interpretation: "Invest in friendships. They are the richest returns you will ever see.",
  },
  {
    id: 7,
    lines: [
      "Sit with those who tell the truth — and hear it.",
      "Truth is the only shelter when the storm arrives."
    ],
    interpretation: "Surround yourself with honest people. They are your real compass.",
  },
  {
    id: 8,
    lines: [
      "Rise up, and from the cup of joy drink deeply,",
      "Before this fleeting caravan of life departs."
    ],
    interpretation: "Enjoy the moment. This life is a one-way journey — make it count.",
  },
  {
    id: 9,
    lines: [
      "If the whole world were to turn against you,",
      "As long as you have yourself, you have everything."
    ],
    interpretation: "Your relationship with yourself is the foundation. Protect it fiercely.",
  },
  {
    id: 10,
    lines: [
      "Even after all this time, the sun never says to the earth, 'You owe me.'",
      "Look what happens with a love like that — it lights the whole sky."
    ],
    interpretation: "Give without expecting anything back. That kind of love changes everything.",
  },
  {
    id: 11,
    lines: [
      "Last night the moon came dropping its clothes in the street.",
      "I took it as a sign to start dancing."
    ],
    interpretation: "When life gives you a sign, don't overthink it — just move.",
  },
  {
    id: 12,
    lines: [
      "Fear is the cheapest room in the house.",
      "I would like to see you living in better conditions."
    ],
    interpretation: "Fear is a small, cramped place. You deserve much more. Step out.",
  },
  {
    id: 13,
    lines: [
      "Stay close to anything that makes you glad you are alive.",
      "Distance yourself from all that dims your light."
    ],
    interpretation: "Protect your energy. Choose joy deliberately, every single day.",
  },
  {
    id: 14,
    lines: [
      "Your heart and my heart are very old friends.",
      "They recognized each other long before we ever met."
    ],
    interpretation: "Some connections are instant. Trust the ones that feel like home.",
  },
  {
    id: 15,
    lines: [
      "The wound is the place where the light enters you.",
      "Do not grieve — what you have lost will return in another form."
    ],
    interpretation: "Pain is not the end. It is the crack through which growth finds you.",
  },
  {
    id: 16,
    lines: [
      "Be like the sun for grace and mercy,",
      "Be like the night to cover others' faults."
    ],
    interpretation: "Shine kindness on everyone, and cover their imperfections with silence.",
  },
];

export function getRandomFaal(): HafezFaal {
  return hafezFaals[Math.floor(Math.random() * hafezFaals.length)];
}
