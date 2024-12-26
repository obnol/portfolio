import Link from "next/link";

export function GoBackButton() {
  return (
    <Link href="/" passHref>
      <p className="text-blue-600 hover:underline">← Go back</p>
    </Link>
  );
}
