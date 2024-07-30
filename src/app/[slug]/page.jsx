import Menu from "@/components/Menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, placeat rem possimus rerum mollitia earum libero facilis adipisci asperiores fugit doloribus debitis tenetur sed sapiente quam, necessitatibus nam odit ipsum?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, placeat rem possimus rerum mollitia earum libero facilis adipisci asperiores fugit doloribus debitis tenetur sed sapiente quam, necessitatibus nam odit ipsum?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, placeat rem possimus rerum mollitia earum libero facilis adipisci asperiores fugit doloribus debitis tenetur sed sapiente quam, necessitatibus nam odit ipsum?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, placeat rem possimus rerum mollitia earum libero facilis adipisci asperiores fugit doloribus debitis tenetur sed sapiente quam, necessitatibus nam odit ipsum?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, placeat rem possimus rerum mollitia earum libero facilis adipisci asperiores fugit doloribus debitis tenetur sed sapiente quam, necessitatibus nam odit ipsum?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, placeat rem possimus rerum mollitia earum libero facilis adipisci asperiores fugit doloribus debitis tenetur sed sapiente quam, necessitatibus nam odit ipsum?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, placeat rem possimus rerum mollitia earum libero facilis adipisci asperiores fugit doloribus debitis tenetur sed sapiente quam, necessitatibus nam odit ipsum?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, placeat rem possimus rerum mollitia earum libero facilis adipisci asperiores fugit doloribus debitis tenetur sed sapiente quam, necessitatibus nam odit ipsum?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, placeat rem possimus rerum mollitia earum libero facilis adipisci asperiores fugit doloribus debitis tenetur sed sapiente quam, necessitatibus nam odit ipsum?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, placeat rem possimus rerum mollitia earum libero facilis adipisci asperiores fugit doloribus debitis tenetur sed sapiente quam, necessitatibus nam odit ipsum?
            </p>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
