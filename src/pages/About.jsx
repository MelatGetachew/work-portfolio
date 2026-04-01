import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Briefcase,
  GraduationCap,
  Code2,
  Wrench,
  Award,
  User,
} from "lucide-react";
import { Navigation } from "../Components/Navigation";
import profileImage from "../assets/profile.jpg"; // Make sure this path and file exist

export default function About() {

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="relative min-h-screen overflow-auto bg-gradient-to-br from-neutral-50 via-blue-50/30 to-yellow-50/20">
      {/* Navigation */}
      <Navigation />

      {/* Stylized Grid Background - matching landing page */}
      <div
        className="fixed inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

    <div>
      {/* Main Content */}
      <div className="relative pt-32 pb-16 px-8 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Header */}
          <motion.div
            variants={cardVariants}
            className="text-center mb-16"
          >
            <h1
              className="text-8xl font-black text-neutral-900 mb-4 tracking-tight"
              style={{
                fontFamily:
                  "system-ui, -apple-system, sans-serif",
              }}
            >
              About me
            </h1>
            <p className="text-2xl text-neutral-600 font-medium">
              UX/UI Designer & Creative Developer
            </p>
          </motion.div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Profile Card - Spans 1 column */}
            <motion.div
              variants={cardVariants}
              className="lg:col-span-1 bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all group"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <User className="w-5 h-5 text-white" />
                </div>
                <span className="text-blue-600 font-bold tracking-wide uppercase text-sm">
                  Profile
                </span>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-48 h-48 rounded-2xl overflow-hidden mb-6 border-4 border-blue-600 shadow-xl">
                  <img
                    src={profileImage}
                    alt="Melat Getachew"
                    className="w-full h-full object-cover rounded-[10px]"
                  />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                  Melat Getachew
                </h3>
                <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full mb-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-green-700 text-sm font-semibold">
                    Available for work
                  </span>
                </div>
                <p className="text-neutral-600 leading-relaxed">
                  Based in Addis Ababa, passionate about
                  creating delightful user experiences
                </p>
              </div>
            </motion.div>

            {/* About Me Card - Spans 2 columns */}
            <motion.div
              variants={cardVariants}
              className="lg:col-span-2 bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-purple-600 p-2 rounded-lg">
                  <User className="w-5 h-5 text-white" />
                </div>
                <span className="text-purple-600 font-bold tracking-wide uppercase text-sm">
                  About
                </span>
              </div>

              <p className="text-neutral-700 text-lg leading-relaxed mb-6">
                I'm a UX/UI designer with a passion for creating
                intuitive and beautiful digital experiences.
                With over 2 years in the industry, I specialize
                in combining thoughtful design with creative
                development to build products that users love.
              </p>

              <p className="text-neutral-700 text-lg leading-relaxed mb-6">
                My approach focuses on understanding user needs,
                iterating quickly, and collaborating closely
                with development teams to bring ideas to life. I
                believe great design should be both functional
                and delightful.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm shadow-md">
                  Design Thinking
                </span>
                <span className="bg-blue-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-md">
                  User Research
                </span>
                <span className="bg-pink-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-md">
                  Prototyping
                </span>
              </div>
            </motion.div>

            {/* Experience Card */}
            <motion.div
              variants={cardVariants}
              className="lg:col-span-2 bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <span className="text-blue-600 font-bold tracking-wide uppercase text-sm">
                  Experience
                </span>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-1">
                    UX/UI Designer
                  </h3>
                  <p className="text-neutral-600 mb-2">
                    Chronos • Feb 2026 - Present
                  </p>
                  <p className="text-neutral-700">
                    Designed initiatives for an AI Fintech and
                    AI Investmemt banking projects{" "}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-1">
                    UI/UX Designer
                  </h3>
                  <p className="text-neutral-600 mb-2">
                    {" "}
                    Pixel Addis• Oct 2025 - Feb 2026
                  </p>
                  <p className="text-neutral-700">
                    Designed mobile and web experiences for
                    fintech and healthcare clients.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-1">
                    Front-End Development Intern{" "}
                  </h3>
                  <p className="text-neutral-600 mb-2">
                    {" "}
                    Kuraztech Addis• Jul 2025 - Oct 2025
                  </p>
                  <p className="text-neutral-700"></p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-1">
                    Assistant Animation Instructor{" "}
                  </h3>
                  <p className="text-neutral-600 mb-2">
                    Col. John C. Robinson American Corne • Jul
                    2024 - Oct 2024
                  </p>
                  <p className="text-neutral-700">
                    Assisted lead instructor in teaching 2D
                    animation techniques to students.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-1">
                    Content Manageer{" "}
                  </h3>
                  <p className="text-neutral-600 mb-2">
                    Prestige Addis • Apr 2024 - Jul 2025
                  </p>
                  <p className="text-neutral-700">
                    Directed content strategy and creative
                    vision for Prestige Magazine and oversaw
                    social media management, increasing audience
                    engagement and brand visibility.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Education Card */}
            <motion.div
              variants={cardVariants}
              className="lg:col-span-1 bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-600 p-2 rounded-lg">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <span className="text-green-600 font-bold tracking-wide uppercase text-sm">
                  Education
                </span>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-1">
                    Bachelor of computer Science
                  </h3>
                  <p className="text-neutral-600 mb-1">
                    Addis Ababa University
                  </p>
                  <p className="text-neutral-500 text-sm">
                    Jan 2023- Jun 2026
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-1">
                    Animation And media trainee{" "}
                  </h3>
                  <p className="text-neutral-600 mb-1">
                    Col.John C.Robinson American Center
                  </p>
                  <p className="text-neutral-500 text-sm">
                    Oct 2023 - Aug 2025
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-1">
                    Innovation Ambassador program trainee
                  </h3>
                  <p className="text-neutral-600 mb-1">
                    Technology and Innovation institute of
                    Ethiopia (TECHIN)
                  </p>
                  <p className="text-neutral-500 text-sm">
                    Jul 2021 - Sep 2021
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Skills Card */}
            <motion.div
              variants={cardVariants}
              className="lg:col-span-1 bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-yellow-600 p-2 rounded-lg">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-yellow-600 font-bold tracking-wide uppercase text-sm">
                  Skills
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-900 font-medium">
                    UI/UX Design
                  </span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 bg-yellow-400 rounded-full"
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-neutral-900 font-medium">
                    Prototyping
                  </span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 bg-yellow-400 rounded-full"
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-neutral-900 font-medium">
                    User Research
                  </span>
                  <div className="flex gap-1">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 bg-yellow-400 rounded-full"
                      />
                    ))}
                    <div className="w-2 h-2 bg-neutral-300 rounded-full" />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-neutral-900 font-medium">
                    Frontend Dev
                  </span>
                  <div className="flex gap-1">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 bg-yellow-400 rounded-full"
                      />
                    ))}
                    <div className="w-2 h-2 bg-neutral-300 rounded-full" />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-neutral-900 font-medium">
                    Animation
                  </span>
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 bg-yellow-400 rounded-full"
                      />
                    ))}
                    {[...Array(2)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 rounded-full bg-[#f5c105]"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Tools Card */}
            <motion.div
              variants={cardVariants}
              className="lg:col-span-1 bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-pink-600 p-2 rounded-lg">
                  <Wrench className="w-5 h-5 text-white" />
                </div>
                <span className="text-pink-600 font-bold tracking-wide uppercase text-sm">
                  Tools
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="bg-neutral-100 text-neutral-800 px-3 py-2 rounded-lg text-sm font-medium border border-neutral-200">
                  Figma
                </span>
                <span className="bg-neutral-100 text-neutral-800 px-3 py-2 rounded-lg text-sm font-medium border border-neutral-200">
                  Adobe XD
                </span>
                <span className="bg-neutral-100 text-neutral-800 px-3 py-2 rounded-lg text-sm font-medium border border-neutral-200">
                  Sketch
                </span>
                <span className="bg-neutral-100 text-neutral-800 px-3 py-2 rounded-lg text-sm font-medium border border-neutral-200">
                  Adobe Animate
                </span>
                <span className="bg-neutral-100 text-neutral-800 px-3 py-2 rounded-lg text-sm font-medium border border-neutral-200">
                  Webflow
                </span>
                <span className="bg-neutral-100 text-neutral-800 px-3 py-2 rounded-lg text-sm font-medium border border-neutral-200">
                  React
                </span>
                <span className="bg-neutral-100 text-neutral-800 px-3 py-2 rounded-lg text-sm font-medium border border-neutral-200">
                  Tailwind
                </span>
                <span className="bg-neutral-100 text-neutral-800 px-3 py-2 rounded-lg text-sm font-medium border border-neutral-200">
                  Principle
                </span>
                <span className="bg-neutral-100 text-neutral-800 px-3 py-2 rounded-lg text-sm font-medium border border-neutral-200">
                  illustrator
                </span>
                <span className="bg-neutral-100 text-neutral-800 px-3 py-2 rounded-lg text-sm font-medium border border-neutral-200">
                  photoshop
                </span>
                <span className="bg-neutral-100 text-neutral-800 px-3 py-2 rounded-lg text-sm font-medium border border-neutral-200">
                  Blender
                </span>
              </div>
            </motion.div>

            {/* Certifications Card */}
            <motion.div
              variants={cardVariants}
              className="lg:col-span-1 bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-orange-600 p-2 rounded-lg">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <span className="text-orange-600 font-bold tracking-wide uppercase text-sm">
                  Certifications
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2" />
                  <div>
                    <h3 className="text-neutral-900 font-bold text-sm">
                      2D Animation And media
                    </h3>
                    <p className="text-neutral-600 text-sm">
                      Certificate of completion
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2" />
                  <div>
                    <h3 className="text-neutral-900 font-bold text-sm">
                      Innovation Ambassador program
                    </h3>
                    <p className="text-neutral-600 text-sm">
                      Certificate of completionn
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2" />
                  <div>
                    <h3 className="text-neutral-900 font-bold text-sm">
                      internship at Kuraz Technologies
                    </h3>
                    <p className="text-neutral-600 text-sm">
                      Certificate of completion
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
    </div>
  );
}