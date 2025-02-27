import Button from "@/components/shared/Button";
import { useRouter } from "next/router";
import HeadingCentered from "./HeadingCentered";

export default function CTA() {
  const router = useRouter();
  return (
    <>
      <div className="mx-auto py-16 lg:pt-24 lg:pb-40">
        <p className="text-md text-brand-dark dark:text-brand-light font-semibold uppercase">
          It&apos;s free & open-source
        </p>
        <p className="my-0 text-4xl font-semibold tracking-tight text-slate-800 dark:text-slate-100">
          Try Formbricks right now!
        </p>
        <div className="mt-12 grid grid-cols-1 content-center md:grid-cols-2">
          <div className="-mb-2 rounded-t-xl bg-gradient-to-br from-slate-300 to-slate-200 text-center text-gray-900 dark:from-slate-800 dark:to-slate-900 dark:text-slate-200 md:mb-0 md:ml-2.5 md:-mr-5 md:rounded-l-xl">
            <h3 className="text-3xl font-bold">Self-hosted</h3>
            <p className="mt-2 mb-4 dark:text-slate-400">Run locally with docker-compose.</p>
            <Button variant="secondary" onClick={() => router.push("/docs")} className="mt-3 mb-8 md:mb-0">
              Read docs
            </Button>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-slate-400 to-slate-300 pb-10 text-center text-gray-800 dark:from-slate-800 dark:to-slate-700 dark:text-slate-200">
            <h3 className="text-3xl font-bold">Cloud</h3>
            <p className="mt-2 mb-4 dark:text-slate-400">Use our free managed service.</p>
            <Button variant="secondary" onClick={() => router.push("/get-started")} className="mt-3">
              Get started
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
