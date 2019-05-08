import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import { Loading } from '../../static';
import { loadPosts } from '../../duck/actions/blogActions';

class Blog extends Component {
  static propTypes = {
    actionLoadPosts: PropTypes.func.isRequired,
    blog: PropTypes.object.isRequired
  }

  state = {
    start: 0,
    hasMore: true
  }

  loadPostsHandler = () => {
    const { actionLoadPosts, blog } = this.props;
    const { start } = this.state;
    const currentPostLength = blog.posts.items.length;
    actionLoadPosts(start);
    this.setState({ start: start + 2 }, () => {
      if (currentPostLength === blog.posts.items.length) {
        this.setState({ hasMore: false });
      }
    });
  }

  render() {
    const posts = [];
    const { hasMore } = this.state;
    const { blog } = this.props;
    blog.posts.items.forEach((post, i) => {
      posts.push(
        <div
        // eslint-disable-next-line react/no-array-index-key
          key={`fufuf${i}`}
          style={{
            backgroundColor: 'lightgreen', height: 400, width: 100, margin: 20
          }}
        >
          {post.title}
        </div>
      );
    });
    return (
      <section className="std_container section_padding_std">
        <h1>Блог</h1>
        <InfiniteScroll
          loadMore={() => { this.loadPostsHandler(); }}
          hasMore={hasMore}
          loader={<Loading />}
        >
          {posts}
        </InfiniteScroll>
      </section>
    );
  }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps, { actionLoadPosts: loadPosts })(Blog);
