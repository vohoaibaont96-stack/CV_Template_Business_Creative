/**
 * CV — Business Creative × Tech Engineering
 *
 * ⚠️ CHỈ NHẬP NỘI DUNG BẰNG TIẾNG VIỆT tại file này.
 * Bản tiếng Anh được dịch tự động khi bấm nút "English" trên website.
 *
 * Hướng dẫn: src/data/HUONG_DAN_NHAP_LIEU.md
 */

export interface Certification {
  name: string;
  detail?: string;
}

export interface LanguageSkill {
  name: string;
  level: string;
}

export interface Education {
  school: string;
  major: string;
  period: string;
  gpa?: string;
}

export interface Project {
  name: string;
  role: string;
  period: string;
  techStack: string[];
  summary: string;
  bullets: string[];
  result?: string;
  githubUrl?: string;
}

export interface Activity {
  title: string;
  period?: string;
  description: string;
}

export interface CVData {
  header: {
    fullName: string;
    position: string;
    /** Câu tagline ngắn — thể hiện năng lượng & định hướng (1 dòng) */
    tagline: string;
    /** 3–4 từ khóa nổi bật hiển thị dưới tên (vd: React · Agile · Problem Solver) */
    highlights: string[];
    phone: string;
    email: string;
    address: string;
    github: string;
    linkedin: string;
  };
  technicalSkills: {
    languages: string[];
    frameworks: string[];
    tools: string[];
    databases: string[];
  };
  certifications: Certification[];
  languages: LanguageSkill[];
  careerObjective: string;
  education: Education[];
  projects: Project[];
  activities: Activity[];
}

export const cvData: CVData = {
  header: {
    fullName: "[NGUYỄN VĂN A]",
    position: "[Frontend Developer] Intern",
    tagline:
      "Sinh viên CNTT chủ động, thích ship sản phẩm nhanh — sẵn sàng học hỏi và đóng góp ngay từ ngày đầu thực tập.",
    highlights: ["React & Next.js", "Làm việc nhóm", "Tư duy sản phẩm", "Git / Agile"],
    phone: "[0901 234 567]",
    email: "[ten.cua.ban@email.com]",
    address: "[Quận/Huyện, TP. Hồ Chí Minh]",
    github: "https://github.com/[username-github]",
    linkedin: "https://linkedin.com/in/[username-linkedin]",
  },

  technicalSkills: {
    languages: ["JavaScript", "TypeScript", "Python", "C++"],
    frameworks: ["React", "Next.js", "Node.js", "Express"],
    tools: ["Git", "Docker", "Linux", "Figma", "Vercel"],
    databases: ["PostgreSQL", "MySQL", "MongoDB"],
  },

  certifications: [
    { name: "[AWS Cloud Practitioner]", detail: "AWS — [2024]" },
    { name: "[TOEIC 750+]", detail: "ETS — [2023]" },
  ],

  languages: [
    {
      name: "Tiếng Anh",
      level: "Đọc hiểu tài liệu kỹ thuật · trình bày ý tưởng trong nhóm dev",
    },
    { name: "Tiếng Việt", level: "Bản ngữ" },
  ],

  careerObjective:
    "Định hướng trở thành [Frontend Engineer] trong môi trường product-driven. Tôi mang đến tư duy xây dựng giao diện rõ ràng, code có cấu trúc và tinh thần ownership — luôn tìm cách cải thiện trải nghiệm người dùng và hiệu suất hệ thống. Mong được đồng hành cùng đội ngũ để biến ý tưởng thành sản phẩm thật, đồng thời nâng cao kỹ năng quy trình Agile & code review chuyên nghiệp.",

  education: [
    {
      school: "[Đại học Bách Khoa TP.HCM]",
      major: "[Kỹ thuật Phần mềm / Công nghệ Thông tin]",
      period: "[2021 – 2025]",
      gpa: "GPA [3.45/4.0]",
    },
  ],

  projects: [
    {
      name: "[Hệ thống Quản lý Thư viện Số]",
      role: "Fullstack Developer",
      period: "[03 – 06/2024]",
      techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
      summary:
        "Nền tảng web mượn–trả sách, tìm kiếm thời gian thực và phân quyền Admin/User cho thư viện khoa.",
      bullets: [
        "Thiết kế UI responsive theo design system nội bộ; đạt LCP < 2.5s nhờ tối ưu font & image.",
        "Xây REST API + JWT/bcrypt; kiến trúc module hóa giúp onboard thành viên mới trong 1 ngày.",
        "Tối ưu Prisma (index, selective query) — giảm ~20% latency API danh sách sách.",
      ],
      result: "Điểm đồ án [9.0/10] · Deploy production trên Vercel",
      githubUrl: "https://github.com/[username]/[library-project]",
    },
    {
      name: "[Expense Tracker — Ứng dụng Quản lý Chi tiêu]",
      role: "Team Lead · Backend",
      period: "[09 – 12/2023]",
      techStack: ["React", "Node.js", "MongoDB", "Docker"],
      summary:
        "SPA theo dõi thu–chi cá nhân với biểu đồ xu hướng và phân loại thông minh theo danh mục.",
      bullets: [
        "Dẫn dắt nhóm 4 người, sprint 2 tuần; phân rõ backlog, review code và demo cuối sprint.",
        "Aggregation pipeline MongoDB cho báo cáo theo kỳ — giảm thao tác thủ công cho người dùng.",
        "Docker Compose chuẩn hóa môi trường dev — team setup dưới 15 phút.",
      ],
      result: "MVP đúng deadline · Tài liệu API Swagger đầy đủ",
      githubUrl: "https://github.com/[username]/[expense-tracker]",
    },
  ],

  activities: [
    {
      title: "[Hackathon SVIT 2024]",
      period: "[11/2024]",
      description: "Giải Khuyến khích — prototype [IoT/AI] trong 48h, phối hợp cross-functional 5 người.",
    },
    {
      title: "[CLB Lập trình — PTIT/BK]",
      period: "[2022 – nay]",
      description: "Workshop Git & Clean Code; mentor HTML/CSS cho tân sinh viên.",
    },
  ],
};
