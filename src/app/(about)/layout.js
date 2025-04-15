import InsightRoll from "@/src/components/About/InsightRoll";


const insights = [
    "Sunday Worship Service",
    "Youth Fellowship",
    "Intentional Discipleship",
    "Cell Group/Kamustahan",
    "Prayer Warrior",
    "Sunrise Service",
    "Revival",
  ];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
