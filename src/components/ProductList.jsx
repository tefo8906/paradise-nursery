import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cart/CartSlice';

const plants = [
  { id: 1, category: 'Air Purifying Plants', name: 'Snake Plant', price: 18, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=500&q=80' },
  { id: 2, category: 'Air Purifying Plants', name: 'Peace Lily', price: 22, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=500&q=80' },
  { id: 3, category: 'Air Purifying Plants', name: 'Spider Plant', price: 15, image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=500&q=80' },
  { id: 4, category: 'Air Purifying Plants', name: 'ZZ Plant', price: 25, image: 'https://images.unsplash.com/photo-1614594575927-5d0c5f6c9e7e?auto=format&fit=crop&w=500&q=80' },
  { id: 5, category: 'Air Purifying Plants', name: 'Rubber Plant', price: 28, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80' },
  { id: 6, category: 'Air Purifying Plants', name: 'Aloe Vera', price: 14, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80' },
  { id: 7, category: 'Succulents', name: 'Echeveria', price: 12, image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=500&q=80' },
  { id: 8, category: 'Succulents', name: 'Jade Plant', price: 16, image: 'https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&w=500&q=80' },
  { id: 9, category: 'Succulents', name: 'Haworthia', price: 13, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=500&q=80' },
  { id: 10, category: 'Succulents', name: 'String of Pearls', price: 20, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80' },
  { id: 11, category: 'Succulents', name: 'Panda Plant', price: 17, image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=500&q=80' },
  { id: 12, category: 'Succulents', name: 'Burro Tail', price: 19, image: 'https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&w=500&q=80' },
  { id: 13, category: 'Tropical Plants', name: 'Monstera', price: 35, image: 'https://images.unsplash.com/photo-1614594575927-5d0c5f6c9e7e?auto=format&fit=crop&w=500&q=80' },
  { id: 14, category: 'Tropical Plants', name: 'Bird of Paradise', price: 42, image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=500&q=80' },
  { id: 15, category: 'Tropical Plants', name: 'Calathea', price: 29, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=500&q=80' },
  { id: 16, category: 'Tropical Plants', name: 'Philodendron', price: 27, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=500&q=80' },
  { id: 17, category: 'Tropical Plants', name: 'Fiddle Leaf Fig', price: 38, image: 'https://images.unsplash.com/photo-1597055181300-5f4b5c6d6c0b?auto=format&fit=crop&w=500&q=80' },
  { id: 18, category: 'Tropical Plants', name: 'Bromeliad', price: 24, image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=500&q=80' }
];

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const categories = [...new Set(plants.map(plant => plant.category))];

  return (
    <main className="products-page">
      <div className="page-heading">
        <h1>Our Plants</h1>
        <p>Choose your perfect plant and bring a little paradise home.</p>
      </div>
      {categories.map(category => (
        <section className="category" key={category}>
          <h2>{category}</h2>
          <div className="plant-grid">
            {plants.filter(plant => plant.category === category).map(plant => {
              const inCart = cartItems.some(item => item.id === plant.id);
              return (
                <article className="plant-card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} />
                  <div className="plant-info">
                    <h3>{plant.name}</h3>
                    <p className="price">${plant.price.toFixed(2)}</p>
                    <button disabled={inCart} onClick={() => dispatch(addToCart(plant))}>
                      {inCart ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
}
