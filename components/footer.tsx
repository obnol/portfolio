import Link from "next/link";

import type { JSX } from "react";

export function Footer(): JSX.Element {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-semibold">Connect</p>
      <p className="text-muted-foreground">
        Follow me on{" "}
        <Link className="underline underline-offset-2 cursor-alias" href="https://x.com/obnol1" target="_blank">
          X
        </Link>
        , view my code on{" "}
        <Link href="https://github.com/obnol" className="underline underline-offset-2 cursor-alias">
          Github
        </Link>{" "}
        or email me at{" "}
        <Link href="mailto:contact@obnol.com" className="cursor-alias">
          contact@obnol.com
        </Link>
      </p>
    </div>
  );
}
