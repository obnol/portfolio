import Link, { LinkProps } from "next/link";

export function ExternalLink(props: LinkProps): JSX.Element {
  return <Link className="underline-offset-2" {...props} />;
}
