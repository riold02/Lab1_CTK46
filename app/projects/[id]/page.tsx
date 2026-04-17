import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectById, projects } from "@/data/projects";

interface ProjectDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <Link href="/projects" className="text-emerald-600 hover:underline text-sm">
        ← Quay lại danh sách dự án
      </Link>
      <div className="mt-4 border rounded-lg p-6">
        <div className="flex items-center justify-between gap-4 mb-3">
          <h1 className="text-3xl font-bold">{project.title}</h1>
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
        <p className="text-gray-700 mb-4">{project.detail}</p>
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
    </div>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}
