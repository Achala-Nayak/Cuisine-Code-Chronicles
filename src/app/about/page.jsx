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
            In my free time, you’ll find me playing the keyboard 🎹, listening to music 🎧, traveling 🌍, trying new cuisines 🍜, reading 📚, painting and drawing 🎨, and binge-watching shows and movies 🎬.
          </p>
    <br></br>  
          <p>
            Over the past few years, I’ve been actively involved in various clubs and events:
            <br />
            Coordinated events, conducted an open-source workshop for HacktoberFest 2023 with around 200 participants for GDSC PESU.Helped organize the Samarpana 2023 charity run to support Indian Armed Forces families.Led math workshops, organized hackathons like "Anveshana" and "Vicharaprapancha" for government students and managed major events like "Arithemania 2.0.Organized hackathons and workshops, contributed to the RERO Lab, and led the "Learning Path 2.0" online workshop series for IEEE RAS.
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
