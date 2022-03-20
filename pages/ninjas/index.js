import styles from "../../styles/ninjas.module.css";

export const getStaticProps = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return {
      props: {
        ninjas: data,
      },
    };
  } catch (e) {
    return {
      props: {
        ninjas: [],
        error: e,
      },
    };
  }
};

const Ninjas = ({ ninjas }) => {
  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas &&
        ninjas.map((ninja) => (
          <div key={ninja.id}>
            <a className={styles.single}>
              <h3>{ninja.name}</h3>
            </a>
          </div>
        ))}
    </div>
  );
};

export default Ninjas;
