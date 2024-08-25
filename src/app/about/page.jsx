import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <div className={styles.text}>
          <h1>About Me</h1>
          <p>
            Hi, I'm Achala Nayak! I'm currently in my 4th year of engineering at PES University, majoring in Computer Science and Engineering. I’m a tech enthusiast who loves exploring new technologies and building cool things—whether it's coding, designing, or creating innovative applications.
          </p>
          <p>
            I dive into diverse tech stacks, stay on top of the latest trends, and have a strong eagerness to learn and grow. I also thrive on collaboration and enjoy bringing fresh ideas to life. 🚀
          </p>
          <p>
            In my free time, you’ll find me playing the keyboard 🎹, listening to music 🎧, traveling 🌍, trying new cuisines 🍜, reading 📚, painting and drawing 🎨, watching shows and movies 🎬.
          </p>
    <br></br>  
          <p>
          Over the past few years, I’ve actively participated in various clubs and events.
           
            For GDSC PESU, I coordinated events and led an open-source workshop during HacktoberFest 2023, which saw around 200 participants. I also played a significant role in organizing the Samarpana 2023 charity run, aimed at supporting families of the Indian Armed Forces.In addition, I led math workshops and organized hackathons such as "Anveshana" and "Vicharaprapancha" for government students, while also managing major events like "Arithemania 2.0." For IEEE RAS, I organized hackathons and workshops, contributed to the RERO Lab, and led the "Learning Path 2.0" online workshop series.
            <br />
          </p>
          <br></br>
          <p>
            I also participated in the PwC Launchpad Program – Salesforce, where I gained hands-on experience in software engineering, MySQL databases, OOP with Java, and Salesforce CRM.
          </p>
          <br></br>
          <p>
            Feel free to connect if you're interested! 🌟
          </p>
        </div>
        <img src="/Achala.jpg" alt="Achala Nayak" className={styles.picture} />
      </div>
    </div>
  );
};

export default AboutPage;
