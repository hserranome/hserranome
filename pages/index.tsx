import React from "react";
import Head from "next/head";
import Link from "next/link";

const Home: React.FC = () => {
    return (
        <div className="min-h-screen p-4">
            <Head>
                <title>Hendy Serrano</title>
                <meta
                    name="description"
                    content="Full stack developer from Valencia, Spain."
                />
                <meta
                    name="keywords"
                    content="digital, product management, entrepeneurship, programming, marketing, startup, apps, development"
                />
            </Head>
            <Content />
        </div>
    );
};

export default Home;

const Content: React.FC = () => {
    return (
        <div className="py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div>
                <img
                    alt="Avatar of a cute cat with a cartoon crown"
                    src="/static/images/avatar.png"
                    className="object-cover rounded-full h-32 w-32 mb-6"
                />
            </div>
            <div className="flex flex-col lg:flex-row mb-10">
                <div className="lg:w-1/2">
                    <h2 className="max-w-md mb-6 font-sans text-3xl sm:text-4xl font-bold tracking-tight text-gray-900  sm:leading-none xl:max-w-lg">
                        Hi! I'm{" "}
                        <span className="text-indigo-900">Hendy Serrano</span>{" "}
                        👋{" "}
                    </h2>
                </div>
                <div className="lg:w-1/2">
                    <p className="text-xl text-gray-800 md:text-xl">
                        <br />
                        <Link href="/portfolio">
                            <a className="text-indigo-600">
                                Check out some of my work 🔍
                            </a>
                        </Link>
                        ✨
                    </p>
                </div>
            </div>
            <div className="grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-4">
                <div className="max-w-md">
                    <h6 className="mb-3 font-semibold leading-5 text-2xl">
                        About me
                    </h6>
                    <div className="leading-relaxed">
                        <Item title="25 years old" suffix="🧑🏽‍💻" />
                        <Item title="Valencia, Spain" suffix="🇪🇸" />
                        <Item title="Web developer" suffix="💾" />
                        <Item title="Cat enthusiasm" suffix="🐈" />
                        <Item title="Pizza advocate" suffix="🍕" />
                    </div>
                </div>
                <div className="max-w-md">
                    <h6 className="mb-3 font-semibold leading-5 text-2xl">
                        Stuff I've made
                    </h6>
                    <div className="leading-normal">
                        <p className="flex mb-2">
                            <span className="mr-2.5">💼</span>
                            <a
                                target="_blank"
                                href="https://trabajosremotos.es/"
                            >
                                Trabajos Remotos
                            </a>
                        </p>
                        <p className="flex mb-2">
                            <span className="mr-2.5">🔍</span>
                            Looking for interesting open source projects
                        </p>
                        <p className="flex mb-2">
                            <span className="mr-2.5">🍳 </span>
                            Cooking something up...
                        </p>
                    </div>
                </div>
                <div className="max-w-md">
                    <h6 className="mb-3 font-semibold leading-5 text-2xl">
                        Where to find me
                    </h6>
                    <div className="leading-relaxed text-base">
                        <div className="mb-2">
                            <p>
                                <span className="mr-2.5">🐤</span>
                                <a
                                    target="_blank"
                                    href="https://twitter.com/hserranome"
                                >
                                    Twitter
                                </a>
                            </p>
                            <p className="text-gray-500 text-xs">@hserranome</p>
                        </div>
                        <div className="mb-2">
                            <p>
                                <span className="mr-2.5">📫</span>
                                <a
                                    target="_blank"
                                    href="mailto:hendy@hserrano.me"
                                >
                                    Email
                                </a>
                            </p>

                            <p className="text-gray-500 text-xs">
                                hendy@hserrano.me
                            </p>
                        </div>
                        <div className="mb-2">
                            <span className="mr-2.5">🎒</span>
                            <a
                                target="_blank"
                                href="https://github.com/hserranome"
                            >
                                Github
                            </a>
                            <p className="text-gray-500 text-xs">hserrano.me</p>
                        </div>
                        <div className="mb-2">
                            <p>
                                <span className="mr-2.5">💼</span>
                                <a
                                    target="_blank"
                                    href="https://www.linkedin.com/in/hendy-serrano/"
                                >
                                    LinkedIn
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="max-w-md">
                    <h6 className="mb-3 font-semibold leading-5 text-2xl">
                        Things I love
                    </h6>
                    <div className="leading-relaxed text-base">
                        <div className="mb-2">
                            <p>
                                <span className="mr-2.5">📚</span>
                                <a target="_blank" href="https://logseq.com/">
                                    Logseq
                                </a>
                            </p>
                            <p className="text-gray-500 text-xs">
                                Knowledge database
                            </p>
                        </div>
                        <div className="mb-2">
                            <p>
                                <span className="mr-2.5">🚀</span>
                                <a target="_blank" href="https://strapi.io/">
                                    Strapi
                                </a>
                            </p>
                            <p className="text-gray-500 text-xs">
                                API, the fast way
                            </p>
                        </div>
                        <div className="mb-2">
                            <p>
                                <span className="mr-2.5">💬</span>
                                <a
                                    target="_blank"
                                    href="https://chat.openai.com/"
                                >
                                    ChatGPT
                                </a>
                            </p>
                            <p className="text-gray-500 text-xs">
                                Language model for your everyday use
                            </p>
                        </div>
                        <div className="mb-2">
                            <p>
                                <span className="mr-2.5">🧰</span>
                                <a
                                    target="_blank"
                                    href="https://www.notion.so/"
                                >
                                    Notion
                                </a>
                            </p>
                            <p className="text-gray-500 text-xs">
                                Organization swiss army knife
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Item = (props) => {
    const { title, suffix } = props;
    return (
        <p className="mb-1.5">
            <span className="mr-2.5">{suffix}</span>
            {title}
        </p>
    );
};
