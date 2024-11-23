import Link, { LinkProps } from "next/link";

import type { JSX } from "react";

export function ExternalLink(props: LinkProps): JSX.Element {
  return <Link className="underline-offset-2" {...props} />;
}
