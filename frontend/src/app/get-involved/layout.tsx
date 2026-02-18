import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Get Involved | MASF",
    description: "Join the Medical & Social Family (MASF). Volunteer your time, skills, or resources to help us serve humanity and make a lasting impact.",
    openGraph: {
        title: "Get Involved with MASF",
        description: "Become a volunteer or partner with MASF. Together we can achieve more.",
    },
};

export default function GetInvolvedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
