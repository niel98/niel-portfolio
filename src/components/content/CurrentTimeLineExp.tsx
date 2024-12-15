import { Timeline, TimelineEvent } from './TimeLineExp';

export function calculateDuration(
  startDate: string,
  showMonths: boolean
): string {
  const start: Date = new Date(startDate);
  const now: Date = new Date();
  const diff: number = now.getTime() - start.getTime();
  const diffDate: Date = new Date(diff);
  const years: number = diffDate.getUTCFullYear() - 1970;
  const months: number = diffDate.getUTCMonth();

  if (years === 1 && months === 0) {
    return '1 year';
  } else if (!showMonths) {
    return `${years} years`;
  } else {
    return `${years} yr ${months} mos`;
  }
}

const CurrentTimeLineExp = () => {
    return (
        <Timeline>

            <TimelineEvent>
                <TimelineEvent.Title>Software Engineer II - Changera | Jul. 2022 - Present</TimelineEvent.Title>
                <TimelineEvent.Description>
                Developed and optimized Changera’s Business APIs using NestJs, facilitating seamless integration and enhancing the user experience, which contributed to an increase in transaction volume.
                </TimelineEvent.Description>
            </TimelineEvent>

            <TimelineEvent>
                <TimelineEvent.Title>Backend Developer - Trofira | Mar. 2022 - Oct. 2022</TimelineEvent.Title>
                <TimelineEvent.Description>
                Engineered Trofira’s APIs using NestJs, driving the mobile application’s functionality and contributing to a 25% increase in user engagement.
                </TimelineEvent.Description>
            </TimelineEvent>

            <TimelineEvent>
                <TimelineEvent.Title>Software Developer - IxNotes Services | Aug. 2021 - Jul. 2022</TimelineEvent.Title>
                <TimelineEvent.Description>
                Designed and implemented the graph interface on the enterprise user management (EUM) application for UNICEF, improving data visualization and decision-making processes.
                </TimelineEvent.Description>
            </TimelineEvent>

            <TimelineEvent>
                <TimelineEvent.Title>Software Developer - filerskeepers | Sep. 2020 - Aug. 2021</TimelineEvent.Title>
                <TimelineEvent.Description>
                Developed APIs for legal retention schedules using NodeJs and AWS lambda, improving data management efficiency and compliance, which resulted in a 15% reduction in legal risks and associated costs.
                </TimelineEvent.Description>
            </TimelineEvent>

            {/* <TimelineEvent>
                <TimelineEvent.Title>Technical Content Writer | Sep. 2023 - Present</TimelineEvent.Title>
                <TimelineEvent.Description>
                    Writing technical content and tutorials on platforms like Medium, Dev.to, and Hashnode. Topics include software development, data science, and open-source contributions.
                </TimelineEvent.Description>
            </TimelineEvent>
            <TimelineEvent>
                <TimelineEvent.Title>Open Source Contributor & Maintainer | Dec. 2020 - Present</TimelineEvent.Title>
                <TimelineEvent.Description>
                    Actively contributing to and maintaining open-source repositories on GitHub. Focused on building and improving tools for the developer community.
                </TimelineEvent.Description>
            </TimelineEvent> */}

        </Timeline>
    );
}

export default CurrentTimeLineExp;
