"use client";

import { useChat } from "@ai-sdk/react";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { PanelRightOpen, PanelRightClose, XIcon } from "lucide-react";
import { useAISidebar } from "@/lib/ai-sidebar-context";
import { Button } from "@/components/ui/button";
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

const COLLAPSED_WIDTH = 40;
const EXPANDED_WIDTH = 440;
const CONTENT_WIDTH = EXPANDED_WIDTH - COLLAPSED_WIDTH;

const INITIAL_MESSAGE = `I'm deep into AI. Whether it's using it to speed up development or exploring how it can change how we build products, I'm always experimenting with the latest tools and models.

The space is moving fast, and I'm trying to keep up (and build along with it). Ask me anything!`;

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  parts: Array<{ type: string; text?: string }>;
};

function getMessageText(message: ChatMessage): string {
  return message.parts
    .filter((part): part is { type: "text"; text: string } => part.type === "text")
    .map((part) => part.text)
    .join("");
}

export function AISidebar() {
  const { isOpen, open, close } = useAISidebar();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [input, setInput] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const { messages, sendMessage, status } = useChat();

  useEffect(() => {
    if (isOpen && textareaRef.current) {
      const timer = setTimeout(() => textareaRef.current?.focus(), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    document.body.style.overflow = isOpen && isMobile ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleSubmit = async (text: string) => {
    if (!text.trim()) return;
    setInput("");
    await sendMessage({ text });
  };

  const sidebarContent = (
    <div className="flex flex-col h-full">
      <header className="flex items-center justify-between px-4 py-3 border-b border-border shrink-0">
        <h2 className="font-medium">AI</h2>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">⌘K</span>
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={close}
            aria-label="Close sidebar"
            className="md:hidden"
          >
            <XIcon className="size-4" />
          </Button>
        </div>
      </header>

      <Conversation className="flex-1 overflow-y-auto">
        <ConversationContent className="gap-6 px-4 py-4">
          <Message from="assistant">
            <MessageContent>
              <MessageResponse>{INITIAL_MESSAGE}</MessageResponse>
            </MessageContent>
          </Message>
          {(messages as ChatMessage[]).map((msg) => (
            <Message key={msg.id} from={msg.role}>
              <MessageContent>
                {msg.role === "assistant" ? (
                  <MessageResponse>{getMessageText(msg)}</MessageResponse>
                ) : (
                  getMessageText(msg)
                )}
              </MessageContent>
            </Message>
          ))}
        </ConversationContent>
      </Conversation>

      <div className="p-4 border-t border-border shrink-0">
        <PromptInput onSubmit={({ text }) => handleSubmit(text)}>
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
        <p className="text-xs text-muted-foreground mt-2 text-center">
          AI can make mistakes. Please verify.
        </p>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={close}
      />
      <aside
        className={`fixed top-0 right-0 z-50 h-dvh w-full max-w-md bg-background border-l border-border transition-transform duration-300 ease-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {sidebarContent}
      </aside>

      {/* Desktop */}
      <aside
        className="hidden md:block sticky top-0 h-dvh shrink-0 overflow-hidden transition-[width] duration-300 ease-out"
        style={{ width: isOpen ? EXPANDED_WIDTH : COLLAPSED_WIDTH }}
      >
        <div className="relative h-full" style={{ width: EXPANDED_WIDTH }}>
          {/* Toggle zone */}
          <div
            className="absolute inset-y-0 left-0 z-10 flex items-center justify-center cursor-pointer"
            style={{ width: COLLAPSED_WIDTH }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => (isOpen ? close() : open())}
          >
            <div
              className={`absolute inset-y-0 w-px transition-all duration-300 ease-out ${
                isHovered ? "bg-muted-foreground/30" : "bg-border"
              }`}
              style={{ left: isOpen ? COLLAPSED_WIDTH - 1 : 0 }}
            />
            <Button
              variant="ghost"
              size="icon-sm"
              tabIndex={-1}
              className={`transition-opacity duration-300 ${
                isOpen ? (isHovered ? "opacity-100" : "opacity-0") : "opacity-100"
              }`}
            >
              {isOpen ? (
                <PanelRightClose className="size-4" />
              ) : (
                <PanelRightOpen className="size-4" />
              )}
            </Button>
          </div>

          {/* Content - fixed width, revealed by parent */}
          <div
            className="absolute inset-y-0 right-0 h-full"
            style={{ width: CONTENT_WIDTH }}
          >
            {sidebarContent}
          </div>
        </div>
      </aside>
    </>
  );
}
