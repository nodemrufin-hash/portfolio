import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
   
   const [isDarkMode, setIsDarkMode] = useState(true);

useEffect(() => {
  const storedTheme = localStorage.getItem("theme");
  const useDarkMode = storedTheme !== "light";

  setIsDarkMode(useDarkMode);
  document.documentElement.classList.toggle("dark", useDarkMode);
  localStorage.setItem("theme", useDarkMode ? "dark" : "light");
}, []);
    




    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };


    return (
        <button onClick={toggleTheme}className={cn("fixed top-5 right-3 sm:top-5 sm:right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outlin-hidden"
            )}
        >
            {isDarkMode ? (
                <Sun className="h-6 w-6 sm:h-7 sm:w-7 text-yellow-300" />

            ) : (
            <Moon className="h-6 w-6 sm:h-7 sm:w-7 text-blue-900" />

            )}
            </button>
    );
};


