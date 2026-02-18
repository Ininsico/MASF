import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | MASF",
    description: "Learn about the mission, history, and impact of Medical & Social Family (MASF). We are dedicated to bridging the gap between privilege and need through healthcare and education.",
    openGraph: {
        title: "About Us - Medical & Social Family",
        description: "Discover the story behind MASF and our journey of serving humanity since 2018.",
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
