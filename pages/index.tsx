import * as React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';
import Example from '../components/Example';
import InfiniteExample from '../components/InfiniteExample';
import Link from 'next/link';

export default function Index(): JSX.Element {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js SWR + Recoil Example
        </Typography>
        <Button variant={'contained'}>Next.js</Button>
        <div>
          <Link href={{ pathname: '/counter', query: { id: 'test' } }}>
            Counter Example
          </Link>
          <br />
          <Example />
          <br />
          <InfiniteExample />
        </div>
      </Box>
    </Container>
  );
}
