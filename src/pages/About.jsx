import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { CTA } from "../components";
import { experiences, skills } from "../constants";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello , 我是
        <span className="blue-gradient_text font-semibold drop-shadow ml-3">
          安可
        </span>
      </h1>
      <div className="mt-5 flex flex-coil gap-3 text-slate-500">
        <p>
          一位热爱编程的软件工程师，专门通过实践学习和构建应用程序来进行技术教育。
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">我的技能</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((item) => (
            <div key={item.name} className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">工作经验</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>我曾与各种公司合作，提高了我的技能。以下是概要：</p>
        </div>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium text-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
