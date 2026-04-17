const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "SQL",
  "Git/GitHub",
];

export default function SkillsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Kỹ năng</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-4 text-center bg-zinc-50 dark:bg-zinc-900"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
