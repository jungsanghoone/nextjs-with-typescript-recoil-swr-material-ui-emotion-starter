import React from 'react';
import Link from 'next/link';
import useRequest from '../../libs/useRequest';

type Data = {
  user: string;
  repo: string;
};

type Param = {
  query: {
    user: string;
    repo: string;
  };
};
export default function Repo({ user, repo }: Data): JSX.Element {
  //const id = typeof window !== 'undefined' ? window.location.pathname.slice(1) : '';
  const id = `${user}/${repo}`;
  const { data } = useRequest<{
    forks_count: number;
    stargazers_count: number;
    watchers: number;
    language: string;
  }>({
    url: '/api/data',
    params: { id },
  });

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{id}</h1>
      {data ? (
        <div>
          <p>forks: {data.forks_count}</p>
          <p>stars: {data.stargazers_count}</p>
          <p>watchers: {data.watchers}</p>
          <p>language: {data.language}</p>
        </div>
      ) : (
        'loading...'
      )}
      <br />
      <br />
      <Link href="/">
        <a>Back</a>
      </Link>
    </div>
  );
}

Repo.getInitialProps = ({ query: { user, repo } }: Param) => {
  return { user, repo };
};
