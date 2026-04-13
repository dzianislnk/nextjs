import styles from './page.module.css';
import {Inter} from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={inter.className}>
      Anarchy's on the way!
    </div>
  );
}

