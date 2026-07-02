import { useMemo, useState } from "react";

type Message = {
  id: string;
  role: "assistant" | "user";
  content: string;
};

const getMockResponse = (question: string) => {
  const normalized = question.toLowerCase();

  if (normalized.includes("hydration")) {
    return "A higher hydration creates a more open crumb and lighter crust. Try 70–75% for a chewy, artisan-style sourdough.";
  }

  if (normalized.includes("starter") || normalized.includes("levain")) {
    return "Feed your starter with equal parts flour and water and let it double in 4–6 hours. A strong starter makes a more vibrant loaf.";
  }

  if (normalized.includes("bake") || normalized.includes("oven")) {
    return "Bake on a preheated Dutch oven at 475°F for a crisp crust, then remove the lid after 20 minutes to brown the loaf evenly.";
  }

  return "Great question — sourdough responds best to patience, temperature, and thrivingStarter. Ask me about fermentation, shaping, or flavor development.";
};

export function SourdoughAgent() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Ask me a sourdough question or anything about bread!",
    },
  ]);

  const chatContainerClasses = useMemo(
    () =>
      "absolute right-0 bottom-14 z-50 w-[360px] max-w-full rounded-3xl border border-orange-200/30 bg-stone-950/95 shadow-2xl shadow-black/30 backdrop-blur-xl",
    []
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedInput = input.trim();
    if (!trimmedInput) {
      return;
    }

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: trimmedInput,
    };

    setMessages((current) => [...current, userMessage]);
    setInput("");
    setPending(true);

    window.setTimeout(() => {
      setMessages((current) => [
        ...current,
        {
          id: `assistant-${Date.now()}`,
          role: "assistant",
          content: getMockResponse(trimmedInput),
        },
      ]);
      setPending(false);
    }, 700);
  };

  return (
    <div className="fixed right-4 bottom-4 z-50 flex items-end justify-end">
      <div className="relative">
        {open ? (
          <div className={chatContainerClasses}>
            <div className="flex items-center justify-between gap-3 rounded-t-3xl bg-orange-600/95 px-4 py-3 text-white shadow-inner shadow-black/20">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-orange-100/90">Sourdough AI</p>
                <p className="text-base font-semibold">Bread & baking assistant</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/95 text-white transition hover:bg-orange-400"
                aria-label="Close chat"
              >
                ×
              </button>
            </div>
            <div className="max-h-[360px] overflow-y-auto px-4 py-4 text-sm text-stone-100">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`rounded-3xl p-3 ${
                      message.role === "assistant"
                        ? "bg-stone-900/95 text-stone-100"
                        : "bg-orange-100/90 text-stone-950 self-end"
                    }`}
                  >
                    <p className="whitespace-pre-wrap break-words">{message.content}</p>
                  </div>
                ))}
                {pending ? (
                  <div className="rounded-3xl bg-stone-900/95 p-3 text-stone-100">
                    <p>Thinking about the perfect proofing tip…</p>
                  </div>
                ) : null}
              </div>
            </div>
            <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-orange-200/20 bg-stone-950/95 px-4 py-3">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Type a question…"
                className="flex-1 rounded-full border border-orange-300/20 bg-stone-900/90 px-4 py-2 text-sm text-stone-100 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-400/30"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-400"
              >
                Send
              </button>
            </form>
          </div>
        ) : null}

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-white shadow-[0_20px_60px_-20px_rgba(245,158,11,0.8)] transition hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-300/80"
          aria-label="Toggle sourdough chat"
        >
          <span className="text-2xl">🍞</span>
        </button>
      </div>
    </div>
  );
}
