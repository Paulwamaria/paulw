import Link from "next/link";
import { Lock, Mail, ArrowLeft, ExternalLink } from "lucide-react";

const projectDetails: Record<
  string,
  { title: string; description: string; live?: string }
> = {
  carenne: {
    title: "Carenne Fashion House",
    description:
      "This repository is private because it contains active product work, business logic, and implementation details that are not currently public.",
    live: "#",
  },
  trading: {
    title: "Trading Automation System",
    description:
      "This repository is private because it includes proprietary trading logic, automation workflows, and implementation details that are not shared publicly.",
    live: "#",
  },
  ascend: {
    title: "Ascend",
    description:
      "This repository is private because the platform is under active development and includes protected product architecture and backend implementation details.",
    live: "#",
  },
};

export default async function CodeAccessPage({
  searchParams,
}: {
  searchParams: Promise<{ project?: string }>;
}) {
  const params = await searchParams;
  const project = params.project || "";
  const item = projectDetails[project];

  if (!item) {
    return (
      <main className="min-h-screen bg-neutral-950 text-white">
        <div className="mx-auto flex min-h-screen max-w-3xl items-center px-6 py-20">
          <div className="w-full rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center">
            <h1 className="text-3xl font-semibold">Project not found</h1>
            <p className="mt-4 text-neutral-300">
              The requested project access page does not exist.
            </p>
            <Link
              href="/"
              className="mt-6 inline-flex items-center rounded-2xl border border-white/15 px-5 py-3 text-white transition hover:bg-white/10"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto flex min-h-screen max-w-3xl items-center px-6 py-20">
        <div className="w-full rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl md:p-12">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-fuchsia-400/20 bg-fuchsia-500/10 text-fuchsia-300">
            <Lock className="h-8 w-8" />
          </div>

          <p className="text-sm uppercase tracking-[0.25em] text-fuchsia-300">
            Restricted Access
          </p>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            {item.title} repository is private
          </h1>

          <p className="mt-6 text-base leading-8 text-neutral-300">
            {item.description}
          </p>

          <p className="mt-4 text-base leading-8 text-neutral-400">
            I can still provide a walkthrough, architecture discussion,
            screenshots, or a live demo on request.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:paulwamaria@gmail.com?subject=Request%20for%20Code%20Access"
              className="inline-flex items-center rounded-2xl bg-white px-5 py-3 font-medium text-neutral-950 transition hover:bg-neutral-200"
            >
              <Mail className="mr-2 h-4 w-4" />
              Request Access
            </a>

            <Link
              href={item.live || "/"}
              className="inline-flex items-center rounded-2xl border border-white/15 px-5 py-3 font-medium text-white transition hover:bg-white/10"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              View Project
            </Link>

            <Link
              href="/"
              className="inline-flex items-center rounded-2xl border border-white/15 px-5 py-3 font-medium text-white transition hover:bg-white/10"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}