"use server"

import OpenAI from "openai";

const infomation = `Marcin Kowalczyk is a Full Stack Developer based in Poznań. He has over 4 years of experience and is the owner of an e-commerce shop selling a mobile app and browser extension. He is passionate about space flights, technological innovations, the automotive industry, and chess. His contact details are as follows: phone number +48 534 867 318, email mkowalczyk193@gmail.com, GitHub github.com/m4rc1nn, website stealer.pl, and LinkedIn linkedin.com/in/marcin-kow. He has very good knowledge of React.js, Next.js, TypeScript, TailwindCSS, HTML, SCSS, RWD, GIT, Mobile-first, and SEO. He possesses good knowledge of Node.js, Express.js, React-Native, Android, iOS, Expo, MySQL, REST API, and Docker. He has general knowledge of Java, Skript, Spigot, Bukkit, PHP, and CakePHP. He is capable of working in a team, has good work organization skills, and can work under time pressure. Marcin is a native Polish speaker with B1/B2 level proficiency in English. He studied at the Secondary School Complex No. 1 in Jarocin as an IT Specialist from 2017 to 2021. His professional experience includes working at Custommerce sp. z o.o. as a Junior Fullstack Developer from November 2022 to November 2023 and as a Mid Fullstack Developer from December 2023 to the present. His responsibilities included designing and implementing a system supervising the implementation of e-commerce product cards on platforms such as Rossmann, Media-Expert, Allegro, and Amazon, creating applications to automate company processes, developing scrapers for e-commerce platforms, developing product cards and landing pages for companies like Kärcher, Nivea, Lirene, and Polpharma, and managing client contact as part of continuous cooperation. As a freelancer since January 2020, Marcin has created websites and web applications according to client guidelines, deployed software to dedicated servers, provided support in case of problems, and created and sold SAAS products to individual customers. He holds certifications including Exam EE.08, Exam EE.09, and CCNA. His main projects include Stealer - Zalando-Lounge Bot, where he designed, implemented, and coded a web app, browser extension, mobile app, and API for easier purchasing of products on Zalando, used by over 8,000 people; RCS - Rich Content System, where he developed a fully functional application for leaving feedback on digital products, managing product versions, sending automatic emails, and approving products after timeouts; and Custommerce Home Page with CMS, where he developed a home page with 46 subdomains, with a CMS in Next.js from CakePHP, achieving a minimum of 95 performance points on mobile in speed tests.`;

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
});

export default async function getAnswearResponse(question: string) {
    const message = `I will ask you a question, answer it based on the information I provide, if i ask "your" i mean in information below. Do not say something like "based on information...", say only the answer, but friendly for example "What's your name?" answear: "My name is Marcin Kowalczyk". Do not say something like "based on information...", say only the answer. Here's the question: ${question}. Here is the information: ${infomation}`;

    try {
        const completion = await openai.chat.completions.create({
            messages: [{ role: "system", content: message }],
            model: "gpt-3.5-turbo",
        });

        return completion.choices[0].message.content;
    } catch (error) {
        console.error("Error processing request:", error);
        return null;
    }
}
