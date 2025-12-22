"use client";

import { useChat } from "@ai-sdk/react";
import { ChangeEvent, useRef, useState } from "react";
import {
  Conversation,
  ConversationContent,
} from "@/components/ai-elements/conversation";
import {
  Message,
  MessageContent,
  MessageResponse,
} from "@/components/ai-elements/message";
import {
  PromptInput,
  PromptInputTextarea,
  PromptInputFooter,
  PromptInputTools,
  PromptInputSpeechButton,
  PromptInputSubmit,
} from "@/components/ai-elements/prompt-input";

const INITIAL_MESSAGE = `I'm deep into AI. Whether it's using it to speed up development or exploring how it can change how we build products, I'm always experimenting with the latest tools and models.

The space is moving fast, and I'm trying to keep up (and build along with it). Ask me anything!`;

// Helper to extract text content from message parts
function getMessageText(message: { parts: Array<{ type: string; text?: string }> }): string {
  return message.parts
    .filter((part): part is { type: "text"; text: string } => part.type === "text")
    .map((part) => part.text)
    .join("");
}

export default function AIPage() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [input, setInput] = useState("");
  const { messages, sendMessage, status } = useChat();

  const handleSubmit = async (text: string) => {
    if (text.trim()) {
      setInput("");
      await sendMessage({ text });
    }
  };

  return (
    <div className="flex flex-col flex-1 pt-4">
      <h1 className="text-xl md:text-2xl font-medium mb-4">AI</h1>

      <Conversation className="flex-1 overflow-y-auto">
        <ConversationContent className="gap-6 px-0">
          {/* Initial welcome message */}
          <Message from="assistant">
            <MessageContent>
              <MessageResponse>{INITIAL_MESSAGE}</MessageResponse>
            </MessageContent>
          </Message>

          {/* Chat messages */}
          {messages.map((message) => {
            const text = getMessageText(message);
            return (
              <Message key={message.id} from={message.role}>
                <MessageContent>
                  {message.role === "assistant" ? (
                    <MessageResponse>{text}</MessageResponse>
                  ) : (
                    text
                  )}
                </MessageContent>
              </Message>
            );
          })}
        </ConversationContent>
      </Conversation>

      <PromptInput
        onSubmit={({ text }) => handleSubmit(text)}
        className="shrink-0"
      >
        <PromptInputTextarea
          ref={textareaRef}
          value={input}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setInput(e.target.value)}
          placeholder="Ask me anything..."
        />
        <PromptInputFooter>
          <PromptInputTools>
            <PromptInputSpeechButton
              textareaRef={textareaRef}
              onTranscriptionChange={setInput}
            />
          </PromptInputTools>
          <PromptInputSubmit
            status={status}
            disabled={!input.trim() || status === "streaming"}
          />
        </PromptInputFooter>
      </PromptInput>
      <span className="text-xs text-muted-foreground mt-2 text-center">AI agents can make mistakes. Please review the results.</span>
    </div>
  );
}
