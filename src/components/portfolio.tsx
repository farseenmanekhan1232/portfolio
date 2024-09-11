import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Notebook } from "lucide-react";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground lowercase font-extralight">
      <div className="container mx-auto p-6 space-y-6">
        <header>
          <h1 className="text-3xl font-bold mb-2">mohammad farseen</h1>
          <p className="text-lg mb-4">full stack developer</p>
          <div className="flex gap-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="mailto:farseenmanekhan1232@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                <span>Email</span>
              </Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link
                href="https://linkedin.com/in/mohammad-farseen-manekhan-2419531a7"
                target="_blank"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                <span>LinkedIn</span>
              </Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link
                href="https://github.com/farseenmanekhan1232"
                target="_blank"
              >
                <Github className="mr-2 h-4 w-4" />
                <span>GitHub</span>
              </Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href="https://blog.farseen.tech" target="_blank">
                <Notebook className="mr-2 h-4 w-4" />
                <span>blog</span>
              </Link>
            </Button>
          </div>
        </header>

        <Card>
          <CardHeader>
            <CardTitle>Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Full stack developer specializing in web applications and
              services. Proficient in JavaScript, React, Node.js, and various
              other technologies.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Technical Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              <li>Languages: JavaScript, TypeScript, Python, Dart</li>
              <li>Web: React, Redux, Next.js, Express.js, Node.js</li>
              <li>Databases: MongoDB, Firebase, SQL</li>
              <li>Tools: Git, AWS</li>
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
                Oct 2023 - Present | MetaStart SVY LLP, Remote
              </p>
              <ul className="list-disc list-inside mt-2">
                <li>
                  Developed survey monetization platform and gaming platform
                </li>
                <li>
                  Created ecommerce platform with live streaming capabilities
                </li>
                <li>Developed chatbot using OpenAI and LangChain</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Software Development Intern</h3>
              <p className="text-sm text-muted-foreground">
                Feb 2023 | Pacewisdom Solutions, Mangalore, IN
              </p>
              <ul className="list-disc list-inside mt-2">
                <li>Developed Flutter-based applications</li>
                <li>
                  Collaborated on projects using React.js, Node.js, MongoDB, and
                  MySQL
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
