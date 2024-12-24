import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

import type { JSX } from "react";

export default function Header(): JSX.Element {
  return (
    <div className="flex flex-col gap-4 pt-4 sm:pt-24">
      <Avatar className="h-12 w-12 rounded-full">
        <AvatarImage src="/rocket-emoji.jpeg" alt="Rocket emoji" />
        <AvatarFallback>O</AvatarFallback>
      </Avatar>
      <div className="gap-4 flex flex-col">
        <p className="font-semibold text-lg">Obnol</p>
        <div className="text-muted-foreground text-sm flex flex-col gap-2">
          <p>Software engineer based in Barcelona, Spain</p>
          <p>Always learning 💭</p>
          <p>🇪🇸 🇨🇳 🇺🇸</p>
        </div>
      </div>
    </div>
  );
}
