import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Donate Now | MASF",
    description: "Support our mission to serve humanity. Your donation provides essential medical care, education, and food to those in need across Pakistan.",
    openGraph: {
        title: "Donate to MASF - Make a Difference",
        description: "Your contribution changes lives. Donate to MASF today and support our healthcare and welfare initiatives.",
    },
};

export default function DonateLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
