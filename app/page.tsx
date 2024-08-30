import { Footer } from "@/components/footer";
import Header from "@/components/header";

export default function Page(): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col mx-auto max-w-3xl p-8 sm:p-12 gap-8">
      <Header />
      <Footer />
    </main>
  );
}
