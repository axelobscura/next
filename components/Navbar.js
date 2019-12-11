import Link from 'next/link';

const Navbar = () => {
  const styles ={
    display: 'flex',
    background: 'grey',
    justifyContent: 'space-between',
    padding: '1rem'
  }
  return(
    <div style={styles}>
      <Link href="/">
        <button>HOME</button>
      </Link>
      <Link href="/about">
        <button>ABOUT PAGE</button>
      </Link>
      <Link href="/contact">
        <a>CONTACT</a>
      </Link>
    </div>
  )
};

export default Navbar;