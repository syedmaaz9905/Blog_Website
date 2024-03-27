import InsightRoll from "@/src/components/About/InsightRoll";

const insights = [
    "20+ Projects Completed",
    "3+ Years of Freelancing",
    "99% Client Satisfaction",
];


export default function AboutLayout({ children }) {
    return <main className="w-full flex flex-col items-center justify-between">
        <InsightRoll insights={insights} />
        {children}
    </main>
}