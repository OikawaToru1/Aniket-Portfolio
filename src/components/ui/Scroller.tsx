interface Item {
    id: string;
    label: string;
    color: string;
    }

const ITEMS = [
  { id: "react", label: "React", color: "#378ADD" },
  { id: "tailwind", label: "Tailwind CSS", color: "#1D9E75" },
  { id: "typescript", label: "TypeScript", color: "#7F77DD" },
  { id: "javascript", label: "JavaScript", color: "#F7DF1E" },
  { id: "python", label: "Python", color: "#3776ab" },
  { id: "c", label: "C", color: "#3776ab" },
  { id: "c++", label: "C++", color: "#3776ab" },
  { id: "vite", label: "Vite", color: "#D85A30" },
  { id: "redux", label: "Redux", color: "#7B68EE" },
  { id: "postgresql", label: "PostgreSQL", color: "#336790" },
  { id: "appwrite", label: "Appwrite", color: "#336790" },
  { id: "prisma", label: "Prisma", color: "#336790" },
  { id: "express", label: "Express", color: "#3776ab" },
  { id: "nodejs", label: "Node.js", color: "#3776ab" },
  {id:"git", label:"Git", color:"#F05032"},
  {id:"github", label:"GitHub", color:"#333"},
  {id: "socket.io", label: "Socket.IO", color: "#010101" },

];

function ScrollerRow({ items, duration = "20s", reverse = false }: { items: Item[]; duration?: string; reverse?: boolean }) {

  const repetitions = [0, 1, ];

  return (
    <div className="overflow-hidden w-full mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className="flex w-max animate-infinite-scroll"
        style={{
          animationDuration: duration,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {repetitions.map((i) => (
          <div key={i} className="flex gap-4 px-2">
            {items.map(({ id, label, color }) => (
              <div
                key={`${i}-${id}`}
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 whitespace-nowrap text-sm shadow-sm"
              >
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ background: color }}
                />
                <span className="font-medium text-zinc-700 dark:text-zinc-300">
                  {label}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function InfiniteScroller() {
  return (
    <>
      <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          /* Since we have 2 sets, moving by -50% moves exactly 
             one full set out of view, making the loop seamless.
          */
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll linear infinite;
        }
      `}</style>
      <div className="flex flex-col gap-4 py-4">
        <h1 className="text-2xl font-mono py-2 font-bold text-white/80 text-center">Skills go brrrrr</h1>
        <ScrollerRow items={ITEMS} duration="40s" />
        <ScrollerRow items={ITEMS} duration="40s" reverse />
      </div>
    </>
  );
}
