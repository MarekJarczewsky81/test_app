import styles from "./SearchForm.module.scss";
import TextInput from "../TextInput/TextInput";

const SearchForm = () => {
  return (
    <form className={styles.searchForm}>
      <TextInput placeholder="Search…" />
      <button className={styles.button}>Search</button>
    </form>
  );
};

export default SearchForm;
