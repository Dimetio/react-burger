import styles from "./feed.module.css";

export default function Feed() {
  return (
    <>
      <div className={`${styles.page_container} pt-10 pl-4 pr-4`}>
        <div className={`${styles.column} pb-10`}>
          <section className="pb-2">
            <h2 className="text text_type_main-large mb-5">Лента заказов</h2>
          </section>
        </div>
        <div className={`${styles.column} pl-5 pt-20 pb-10`}></div>
      </div>
    </>
  );
}
