import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectById, projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
      <Link href="/projects">
        <Button variant="link" className="px-0">
          ← Quay lại danh sách dự án
        </Button>
      </Link>
      <Card className="mt-4">
        <CardHeader className="space-y-3">
          <div className="flex items-center justify-between gap-4">
            <CardTitle className="text-3xl">{project.title}</CardTitle>
            <Badge variant={project.status === "Hoàn thành" ? "secondary" : "outline"}>
              {project.status}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-zinc-700 dark:text-zinc-300 mb-4">{project.detail}</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}
