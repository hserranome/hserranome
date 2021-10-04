import React from "react";
import Head from "next/head";

import { Container } from "@components";
import SvgTwitterIcon from "@components/icons/TwitterIcon";
import SvgEmailIcon from "@components/icons/EmailIcon";

const Home: React.FC = () => {
    return (
        <Container>
            <Head>
                <title>Hendy Serrano - Creador digital</title>
                <meta
                    name="description"
                    content="Creo productos digitales desde cero. Todo el proceso en publico, en mi blog y redes sociales. Comparto recursos, y pensamientos interesantes que voy encontrando por la web. Empredimiento."
                />
                <meta
                    name="keywords"
                    content="digital, product management, emprendimiento, entrepeneurship, programacion, marketing, startup, apps, desarrollo, development"
                />
                <meta name="author" content="Hendy Serrano" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                    charSet="UTF-8"
                />
            </Head>
            <Hero />
            {/* <Blog /> */}
            <Projects />
        </Container>
    );
};

export default Home;

const Hero: React.FC = () => {
    return (
        <div className="px-4 pt-24 pb-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-24 ">
            <div className="flex flex-col justify-between lg:flex-row w-full">
                <div className="mb-12 lg:max-w-lg lg:pr-5 lg:mb-0">
                    <div className="max-w-xl mb-6">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            ¡Hola! Soy Hendy Serrano 👋
                            <br />
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            <b>🚀 Creando productos digitales desde cero.</b>
                            <br />
                            📣 Publico sobre todo el proceso en mi blog y redes
                            sociales. <br />
                            🧠 Comparto recursos, herramientas y reflexiones
                            interesantes que voy encontrando por la web.
                        </p>
                    </div>
                    <hr className="mb-6 border-gray-300" />
                    <div className="flex flex-row">
                        <a
                            href="https://twitter.com/hserranome"
                            className="mr-6 flex items-center"
                        >
                            <SvgTwitterIcon color="#1DA1F2" />
                            <p className="ml-2">hserranome</p>
                        </a>
                        <a
                            href="mailto:hello@hserrano.me"
                            className="mr-6 flex items-center"
                        >
                            <SvgEmailIcon fill="#EA4335" />
                            <p className="ml-1">hello@hserrano.me</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Blog: React.FC = () => {
    return (
        <div className="px-4 mx-auto md:px-24 lg:px-8 max-w-full md:max-w-3xl">
            <div className="flex flex-col justify-between w-full">
                <BlogYearSeparator text="2021" />
                <BlogItem
                    date="4 Octubre"
                    title="The future of remote work: how the greatest human migration in history will happen in the next ten years"
                />
                <BlogItem
                    date="4 Octubre"
                    title="The future of remote work: how the greatest human migration in history will happen in the next ten years"
                />
                <BlogItem
                    date="4 Octubre"
                    title="The future of remote work: how the greatest human migration in history will happen in the next ten years"
                />
                <BlogYearSeparator text="2020" />
                <BlogItem
                    date="4 Octubre"
                    title="The future of remote work: how the greatest human migration in history will happen in the next ten years"
                />
                <BlogItem
                    date="4 Octubre"
                    title="The future of remote work: how the greatest human migration in history will happen in the next ten years"
                />
                <BlogItem
                    date="4 Octubre"
                    title="The future of remote work: how the greatest human migration in history will happen in the next ten years"
                />
                <BlogYearSeparator text="2019" />
                <BlogItem
                    date="4 Octubre"
                    title="The future of remote work: how the greatest human migration in history will happen in the next ten years"
                />
                <BlogItem
                    date="4 Octubre"
                    title="The future of remote work: how the greatest human migration in history will happen in the next ten years"
                />
                <BlogItem
                    date="4 Octubre"
                    title="The future of remote work: how the greatest human migration in history will happen in the next ten years"
                />
            </div>
        </div>
    );
};

const BlogItem = ({
    title,
    date,
    link,
}: {
    title?: string;
    date?: string;
    link?: string;
}) => {
    return (
        <div className="mb-8 flex items-start">
            <p className="mr-5 w-44">{date}</p>
            <a href={link ?? ""} className="font-medium text-indigo-700	">
                {title ?? ""}
            </a>
        </div>
    );
};

const BlogYearSeparator = ({ text }: { text: string }) => {
    return (
        <div className="font-bold text-lg mt-8 mb-6">
            <p>{text ?? ""}</p>
        </div>
    );
};

{
    /* <div className="px-4 pt-24 pb-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-24 lg:pb-20">
<div className="flex flex-col justify-between lg:flex-row w-full">
	<div className="mb-12 lg:max-w-lg lg:pr-5 lg:mb-0">
		<div className="max-w-xl mb-6"> */
}

const Projects = () => {
    return (
        <div className="px-4 pb-20 mx-auto max-w-xl	 md:px-24 lg:px-8 lg:pb-20">
            <div className="flex flex-col justify-between w-screen	">
                <BlogYearSeparator text="Mis proyectos" />
                <ProjectItem
                    title="trabajosremotos.es - Tablón de teletrabajos 100% español."
                    link="https://trabajosremotos.es"
                />
                <ProjectItem
                    title="notionmango.com - Plantillas de Notion y artículos de productividad."
                    link="https://notionmango.com"
                />
            </div>
        </div>
    );
};

const ProjectItem = ({ title, link }: { title?: string; link?: string }) => {
    return (
        <div className="mb-8 flex items-start">
            <a
                href={link ?? ""}
                className="font-medium text-indigo-700	"
                target="_blank"
            >
                {title ?? ""}
            </a>
        </div>
    );
};
