import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/UtkarshPandey13tech", label: "GitHub" },
  { icon: Linkedin, href: "www.linkedin.com/in/utkarsh-pandey-865a04292", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/UtkarshPandey3_", label: "Twitter" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          {/* Logo & Copyright */}
          <div className="text-center md:text-center">
            <a href="#" className="text-xl font-bold">
            Build with ❤️ by <span className="text-primary">Utkarsh Pandey</span>
            </a>
            <p className="text-sm text-muted-foreground  mt-2">
              © {currentYear}  All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a target="_blank"
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};