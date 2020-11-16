import React, { Component } from "react";
import Title from "./title";

class ArticleRight extends Component {
  state = {
    name: this.props.name,
    img: this.props.img,
    title: this.props.title,
    accent: this.props.accent,
    body: this.props.body,
  };
  render() {
    return (
      <article className={this.state.name} id="right">
        <div className="article__body">
          <Title title={this.state.title} high={this.state.accent} />
          <p>{this.state.body}</p>
        </div>
        <img src={this.state.img} alt="" className="article__img" />
      </article>
    );
  }
}

export default ArticleRight;
