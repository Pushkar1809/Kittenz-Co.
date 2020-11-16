import React from "react";
import Title from "../components/title";
import ArticleLeft from "../components/left-article";
import ArticleRight from "../components/right-article";
import Kiity1 from "../assets/img/about-1.png";
import Kiity2 from "../assets/img/about-2.png";

function About() {
  return (
    <div className="about">
      <Title title="we are " high="kittenz co." />
      <ArticleLeft
        name="brief"
        img={Kiity1}
        title="about the "
        accent="org."
        body="Kitten Ipsum dolor sit amet discovered siamesecalico peaceful her Gizmo peaceful boy rutrum caturday enim lived quis Mauris sit malesuada gf’s saved fringilla enim turpis, at mi kitties ham. Venenatis belly cat et boy bat dang saved nulla other porta ipsum mi chilling cat spoon tellus. Aliquet sapien Sed grandparents home, waffles congue amused Kitten Ipsum dolor sit amet discovered siamesecalico peaceful her Gizmo peaceful boy rutrum caturday enim lived quis Mauris sit malesuada gf’s saved fringilla enim turpis, at mi kitties ham. Venenatis belly cat et boy bat dang saved nulla other porta ipsum mi chilling cat spoon tellus. Aliquet sapien Sed grandparents home, waffles congue amused."
      />

      <ArticleRight
        name="mission"
        img={Kiity2}
        title="mission and "
        accent="vission."
        body="Kitten Ipsum dolor sit amet discovered siamesecalico peaceful her Gizmo peaceful boy rutrum caturday enim lived quis Mauris sit malesuada gf’s saved fringilla enim turpis, at mi kitties ham. Venenatis belly cat et boy bat dang saved nulla other porta ipsum mi chilling cat spoon tellus. Aliquet sapien Sed grandparents home, waffles congue amused Kitten Ipsum dolor sit amet discovered siamesecalico peaceful her Gizmo peaceful boy rutrum caturday enim lived quis Mauris sit malesuada gf’s saved fringilla enim turpis, at mi kitties ham. Venenatis belly cat et boy bat dang saved nulla other porta ipsum mi chilling cat spoon tellus. Aliquet sapien Sed grandparents home, waffles congue amused."
      />
    </div>
  );
}

export default About;
