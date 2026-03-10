# Nowruz: The Ultimate Persian New Year Encyclopedia

This document outlines the complete narrative and factual content planned for the Nowruz Wiki. The goal is to make the content **engaging, fun, and magical**—feeling more like an immersive interactive story (think Apple product reveals) rather than a rigid, dry Wikipedia article.

---

## 🌍 The Big Picture: What is Nowruz?

**The Essence of Spring**
Nowruz (pronounced *no-rooz*) literally means "New Day" in Persian. It is an ancient festival that marks the exact astronomical beginning of the vernal equinox. When the sun crosses the celestial equator and day and night are perfectly equal in length, the new year begins down to the exact second. 

**Not Just a Date**
It’s a 3,000-year-old celebration of rebirth, renewal, and the profound harmony between human life and nature. Over 300 million people across the globe celebrate it—from Iran, Afghanistan, and Tajikistan to the Kurdish regions, Kazakhstan, and the Parsi communities in India.

---

## 🔥 Chapter 1: Ancient Roots & Mythology

### The Zoroastrian Connection
Before Islam, the Persian Empire practiced Zoroastrianism, one of the world's oldest monotheistic religions. Nowruz was their holiest day. At its core, it celebrates the eternal triumph of good (light, warmth, spring) over evil (darkness, cold, winter). 
*   **The Spirit of Summer:** In Zoroastrian myth, *Rapithwin*—the spirit of noon and summer—retreats beneath the earth during the cold winter to keep the roots of plants warm. On Nowruz, Rapithwin emerges above ground again, bringing the spring.

### The Myth of King Jamshid
Where did it all start? Persian mythology points to the legendary King Jamshid. The story goes that Jamshid built a magnificent jewel-studded throne. To save mankind from an apocalyptic, endless winter, he had demons raise his throne into the sky. He flew through the heavens like the sun itself, bringing warmth back to the world. The day he descended was declared "Nowruz."

### The Empire's Golden Era
Historical records show that by 538 BCE, Cyrus the Great had declared Nowruz a national holiday. In the magnificent ancient city of Persepolis, massive bas-relief carvings show dignitaries from all corners of the vast Persian Empire bringing Nowruz gifts to the King of Kings.

---

## 🧨 Chapter 2: The Fire & The Prep (Pre-Nowruz Rituals)

Nowruz doesn't start on one day; it’s a whole season of preparation.

### Khaneh Tekani (Shaking the House)
Weeks before the new year, families engage in the ultimate spring cleaning. The literal translation is "shaking the house." Every rug is beaten, every window washed, and every corner scrubbed. It’s believed that you cannot welcome the freshness of spring into a dusty home.

### Chaharshanbe Suri (The Festival of Fire)
On the eve of the last Wednesday before Nowruz, the streets come alive with fire. People build bonfires and literally leap over them! As they jump through the flames, they chant:
> *"Zardi-ye man az toh, sorkhi-ye toh az man!"*
> (My yellow [sickness/weakness] to you, your red [health/strength] to me!)
It’s a beautiful, chaotic purification ritual to burn away the bad luck of the past year.

---

## 🌿 Chapter 3: The Centerpiece — The Haft-Seen Table

At the exact moment of the equinox, families gather around a beautifully decorated table called the *Haft-Seen* (Seven S's). Every item starts with the Persian letter "Seen" (S) and holds deep symbolic meaning:

1.  **Sabzeh (Sprouts):** Wheat or lentil sprouts growing in a dish. Represents rebirth and the green of nature.
2.  **Samanu (Sweet Pudding):** Made from germinated wheat. Represents wealth, fertility, and the sweetness of life.
3.  **Senjed (Dried Oleaster/Lotus Tree Fruit):** Represents love and compassion.
4.  **Seer (Garlic):** Represents medicine, health, and warding off evil.
5.  **Seeb (Apple):** Represents beauty, health, and the Earth.
6.  **Somagh (Sumac):** The crimson color of a sunrise. Represents the triumph of light over dark.
7.  **Serekh (Vinegar):** Represents age, patience, and the wisdom that comes with time.

**The Beautiful Extras:**
Alongside the seven "S" items, the table is adorned with:
*   **Ayeneh (A Mirror):** For self-reflection into the new year.
*   **Mahi (Goldfish):** Swimming in a bowl, representing life and movement.
*   **Tokhmeh-Morgh Rangi (Painted Eggs):** Symbolizing fertility and creation.
*   **The Divan of Hafez:** The book of the great Persian poet. Families randomly open a page to get a *faal* (poetic fortune) for the upcoming year.

---

## ⛺ Chapter 4: The 13 Days of Joy

Nowruz is a marathon, not a sprint. The celebration lasts for exactly 13 days, filled with visiting elders, exchanging fresh, crisp banknotes as gifts (*Eidi*), and eating incredible food (like *Sabzi Polo ba Mahi*—herbed rice with whitefish).

### Haji Firooz
The streets are roamed by Haji Firooz, a traditional, folklore character clad in bright red clothes who plays a tambourine and sings joyful, rhythmic songs to announce the arrival of spring.

### Sizdah Bedar (Getting Rid of 13)
In Persian culture, the number 13 can be unlucky. So, how do they spend the 13th day of the new year? By absolutely refusing to stay indoors! 

On *Sizdah Bedar*, entire cities empty out. Every park, forest, and patch of grass is covered in families having massive, all-day picnics. It is a day of games, grilling kebabs, and joy. 

At the end of the day, the *Sabzeh* (wheatgrass sprouts) from the Haft-Seen table—which has theoretically absorbed all the sickness and bad luck of the household over the past 13 days—is thrown into a running river or stream, washing away the misfortune and ensuring a lucky, prosperous year ahead.

---

## 🚀 Website Implementation Plan (Next Steps)

When we are ready to code this into the website, here is the architectural plan to make it engaging and not boring:

**1. The Dedicated `/history` Page Experience**
*   **Format:** A long-scroll, cinematic experience.
*   **Design:** Deep, dark backgrounds contrasting with bright, vivid typography. As you scroll, elements fade in gracefully.
*   **Interactivity:** We will use `framer-motion` to animate the story of King Jamshid flying through the sky, and use scroll-linked progress bars. 

**2. The Interactive Bento Grid on the Homepage**
*   **Format:** A "Did You Know?" section immediately following the Haft-Seen table.
*   **Design:** Asymmetric, rounded glassmorphism cards. When hovered, the icons inside will pulse or rotate, and a soft glow will illuminate behind the text.
*   **Content:** Bite-sized chunks of the trivia gathered above (e.g., The 13-day length, the fire leaping, the exact astronomical timing).

**3. Visual Tooltips**
*   Throughout the site, complex terms like "Zoroastrianism" or "Vernal Equinox" will have subtle underline styling. Hovering them will trigger tiny, elegant popover bubbles explaining what they mean, keeping the reading flow unbroken.
