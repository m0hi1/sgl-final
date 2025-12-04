import { Smartphone } from "lucide-react"

export interface TrainingCourse {
  slug: string
  title: string
  shortTitle: string
  description: string
  duration: string
  level: string
  price: string
  icon: any
  color: string
  features: string[]
  curriculum: {
    module: string
    topics: string[]
  }[]
  benefits: string[]
  prerequisites: string[]
  outcomes: string[]
}

export const trainingCourses: TrainingCourse[] = [
  {
    slug: "flutter-training",
    title: "Flutter App Development Training",
    shortTitle: "Flutter Training",
    description:
      "Master Flutter and Dart to build beautiful, natively compiled mobile applications for iOS and Android from a single codebase. Hands-on training with real-world projects.",
    duration: "8 Weeks",
    level: "Beginner to Advanced",
    price: "₹15,000",
    icon: Smartphone,
    color: "from-blue-500 to-cyan-500",
    features: [
      "Live Interactive Sessions",
      "Hands-on Projects",
      "1-on-1 Mentorship",
      "Job Assistance",
      "Certificate of Completion",
      "Lifetime Access to Resources",
    ],
    curriculum: [
      {
        module: "Module 1: Dart Fundamentals",
        topics: [
          "Introduction to Dart Programming",
          "Variables, Data Types & Operators",
          "Control Flow & Loops",
          "Functions & Classes",
          "Object-Oriented Programming in Dart",
          "Null Safety & Error Handling",
        ],
      },
      {
        module: "Module 2: Flutter Basics",
        topics: [
          "Flutter Architecture & Setup",
          "Widgets - Stateless & Stateful",
          "Layout Widgets (Row, Column, Stack)",
          "Material Design Components",
          "Navigation & Routing",
          "Forms & User Input",
        ],
      },
      {
        module: "Module 3: State Management",
        topics: [
          "Understanding State in Flutter",
          "setState & InheritedWidget",
          "Provider Package",
          "Riverpod & GetX",
          "BLoC Pattern",
          "Choosing the Right Approach",
        ],
      },
      {
        module: "Module 4: Advanced Flutter",
        topics: [
          "REST API Integration",
          "Local Storage & SQLite",
          "Firebase Integration",
          "Push Notifications",
          "Animations & Custom Painters",
          "Platform Channels",
        ],
      },
      {
        module: "Module 5: Real-World Projects",
        topics: [
          "E-commerce App Development",
          "Social Media App Clone",
          "Chat Application with Firebase",
          "Food Delivery App UI",
          "App Store Deployment",
          "Portfolio Building",
        ],
      },
    ],
    benefits: [
      "Build cross-platform apps with single codebase",
      "Learn industry-standard best practices",
      "Work on 5+ real-world projects",
      "Get personalized feedback on your code",
      "Access to private community of developers",
      "Resume building and interview preparation",
    ],
    prerequisites: [
      "Basic programming knowledge (any language)",
      "Laptop with minimum 8GB RAM",
      "Enthusiasm to learn mobile development",
      "No prior Flutter experience required",
    ],
    outcomes: [
      "Build production-ready Flutter apps",
      "Understand Dart programming deeply",
      "Master state management patterns",
      "Deploy apps to Play Store & App Store",
      "Freelance or get hired as Flutter Developer",
    ],
  },
]

export function getTrainingCourse(slug: string): TrainingCourse | undefined {
  return trainingCourses.find((course) => course.slug === slug)
}

export function getAllTrainingSlugs(): string[] {
  return trainingCourses.map((course) => course.slug)
}
