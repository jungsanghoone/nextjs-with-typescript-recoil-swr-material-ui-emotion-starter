import { usePaginatePosts } from '../libs/useRequest';
import Post from './Post';

export default function InfiniteExample(): JSX.Element {
  const { posts, error, isLoadingMore, size, setSize, isReachingEnd } =
    usePaginatePosts('https://jsonplaceholder.typicode.com/posts');
  if (error) return <h1>Something went wrong!</h1>;
  if (!posts) return <h1>Loading...</h1>;

  return (
    <div style={{ textAlign: 'center' }}>
      <div className="container">
        <h1>My Posts</h1>
        {posts.map(post => (
          <Post post={post} key={post.id} />
        ))}
        <button
          disabled={isLoadingMore || isReachingEnd}
          onClick={() => setSize(size + 1)}
        >
          {isLoadingMore
            ? 'Loading...'
            : isReachingEnd
            ? 'No more posts'
            : 'Load more'}
        </button>
        <style jsx global>
          {`
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body {
              font-family: 'Nunito', sans-serif;
              background: #222;
              color: #fff;
              font-size: 1rem;
            }
            a {
              color: #fff;
              text-align: center;
            }
            .container {
              max-width: 728px;
              margin: auto;
              padding: 1rem;
            }
            .container > h1 {
              text-align: center;
              text-transform: uppercase;
              margin-bottom: 1rem;
              font-size: 1.4rem;
            }
            h1 {
              text-transform: capitalize;
              font-size: 1.1rem;
            }
            button {
              display: block;
              margin: auto;
              padding: 0.5rem 1rem;
              font-size: 1rem;
              font-weight: 700;
              background: #0dbbac;
              color: #fff;
              border-radius: 20px;
              border: none;
              cursor: pointer;
            }
            .Card {
              background: #333;
              padding: 1rem;
              margin-bottom: 1rem;
            }
            .Card--body {
              color: #999;
            }
          `}
        </style>
      </div>
      ;
    </div>
  );
}
