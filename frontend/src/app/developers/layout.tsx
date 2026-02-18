import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Developers | MASF",
    description: "Meet the dedicated technical team behind the MASF digital platform. Innovation for social good.",
    openGraph: {
        title: "Developers - MASF Tech Team",
        description: "The team building technology to amplify MASF's social impact.",
    },
};

export default function DevelopersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
