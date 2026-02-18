import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | MASF",
    description: "Get in touch with the Medical & Social Family (MASF) team. Have questions or want to volunteer? Reach out to us today.",
    openGraph: {
        title: "Contact Us - MASF",
        description: "Connect with MASF. We are here to answer your queries and welcome your support.",
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
