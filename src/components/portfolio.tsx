import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Github, Linkedin, Mail, Notebook } from "lucide-react";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground lowercase font-extralight">
      <div className="container mx-auto p-6 space-y-6">
        <header>
          <h1 className="text-3xl font-bold mb-2">Mohammad Farseen</h1>
          <p className="text-lg mb-4">Full Stack Developer</p>
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
              I&apos;m a full-stack developer with extensive experience in
              building efficient, scalable web applications. I specialize in
              creating dynamic user interfaces and robust backend systems using
              modern technologies like React, Next.js, Node.js, and Express.
              From concept to deployment, I ensure high-quality solutions that
              enhance user engagement and streamline business operations.
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
                JavaScript (ES6+), Redux, Context API, Tailwind CSS, Material-UI
              </li>
              <li>
                <strong>Backend:</strong> Node.js, Express.js, WebSockets
                (Socket.io), RESTful APIs, Web3.js, Langchain (AI Integration)
              </li>
              <li>
                <strong>Databases:</strong> MongoDB, PostgreSQL, MySQL, Firebase
              </li>
              <li>
                <strong>Deployment:</strong> AWS, Vercel, Netlify, Heroku
              </li>
              <li>
                <strong>Version Control:</strong> Git, GitHub, GitLab
              </li>
              <li>
                <strong>Collaborative Tools:</strong> Jira, Trello, Slack
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
              <h3 className="font-semibold">Full Stack Developer</h3>
              <p className="text-sm text-muted-foreground">
                Sept 2023 - Sept 2024 | MetaStart SVY LLP, Remote
              </p>
              <ul className="list-disc list-inside mt-2">
                <li>
                  Built a survey monetization platform and a gaming platform
                </li>
                <li>
                  Created an e-commerce platform with live streaming
                  capabilities
                </li>
                <li>
                  Developed an AI-powered chatbot using OpenAI and LangChain
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Software Development Intern</h3>
              <p className="text-sm text-muted-foreground">
                Feb 2023 | Pacewisdom Solutions, Mangalore, IN
              </p>
              <ul className="list-disc list-inside mt-2">
                <li>
                  Worked on Flutter-based applications and collaborated on
                  projects using React.js, Node.js, and MongoDB
                </li>
                <li>
                  Integrated MySQL into web applications for better data
                  management
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Projects</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold">Twitter Clone</h3>
              <p className="text-sm text-muted-foreground">
                React, Redux-Toolkit, Express.js, MongoDB |
                <Link
                  href="https://twitter-clone-9gvb.onrender.com/"
                  target="_blank"
                  className="underline ml-1 text-primary"
                >
                  Demo
                </Link>{" "}
                |
                <Link
                  href="https://github.com/farseenmanekhan1232/twitter-clone-react"
                  target="_blank"
                  className="underline ml-1 text-primary"
                >
                  Code
                </Link>
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Ecommerce App</h3>
              <p className="text-sm text-muted-foreground">
                Flutter, Providers, Firebase |
                <Link
                  href="https://github.com/farseenmanekhan1232/flutter_projects/tree/master/appazon"
                  target="_blank"
                  className="underline ml-1 text-primary"
                >
                  Code
                </Link>
              </p>
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
