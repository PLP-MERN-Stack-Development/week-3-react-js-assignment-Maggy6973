import React from 'react';
import PostList from '../components/PostList';

const Posts = () => {
  return (
    <div className="animate-slide-up">
      <h1 className="text-3xl font-bold mb-8 text-center dark:text-white">Latest Posts</h1>
      <PostList />
    </div>
  );
};

export default Posts;