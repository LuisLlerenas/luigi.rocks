import type { NextPage } from 'next';

// components
import { Container } from 'components/layout/Container';
import { Hero } from 'components/index/Hero';

const Home: NextPage = () => (
  <Container>
    <Hero />  
  </Container>
);

export default Home;
