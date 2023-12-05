import { getProducts } from '@/prisma';
import { useEffect, useState } from 'react';

export const PromocionesCards = ({
    allProducts,
    setAllProducts,
    countProducts,
    setCountProducts,
    total,
    setTotal,
}) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const productsFromDB = await getProducts();
            setProducts(productsFromDB);
        };
        fetchProducts();
    }, []);
    const Products = products.slice(3, 8);
    const onAddProduct = product => {
        if (allProducts.find(item => item.id === product.id)) {
            const products = allProducts.map(item =>
                item.id === product.id
                    ? { ...item, cantidad: item.cantidad + 1 }
                    : item
            );
            setTotal(total + product.costo * product.cantidad);
            setCountProducts(countProducts + product.cantidad);
            return setAllProducts([...products]);
        }

        setTotal(total + product.costo * product.cantidad);
        setCountProducts(countProducts + product.cantidad);
        setAllProducts([...allProducts, product]);
    };
    return (
        <div className='grid md:grid-cols-3 grid-cols-1 gap-2 h-auto w-full p-2'>
            {Products.map(product => (
                <div className='my-2 md:my-7 md:w-full rounded-xl w-full h-auto border border-solid border-black' key={product.id}>
                    <div className="">
                        <img className='w-full h-auto object-cover rounded-xl' src={product.imagen} alt={product.titulo} />
                    </div>
                    <div className="flex flex-col items-center text-center m-4">
                        <h1 className="text-2xl font-bold mb-2">{product.titulo}</h1>
                        <p className="text-xl mb-4">S/{product.costo}</p>
                        <button className="bg-yellow-400 p-4 border border-solid border-black rounded-xl" onClick={() => onAddProduct(product)}>
                            Comprar
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

