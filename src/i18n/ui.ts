export type Locale = "vi" | "en";

export type UILabels = {
  cvDocument: string;
  contact: {
    phone: string;
    email: string;
    location: string;
    github: string;
    linkedin: string;
  };
  sidebar: {
    technicalSkills: string;
    skillGroups: {
      languages: string;
      frameworks: string;
      tools: string;
      databases: string;
    };
    certifications: string;
    languages: string;
    footer: string;
  };
  main: {
    careerObjective: string;
    education: string;
    projects: string;
    activities: string;
    viewSource: string;
  };
  page: {
    brand: string;
    previewLabel: string;
    subtitle: string;
    print: string;
    switchToEn: string;
    switchToVi: string;
    translating: string;
    translateError: string;
  };
};

export const uiLabels: Record<Locale, UILabels> = {
  vi: {
    cvDocument: "Sơ yếu lý lịch",
    contact: {
      phone: "Điện thoại",
      email: "Email",
      location: "Địa chỉ",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    sidebar: {
      technicalSkills: "Kỹ năng chuyên môn",
      skillGroups: {
        languages: "Ngôn ngữ lập trình",
        frameworks: "Framework / Thư viện",
        tools: "Công cụ / Nền tảng",
        databases: "Cơ sở dữ liệu",
      },
      certifications: "Chứng chỉ",
      languages: "Ngoại ngữ",
      footer: "Business Creative",
    },
    main: {
      careerObjective: "Mục tiêu nghề nghiệp",
      education: "Học vấn",
      projects: "Dự án tiêu biểu",
      activities: "Hoạt động",
      viewSource: "→ Portfolio GitHub",
    },
    page: {
      brand: "Business Creative",
      previewLabel: "Xem trước",
      subtitle: "Designer · Sáng tạo nội dung · Marketing · Tech",
      print: "Xuất PDF",
      switchToEn: "English",
      switchToVi: "Tiếng Việt",
      translating: "Đang dịch…",
      translateError: "Không thể dịch. Vui lòng thử lại.",
    },
  },
  en: {
    cvDocument: "Curriculum Vitae",
    contact: {
      phone: "Phone",
      email: "Email",
      location: "Location",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    sidebar: {
      technicalSkills: "Technical Skills",
      skillGroups: {
        languages: "Languages",
        frameworks: "Frameworks / Libraries",
        tools: "Tools / Platforms",
        databases: "Databases",
      },
      certifications: "Certifications",
      languages: "Languages",
      footer: "Business Creative",
    },
    main: {
      careerObjective: "Career Objective",
      education: "Education",
      projects: "Featured Work",
      activities: "Activities",
      viewSource: "→ View Portfolio",
    },
    page: {
      brand: "Business Creative",
      previewLabel: "Preview",
      subtitle: "Designer · Creative · Content · Tech",
      print: "Export PDF",
      switchToEn: "English",
      switchToVi: "Tiếng Việt",
      translating: "Translating…",
      translateError: "Translation failed. Please try again.",
    },
  },
};
