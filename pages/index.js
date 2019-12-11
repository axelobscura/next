import Link from 'next/link';
const Index = () => (
  <div>
    <Link href="/about">
      <a>ABOUT PAGE</a>
    </Link>
    <Link href="/contact">
      <a>CONTACT</a>
    </Link>
    <h1>Hola Amigos</h1>
  </div>
);

export default Index;