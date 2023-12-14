import type { NextPage } from "next";
import React from "react";
import { Main } from "@/components/utils/main";
import Carousal from "@/components/carousal";
import drj from "../assets/projects/drj.png";
import tayara from "../assets/projects/tayara.tn.webp";
import westwing from "../assets/projects/westwing.de.webp";
import slimmingworld from "../assets/projects/slimmingworld.co.uk.webp";
import mudah from "../assets/projects/mudah.my.webp";
import { Overview, Project } from "@/components/carousal/carousal.styled";
import Link from "next/link";

const data = [
  {
    link: "https://mudah.my",
    path: mudah,
  },
  {
    link: "https://tayara.tn",
    path: tayara,
  },
  {
    link: "https://distributedremotejobs.com",
    path: drj,
  },
  {
    link: "https://slimmingworld.co.uk",
    path: slimmingworld,
  },
  {
    link: "https://westwing.de",
    path: westwing,
  },
]

const Home: NextPage = () => {
  return (
    <Main>
      <Carousal slidesNumber={data.length + 1} direction="vertical">
        <Carousal.CarousalBody>
          <Carousal.Panel navbuttons={true}>
            <Carousal.Slide>
              <Overview className="overview">
                <h1>Zafar Saleem</h1>
                <h2>Portfolio</h2>
                <p>Zafar is a software engineer with over 10 years of experience in designing and developing web applications using various technologies and frameworks. He is currently working at Distributed Remote Jobs, a platform that connects remote workers and employers.</p>
                <p>He is the core architect, designer, developer and maintainer of the platform, using Nextjs, TypeScript, and other tools. He is also a technical author who writes articles and blog posts on topics such as JavaScript, React, Nodejs, Blockchain, DevOps, and more. He is passionate about learning new technologies and sharing his knowledge with others. He holds a CIW JavaScript Specialist certification and a Cisco Certified Network Associate certification alongside Bachelor Degree in Computer Science.</p>
              </Overview>
            </Carousal.Slide>
            {
              data?.map((item, index) => (
                <Carousal.Slide key={index}>
                  <Link href={item.link}>
                    {/* @ts-ignore */}
                    <Project path={item.path} />
                  </Link>
                </Carousal.Slide>
              ))
            }
          </Carousal.Panel>
        </Carousal.CarousalBody>
      </Carousal>
    </Main>
  );
};

export default Home;
