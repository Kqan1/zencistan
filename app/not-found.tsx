import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Not Found"
};

export default function NotFound() {
    return (
        <section className="grid place-items-center h-screen">
            giganigga could not find any search results :(
        </section>
    );
}