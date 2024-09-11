import { Metadata } from "next";
import Portfolio from "@/components/portfolio";

export const metadata: Metadata = {
  title: "mohammad farseen | portfolio",
  description: "Full stack developer portfolio",
};

export default function Home() {
  return <Portfolio />;
}
