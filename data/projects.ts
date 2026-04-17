export interface Project {
  id: string;
  title: string;
  description: string;
  detail: string;
  tech: string[];
  status: "Hoàn thành" | "Đang phát triển";
}

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "Website Portfolio",
    description: "Website cá nhân xây dựng bằng Next.js và Tailwind CSS",
    detail:
      "Dự án portfolio dùng App Router, tối ưu SEO cơ bản và triển khai responsive cho nhiều kích thước màn hình.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    status: "Hoàn thành",
  },
  {
    id: "todo-app",
    title: "Ứng dụng Quản lý Công việc",
    description: "Ứng dụng Todo App với React và Local Storage",
    detail:
      "Cho phép tạo, cập nhật trạng thái và lưu tác vụ cục bộ. Tập trung vào quản lý state và tổ chức component.",
    tech: ["React", "CSS Modules", "JavaScript"],
    status: "Hoàn thành",
  },
  {
    id: "rest-api",
    title: "API RESTful",
    description: "API quản lý sản phẩm với Node.js và Express",
    detail:
      "Xây dựng CRUD sản phẩm, phân tầng controller-service, và chuẩn hóa mã lỗi trả về qua JSON.",
    tech: ["Node.js", "Express", "MongoDB"],
    status: "Đang phát triển",
  },
  {
    id: "chat-realtime",
    title: "Chat Realtime",
    description: "Ứng dụng chat realtime với WebSocket",
    detail:
      "Hỗ trợ gửi nhận tin nhắn theo thời gian thực, quản lý room chat cơ bản và hiển thị trạng thái online.",
    tech: ["Next.js", "Socket.IO", "Node.js"],
    status: "Đang phát triển",
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
