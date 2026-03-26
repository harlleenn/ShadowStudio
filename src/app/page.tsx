import Image from "next/image";
import styles from "./page.module.css";
import Theme from "./Theme";
import Box from './components/Box/box'
import Slider from './components/Slider/Slider'
import "./globals.css"
export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main} >
       <Theme/>
    <Box/>
    <Slider/>
      </main>
    </div>
  );
}
