import React from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

interface SocialLinksProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function SocialLinks({ className = "", size = "md" }: SocialLinksProps) {
  const { social } = portfolioData;

  const iconSize = size === "sm" ? 16 : size === "md" ? 20 : 24;

  const links = [
    { name: "GitHub", url: social.github, icon: Github },
    { name: "LinkedIn", url: social.linkedin, icon: Linkedin },
    { name: "Email", url: social.email, icon: Mail },
    { name: "Phone", url: social.phone, icon: Phone },
  ];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map((link) => {
        const IconComponent = link.icon;
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-colors"
            aria-label={link.name}
            title={link.name}
          >
            <IconComponent size={iconSize} />
          </a>
        );
      })}
    </div>
  );
}
