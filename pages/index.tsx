
import Head from 'next/head';
import Image from 'next/image';
import type { NextPage } from 'next';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faGlobe, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faGoogleDrive, faLinkedin, faNpm, faTwitter } from '@fortawesome/free-brands-svg-icons';

import Card from './components/Card';
import Chips from './components/Chips';
import LinkCard from './components/LinkCard';
import SmallCard from './components/SmallCard';
import GameOfLife from './components/GameOfLife';


const Home: NextPage = () => {

  const container = useRef<HTMLElement>(null);
  const scrollTarget = useRef<HTMLElement>(null);
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


  const handleScroll = () => {
    if (!scrollTarget.current) return;
    scrollTarget.current.scrollIntoView();
  };


  return (
    <>
      <Head>
        <title>Resume - Pierre Despaigne</title>
        <link rel="icon" href="favicon.ico" />
        
        <meta name="description" content="I'm a freelance web(3)-developer. I started to look into Ethereum in 2017. I have since contributed to well known projects like MetaMask, ENS, Kwenta (SNX), Ethers.js, Remix, Ample or Autonomy. I'm also building in public a smart-contract analysis app called Bytegraph." />

        <meta property="og:url" content="https://pl.despaigne.fr" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hi 👋 I'm Pierre" />
        <meta property="og:image" content="https://pl.despaigne.fr/images/profile-pic.jpg" />
        <meta property="og:image:alt" content="A picture of me." />
        <meta property="og:description" content="I'm a freelance web(3)-developer. I started to look into Ethereum in 2017. I have since contributed to well known projects like MetaMask, ENS, Kwenta (SNX), Ethers.js, Remix, Ample or Autonomy. I'm also building in public a smart-contract analysis app called Bytegraph." />
        <meta property="og:site_name" content="Resume" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@pldespaigne" />
        <meta name="twitter:url" content="https://pl.despaigne.fr" />
        <meta name="twitter:title" content="Hi 👋 I'm Pierre" />
        <meta name="twitter:description" content="I'm a freelance web(3)-developer. I started to look into Ethereum in 2017. I have since contributed to well known projects like MetaMask, ENS, Kwenta (SNX), Ethers.js, Remix, Ample or Autonomy. I'm also building in public a smart-contract analysis app called Bytegraph." />
        <meta name="twitter:image" content="https://pl.despaigne.fr/images/profile-pic.jpg" />
        <meta name="twitter:image:alt" content="A picture of me." />
      </Head>



      <main ref={container} className="relative min-h-full min-w-full bg-gradient-to-br from-slate-700 to-slate-800 pb-32 md:pb-16">

        <GameOfLife />

        <section className="relative h-screen flex md:items-center md:justify-center">

          <div className="flex flex-col items-center w-full md:w-auto md:flex-row gap-8 md:backdrop-blur-sm md:border md:border-t-slate-600 md:border-l-slate-600 md:border-b-slate-700 md:border-r-slate-700 md:rounded-xl px-4 md:px-16 pt-4 md:py-10 md:mx-4 md:shadow-2xl">
            <div className="relative">
              <Image className="rounded-full" src="/images/profile-pic_3.jpg" alt="a picture of me" width={300} height={300} />
              <div className="absolute z-0 bottom-0 left-0 text-center text-slate-400">
                <FontAwesomeIcon className="text-xl inline w-4" icon={faMapMarkerAlt} />
                <p className="">France</p>
              </div>
            </div>

            <div className="flex flex-col justify-between items-center md:items-start gap-4">
              <h1 className="text-3xl lg:text-5xl font-bold text-yellow-300">
                <span className="text-glow">Hi, I&apos;m Pierre</span> 👋
              </h1>

              <p className="text-slate-300 text-center md:text-left lg:text-lg">
                I&apos;m a <span className="text-slate-50">full-stack</span> web3 developer.<br/>
                I started to look into Ethereum in <span className="text-slate-50">2017</span>.<br/>
                I have since contributed to well known projects like<br/>
                <span className="text-slate-50">MetaMask</span>,&nbsp;
                <span className="text-slate-50">ENS</span>,&nbsp;
                <span className="text-slate-50">Kwenta (SNX)</span>,&nbsp;
                <span className="text-slate-50">Ethers.js</span>,&nbsp;
                <span className="text-slate-50">Remix</span>,&nbsp;
                <span className="text-slate-50">Ample</span> or&nbsp;
                <span className="text-slate-50">Autonomy</span>.<br/>
                I&apos;m also building in public a smart-contract analysis app called <a className="text-slate-50 underline" href="https://bytegraph.xyz" target="_blank" rel="noreferrer">Bytegraph</a>.
              </p>

              <div className="flex gap-3 text-yellow-500">
                <motion.a
                  href="https://github.com/pldespaigne"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-yellow-600 flex p-2 rounded-md shadow-lg"
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <FontAwesomeIcon icon={faGithub} size="xl" />
                </motion.a>
                <motion.a
                  href="https://twitter.com/pldespaigne"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-yellow-600 flex p-2 rounded-md shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FontAwesomeIcon icon={faTwitter} size="xl" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/pldespaigne"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-yellow-600 flex p-2 rounded-md shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FontAwesomeIcon icon={faLinkedin} size="xl" />
                </motion.a>
              </div>
            </div>
          </div>

          <div className="absolute z-20 bottom-0 w-full flex items-center justify-center pointer-events-none">
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              animate={{ y: -10 }}
              onClick={() => handleScroll()}
              transition={{ ease: 'easeOut', duration: 1.2, repeat: Infinity, repeatType: 'mirror' }}
              className="pointer-events-auto border border-yellow-600 rounded-full py-3 px-1.5 text-yellow-500 bg-yellow-300/20 md:bg-transparent"
            >
              <FontAwesomeIcon icon={faChevronDown} size="xl" />
            </motion.button>
          </div>

          
        </section>

        

        <section ref={scrollTarget} className="pt-16 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 px-8 md:px-32">
          <h2 className="z-0 font-bold text-4xl text-slate-900 md:col-span-2 underline underline-offset-8 decoration-1 decoration-yellow-600">Work</h2>

          <Card
            company="Cascade8"
            role="Senior Full-Stack Developer (Full time)"
            duration={<>mid 2019 - Jan 2022 (2,5 years) &<br/>Feb 2023 - March 2024 (13 months)</>}
            body={
              <p>
                I joined this remote team at creation, we built regular web2 apps. I worked on front, back, ops, features and architecture design.
                With the team growing I also started to manage some of the new developers.<br/><br/>
                We also created a re-deployable gas-less smart-wallet to onboard non-tech user,
                and a &quot;Netflix NFT&quot; app where you can buy a movie&apos;s token to watch it,
                as long as you hold the token, like a web3 DVD.<br/>
                Unfortunately non of the web3 product made it into production as the company pivoted away from web3.
              </p>
            }
            links={[
              <LinkCard key={0} href="https://github.com/blockframes/blockframes/tree/5c739627b5358cfc108e9149ade6548a7d92e433/libs/ethers/src/lib">
                <FontAwesomeIcon icon={faGithub} />
                dApp Front-end
              </LinkCard>,
              <LinkCard key={1} href="https://github.com/blockframes/blockframes/tree/5c739627b5358cfc108e9149ade6548a7d92e433/smart-contracts/sol">
                <FontAwesomeIcon icon={faGithub} />
                Smart-Contracts
              </LinkCard>,
              <LinkCard key={2} href="https://www.filmseriesnft.com">
                <FontAwesomeIcon icon={faGlobe} />
                NFT VOD
              </LinkCard>,
              <LinkCard key={3} href="https://www.archipelmarket.com/">
              <FontAwesomeIcon icon={faGlobe} />
                Main web2 app
              </LinkCard>,
            ]}
            chips={[
              <Chips key={0}>Angular</Chips>,
              <Chips key={1}>Firebase & GCP</Chips>,
              <Chips key={2}>TypeScript</Chips>,
              <Chips key={3}>Ethers.js</Chips>,
              <Chips key={4}>Solidity</Chips>,
            ]}
          />

          <Card
            company="Autonomy Network"
            role="Senior Full-Stack Developer (Full time)"
            duration="Feb 2022 - Jan 2023 (11 months)"
            body={
              <p>
                Autonomy is a blockchain automation protocol.
                I joined this fully remote and distributed team to build new apps in order to demonstrate use-cases for the protocol.
                I was in charge of creating the front-end and backend of the apps along with two other more junior devs.
                This included planning the development and assigning tasks to my team (3 people including me), making code review, and coding.
                On the technical side I worked on front-end ui, redux store, data fetching (api, the graph, smart-contract). I also did some backend: creating a subgraph (the graph) and creating an api to link Twitter accounts to eth addresses.
                Finally I wrote some smart-contracts deploy scripts and tests using Hardhat (I did not wrote the smart-contracts though).
              </p>
            }
            links={[
              <LinkCard key={0} href="http://auto-hedge-v2.vercel.app/">
                <FontAwesomeIcon icon={faGlobe} />
                Auto-Hedge
              </LinkCard>,
              <LinkCard key={1} href="http://auto-station-v2.vercel.app/">
                <FontAwesomeIcon icon={faGlobe} />
                Auto-Station
              </LinkCard>,
              <LinkCard key={2} href="https://meta-dungeon-app.vercel.app/">
                <FontAwesomeIcon icon={faGlobe} />
                Meta-Dungeon
              </LinkCard>,
            ]}
            chips={[
              <Chips key={0}>Next.js</Chips>,
              <Chips key={1}>Tailwind.css</Chips>,
              <Chips key={2}>TypeScript</Chips>,
              <Chips key={3}>Ethers.js</Chips>,
              <Chips key={4}>The Graph</Chips>,
              <Chips key={5}>HardHat</Chips>,
            ]}
          />

          <Card
            company="Kwenta by Synthetix"
            role="Front-end features implementation (Contractor)"
            duration="Feb 2023 - now"
            body={
              <p>
                Implementing various front-end features assigned to me via GitHub issues.
              </p>
            }
            links={[
              <LinkCard key={0} href="https://github.com/Kwenta/kwenta/pulls?q=is%3Apr+is%3Aclosed+author%3Apldespaigne">
                <FontAwesomeIcon icon={faGithub} />
                Pull Requests
              </LinkCard>,
            ]}
            chips={[
              <Chips key={0}>TypeScript</Chips>,
              <Chips key={1}>React</Chips>,
              <Chips key={2}>Redux</Chips>,
              <Chips key={3}>Styled Component</Chips>,
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
                <span className="text-slate-400">but I can still show my local copy during a call for example.</span>
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
                Try it with <a href="https://vitalik.eth" target="_blank" rel="noreferrer" className="underline">https://vitalik.eth</a> (no need to unlock MetaMask, but <span className="text-slate-300">mainnet should be selected</span>).
              </p>
            }
            links={[
              <LinkCard key={0} href="https://github.com/MetaMask/metamask-extension/pulls?q=is%3Apr+author%3Apldespaigne+is%3Aclosed">
                <FontAwesomeIcon icon={faGithub} />
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
                <FontAwesomeIcon icon={faGithub} />
                Integration
              </LinkCard>,
              <LinkCard key={1} href="https://github.com/pldespaigne/remix-debug-plugin">
                <FontAwesomeIcon icon={faGithub} />
                Debug Plugin
              </LinkCard>,
              <LinkCard key={2} href="https://github.com/pldespaigne/remix-3box-plugin">
                <FontAwesomeIcon icon={faGithub} />
                3Box Plugin
              </LinkCard>,
              <LinkCard key={3} href="https://remix.ethereum.org">
                <FontAwesomeIcon icon={faGlobe} />
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

        <section className="mt-32 grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 px-8 md:px-32">
          <h2 className="z-0 font-bold text-4xl text-slate-900 md:col-span-4 underline underline-offset-8 decoration-1 decoration-yellow-600">Side Projects</h2>

          <SmallCard title="Bytegraph">
            <p>
              An app that can analyze smart-contract at the bytecode level.<br/>
              This app is actually used by a small amount of smart-contract auditors and devs for searching bug & optimizing code.
            </p>
            <LinkCard href="https://bytegraph.xyz">
              <FontAwesomeIcon icon={faGlobe} />
              Bytegraph
            </LinkCard>
          </SmallCard>

          <SmallCard title="Content-Hash">
            <p>
              JS implementation of the EIP-1577.<br/>
              The npm package has 300k weekly downloads.<br/>
              It is used to encode ipfs hash into a format that can be stored by ENS resolvers.
            </p>
            <LinkCard href="https://www.npmjs.com/package/content-hash">
              <FontAwesomeIcon icon={faNpm} />
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
              <FontAwesomeIcon icon={faGithub} />
              Github
            </LinkCard>
          </SmallCard>

          <SmallCard title="React Graphs">
            <p>
              Experimenting creation of graph-based programming tool in react.
            </p>
            <div className="flex flex-col gap-2">
              <LinkCard href="https://angry-banach-72cea3.netlify.app/">
                <FontAwesomeIcon icon={faGlobe} />
                Demo
              </LinkCard>
            </div>
          </SmallCard>

          <SmallCard title="3D Virtual Meetings">
            <p>
              Experimenting around gamified in-browser 3D meetings.
            </p>
            <div className="flex flex-col gap-2">
              <LinkCard href="https://poc-astaree.web.app/">
                <FontAwesomeIcon icon={faGlobe} />
                Demo 1
              </LinkCard>
              <LinkCard href="https://astaree-v3.vercel.app/">
                <FontAwesomeIcon icon={faGlobe} />
                Demo 2
              </LinkCard>
            </div>
          </SmallCard>
        </section>

        <section className="mt-32 grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 px-8 md:px-32">
          <h2 className="z-0 font-bold text-4xl text-slate-900 md:col-span-4 underline underline-offset-8 decoration-1 decoration-yellow-600">Misc.</h2>
          <SmallCard title="Ethers.js">
            <p>I contributed in finding, investigating and reporting bugs.</p>
            <LinkCard href="https://github.com/ethers-io/ethers.js/issues?q=is%3Aissue+author%3Apldespaigne+is%3Aclosed">
              <FontAwesomeIcon icon={faGlobe} />
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
                <FontAwesomeIcon icon={faGoogleDrive} />
                Presentation
              </LinkCard>
              <LinkCard href="https://github.com/blockframes/graphql-demo">
                <FontAwesomeIcon icon={faGithub} />
                Demo Repo
              </LinkCard>
            </div>
          </SmallCard>

          <SmallCard title="Resume">
            <p>This site is made with Next.js and Tailwind.css</p>
            <LinkCard href="https://github.com/pldespaigne/next-page">
              <FontAwesomeIcon icon={faGithub} />
              Github
            </LinkCard>
          </SmallCard>

        </section>

        <section className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 px-8 md:px-32">
          <h2 className="z-0 font-bold text-4xl text-slate-900 md:col-span-2 underline underline-offset-8 decoration-1 decoration-yellow-600">Education</h2>
          
          <div className="p-6 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 filter drop-shadow-xl text-slate-400 flex flex-col justify-between gap-6">
            <h2 className="text-xl font-semibold">
              <span className="text-yellow-300 text-glow">Master Degree</span> - <span className="text-slate-300">Computer Science & Web Technologies</span>
            </h2>
            <p>University of Lyon 1</p>
          </div>
        </section>

        <footer className="mt-32 flex flex-row justify-center px-8 md:px-32">
          <h2 ref={endText} className="z-0 text-slate-900 font-bold text-4xl text-center md:text-left">You reached the end 🙌</h2>
        </footer>
      </main>
    </>
  )
};

export default Home;
