import Hero from "@/components/Hero";

export const metadata = {
  title: "Home | Krit Visitstump",
  description: "Senior Modern Workplace Solutions Specialist Portfolio",
};

export default function Home() {
  return (
    <main style={{ maxWidth: "800px", margin: "0 auto" }}>
      <Hero />
      {/* Services and Jobs removed for minimalist layout */}
    </main>
  );
}