"use client"; 

import React, { useState, useEffect } from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

const fetchPostData = async (postSlug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${postSlug}`, {
    // const res = await fetch(` https://cuisine-code-chronicles.vercel.app/api/posts/${postSlug}`, {
   
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch post data");
  }

  return res.json();
};

const truncateText = (text, length) => {
  if (!text) return "";
  let plainText = text.replace(/<[^>]*>/g, ''); 
  if (plainText.length <= length) return plainText;
  return plainText.slice(0, length) + "..."; 
};

const Featured = ({ postSlug }) => {
  const [post, setPost] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const getPostData = async () => {
      try {
        const data = await fetchPostData(postSlug);
        setPost(data);
      } catch (error) {
        console.error("Error fetching post data:", error);
      }
    };

    getPostData();
  }, [postSlug]);

  const handleReadMore = () => {
    router.push(`/posts/${postSlug}`);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Exploring Ideas, Sharing Stories, Inspiring Minds</b>
      </h1>
      {post && (
        <div className={styles.post}>
          <div className={styles.imgContainer}>
            <Image src={post.img} alt={post.title} fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.postTitle}>{post.title}</h1>
            <p className={styles.postDesc}>
              {truncateText(post.desc, 120)}
            </p>
            <button className={styles.button} onClick={handleReadMore}>
              Read More
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Featured;
