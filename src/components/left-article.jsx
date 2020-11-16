import React, { Component } from "react";
import Title from "./title";

class ArticleLeft extends Component {
  state = {
    name: this.props.name,
    img: this.props.img,
    title: this.props.title,
    accent: this.props.accent,
    body: this.props.body,
  };
  render() {
    return (
      <article className={this.state.name} id="left">
        <img src={this.state.img} alt="" className="article__img" />
        <div className="article__body">
          <Title title={this.state.title} high={this.state.accent} />
          <p>{this.state.body}</p>
        </div>
      </article>
    );
  }
}

export default ArticleLeft;
