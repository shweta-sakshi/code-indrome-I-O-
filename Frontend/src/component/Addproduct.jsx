import { useState } from "react"
import Itemlist from "./ItemList"
import Cart from "./Cart"
import Bill from "./Bill"



function App() {

  const userId = useParams();//.....how to get this
  const [card, setCard] = useState([]);
  useEffect(() => {
    let token = localStorage.getItem("usersdatatoken");
    fetch('/api/get-all-orders/userId', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      }
    }).then(res => res.json())
      .then(result => {
        setCard(result.posts)
      })
  }, [])

  useEffect(() => {
    setTimeout(() => {
      DashboardValid();
      setData(true);
    }, 2000);
  }, []);

  const [quat, setQuantity] = useState([
    { id: 1, name: "Agricultural Products", price: 500, qty: 0 },
    { id: 2, name: "Medical Products", price: 50, qty: 0 },
    { id: 3, name: "Household Products", price: 50, qty: 0 },
    { id: 4, name: "Laboratory chemicals", price: 300, qty: 0 },
    { id: 5, name: "Pesticides", price: 200, qty: 0 },
    { id: 6, name: "Fertlizers", price: 123, qty: 0 },
  ])

  const handleAddItem = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        const currentQuantity = item.qty + 1
        return { ...item, qty: currentQuantity }
      }

      return item
    })

    setItems(updatedItems)
  }

  const handleRemoveItem = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id && item.qty) {
        const currentQuantity = item.qty - 1
        return { ...item, qty: currentQuantity }
      }

      return item
    })

    setItems(updatedItems)
  }

  const handleRemoveAllItems = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, qty: 0 }
      }
      return item
    })

    setItems(updatedItems)
  }

  return (
    <div>
      <Itemlist
        items={items}
        addToCart={handleAddItem}
        removeFromCart={handleRemoveItem}
      />
      <div className="flex items-start justify-center">
        <Cart items={items} removeAllFromCart={handleRemoveAllItems} />
        <Bill items={items} />
      </div>
    </div>
  )
}

export default App