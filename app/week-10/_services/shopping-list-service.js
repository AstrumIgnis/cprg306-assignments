import { db } from "../_utils/firebase";
import { where, collection, getDocs, addDoc, query } from "firebase/firestore";



export async function getItems(userId) {
    const q = query(
        collection(db, "users", userId, "items"),
        where("quantity", ">=", 1)
    );

    const itemsSnapshot = await getDocs(q);

    const items = [];
    itemsSnapshot.forEach((doc) => {
        items.push({
            id: doc.id,
            ...doc.data()
        });
    });

    return items;
}

export async function addItem(userId, item) {
    const colRef = collection(db, "users", userId, "items");
    const docRef = await addDoc(colRef, item);

    return docRef.id;
}