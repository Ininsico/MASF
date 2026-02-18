import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Study Guidelines | MASF",
    description: "Educational resources and study guidelines provided by MASF to support students in their academic journey.",
    openGraph: {
        title: "Study Guidelines - MASF Education",
        description: "Empowering students with knowledge and guidance for a brighter future.",
    },
};

export default function StudyGuidelinesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
