import { useEffect } from "react";

interface useKeyboardEffectProps {
  key: "Escape" | "Enter";
  handler: () => void;
  enabled?: boolean;
}

const useKeyboardEffect = ({
  key,
  handler,
  enabled = true,
}: useKeyboardEffectProps) => {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === key) {
        handler();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [key, handler, enabled]);
};

export default useKeyboardEffect;
