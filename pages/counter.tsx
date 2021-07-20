import Counter from '../components/Counter';

type Data = {
  id: string;
};

type Param = {
  query: {
    id: string;
  };
};
export default function CounterPage({ id }: Data): JSX.Element {
  // const router = useRouter();
  //   const {
  //     query: { id },
  //   } = router;
  console.log('id', id);
  return (
    <div style={{ textAlign: 'center' }}>
      <Counter />
    </div>
  );
}

CounterPage.getInitialProps = ({ query: { id } }: Param) => {
  return { id };
};
