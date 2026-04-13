import Link from "next/link";
import { Lock, Mail, ArrowLeft, ExternalLink } from "lucide-react";

export default function CodeAccessPage() {
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
            This code repository is private
          </h1>

          <p className="mt-6 text-base leading-8 text-neutral-300">
            Some repositories are kept private to protect proprietary work,
            ongoing development, or implementation details. The project is real
            and available for discussion, walkthrough, or live review on
            request.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:paulwamaria@gmail.com"
              className="inline-flex items-center rounded-2xl bg-white px-5 py-3 font-medium text-neutral-950 transition hover:bg-neutral-200"
            >
              <Mail className="mr-2 h-4 w-4" />
              Request Access
            </a>

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