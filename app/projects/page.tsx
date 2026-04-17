import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Dự án</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 hover:shadow-md transition-shadow flex flex-col bg-white dark:bg-zinc-900"
          >
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  project.status === "Hoàn thành"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {project.status}
              </span>
            </div>
            <p className="text-zinc-600 dark:text-zinc-300 mb-4 flex-1">{project.description}</p>
            <Link
              href={`/projects/${project.id}`}
              className="mb-4 inline-block text-emerald-600 hover:underline text-sm"
            >
              Xem chi tiết →
            </Link>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-emerald-100 text-emerald-700 text-sm px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
