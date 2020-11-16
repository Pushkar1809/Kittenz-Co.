import React from "react";
import Title from "../components/title";
import ArticleLeft from "../components/left-article";
import ArticleRight from "../components/right-article";
import neko from "../assets/img/kitty-neko.png";
import kalo from "../assets/img/kitty-kalo.png";
import oscii from "../assets/img/kitty-oscii.png";
import pampi from "../assets/img/kitty-pampi.png";
import karzi from "../assets/img/kitty-karzi.png";

function Kitties() {
  return (
    <div className="shop">
      <Title title="Say " high="Meow!!!" />
      <ArticleLeft
        name="kitty--neko"
        img={neko}
        title="neko"
        accent="."
        body="Kitten Ipsum dolor sit amet discovered siamesecalico peaceful her Gizmo peaceful boy rutrum caturday enim lived quis Mauris sit malesuada gf’s saved fringilla enim turpis, at mi kitties ham. Venenatis belly cat et boy bat dang saved nulla other porta ipsum mi chilling cat spoon tellus. Aliquet sapien Sed grandparents home, waffles congue amused."
      />
      <ArticleRight
        name="kitty--kalo"
        img={kalo}
        title="kalo"
        accent="."
        body="Kitten Ipsum dolor sit amet discovered siamesecalico peaceful her Gizmo peaceful boy rutrum caturday enim lived quis Mauris sit malesuada gf’s saved fringilla enim turpis, at mi kitties ham. Venenatis belly cat et boy bat dang saved nulla other porta ipsum mi chilling cat spoon tellus. Aliquet sapien Sed grandparents home, waffles congue amused."
      />
      <ArticleLeft
        name="kitty--oscii"
        img={oscii}
        title="oscii"
        accent="."
        body="Kitten Ipsum dolor sit amet discovered siamesecalico peaceful her Gizmo peaceful boy rutrum caturday enim lived quis Mauris sit malesuada gf’s saved fringilla enim turpis, at mi kitties ham. Venenatis belly cat et boy bat dang saved nulla other porta ipsum mi chilling cat spoon tellus. Aliquet sapien Sed grandparents home, waffles congue amused."
      />
      <ArticleRight
        name="kitty--pampi"
        img={pampi}
        title="pampi"
        accent="."
        body="Kitten Ipsum dolor sit amet discovered siamesecalico peaceful her Gizmo peaceful boy rutrum caturday enim lived quis Mauris sit malesuada gf’s saved fringilla enim turpis, at mi kitties ham. Venenatis belly cat et boy bat dang saved nulla other porta ipsum mi chilling cat spoon tellus. Aliquet sapien Sed grandparents home, waffles congue amused."
      />
      <ArticleLeft
        name="kitty--karzi"
        img={karzi}
        title="karzi"
        accent="."
        body="Kitten Ipsum dolor sit amet discovered siamesecalico peaceful her Gizmo peaceful boy rutrum caturday enim lived quis Mauris sit malesuada gf’s saved fringilla enim turpis, at mi kitties ham. Venenatis belly cat et boy bat dang saved nulla other porta ipsum mi chilling cat spoon tellus. Aliquet sapien Sed grandparents home, waffles congue amused."
      />
      <h3 className="see-more">Even more Kitties....</h3>
    </div>
  );
}

export default Kitties;
