import AnimationContainer from '../utils/AnimationContainer';
import { siteConfig } from '@/src/configs/config';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName="w-full mb-16">
      <h2 className="font-bold text-2xl tracking-tight mb-8 text-white text-center lg:text-start">
        About Me
      </h2>

      <p className="text-base text-gray-400">
        Hey there! 👋 I'm <strong>{siteConfig.author}</strong>, 
        and my journey into the world of technology began with an insatiable curiosity to understand how things work. 
        From building small applications during my early days to becoming a skilled backend engineer in the fintech space, 
        I’ve always been driven by a desire to create solutions that make life simpler and better for people.
      </p>

      <p className="text-base text-gray-400 mt-4">
      Over the years, I’ve honed my expertise in backend development, 
      mastering tools like TypeScript, Node.js, and NestJS to build scalable and secure systems. 
      My work has allowed me to enhance system reliability, optimize APIs, 
      and contribute to products that have positively impacted thousands of users. 
      </p>

      <p className="text-base text-gray-400 mt-4">
      Beyond traditional software engineering, 
      I’m passionate about exploring the intersections of artificial intelligence and blockchain. 
      My experience includes deploying webhooks for cryptocurrency settlements and implementing secure 
      API architectures that ensure compliance and security in the fintech ecosystem.
      </p>

      <p className="text-base text-gray-400 mt-4">
      Recently, I’ve expanded my focus to include emerging technologies and their potential to address larger societal challenges, 
      particularly in Nigeria. Whether it’s using machine learning to tackle fake news detection or brainstorming innovative solutions. 
      </p>

      <p className="text-base text-gray-400 mt-4">
      I’m also a lifelong learner, always looking to explore new tools and technologies like Redis, 
      RabbitMQ, and cloud platforms to take my projects to the next level. If you’re working on something groundbreaking 
      or need a collaborator who brings technical expertise and a passion for problem-solving, I’d love to connect. 
      Together, let’s turn ideas into impactful solutions!"
      </p>
    </AnimationContainer>
  );
};      

export default AboutMe;
