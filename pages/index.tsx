
import { faGithub, faGoogleDrive, faLinkedin, faNpm, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import type { NextPage } from 'next';

import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

import Card from './components/Card';
import Chips from './components/Chips';
import LinkCard from './components/LinkCard';
import SmallCard from './components/SmallCard';

const Home: NextPage = () => {

  const container = useRef<HTMLElement>(null);
  const endText = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    let listener = () => {};

    const init = async () => {
      const party = await import('party-js');

      listener = () => {
        const delta = Math.round((container.current?.clientHeight ?? 0) - window.innerHeight - window.scrollY);
        if (delta === 0) {
          party.confetti(endText.current!, {
            count: party.variation.range(60, 100),
            spread: 50,
            speed: party.variation.range(400, 800),
          });
        }
      };

      window.addEventListener('scroll', listener);
    };
    init();

    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Resume - Pierre-Louis Despaigne</title>
        <link rel="icon" href="favicon.ico" />
        <meta name="description" content="I'm a freelance web(3)-developer. I started to look into Ethereum in 2017. I have since contributed to well known projects like MetaMask, ENS, Ethers.js, Remix or Ample." />
        <meta property="og:title" content="Resume - Pierre-Louis" />
        <meta property="og:description" content="I'm a freelance web(3)-developer. I started to look into Ethereum in 2017. I have since contributed to well known projects like MetaMask, ENS, Ethers.js, Remix or Ample." />
        <meta property="og:image" content="https://pl.despaigne.fr/images/profile-pic.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pl.despaigne.fr" />

        
        {/* <!-- EZditor Script --> */}
        <script id="ezditor-script" data-site-id="0gccPcD48dNnOzYmZbMd" src="https://script-ezditor.firebaseapp.com/main.js" defer></script>

      </Head>

      <main ref={container} className="min-h-full min-w-full bg-gradient-to-br from-gray-700 via-gray-700 to-gray-800 py-32 md:py-16 px-8 md:px-32">

        <section className="flex flex-col items-center gap-6">
          <div className="relative">
            <Image className="rounded-full" src="/images/profile-pic.jpg" alt="a picture of me" width={300} height={300} />
            <div className="absolute bottom-0 right-0 text-center text-gray-400">
              <FontAwesomeIcon className="text-xl inline w-4" icon={faMapMarkerAlt} />
              <p className="">France</p>
            </div>
          </div>
          <h1 className="relative text-3xl md:text-5xl font-bold text-yellow-300 pl-4">
            Hi, I&apos;m Pierre-Louis 👋
          </h1>
          <p className="text-center text-gray-300 text-lg">
            I&apos;m a freelance web(3)-developer.<br/>
            I started to look into Ethereum in 2017.<br/>
            I have since contributed to well known projects like<br/>
            MetaMask, ENS, Ethers.js, Remix or Ample.
          </p>
        </section>

        <section className="mt-16 flex flex-row justify-around text-gray-800">
          <motion.a
            href="https://github.com/pldespaigne"
            target="_blank"
            rel="noreferrer"
            className="border border-gray-800 px-2 py-1 rounded-md"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
          >
            <FontAwesomeIcon className="text-4xl inline w-10 pt-0.5" icon={faGithub} />
          </motion.a>
          <motion.a
            href="https://twitter.com/pldespaigne"
            target="_blank"
            rel="noreferrer"
            className="border border-gray-800 px-2 py-1 rounded-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FontAwesomeIcon className="text-4xl inline w-10 pt-1" icon={faTwitter} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/pldespaigne"
            target="_blank"
            rel="noreferrer"
            className="border border-gray-800 px-2 py-1 rounded-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FontAwesomeIcon className="text-4xl inline w-10" icon={faLinkedin} />
          </motion.a>
        </section>

        <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <h2 className="font-bold text-4xl text-gray-800 md:col-span-2">Experiences</h2>

          <Card
            company="Cascade8"
            role="Senior Full-Stack Developer"
            duration="2019 - Now (2,5 years)"
            body={
              <p>
                I joined this remote team at creation, we build regular web-apps. I worked on front, back, ops, features and architecture design.
                With the team growing I also started to manage some of the new developers.<br/>
                We also created a re-deployable gas-less smart-wallet to onboard non-tech user,
                and a &quot;Netflix NFT&quot; where you can buy a movie&apos;s token to watch it,
                as long as you hold the token, like a web3 DVD. Unfortunately non of that made it to mainnet.
              </p>
            }
            links={[
              <LinkCard key={0} href="https://github.com/blockframes/blockframes/tree/5c739627b5358cfc108e9149ade6548a7d92e433/libs/ethers/src/lib">
                <FontAwesomeIcon className="mr-2 inline w-4 mb-1" icon={faGithub} />
                dApp Front-end
              </LinkCard>,
              <LinkCard key={1} href="https://github.com/blockframes/blockframes/tree/5c739627b5358cfc108e9149ade6548a7d92e433/smart-contracts/sol">
                <FontAwesomeIcon className="mr-2 inline w-4 mb-1" icon={faGithub} />
                Smart-Contracts
              </LinkCard>,
              <LinkCard key={2} href="https://www.filmseriesnft.com/">
                <FontAwesomeIcon className="mr-2 inline w-4 mb-1" icon={faGlobe} />
                NFT VOD
              </LinkCard>,
            ]}
            chips={[
              <Chips key={0}>Angular</Chips>,
              <Chips key={1}>Firebase</Chips>,
              <Chips key={2}>TypeScript</Chips>,
              <Chips key={3}>Ethers.js</Chips>,
              <Chips key={4}>Solidity</Chips>,
            ]}
          />

          <Card
            company="AmpleSense Foundation"
            role="DeFi Contracts unit testing (Contractor)"
            duration="2021 (3 weeks)"
            body={
              <p>
                Unit-testing of the whole EEFI protocol, which is an algorithmic &quot;elastic&quot; coin from the AmpleSense Foundation.
              </p>
            }
            links={[
              <p key={0} className="text-center text-yellow-500 mx-4 md:mx-16">
                Unfortunately the repo is private,<br/>
                <span className="text-gray-400">but I can still show my local copy during a call for example.</span>
              </p>
            ]}
            chips={[
              <Chips key={0}>TypeScript</Chips>,
              <Chips key={1}>Solidity</Chips>,
              <Chips key={2}>HardHat</Chips>,
              <Chips key={3}>Waffle</Chips>,
            ]}
          />

          <Card
            company="MetaMask"
            role="Integrating ENS resolving (Contractor)"
            duration="2020 (1 weeks)"
            body={
              <p>
                Implementation of ENS address resolving through MetaMask.<br/>
                In fact if you have MetaMask installed you can just type an <code>.eth</code> address in your browser to see my code at work.<br/>
                Try it with <a href="https://matoken.eth" target="_blank" rel="noreferrer" className="underline">https://matoken.eth</a> (no need to unlock MetaMask, but mainnet should be selected).
              </p>
            }
            links={[
              <LinkCard key={0} href="https://github.com/MetaMask/metamask-extension/pulls?q=is%3Apr+author%3Apldespaigne+is%3Aclosed">
                <FontAwesomeIcon className="mr-2 inline w-4 mb-1" icon={faGithub} />
                Pull Requests
              </LinkCard>,
            ]}
            chips={[
              <Chips key={0}>JavaScript</Chips>,
            ]}
          />

          <Card
            company="Remix"
            role="Plugin development (Contractor)"
            duration="2019 (2 weeks)"
            body={
              <p>
                I created 2 plugins for the smart-contract IDE Remix.<br/>
                The first one, is a debug plugin made to help debugging other plugins.<br/>
                The other one is for saving Solidity files in 3Box, a decentralized file storage solution.
              </p>
            }
            links={[
              <LinkCard key={0} href="https://github.com/ethereum/remix-ide/pulls?q=is%3Apr+author%3Apldespaigne+is%3Aclosed">
                <FontAwesomeIcon className="mr-2 inline w-4 mb-1" icon={faGithub} />
                Integration
              </LinkCard>,
              <LinkCard key={1} href="https://github.com/pldespaigne/remix-debug-plugin">
                <FontAwesomeIcon className="mr-2 inline w-4 mb-1" icon={faGithub} />
                Debug Plugin
              </LinkCard>,
              <LinkCard key={2} href="https://github.com/pldespaigne/remix-3box-plugin">
                <FontAwesomeIcon className="mr-2 inline w-4 mb-1" icon={faGithub} />
                3Box Plugin
              </LinkCard>,
              <LinkCard key={3} href="https://remix.ethereum.org">
                <FontAwesomeIcon className="mr-2 inline w-4 mb-1" icon={faGlobe} />
                Remix
              </LinkCard>,
            ]}
            chips={[
              <Chips key={0}>TypeScript</Chips>,
              <Chips key={1}>Ethers.js</Chips>,
              <Chips key={2}>3Box.js</Chips>,
            ]}
          />

        </section>

        <section className="mt-32 grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4">
          <h2 className="font-bold text-4xl text-gray-800 md:col-span-4">Side Projects</h2>

          <SmallCard title="Content-Hash">
            <p>
              JS implementation of the EIP-1577.<br/>
              The npm package has 200,000 weekly downloads.<br/>
              It is used to encode ipfs hash into a format that can be stored by ENS resolvers.
            </p>
            <LinkCard href="https://www.npmjs.com/package/content-hash">
              <FontAwesomeIcon className="mr-2 inline w-4 mb-1" icon={faNpm} />
              npm
            </LinkCard>
          </SmallCard>

          <SmallCard title="Blk Parser">
            <p>
              Python tool to parse the raw <code>.blk</code> files containing the data of the Bitcoin blockchain.<br/>
              This can be useful to analyse the blockchain by yourself and offline.<br/>
              The script is also able to find back transactions sender addresses.
            </p>
            <LinkCard href="https://github.com/pldespaigne/blk_parser">
              <FontAwesomeIcon className="mr-2 inline w-4 mb-1" icon={faGithub} />
              Github
            </LinkCard>
          </SmallCard>

          <SmallCard title="React Graphs">
            <p>
              Experimenting creation of graph-based programming tool in react.
            </p>
            <div className="flex flex-col gap-2">
              <LinkCard href="https://angry-banach-72cea3.netlify.app/">
                <FontAwesomeIcon className="mr-2 inline w-4 mb-1" icon={faGlobe} />
                Demo 1
              </LinkCard>
              <LinkCard href="https://yeetgraph.com/list">
                <FontAwesomeIcon className="mr-2 inline w-4 mb-1" icon={faGlobe} />
                Demo 2
              </LinkCard>
            </div>
          </SmallCard>

          <SmallCard title="React 3D Virtual Meetings">
            <p>
              Experimenting around gamified 3D meetings.
            </p>
            <LinkCard href="https://poc-astaree.web.app/">
              <FontAwesomeIcon className="mr-2 inline w-4 mb-1" icon={faGlobe} />
              Demo
            </LinkCard>
          </SmallCard>
        </section>

        <section className="mt-32 grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4">
          <h2 className="font-bold text-4xl text-gray-800 md:col-span-4">Misc.</h2>
          <SmallCard title="Ethers.js">
            <p>I contributed in finding, investigating and reporting bugs.</p>
            <LinkCard href="https://github.com/ethers-io/ethers.js/issues?q=is%3Aissue+author%3Apldespaigne+is%3Aclosed">
              <FontAwesomeIcon className="mr-2 inline w-4 mb-1" icon={faGlobe} />
              Github Issues
            </LinkCard>
          </SmallCard>

          <SmallCard title="GraphQL">
            <p>
              I was responsible to test GraphQL, to see if we could use it at Cascade8.
              I presentation about GraphQL to our team along with a small demo repo.
            </p>
            <div className="flex flex-col gap-2">
              <LinkCard href="https://docs.google.com/presentation/d/1YfFIpHYU_o4eA-_SeFXzzT4kawB6yMCmCRjB_p4bvyE/edit?usp=sharing">
                <FontAwesomeIcon className="mr-2 inline w-4 mb-1" icon={faGoogleDrive} />
                Presentation
              </LinkCard>
              <LinkCard href="https://github.com/blockframes/graphql-demo">
                <FontAwesomeIcon className="mr-2 inline w-4 mb-1" icon={faGithub} />
                Demo Repo
              </LinkCard>
            </div>
          </SmallCard>

          <SmallCard title="Resume">
            <p>This site is made with Next.js and Tailwind.css</p>
            <LinkCard href="https://github.com/pldespaigne/next-page">
              <FontAwesomeIcon className="mr-2 inline w-4 mb-1" icon={faGithub} />
              Github
            </LinkCard>
          </SmallCard>

        </section>

        <section className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
          <h2 className="font-bold text-4xl text-gray-800 md:col-span-2">Education</h2>
          
          <div className="p-6 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 filter drop-shadow-xl text-gray-400 flex flex-col justify-between gap-6">
            <h2 className="text-xl font-semibold">
              <span className="text-yellow-300">Master Degree</span> - <span className="text-gray-300">Computer Science & Web Technologies</span>
            </h2>
            <p>University of Lyon</p>
          </div>
        </section>

        <footer className="mt-32 flex flex-row justify-center">
          <h2 ref={endText} className="text-gray-900 font-bold text-4xl text-center md:text-left">You reached the end 🙌</h2>
        </footer>
      </main>
    </>
  )
};

export default Home;
