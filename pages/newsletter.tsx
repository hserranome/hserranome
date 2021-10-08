import React from "react";
import Head from "next/head";

import { Container } from "@components";
import SvgTwitterIcon from "@components/icons/TwitterIcon";
import SvgEmailIcon from "@components/icons/EmailIcon";

const Home: React.FC = () => {
    return (
        <Container>
            <Head>
                <title>
                    Weekly newsletter - Hendy Serrano - Digital creator
                </title>
                <meta
                    name="description"
                    content="
                    Every Tuesday, I send out an email with that week's blog with: 
                    interesting resources and tools I found over the week 🧠 
                    some weekly reflections on how my projects are going 🔎 
                    occasionally upcoming top secret projects that you might peek into 👀 
                    This way, I can reach people even if I get lost into their feeds. 
                    If you want to get it, subscribe to my weekly newsletter!
                    You can cancel anytime, and I won't sell your mail to any marketing coyote."
                />
                <meta
                    name="keywords"
                    content="newsletter, weekly, digital, product management, entrepeneurship, programming, marketing, startup, apps, development"
                />
                <meta name="author" content="Hendy Serrano" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                    charSet="UTF-8"
                />
            </Head>
            <div className="mx-auto px-4 pt-24 lg:pt-24 pb-8 max-w-screen-sm w-full">
                <h4 className="text-lg text-gray-500 font-light">
                    Hendy Serrano's
                </h4>
                <h1 className="text-3xl mb-6 font-medium">
                    Weekly newsletter 📬
                </h1>
                <p className="mb-3">
                    Every Tuesday, I send out my newsletter in which you get a
                    quick summary of what I found or did over the week.
                    Including:
                </p>
                <ul className="list-disc list-inside mb-3 pl-6">
                    <li className="mb-1">
                        interesting resources and tools I found over the week 🧠
                    </li>
                    <li className="mb-1">
                        some weekly reflections on how my projects are going 🔎
                    </li>
                    <li className="mb-1">
                        occasionally upcoming top secret projects that you might
                        peek into 👀
                    </li>
                </ul>
                <p className="mb-2">
                    I try to add as much value as I can cram into a short 2
                    minutes email 😊
                </p>
                <p className="text-gray-400 mb-6">
                    You can cancel anytime, and I won't sell your mail to any
                    marketing coyote.
                </p>
                <script
                    async
                    src="https://eomail6.com/form/604d2fee-25de-11ec-96e5-06b4694bee2a.js"
                    data-form="604d2fee-25de-11ec-96e5-06b4694bee2a"
                ></script>
            </div>
        </Container>
    );
};

export default Home;
