import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Github, Linkedin, Mail, Notebook } from "lucide-react";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div className="min-h-screen lowercase font-extralight">
      <div className="container mx-auto p-6 space-y-6">
        <header>
          <h1 className="text-3xl font-bold mb-2">Mohammad Farseen</h1>
          <p className="text-lg mb-4">Solopreneur & Full Stack Developer</p>
          <div className="flex flex-wrap gap-4 w-full">
            <div className="grid grid-cols-4 lg:flex gap-4 w-full">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="max-lg:w-full"
              >
                <Link href="mailto:farseenmanekhan1232@gmail.com">
                  <Mail className="lg:mr-2 h-4 w-4" />
                  <span className="max-lg:hidden flex">Email</span>
                </Link>
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="max-lg:w-full"
              >
                <Link
                  href="https://linkedin.com/in/mohammad-farseen-manekhan-2419531a7"
                  target="_blank"
                >
                  <Linkedin className="lg:mr-2 h-4 w-4" />
                  <span className="max-lg:hidden flex">LinkedIn</span>
                </Link>
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="max-lg:w-full"
              >
                <Link
                  href="https://github.com/farseenmanekhan1232"
                  target="_blank"
                >
                  <Github className="lg:mr-2 h-4 w-4" />
                  <span className="max-lg:hidden flex">GitHub</span>
                </Link>
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="max-lg:w-full"
              >
                <Link href="https://blog.farseen.tech" target="_blank">
                  <Notebook className="lg:mr-2 h-4 w-4" />
                  <span className="max-lg:hidden flex">Blog</span>
                </Link>
              </Button>
            </div>
            <Button
              asChild
              variant={"outline"}
              size="lg"
              className="max-lg:w-full text-black bg-white hover:bg-white/80 hover:text-black"
            >
              <Link
                href="https://calendar.app.google/hfhtrX2W6oZoApDj7"
                target="_blank"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Schedule a Free Consultation
              </Link>
            </Button>
          </div>
        </header>

        <Card>
          <CardHeader>
            <CardTitle>About Me</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              I’m Mohammad Farseen, a solopreneur and seasoned Full Stack
              Developer. I specialize in building intelligent digital solutions
              using AI, Web3, and mobile technologies, helping businesses
              optimize their operations and scale effectively. With experience
              in custom tool development and software engineering across
              multiple industries, I bring a strong problem-solving mindset to
              every project. Let’s bring your vision to life with innovative,
              tailored solutions.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Technical Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              <li>
                <strong>Frontend:</strong> React.js, Next.js, TypeScript,
                JavaScript (ES6+), Tailwind CSS, Material-UI
              </li>
              <li>
                <strong>Backend:</strong> Node.js, Express.js, GraphQL (Apollo),
                WebSockets, REST APIs, Web3.js, Langchain (AI Integration)
              </li>
              <li>
                <strong>Blockchain:</strong> Solidity, Smart Contracts,
                Ethereum, NestJS
              </li>
              <li>
                <strong>Databases:</strong> MongoDB, PostgreSQL, MySQL, Redis,
                Firebase
              </li>
              <li>
                <strong>Deployment & Cloud:</strong> AWS, Vercel, Netlify,
                Heroku
              </li>
              <li>
                <strong>Tools & Version Control:</strong> Git, GitHub, GitLab,
                Jira, Trello, Slack
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Experience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold">Founding Member</h3>
              <p className="text-sm text-muted-foreground">
                Aug 2023 - Present | Techmorph, India
              </p>
              <ul className="list-disc list-inside mt-2">
                <li>
                  Helped establish Techmorph, focusing on scalable Web3 and AI
                  solutions
                </li>
                <li>
                  Led the development of tools to automate business processes
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Contract Software Engineer</h3>
              <p className="text-sm text-muted-foreground">
                March 2024 - Present | Breaking The Lines, United Kingdom
              </p>
              <ul className="list-disc list-inside mt-2">
                <li>
                  Developed custom tools for optimizing backend processes and
                  data workflows
                </li>
                <li>
                  Worked on scaling applications to improve performance and user
                  experience
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Contract Developer</h3>
              <p className="text-sm text-muted-foreground">
                Oct 2024 - Present | BIKEFIXUP, India
              </p>
              <ul className="list-disc list-inside mt-2">
                <li>
                  Engineered backend solutions to support logistics processes
                </li>
                <li>
                  Integrated custom APIs to enhance operational efficiency
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Contract Developer</h3>
              <p className="text-sm text-muted-foreground">
                Oct 2024 - Present | VIRALWAVE, Morocco
              </p>
              <ul className="list-disc list-inside mt-2">
                <li>
                  Built tailored backend tools for optimizing content workflows
                </li>
                <li>
                  Enhanced app scalability to support dynamic content demands
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Contract Developer</h3>
              <p className="text-sm text-muted-foreground">
                Nov 2024 - Present | ThemeNcode LLC, Pakistan
              </p>
              <ul className="list-disc list-inside mt-2">
                <li>
                  Developed custom WordPress plugins for optimized performance
                </li>
                <li>
                  Enhanced client website functionality through tailored
                  solutions
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">SDE 1</h3>
              <p className="text-sm text-muted-foreground">
                Sept 2023 - Sept 2024 | MetaStart, India
              </p>
              <ul className="list-disc list-inside mt-2">
                <li>Developed a survey monetization and gaming platform</li>
                <li>Built an AI-powered chatbot using OpenAI and LangChain</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Full Stack Engineer</h3>
              <p className="text-sm text-muted-foreground">
                Feb 2024 - June 2024 | Metridash, India
              </p>
              <ul className="list-disc list-inside mt-2">
                <li>
                  Built scalable web applications for data-driven insights
                </li>
                <li>Collaborated on front-end optimization for enhanced UX</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Education</CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="font-semibold">
              Bachelor of Engineering in Electronics and Communication
              Engineering
            </h3>
            <p className="text-sm text-muted-foreground">
              May 2023 | Mangalore Institute of Technology and Engineering,
              Mangalore, IN
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
