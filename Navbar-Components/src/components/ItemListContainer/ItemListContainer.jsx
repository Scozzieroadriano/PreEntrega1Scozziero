import styles from "./ItemListContainer.module.css";
const ItemListContainer = ({ greeting }) =>{
    return (
        <div className={styles["item-list-container"]}>
            <h2>{greeting}</h2>
        </div>
    );
};
export default ItemListContainer;