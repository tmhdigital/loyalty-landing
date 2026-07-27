import { notFound } from "next/navigation";
import { MANUALS } from "../../../data/manuals";
import ManualPageClient from "./ManualPageClient";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const manual = MANUALS[slug];
  if (!manual) return {};
  return {
    title: `${manual.title} — Rewaldo`,
    description: manual.description,
  };
}

export default async function ManualPage({ params }) {
  const { slug } = await params;
  const manual = MANUALS[slug];

  if (!manual) notFound();

  return <ManualPageClient slug={slug} manual={manual} />;
}
