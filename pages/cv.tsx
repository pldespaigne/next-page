
import React from 'react';
import Image from 'next/image';
import { NextPage } from 'next';
import { Inter } from 'next/font/google';
import { BlocksIcon, BriefcaseIcon, CircleUserIcon, ClockIcon, GithubIcon, GlobeIcon, GraduationCapIcon, HandshakeIcon, MailsIcon, MapPinIcon, TerminalSquareIcon, TwitterIcon } from 'lucide-react';


const inter = Inter({ subsets: ['latin'] });


const CV: NextPage = () => {

  return(
    <main className={'flex bg-slate-900 justify-center ' + inter.className}>
      <section className="relative flex flex-col bg-slate-700 px-10 py-12" style={{ width: 310, maxWidth: 310 }}>
        <Image className="rounded-full" src="/images/profile-pic_3.jpg" alt="a picture of me" width={230} height={230} />
        <div className="mt-6">
          <h2 className="font-mono italic text-2xl text-slate-50 text-center flex justify-center items-center gap-2 mb-3"><CircleUserIcon/><span>Info</span></h2>
          <div className="flex items-center gap-3 text-slate-300">
            <MapPinIcon className="h-4 w-4 text-slate-50" />
            <p>France</p>
          </div>
          <div className="flex items-center gap-3 text-slate-300">
            <ClockIcon className="h-4 w-4 text-slate-50" />
            <p>CEST (UTC+2)</p>
          </div>
          <div className="flex items-center gap-3 text-slate-300">
            <MailsIcon className="h-4 w-4 text-slate-50" />
            <a href="mailto:pl.despaigne@gmail.com">pl.despaigne@gmail.com</a>
          </div>
          <div className="flex items-center gap-3 text-slate-300">
            <GithubIcon className="h-4 w-4 text-slate-50" />
            <a href="https://github.com/pldespaigne">/pldespaigne</a>
          </div>
          <div className="flex items-center gap-3 text-slate-300">
            <TwitterIcon className="h-4 w-4 text-slate-50" />
            <a href="https://twitter.com/pldespaigne">@pldespaigne</a>
          </div>
          <div className="flex items-center gap-3 text-slate-300">
            <GlobeIcon className="h-4 w-4 text-slate-50" />
            <a href="https://pl.despaigne.fr">Website</a>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="font-mono italic text-2xl text-slate-50 text-center flex justify-center items-center gap-2"><BlocksIcon/><span>Tech Stack</span></h2>
          <div className="mt-3 flex flex-wrap gap-2">
            <p className="text-slate-300 border border-slate-400 px-2.5 py-1 rounded-full">Wagmi</p>
            <p className="text-slate-300 border border-slate-400 px-2.5 py-1 rounded-full">Viem</p>
            <p className="text-slate-300 border border-slate-400 px-2.5 py-1 rounded-full">React</p>
            <p className="text-slate-300 border border-slate-400 px-2.5 py-1 rounded-full">Solidity</p>
            <p className="text-slate-300 border border-slate-400 px-2.5 py-1 rounded-full">GCP / AWS</p>
            <p className="text-slate-300 border border-slate-400 px-2.5 py-1 rounded-full">Hardhat</p>
            <p className="text-slate-300 border border-slate-400 px-2.5 py-1 rounded-full">NextJS</p>
            <p className="text-slate-300 border border-slate-400 px-2.5 py-1 rounded-full">NodeJS</p>
            <p className="text-slate-300 border border-slate-400 px-2.5 py-1 rounded-full">TailwindCSS</p>
          </div>
          <p className="mt-1.5 text-slate-300 text-sm text-justify">...and a lot more! I&apos;am also able to quickly learn new things.</p>
        </div>
        <Image src="/images/moon_2.svg" alt="to the moon" width={200} height={200} className="absolute left-1/2 -translate-x-1/2 bottom-10 opacity-40" />
      </section>

      <section className="flex flex-col bg-slate-50 min-h-screen max-w-lg px-8 py-16 text-slate-900">
        <div>
          <h1 className="text-5xl font-bold font-mono underline underline-offset-3 decoration-4 decoration-amber-400">Pierre Despaigne</h1>
          <h2 className="text-2xl font-semibold mt-4 font-mono italic flex items-center gap-4"><TerminalSquareIcon/><span>Full-stack Web3 developer</span></h2>
          <p className="text-justify text-sm">
            I&apos;m a <span className="font-semibold text-slate-600">full-stack</span> web3 developer.
            I started to look into Ethereum in <span className="font-semibold text-slate-600">2017</span>.
            I have since contributed to well known projects like&nbsp;
            <span className="font-semibold text-slate-600">MetaMask</span>,&nbsp;
            <span className="font-semibold text-slate-600">ENS</span>,&nbsp;
            <span className="font-semibold text-slate-600">Kwenta (SNX)</span>,&nbsp;
            <span className="font-semibold text-slate-600">Ethers.js</span>,&nbsp;
            <span className="font-semibold text-slate-600">Remix</span>,&nbsp;
            <span className="font-semibold text-slate-600">Ample</span> or&nbsp;
            <span className="font-semibold text-slate-600">Autonomy</span>.&nbsp;
            I&apos;m also building a smart-contract analysis app called <span className="font-semibold text-slate-600">Bytegraph</span>.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold font-mono italic flex items-center gap-4"><BriefcaseIcon/><span>Work Experience</span></h2>

          <div>
            <p className="">
              <span className="font-mono font-semibold underline underline-offset-3 decoration-2 decoration-amber-400">Cascade8</span> - <span className="">Senior Full-Stack developer</span>
            </p>
            <p className="italic text-sm text-slate-600">mid 2019 - Jan 2022 (2,5 years) & Feb 2023 - March 2024 (13 months)</p>
            <ul className="text-sm list-disc list-inside">
              <li>Worked on regular Web2 apps, doing front, back, ops, writing specs and doing architecture design.</li>
              <li>Managed 1-2 junior dev as the team start growing, including planing and assigning issues and reviewing PRs.</li>
              <li>Built a gas-less smart-wallet re-deployable contract & UI to onboard non-tech users. (account abstraction before it was cool)</li>
            </ul>
            {/* <p className="text-sm text-justify">
              I joined this remote team at creation, we built regular web2 apps. I worked on front, back, ops, features and architecture design.
              With the team growing I also started to manage some of the new developers.
              We also created a re-deployable gas-less smart-wallet to onboard non-tech user,
              and a &quot;Netflix NFT&quot; app where you can buy a movie&apos;s token to watch it,
              as long as you hold the token, like a web3 DVD.
              Unfortunately non of the web3 product made it into production as the company pivoted away from web3.
            </p> */}
          </div>

          <div className="mt-4">
            <p className="">
              <span className="font-mono font-semibold underline underline-offset-3 decoration-2 decoration-amber-400">Autonomy Network</span> - <span className="">Senior Full-Stack developer</span>
            </p>
            <p className="italic text-sm text-slate-600">Feb 2022 - Jan 2023 (11 months)</p>
            <ul className="text-sm list-disc list-inside">
              <li>In charge of buildings apps (front & back) to demonstrate Autonomy&apos;s protocol</li>
              <li>Managed 1-2 junior dev, including planing and assigning issues and reviewing PRs.</li>
              <li>Built an NFT game, a DeFi app and an automation dashboard.</li>
            </ul>
            {/* <p className="text-sm text-justify">
              Autonomy is a blockchain automation protocol.
              I joined this fully remote and distributed team to build new apps in order to demonstrate use-cases for the protocol.
              I was in charge of creating the front-end and backend of the apps along with two other more junior devs.
              This included planning the development and assigning tasks to my team (3 people including me), making code review, and coding.
              On the technical side I worked on front-end ui, redux store, data fetching (api, the graph, smart-contract). I also did some backend: creating a subgraph (the graph) and creating an api to link Twitter accounts to eth addresses.
              Finally I wrote some smart-contracts deploy scripts and tests using Hardhat (I did not wrote the smart-contracts though).
            </p> */}
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold font-mono italic flex items-center gap-4"><HandshakeIcon/><span>Contractor Experience</span></h2>
          <ul className="list-disc list-inside">
            <li className="">
              <span className="font-mono font-semibold underline underline-offset-3 decoration-2 decoration-amber-400 inline-block w-20">Kwenta</span> <span className="text-slate-300">|</span> <span className="font-mono">2023</span> <span className="mr-1 text-slate-300">|</span> Implementing front-end features
            </li>
            <li className="">
              <span className="font-mono font-semibold underline underline-offset-3 decoration-2 decoration-amber-400 inline-block w-20">Ample</span> <span className="text-slate-300">|</span> <span className="font-mono">2021</span> <span className="mr-1 text-slate-300">|</span> Smart-contract unit testing
            </li>
            <li className="">
              <span className="font-mono font-semibold underline underline-offset-3 decoration-2 decoration-amber-400 inline-block w-20">MetaMask</span> <span className="text-slate-300">|</span> <span className="font-mono">2020</span> <span className="mr-1 text-slate-300">|</span> Integrating ENS resolving
            </li>
            <li className="">
              <span className="font-mono font-semibold underline underline-offset-3 decoration-2 decoration-amber-400 inline-block w-20">Remix</span> <span className="text-slate-300">|</span> <span className="font-mono">2019</span> <span className="mr-1 text-slate-300">|</span> Plugin development
            </li>
          </ul>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold font-mono italic flex items-center gap-4"><GraduationCapIcon/><span>Education</span></h2>
          <p className="">
            <span className="font-mono font-semibold underline underline-offset-3 decoration-2 decoration-amber-400">Master Degree</span> <span className="text-slate-400">|</span> <span className="font-mono">2019</span> <span className="text-slate-400">|</span> <span className="text-slate-800">Computer Science & Web Technologies</span>
          </p>
          <p className="italic text-sm">University of Lyon 1</p>
        </div>
      </section>
    </main>
  );
};

export default CV;
