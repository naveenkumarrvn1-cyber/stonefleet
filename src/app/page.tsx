import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">
        Stonefleet App 🚀
      </h1>

      <p className="text-zinc-600 dark:text-zinc-400 max-w-xl">
        Welcome to Stonefleet.  
        This is your main content area.
      </p>
    </div>
  );
}