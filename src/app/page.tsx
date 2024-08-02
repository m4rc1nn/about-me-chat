"use client";

import { useState } from "react";
import { ShootingStars } from "./components/ui/shooting-stars";
import StarsBackground from "./components/ui/stars-bg";
import VanishInput from "./components/ui/vanish-input";
import getAnswearResponse from "../lib/openai";
import { TextGenerateEffect } from "./components/ui/text-generate-effect";

const placeholders = [
  "What is your favorite programming language and why?",
  "How did you improve your English skills to a B1/B2 level?",
  "What projects are you most proud of and why?",
  "How do you handle tight deadlines?",
  "What was your role in developing the Zalando-Lounge Bot?",
  "How do you stay current with new web technologies?",
  "What attracted you to full-stack development?",
  "Can you explain your experience with Next.js?",
  "How do you approach debugging complex code issues?",
  "What was your biggest challenge at Custommerce?"
];

export default function Home() {

  const [message, setMessage] = useState<string>("");
  const [answear, setAnswear] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAnswear(null);
    const response = await getAnswearResponse(message);
    if(response === null) return setAnswear("I'm having trouble connecting to the API, please try again later.")
    return setAnswear(response);
  };
  return (
    <div className="h-screen flex flex-col justify-center items-center container mx-auto">
      <h2 className="mb-10 sm:mb-20 text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl dark:text-white text-black">
        Ask me about something
      </h2>
      <VanishInput
        placeholders={placeholders}
        onChange={(e) => handleChange(e)}
        onSubmit={(e) => onSubmit(e)}
      />
      <div className="mt-10 sm:mt-20 p-4 backdrop-blur-lg max-w-4xl">
      {answear ? <TextGenerateEffect words={answear} /> : <div className="opacity-0">
      <div className="mt-4">
        <div className="text-transparent text-center text-2xl leading-snug tracking-wide">
         How did you saw that???
        </div>
      </div>
    </div>}
      </div>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
