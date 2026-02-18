import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Services | MASF",
    description: "Explore the services provided by MASF, including free medical camps, educational scholarships, Ramadan Dastarkhan, and social welfare programs.",
    openGraph: {
        title: "Our Services - MASF Impact",
        description: "Comprehensive healthcare, education, and social support services provided by Medical & Social Family.",
    },
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
