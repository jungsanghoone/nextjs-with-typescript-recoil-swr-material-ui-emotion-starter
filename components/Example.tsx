import React from 'react';
import Link from 'next/link';

import useRequest from '../libs/useRequest';

export default function Example(): JSX.Element {
  const { data } = useRequest<string[]>({
    url: '/api/data',
  });
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Dynamic nested Route Example</h1>
      <div>
        {data
          ? data.map(project => (
              <p key={project}>
                <Link href="/[user]/[repo]" as={`/${project}`}>
                  <a>{project}</a>
                </Link>
              </p>
            ))
          : 'loading...'}
      </div>
    </div>
  );
}
