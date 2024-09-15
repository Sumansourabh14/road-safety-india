import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-8xl font-bold">Safety on Roads</h1>
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
        <Button asChild>
          <Link
            href={`/upload`}
            className="text-3xl px-16 py-8 hover:bg-gray-950"
          >
            Upload Video
          </Link>
        </Button>
      </main>
    </div>
  );
}
