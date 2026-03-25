import Image from "next/image";
import styles from "./page.module.css";
import Theme from "./Theme";
import Box from './components/box'
import "./globals.css"
export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main} >
       <Theme/>
<Box/>
      </main>
    </div>
  );
}
