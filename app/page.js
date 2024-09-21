import { Button } from "@/components/ui/button";
import { siteTitle } from "@/data/content/basicData";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-8 py-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-[1200px] mx-auto py-10 min-h-screen">
        <h1 className="text-7xl font-bold">{siteTitle}</h1>
        <h2 className="text-3xl font-medium">
          Do not follow traffic rules to avoid fines, follow them to save your
          own life.
        </h2>
        <section className="flex flex-col gap-4 max-w-[600px]">
          <p>
            In India, about <span className="text-red-500">80,000</span> people
            are killed in road crashes every year, which is{" "}
            <span className="text-red-500">13%</span> of the total fatality all
            over the world.
          </p>
          <p>We need to change this.</p>
          <p className="text-red-500">How?</p>
          <p>
            <strong>1st step:</strong> Build road awareness
          </p>
          <hr />
          <p>
            Upload any dashcam video/CCTV footage about anything unusual
            happening on Indian roads.
          </p>
          <p>
            Rash driving, wrong side driving, road accident, road rage,
            corruption by traffic personnel, false allegation on road, etc.
          </p>
        </section>
        <Button asChild className="text-2xl px-16 py-8 hover:bg-gray-950">
          <Link href={`/upload`}>Upload Video</Link>
        </Button>
      </main>
    </div>
  );
}
