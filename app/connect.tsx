import Link from "next/link";

export function Connect() {
  return (
    <div className="flex flex-col gap-2">
      <p className="">
        follow me on{" "}
        <Link className="underline underline-offset-2 cursor-alias" href="https://x.com/obnol1" target="_blank">
          x
        </Link>
        , view my code on{" "}
        <Link href="https://github.com/obnol" className="underline underline-offset-2 cursor-alias">
          github
        </Link>{" "}
        or email me at{" "}
        <Link href="mailto:contact@obnol.com" className="cursor-alias">
          contact@obnol.com
        </Link>
      </p>
    </div>
  );
}
