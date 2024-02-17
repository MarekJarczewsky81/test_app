import styles from "./List.module.scss";
import Column from "../Column/Column.js";
import ColumnForm from "../ColumnForm/ColumnForm.js";
import shortid from "shortid";
import { useState } from "react";


const List = () => {

  const [columns, setColumns] = useState([
    { id: 1, title: "Books", icon: "book" },
    { id: 2, title: "Movies", icon: "film" },
    { id: 3, title: "Games", icon: "gamepad" },
  ]);

  const addColumn = newColumn => {
    setColumns([...columns, { id: shortid(), title: newColumn.title }]);
  };
  
return (
  <div className={styles.list}>
    <header className={styles.header}>
      <h2 className={styles.title}>
        Things to do <span>soon!</span>
      </h2>
    </header>
    <p className={styles.description}>
      Interesting things I want to check out!
    </p>
    <section className={styles.columns}>
      {columns.map((column) => (
        <Column key={column.id} title={column.title} icon={column.icon} />
      ))}
      {/* <form onSubmit={handleSubmit}> */}
      <ColumnForm action={addColumn} />
      {/* </form> */}
      {/* <Column title="Books" icon="book" />
        <Column title="Movies" icon="film"/>
        <Column title="Games" icon="gamepad" /> */}
    </section>
  </div>
);
};      

export default List;


// elem.eventListener('change',function(e) {
//   setValue(e.target.value)}); 
// === 
// onChange={e => setValue(e.target.value)}


// e => setValue(e.target.value)
// ===
// e => { return setValue(e.target.value) }