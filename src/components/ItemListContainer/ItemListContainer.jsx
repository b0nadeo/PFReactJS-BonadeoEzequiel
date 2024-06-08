import ItemList from "./ItemList";
import './ItemListContainer.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {collection, getDocs, query, where} from "firebase/firestore";
import db from "../../db/db.js";
import Loading from "../Loading.jsx/Loading.jsx";

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);

  const {idCategory} = useParams()
  console.log(idCategory);

  const [loading, setLoading] = useState(false)

  const getProducts = () => {
    setLoading(true)
    const productsRef = collection(db, "products")
    getDocs(productsRef)
      .then((productsDb) => {
        const data = productsDb.docs.map((product) => {
          return {id:product.id, ...product.data()}
        })
        setProducts(data)
        
      })
      .catch(error => {console.error(error)})
      .finally(()=> setLoading(false))
  }

  const getProductsByCategory = () => {
    setLoading(true)
    const productsRef = collection(db, "products")
    const q = query(productsRef, where("category", "==", idCategory))
    getDocs(q)
      .then((productsDb) => {
        const data = productsDb.docs.map((product) => {
          return{id:product.id, ...product.data()}
        })
        setProducts(data)
      })
      .finally(()=> setLoading(false))
      .catch(error => {console.error(error)})
  }
  
  useEffect(()=>{
    if(idCategory){
      getProductsByCategory()
    }else{
getProducts()
    }
  },[idCategory]);

  

  return (
      <div className="text-center pt-3">
        <h2 className="tipografiamenu">{idCategory ? `Categoría ${idCategory}` : "Bienvenido a Nakama Store"}</h2>
      {
        loading? <Loading/> : <ItemList products={products}/>
      }

      </div>
      
  )
}

export default ItemListContainer