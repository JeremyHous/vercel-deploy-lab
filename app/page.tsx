import { Suspense } from "react";
import { io } from "next/cache";

export default function Home() {
  const greeting = process.env.NEXT_PUBLIC_GREETING || "Hello from Vercel";

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col items-center gap-4 px-16 py-32 text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
          {greeting}
        </h1>
        <Suspense fallback={<p className="text-lg text-zinc-600 dark:text-zinc-400">&nbsp;</p>}>
          <TodaysDate />
        </Suspense>
      </main>
    </div>
  );
}

async function TodaysDate() {
  await io();
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return <p className="text-lg text-zinc-600 dark:text-zinc-400">{today}</p>;
}
