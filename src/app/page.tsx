import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-full flex-1 items-center justify-center px-6 py-24">
      <div className="w-full max-w-2xl space-y-8 text-center">
        <p className="text-sm font-medium text-muted-foreground">
          Next.js starter
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
          Build your next idea faster.
        </h1>
        <p className="mx-auto max-w-xl text-lg text-muted-foreground">
          A production-ready foundation with TypeScript, Tailwind CSS,
          shadcn/ui, Biome, and Vitest.
        </p>
        <div className="flex justify-center gap-3">
          <Button>Get started</Button>
          <Button variant="outline">Learn more</Button>
        </div>
      </div>
    </main>
  );
}
