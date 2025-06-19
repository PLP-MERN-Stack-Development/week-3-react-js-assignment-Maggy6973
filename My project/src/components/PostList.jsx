import React from 'react';
import { useState, useEffect } from 'react';
import { fetchPosts } from '../services/api';
import Card from './ui/Card';
import Button from './ui/Button';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [search, setSearch] = useState('');

  const loadPosts = async (pageNum = 1, reset = false) => {
    try {
      setLoading(true);
      setError(null);
      const newPosts = await fetchPosts(pageNum, 10);
      
      if (newPosts.length === 0) {
        setHasMore(false);
      } else {
        setPosts(prev => reset ? newPosts : [...prev, ...newPosts]);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPosts(1, true);
  }, []);

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    loadPosts(nextPage, false);
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase()) ||
    post.body.toLowerCase().includes(search.toLowerCase())
  );

  if (error) {
    return (
      <Card className="max-w-4xl mx-auto">
        <div className="text-center text-red-600">
          <p>Error: {error}</p>
          <Button onClick={() => loadPosts(1, true)} variant="primary" className="mt-4">
            Try Again
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search posts..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-white"
        />
      </div>

      {/* Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {filteredPosts.map(post => (
          <Card key={post.id} className="h-full">
            <h3 className="text-lg font-semibold mb-2 capitalize dark:text-white">
              {post.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
              {post.body}
            </p>
            <div className="mt-4 text-xs text-gray-500">
              Post ID: {post.id} | User ID: {post.userId}
            </div>
          </Card>
        ))}
      </div>

      {/* Loading State */}
      {loading && (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Loading posts...</p>
        </div>
      )}

      {/* Load More Button */}
      {!loading && hasMore && filteredPosts.length > 0 && (
        <div className="text-center">
          <Button onClick={loadMore} variant="primary">
            Load More Posts
          </Button>
        </div>
      )}

      {/* No Results */}
      {!loading && filteredPosts.length === 0 && search && (
        <Card className="text-center">
          <p className="text-gray-600 dark:text-gray-400">
            No posts found matching "{search}"
          </p>
        </Card>
      )}
    </div>
  );
};

export default PostList;