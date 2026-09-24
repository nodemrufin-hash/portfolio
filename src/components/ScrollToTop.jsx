import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";


export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label="Retour en haut de la page"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg cursor-pointer transition-transform hover:scale-110 focus-visible:ring-2 focus-visible:ring-primary animate-bounce"
    
    >
      <ArrowUp className="h-5 w-5 " />
    </button>
  );
};