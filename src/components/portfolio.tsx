import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Github, Linkedin, Mail, Notebook } from "lucide-react";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div className="min-h-screen lowercase font-extralight">
      <div className="container mx-auto p-6 space-y-6">
        {/* Header Section */}
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

        {/* About Me Section */}
        <Card>
          <CardHeader>
            <CardTitle>About Me</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              I&apos;m Mohammad Farseen, a seasoned Full Stack Developer and
              Solopreneur specializing in crafting scalable, intelligent digital
              solutions using AI, Web3, and mobile technologies. My expertise
              lies in enhancing business operations and user engagement through
              innovative software systems. With experience spanning industries
              and clients worldwide, I bring a strong problem-solving mindset
              and a results-driven approach to every project.
            </p>
          </CardContent>
        </Card>

        {/* Skills Section */}
        <Card>
          <CardHeader>
            <CardTitle>Technical Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              <li>
                <strong>AI/ML & Blockchain:</strong> Langchain, OpenAI,
                Generative AI, Solidity, Smart Contracts, Ethereum, Web3.js
              </li>
              <li>
                <strong>Frontend:</strong> React.js, Next.js, Astro, TypeScript,
                JavaScript (ES6+), Tailwind CSS, Material-UI, WebRTC, Three.js
              </li>
              <li>
                <strong>Backend:</strong> Node.js, Express.js, NestJS, REST
                APIs, WebSockets, GraphQL (Apollo)
              </li>
              <li>
                <strong>Databases:</strong> MongoDB, PostgreSQL, MySQL,
                Firebase, Redis
              </li>
              <li>
                <strong>Mobile Development:</strong> Flutter (Cross-Platform
                Development)
              </li>
              <li>
                <strong>Deployment & Cloud:</strong> AWS, Docker, Vercel,
                Netlify, Heroku, CI/CD Pipelines
              </li>
              <li>
                <strong>No-Code Tools:</strong> Webflow, Airtable, Zapier
              </li>
              <li>
                <strong>Tools & Version Control:</strong> Git, GitHub, GitLab,
                Jira, Trello, Slack
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Experience Section */}
        <Card>
          <CardHeader>
            <CardTitle>Experience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold">Founding Member</h3>
              <p className="text-sm text-muted-foreground">
                Aug 2023 - Present | Techmorph
              </p>
              <ul className="list-disc list-inside mt-2">
                <li>
                  Built AI/ML tools, blockchain platforms, and scalable software
                  systems for diverse industries.
                </li>
                <li>
                  Developed solutions to automate workflows and optimize client
                  operations.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Software Development Engineer 1</h3>
              <p className="text-sm text-muted-foreground">
                Sept 2023 - Sept 2024 | MetaStart
              </p>
              <ul className="list-disc list-inside mt-2">
                <li>
                  Created a blockchain-based gaming platform with token
                  economies, increasing transaction efficiency by 30%.
                </li>
                <li>
                  Developed AI-powered chatbots using OpenAI, reducing customer
                  service response time by 50%.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Contract Developer</h3>
              <p className="text-sm text-muted-foreground">
                2024 - Present | Multiple Clients
              </p>
              <ul className="list-disc list-inside mt-2">
                <li>
                  Built a Telegram Bot using Python for automated workflows.
                </li>
                <li>
                  Developed a Solana token volume bot, improving transaction
                  bundling efficiency by 40%.
                </li>
                <li>
                  Enhanced backend systems for logistics and dynamic content
                  platforms.
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Portfolio Highlights */}
        <Card>
          <CardHeader>
            <CardTitle>Portfolio Highlights</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              <li>
                <strong>AI Playground:</strong> Compared multiple AI models
                (ChatGPT, Claude, Gemini, etc.) simultaneously for real-time
                insights.
              </li>
              <li>
                <strong>E-commerce App:</strong> Developed a Flutter-based app
                with real-time updates, secure authentication, and seamless
                performance.
              </li>
              <li>
                <strong>Bike Spares Marketplace:</strong> Built Xtraspare,
                featuring 10,000+ products, global logistics integration, and
                mobile app support.
              </li>
              <li>
                <strong>Traffic Cloaking Platform:</strong> Designed WeCloakit
                to protect campaigns from malicious traffic.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Testimonials Section */}
        <Card>
          <CardHeader>
            <CardTitle>Testimonials</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              <strong>Hassan Ahouiek:</strong> "Mohammed has proven to be easy
              to work with, attentive, and responsive. Highly recommended."
            </p>
            <p>
              <strong>Maclean M.:</strong> "The e-commerce app exceeded our
              expectations in both design and functionality. Fantastic
              experience!"
            </p>
          </CardContent>
        </Card>

        {/* Education Section */}
        <Card>
          <CardHeader>
            <CardTitle>Education</CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="font-semibold">
              Bachelor of Engineering, Electronics and Communication
            </h3>
            <p className="text-sm text-muted-foreground">
              May 2023 | Mangalore Institute of Technology and Engineering
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
