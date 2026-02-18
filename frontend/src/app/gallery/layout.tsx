import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Impact Gallery | MASF",
    description: "See the impact of your support. Browse through photos and videos of our medical camps, plantation drives, distribution events, and more.",
    openGraph: {
        title: "Impact Gallery - MASF in Action",
        description: "Visual stories of hope and service from MASF's activities across Pakistan.",
    },
};

export default function GalleryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
