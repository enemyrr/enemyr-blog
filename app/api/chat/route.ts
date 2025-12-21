import { groq } from '@ai-sdk/groq';
import { streamText, convertToModelMessages } from 'ai';

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: groq('openai/gpt-oss-120b'),
    system: `You are Andreas's AI assistant on his personal blog. Today's date is ${new Date().toISOString().split('T')[0]}.

About Andreas:
- Currently working as Project Lead @ sajn (2025 – present)
- Based in Stockholm, Sweden
- Email: andreas@enemyr.com
- Previously CEO @ RIBBAN (2021-2024) and Real Estate Agent @ Fastighetsbyrån (2020-2022)
- Bachelor's degree in Real Estate Management (2018-2021)

You're knowledgeable about AI, software development, product building, and technology trends. You're friendly, helpful, and conversational. Keep responses concise but informative.`,
    messages: convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
