export type Blog = {
  slug: string;
  title: string;
  date: string;
  category: string;
  heroImage: string;
  sections: Array<{
    heading: string;
    content: string[]; // paragraphs
  }>;
  learn: string[]; // bullet points
};

export const blogs: Blog[] = [
  {
    slug: "the-ultimate-guide-to-budgeting-in-2024",
    title: "The Ultimate Guide to Budgeting in 2024",
    date: "August 12, 2024",
    category: "Accounts payable",
    heroImage: "https://images.unsplash.com/photo-1505764706515-aa95265c5abc?q=80&w=1920&auto=format&fit=crop",
    sections: [
      {
        heading: "Accounts payable audit",
        content: [
          "Budgeting in 2024 is essential for financial stability. A clear plan helps align spending with strategic goals and minimizes risk.",
          "Adopt a fresh approach to budgeting by setting realistic goals, tracking expenses closely, and refining the plan regularly.",
        ],
      },
    ],
    learn: [
      "Understanding the importance of budgeting and how it affects financial security.",
      "Step-by-step process for building a realistic budget.",
      "Discovering the best practices for tracking expenses.",
      "Tips for adjusting budgets to inflation and market changes.",
      "Advice on incorporating savings and investments into budgets.",
      "Guidance on using budgeting tools and apps.",
      "How to make informed decisions using budget data.",
    ],
  },
];

export function getAllSlugs(): string[] {
  return blogs.map((b) => b.slug);
}

export function getBlogBySlug(slug: string): Blog | null {
  const blog = blogs.find((b) => b.slug === slug);
  return blog || null;
}

export function getPlaceholderBlog(slug: string): Blog {
  return {
    slug,
    title: "The Ultimate Guide to Budgeting in 2024",
    date: "August 12, 2024",
    category: "Accounts payable",
    heroImage: "https://images.unsplash.com/photo-1505764706515-aa95265c5abc?q=80&w=1920&auto=format&fit=crop",
    sections: [
      {
        heading: "Accounts payable audit",
        content: [
          "Budgeting in 2024 is essential for financial stability. A clear plan helps align spending with strategic goals and minimizes risk.",
          "Adopt a fresh approach to budgeting by setting realistic goals, tracking expenses closely, and refining the plan regularly.",
        ],
      },
    ],
    learn: [
      "Understanding the importance of budgeting and how it affects financial security.",
      "Step-by-step process for building a realistic budget.",
      "Discovering the best practices for tracking expenses.",
      "Tips for adjusting budgets to inflation and market changes.",
      "Advice on incorporating savings and investments into budgets.",
      "Guidance on using budgeting tools and apps.",
      "How to make informed decisions using budget data.",
    ],
  };
}




