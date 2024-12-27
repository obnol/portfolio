import { GoBackButton } from "../go-back-button";

export default function MDXLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GoBackButton />
      {children}
    </>
  );
}
