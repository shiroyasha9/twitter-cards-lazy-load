import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import LazyLoad from 'react-lazy-load';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return (
      <div className='post'>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className='post'>
      <Scrollbars style={{ height: '90vh', width: '90vw' }}>
        {posts.map(post => (
          <LazyLoad key={post.id}>
            <div className='post-item'>
              <h4>{post.title}</h4>
              <hr />
              <p>{post.body}</p>
              <p>
                <i>Submitted by userID: {post.userId}</i>
              </p>
            </div>
          </LazyLoad>
        ))}
      </Scrollbars>
    </div>
  );
};

export default Posts;
