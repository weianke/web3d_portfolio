import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        有一个项目吗？
        <br className="sm:block hidden" />
        让我们一起创造一些东西
      </p>
      <Link to="/contact" className="btn">
        联系我
      </Link>
    </section>
  );
};

export default CTA;
