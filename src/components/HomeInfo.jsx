/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        Hi, 我是
        <span className="font-semibold mx-2 text-white">安可</span>
        👋
        <br />
        来自一个热爱编程的软件开发者。
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          与许多公司合作
          <br />
          并学到了许多技能 方式
        </p>

        <Link to="/about" className="neo-brutalism-white neo-btn">
          了解更多
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className="info-box">
        <p className="font-medium text-center sm:text-xl">
          多年来带领多个项目取得成功。 <br />
          好奇心使我不断学习影响？
        </p>

        <Link to="/projects" className="neo-brutalism-white neo-btn">
          查看项目
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          需要完成一个项目或寻找开发人员吗？ <br />
        </p>

        <Link to="/contact" className="neo-brutalism-white neo-btn">
          我们来谈谈
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
