import Image from "next/image";
import styles from "./page.module.css";
import Theme from "./Theme";
export default function Home() {
  return (
    <div className={styles.page}>
      <main >
       <Theme/>
      </main>
    </div>
  );
}
