import AnimationContainer from '../utils/AnimationContainer';
import { siteConfig } from '@/src/configs/config';
import CurrentTimeLineExp from '../content/CurrentTimeLineExp';
import ShowSkills from '../utils/ShowSkills';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';
import { skills } from '../utils/mySkills';
import SectionContainer from '../utils/SectionContainer';
import Link from 'next/link';

const AboutSection = () => {
  return (
    <SectionContainer>
      <div className="w-full flex flex-col gap-6">

        <TitleSectionPageContainer title="About Me" />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <p className="text-base text-gray-400">
            Hey there! 👋 I'm <strong>{siteConfig.author}</strong>, a Backend software engineer at a fintech startup, focused on building scalable and efficient solutions that streamline global payments. With a passion for developing impactful technology, I am particularly interested in collaborating on innovative projects that address challenges in Africa and beyond.
            {/* <Link
              href={`https://github.com/${siteConfig.social.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:underline transition-all ease"
            >
              GitHub profile
            </Link> ✌️. */}
          </p>

          <ul className="text-base text-gray-400 list-disc pl-6 space-y-2 mt-4">
            <li>📚 I am continuously honing my skills in data structures, algorithms, and system design, and I'm currently expanding my knowledge in data science, with a strong interest in artificial intelligence.</li>
            <li>🤝 I'm always eager to collaborate and bring value to exciting projects. If you need an extra pair of hands or a fresh perspective, don’t hesitate to reach out!</li>
            <li>📬 If you come across anything interesting in my projects or have a project you'd like me to collaborate on, please don't hesitate to get in touch. Let's create something awesome together!</li>
            <li>🤩 In my spare time, I enjoy playing video games like FIFA and watching movies 🎥. </li>
          </ul>

          <p className="text-base text-gray-400 mt-4">
            Feel free to explore my projects and get in touch for collaborations and also reach out if you have questions about backend development, particularly within the Node.js/Nest.js ecosystem.
          </p>

        </AnimationContainer>

        <CurrentTimeLineExp />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <h2 className="font-bold text-2xl md:text-2xl tracking-tight mb-2 text-white text-start">Skills</h2>

          <p className="text-base text-gray-400">
          I’ve been programming for over 5 years, specializing in backend development with expertise in various languages, 
          frameworks, and tools. My experience allows me to design, build, 
          and optimize robust and scalable systems that drive seamless functionality.
          </p>

          <div className="flex flex-col items-start gap-3 mt-3">
            {skills.map(({ title, techs }) => (
              <div key={title}>
                <h3 className="font-bold text-1xl md:text-1xl tracking-tight mb-5 text-white text-start">{title}</h3>
                <AnimationContainer customClassName="flex items-center flex-wrap gap-3 mb-5">
                  <ShowSkills skills={techs} />
                </AnimationContainer>
              </div>
            ))}
          </div>

        </AnimationContainer>

      </div>
    </SectionContainer>
  );
};

export default AboutSection;
