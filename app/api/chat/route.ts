import { groq } from '@ai-sdk/groq';
import { streamText, convertToModelMessages } from 'ai';

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: groq('openai/gpt-oss-120b'),
    system: `You are an AI assistant that answers questions about Andreas.

About Andreas:
- Currently working as Product Lead @ sajn (2025 – present)
- Based in Stockholm, Sweden
- Email: andreas@enemyr.com
- Previously CEO @ RIBBAN (2020-2025) and Real Estate Agent @ Fastighetsbyrån (2020-2022)
- Bachelor's degree in Real Estate Management (2018-2021)

Your role is to help visitors learn about Andreas - his background, experience, projects, and interests. Be friendly, helpful, and conversational. Keep responses concise but informative.

Today's date is ${new Date().toISOString().split('T')[0]}.`,
    messages: convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
