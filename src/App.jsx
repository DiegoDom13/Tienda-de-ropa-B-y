import Header from './Components/Header'
import { useState, useEffect } from 'react'
import { db } from './data/db'
import Carrusel from './Components/Carrusel'
import Clothes from './Components/Clothes'
import Footer from './Components/Footer'


export default function App() {


  //valor inicial de carrito de compras. esto va servir para verificar si hay algun carrito previo en localstorage almacenado.
  const initialCart = () => {
    const localStorageCart = localStorage.getItem('cart')
    return localStorageCart ? JSON.parse(localStorageCart) : []
  }

  // nuestras constantes iniciales, data seria nuestro archivo con los objetos de la tienda, y cart el array de nuestro carrito de compras
  const [data] = useState(db)
  const [cart, setCart] = useState(initialCart)

  // categoria seleccionada en menu
  const [category, setCategory] = useState("all");

  // Con useEffect estamos analizando cuando cart cambie y segun el valor del array lo vamos almacenar en nuestro localstorage para que no se pierda nuestro carrito de compras, el array se convierte en string para poderlo almacenar en localstorage.
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  //funcion para agregar cosas al carrito.
  function addToCart(item) {

    // Busca en el array 'cart' el índice del primer elemento cuya propiedad 'id' coincida con 'item.id'.
    // Si el elemento existe, devuelve su índice; si no, devuelve -1.
    const itemExist = cart.findIndex((prenda) => prenda.id === item.id);

    //esto verifica si itemExist devolvio el indice de la posicion del articulo existente y ejecuta lo que esta en el if
    if (itemExist >= 0) {
      console.log('Este producto ya existe...')

      // Verifica si la cantidad del producto en el carrito ya es 5 o más.  
      // Si es así, sale de la función y no permite incrementar más.
      if (cart[itemExist].quantity >= 5) return

      // Crea una copia del carrito actual para evitar modificar el estado directamente.
      const updateCart = [...cart]
      // Incrementa en 1 la cantidad del producto encontrado en la copia del carrito.
      updateCart[itemExist].quantity++
      // Actualiza el estado del carrito con la nueva copia modificada.
      setCart(updateCart)
    } else {
      // Si el producto no existe en el carrito, se le asigna una cantidad inicial de 1.
      item.quantity = 1
      // Agrega el nuevo producto al carrito creando un nuevo array con los elementos actuales más el nuevo.
      setCart([...cart, item])
    }



  }

  function removeFromCart(id) {
    console.log('Eliminando...', id);

    setCart(prevCart => prevCart.filter(prenda => prenda.id !== id));
  }

  function incremCart(id) {
    console.log('Agregando...', id);

    const updatedCart = cart.map(item => {
      if (item.id === id && item.quantity < 5) {
        return {
          ...item,
          quantity: item.quantity + 1
        }
      }
      return item
    })

    setCart(updatedCart);
  }

  function decresCart(id) {
    console.log('Retirando...', id);

    const upDateCart = cart.map(item => {
      if (item.id === id && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1
        }
      }
      return item
    })

    setCart(upDateCart);
  }

  function clearCart() {
    setCart([]);
  }

  //filtro para mostrar productos segun su categoria activa 
  const filteredData = (category === "all") ? data : data.filter(prenda => prenda.category === category)


  return (
    <>

      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        incremCart={incremCart}
        decresCart={decresCart}
        clearCart={clearCart}
        setCategory={setCategory} // 👈 nuevo
      />

      {/*contenido principal*/}
      <main className='container-fluid main'>
        <h2 className="title-main">- A L L - I N - ONE . . .</h2>
        <Carrusel />

        <div className='container-lg mt-5 clothes'>
          <div className='row row-cols-2'>
            {filteredData.map((prenda) => (
              <Clothes
                key={prenda.id}
                prenda={prenda}
                addToCart={addToCart}
              />
            ))}
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}


