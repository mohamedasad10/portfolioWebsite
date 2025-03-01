import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glassmorphism py-4" : "py-6"
        }`}
      >
        <div className="container flex items-center justify-between">
          <img src="/portfolioWebsite/Images/logoMAAB.png" alt="MAAB" className="h-8" />
          <div className="hidden md:flex items-center gap-8">
            {["About", "Experience", "Education", "Projects", "Volunteer", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center pt-20">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp} className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Mohamed Asad Azim Bandarkar
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                BSc (Hons) Computer Science Student
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href="https://www.linkedin.com/in/mabandarkar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="slide-button"
                >
                  <span>
                    <Linkedin className="w-4 h-4 inline-block mr-2" />
                    LinkedIn
                  </span>
                </a>
                <a
                  href="https://github.com/mohamedasad10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="slide-button"
                >
                  <span>
                    <Github className="w-4 h-4 inline-block mr-2" />
                    GitHub
                  </span>
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <img
                src="/portfolioWebsite/Images/ProfilePic.jpeg"
                alt="Mohamed Asad"
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl"
              />
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section-padding">
          <div className="container">
            <motion.div
              {...fadeInUp}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <p className="text-muted-foreground leading-relaxed">
                I am committed to navigating the dynamic realm of technology, with a profound interest in both Web Development and Software Engineering. In my pursuit of excellence, I am on a journey to continuously enhance my skills and knowledge, aspiring to become a more proficient and well-rounded individual in the field of Computer Science. Focused on web development and driven by a passion for the intersection of creativity and technology, I am dedicated to continuous learning through hands-on experiences. Open to collaborations, challenges, and new opportunities, I am excited to contribute to the ever-evolving tech landscape.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section-padding bg-muted">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
            <div className="space-y-8">
              {[
                {
                  title: "Mentor",
                  company: "UWC IT Society",
                  period: "July 2024 - Present",
                  location: "Western Cape, South Africa · On-site",
                  description: [
                    "Mentor and guide students in IT and computer science, fostering their academic and professional growth.",
                    "Provide one-on-one support and mentorship, helping students navigate complex challenges.",
                    "Address questions and explained IT concepts to students, ensuring a clear understanding of the material.",
                    "Encourage a collaborative and inclusive learning environment, promoting diversity in the tech community."
                  ],
                  logo: "/portfolioWebsite/Images/uwcitsocietylogo.jpg"
                },
                {
                  title: "Secretary-General",
                  company: "UWC IT Society",
                  period: "Apr 2024 - Present",
                  location: "Western Cape, South Africa · On-site",
                  description: [
                    "Oversee administrative functions and ensure efficient day-to-day operations of the society.",
                    "Coordinate schedules and appointments for executives and board members.",
                    "Prepare agendas, minutes, and other materials for meetings, ensuring accuracy and timeliness.",
                    "Maintain confidential records and files, exercising discretion and confidentiality.",
                    "Liaise with internal departments and external stakeholders to facilitate communication and collaboration.",
                    "Contribute to strategic planning and decision-making processes as a key member of the leadership team."
                  ],
                  logo: "/portfolioWebsite/Images/uwcitsocietylogo.jpg"
                },
                {
                  title: "ABSA iNkanyezi IT, Cyber Security and Audit Academy",
                  company: "Absa Group",
                  period: "Mar 2024 - Sept 2024",
                  location: "Remote",
                  description: [
                    "Comprehensive professional development program focusing on risk management, technology controls, data analytics, cybersecurity fundamentals, and soft skills.",
                    "Delivered by industry experts to enhance skills in IT, cybersecurity, and auditing."
                  ],
                  logo: "/portfolioWebsite/Images/absa.png"
                },
                {
                  title: "Computer Science Tutor",
                  company: "University of the Western Cape",
                  period: "Feb 2024 - Present",
                  location: "Western Cape, South Africa · On-site",
                  description: [
                    "Conduct tutoring sessions during designated tutorial periods.",
                    "Provide assistance and guidance to students.",
                    "Mark and assess student assignments, tutorials, tests, practicals & projects.",
                    "Invigilate tests & tutorials.",
                    "Provide consultation to students, addressing their academic queries and offering tailored guidance.",
                    "Assist with administrative tasks."
                  ],
                  logo: "/portfolioWebsite/Images/uwclogo.png"
                },
                {
                  title: "QuantifyYourFuture Virtual Internship",
                  company: "South African Graduate Employers Association (SAGEA)",
                  period: "Jan 2024 - Feb 2024",
                  location: "South Africa · Remote",
                  description: [
                    "Exposure to real-life work experience with FirstRand, Absa, and Nedbank.",
                    "Worked on data framing, exploration, interpretation, modelling, and visualization.",
                    "Developed core skills including critical thinking, creativity, collaboration & communication.",
                    "Participated in team-based projects facilitated by major financial institutions."
                  ],
                  logo: "/portfolioWebsite/Images/south_african_graduate_employers_association_logo.jpg"
                },
                {
                  title: "Computer Technician",
                  company: "NEWLOOK COSMETICS",
                  period: "Nov 2018 - Dec 2023",
                  location: "Worcester, Western Cape, South Africa · Hybrid",
                  description: [
                    "Provide technical support, addressing and resolving IT-related concerns promptly.",
                    "Install and configure software on desktop computers.",
                    "Conduct thorough system checks to ensure proper functionality of PCs.",
                    "Verify the functionality of monitors and connect them to the desktops.",
                    "Replace outdated hardware components.",
                    "Collaborate with team members to troubleshoot and resolve hardware and software issues."
                  ],
                  logo: "/portfolioWebsite/Images/NewLookLogo.jpg"
                }
              ].map((exp, index) => (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  className="bg-background rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-6">
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-16 h-16 object-contain rounded-lg"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mb-4">{exp.period} · {exp.location}</p>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {exp.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="section-padding">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  school: "University of the Western Cape",
                  degree: "Bachelor of Science Honours Computer Science",
                  period: "Feb 2025 - Nov 2025",
                  logo: "/portfolioWebsite/Images/uwclogo.png"
                },
                {
                  school: "University of the Western Cape",
                  degree: "Bachelor of Science, Computer Science and Information Systems",
                  period: "Feb 2022 - Nov 2024",
                  activities: "UWC IT Society Secretary, Computer Science Tutor, Muslim Student Association (MSA UWC), Golden Key International Honor Society (GKSA)",
                  skills: "Information Systems, Java, GitHub, Project Management, ARM Assembly, Business Analysis, HTML5, Python",
                  logo: "/portfolioWebsite/Images/uwclogo.png"
                },
                {
                  school: "The Oracle Academy High School",
                  degree: "National Senior Certificate",
                  period: "Jan 2017 - Dec 2021",
                  logo: "/portfolioWebsite/Images/oraclelogo.png"
                },
                {
                  school: "Madina Institute",
                  degree: "Part-time religious studies",
                  period: "Mar 2017 - June 2017",
                  logo: "/portfolioWebsite/Images/madinainstitute.png"
                },
                {
                  school: "Rylands Primary School",
                  period: "Jan 2010 - Dec 2016",
                  logo: "/portfolioWebsite/Images/rpsLogo.jpg"
                }
              ].map((edu, index) => (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  className="bg-muted rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-6">
                    <img
                      src={edu.logo}
                      alt={`${edu.school} logo`}
                      className="w-16 h-16 object-contain"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">{edu.school}</h3>
                      <p className="text-primary font-medium">{edu.degree}</p>
                      <p className="text-sm text-muted-foreground mb-2">{edu.period}</p>
                      {edu.activities && (
                        <p className="text-sm text-muted-foreground mb-2">
                          <strong>Activities:</strong> {edu.activities}
                        </p>
                      )}
                      {edu.skills && (
                        <p className="text-sm text-muted-foreground">
                          <strong>Skills:</strong> {edu.skills}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section-padding bg-muted">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Feedem Application",
                  description: "Feedem Now is a web-based food ordering platform designed specifically for students. The app helps students save time by allowing them to pre-order meals, avoiding long lines and unnecessary delays that could lead to missing classes.",
                  image: "/portfolioWebsite/Images/feedemnow-logo-2.png",
                  link: "https://github.com/mohamedasad10/FeedemNow/tree/main"
                },
                {
                  title: "Fintion Bank",
                  description: "BankingApp 💰 | A Java-based banking app showcasing OOP principles with secure transactions. Features: Account management, Deposits & withdrawals, Fund transfers, Transaction history. Tech Stack: Java, OOP, Collections",
                  image: "/portfolioWebsite/Images/FintionLogo.jpg",
                  link: "https://github.com/mohamedasad10/FeedemNow/tree/main"
                },
                {
                  title: "HealthcareAI Chatbot",
                  description: "This project is a healthcare chatbot designed to assist users with various healthcare-related inquiries. It includes features like appointment scheduling, emotional support, health updates, and a sickness predictor.",
                  image: "/portfolioWebsite/Images/healthcareChatbot.png",
                  link: "https://mohamedasad10.github.io/HealthCareChatBot/"
                },
                {
                  title: "Sunge Smokehouse",
                  description: "This project is a website for the food outlet SungeSmokehouse, built using HTML, CSS, and JavaScript. The website showcases the variety of delicious food offerings from SungeSMokehouse, providing users with an engaging and visually appealing browsing experience.",
                  image: "/portfolioWebsite/Images/SungeSmokehouseWebsite.png",
                  link: "https://mohamedasad10.github.io/SungeSmokehouse/"
                },
                {
                  title: "Family Tree",
                  description: " ",
                  image: "",
                  link: "https://github.com/mohamedasad10/familyTree"
                }
              ].map((project, index) => (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  className="bg-background rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="slide-button"
                    >
                      <span>View Project</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Volunteer Section */}
        <section id="volunteer" className="section-padding">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Volunteer Work</h2>
            <div className="space-y-8">
              {[
                {
                  title: "School Outreach Program",
                  organization: "WebMax Solution (Pty) Ltd",
                  period: "Sept 2024 - Present",
                  duties: [
                    "Organized and led workshops on digital literacy for underprivileged communities.",
                    "Assisted in fundraising events to support local education initiatives.",
                    "Mentored students in basic computer skills and coding fundamentals."
                  ],
                  logo: "/portfolioWebsite/Images/webmax.jpg"
                },
                {
                  title: "SAIS '24 Volunteer",
                  organization: "SA Innovation Summit",
                  period: "Aug 2024 - Sept 2024",
                  duties: [
                    "The SA Innovation Summit as an annual flagship event on the South African Innovation Calendar, is a platform for nurturing, developing and showcasing African innovation, as well as facilitating innovation thought-leadership."
                  ],
                  logo: "/portfolioWebsite/Images/sa_innovation_summitlogo.jpg"
                }
              ].map((vol, index) => (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  className="bg-muted rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-6">
                    <img
                      src={vol.logo}
                      alt={`${vol.organization} logo`}
                      className="w-16 h-16 object-contain rounded-lg"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">{vol.title}</h3>
                      <p className="text-primary font-medium">{vol.organization}</p>
                      <p className="text-sm text-muted-foreground mb-4">{vol.period}</p>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {vol.duties.map((duty, i) => (
                          <li key={i}>{duty}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-padding bg-muted">
          <div className="container max-w-2xl">
            <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
            <motion.form
              {...fadeInUp}
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                // Handle form submission
              }}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div className="flex flex-wrap gap-4 justify-center">
                <button
                  type="submit"
                  className="slide-button"
                >
                  <span>Send Message</span>
                </button>
                <a
                  href="mailto:mohamedasad11914@gmail.com"
                  className="slide-button"
                >
                  <span>
                    <Mail className="w-4 h-4 inline-block mr-2" />
                    Email Me
                  </span>
                </a>
              </div>
            </motion.form>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-muted-foreground">
          <div className="container">
            <p>&copy; 2024 Mohamed Asad Bandarkar. All Rights Reserved.</p>
            <div className="flex justify-center gap-4 mt-4">
              <a
                href="https://www.linkedin.com/in/mabandarkar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/mohamedasad10"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </footer>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <ChevronDown className="w-6 h-6 text-primary animate-bounce" />
        </motion.div>
      </main>
    </div>
  );
};

export default Index;