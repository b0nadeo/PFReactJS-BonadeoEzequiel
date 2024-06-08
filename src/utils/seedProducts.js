import { addDoc, collection } from "firebase/firestore"
import db from "../db/db.js"

const products = [

    {
        id: "shonen1",
        name: "Dragon Ball",
        description: "Autor: Akira Toriyama. Sinopsis: Dragon Ball es uno de los mangas más reconocidos a nivel mundial, que originalmente fue publicado en la Shonen Jump de Shueisha entre 1984 y 1995. Cuenta lahistoria de Son Goku, el guerrero que, junto a sus amigos, protege a la Tierra de los más diversos y poderosos enemigos desde que es un chico hasta que es un adulto. Una serie que arranca con aventura y prosigue con mucha acción, aunque también algo de comedia.", 
        price: 5500, 
        stock: 5, 
        category: "Shonen", 
        image: "../src/assets/shonen1dragonball.jpg"
    },
    {
        id: "shonen2",
        name: "Naruto",
        description: "Autor: Masashi Kishimoto. Sinopsis: La obra narra la historia de un ninja adolescente llamado Naruto Uzumaki, quien aspira a convertirse en Hokage, líder de su aldea, con el propósito de ser reconocido como alguien importante dentro de la aldea y entre sus compañeros.",
        price: 6500, 
        stock: 11, 
        category: "Shonen", 
        image: "../src/assets/shonen2naruto.jpg"
    },
    {
        id: "shonen3",
        name: "Black Clover",
        description: "Autor: Yuki Tabata. Sinopsis: Asta, un niño que no tiene el poder de hacer magia lucha por obtener el título de Rey Mago, mientras cuatro antiguos Reyes Magos reaparecen para destruir el Reino del Trébol.", 
        price: 5500, 
        stock: 23, 
        category: "Shonen", 
        image: "../src/assets/shonen3blackclover.jpg"
    },
    {
        id: "shonen4",
        name: "Spy X Family",
        description: "Autor: Tatsuya Endo. Sinopsis: Spy × Family narra las aventuras del agente secreto Twilight, quien (bajo su identidad civil de Loid Forger) debe formar una familia para cumplir una misión y mantener la paz entre los países ficticios Ostania y Westalis.",
        price: 5500, 
        stock: 7, 
        category: "Shonen", 
        image: "../src/assets/shonen4spyxfamily.jpg"
    },
    {
        id: "shojo1",
        name: "Cardcaptor Sakura Clear Card",
        description: "Autor: Grupo Clamp. Sinopsis: La historia trata sobre las aventuras y sentimientos de una niña llamada Sakura Kinomoto cuya tarea principal es capturar y cuidar unas cartas con poderes mágicos llamadas cartas clow.", 
        price: 5500, 
        stock: 19, 
        category: "Shojo", 
        image: "../src/assets/shojo1sakura.jpg"
    },
    {
        id: "shojo2",
        name: "Sailor Moon",
        description: "Autor: Naoko Takeuchi. Sinopsis: La historia se centra en las aventuras de una adolescente llamada Usagi Tsukino, quien se transforma en una poderosa guerrera conocida como Sailor Moon y lucha contra aquellos que buscan destruir el Sistema Solar.", 
        price: 5500, 
        stock: 6, 
        category: "Shojo", 
        image: "../src/assets/shojo2sailormoon.jpg"
    },
    {
        id: "shojo3",
        name: "Nana",
        description: "Autor: Ai Yazawa. Sinopsis: El personaje de Nana Komatsu se caracteriza por ser romántica y un poco inocente, mientras que Nana Osaki es todo lo contrario a ella, ya que el temperamento y personalidad están más forzados. Ambas se encuentran en un tren que tiene como destino Tokio, cada una emprende el viaje para poder alcanzar sus sueños.", 
        price: 5500, 
        stock: 9, 
        category: "Shojo", 
        image: "../src/assets/shojo3nana.jpg"
    },
    {
        id: "shojo4",
        name: "Clover",
        description: "Autor: Grupo Clamp. Sinopsis: La historia se desarrolla en un futuro distópico donde algunas personas nacen con poderes mágicos que les permiten controlar la tecnología y con ello, por ejemplo, pueden teleportarse o hacer aparecer armas.", 
        price: 5500, 
        stock: 2, 
        category: "Shojo", 
        image: "../src/assets/shojo4clover.jpg"
    },
]

const seedProducts = () => {
    products.map(({id, ...rest}) => {
        addDoc(collection(db, "products"), rest)
    })
}

seedProducts()