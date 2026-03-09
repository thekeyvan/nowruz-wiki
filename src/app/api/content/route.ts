import { NextResponse } from 'next/server';

const contentMap: Record<string, string> = {
  'haft-sin': `# Haft-sin (هفت‌سین)\n\nHaft-sin is an arrangement of seven symbolic items whose names start with the letter "س" (pronounced as "seen") in the Persian alphabet.\n\n## The Seven Items\n\n1. **Sabzeh** (wheat, barley, or lentil sprouts): Rebirth.\n2. **Samanu** (sweet pudding): Power and strength.\n3. **Senjed** (oleaster): Love.\n4. **Sir** (garlic): Medicine.\n5. **Sib** (apple): Beauty and health.\n6. **Somaq** (sumac): Sunrise.\n7. **Serkeh** (vinegar): Patience and age.`,
  'history': `# The History of Nowruz\n\nNowruz (نوروز) means "New Day". It is the Iranian New Year, marking the spring equinox and the beginning of the year on the Iranian calendar. It has been celebrated for over 3,000 years, rooted in Zoroastrianism.\n\n## Global Recognition\n\nNowruz is celebrated by more than 300 million people worldwide and is recognized by the UN as an international holiday.`,
  'sizdah-bedar': `# Sizdah Bedar (سیزده‌بدر)\n\nSizdah Bedar is the thirteenth day of the Persian New Year. It is celebrated outdoors by spending time with family in nature, picnicking, and throwing the "Sabzeh" into flowing water to ward off bad luck.`
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page');

  if (!page || !contentMap[page]) {
    return new NextResponse('Please provide a valid ?page= parameter.', { status: 404 });
  }

  // AI-friendly format: raw markdown text
  return new NextResponse(contentMap[page], {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8'
    }
  });
}
