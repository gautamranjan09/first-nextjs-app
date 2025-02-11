import Link from 'next/link';
import './globals.css';

export default function Home() {
    return (
      <>
        <h1 className="text-3xl text-red-500">Welcome home!</h1>
        <Link href="/blog">Blog</Link>
        <Link href="/products">Product</Link>
      </>
    );
  }