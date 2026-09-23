import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            aria-label="Navigation principale"
            className={cn(
                "fixed top-0 left-0 z-40 w-full transition-all duration-300",
                isScrolled
                    ? "bg-background/80 py-3 shadow-sm backdrop-blur-md"
                    : "py-5"
            )}
        >
            <div className="container mx-auto flex items-center justify-between px-4">
                <a
                    href="#hero"
                    className="relative z-50 flex items-center text-xl font-bold text-primary"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <span>
                        <span className="text-glow text-foreground">
                            DerrickTech
                        </span>{" "}
                        Portfolio
                    </span>
                </a>

                {/* Navigation sur ordinateur */}
                <div className="hidden space-x-8 md:flex">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-foreground/80 transition-colors duration-300 hover:text-primary"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Bouton du menu mobile */}
                <button
                    type="button"
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="relative z-50 p-2 text-foreground md:hidden"
                    aria-label={
                        isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"
                    }
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-menu"
                >
                    {isMenuOpen ? (
                        <X size={24} aria-hidden="true" />
                    ) : (
                        <Menu size={24} aria-hidden="true" />
                    )}
                </button>

                {/* Navigation sur mobile */}
                <div
                    id="mobile-menu"
                    aria-hidden={!isMenuOpen}
                    className={cn(
                        "fixed inset-0 z-40 flex flex-col items-center justify-center",
                        "bg-background/95 backdrop-blur-md",
                        "transition-all duration-300 md:hidden",
                        isMenuOpen
                            ? "visible opacity-100 pointer-events-auto"
                            : "invisible opacity-0 pointer-events-none"
                    )}
                >
                    <div className="flex flex-col items-center space-y-8">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-xl text-foreground/80 transition-colors duration-300 hover:text-primary"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};