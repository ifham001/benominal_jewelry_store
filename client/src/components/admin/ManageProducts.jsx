"use client";
import React, { useEffect, useState } from "react";
import ProductSubDisplayAdmin from "@/ui/admin/product/ProductSubDisplayAdmin";
import { useDispatch, useSelector } from "react-redux";
import { showNotification } from "@/store/user/slices/Notification";
import CartPageLoading from "@/ui/loading/CartPageLoading";


const url =process.env.NEXT_PUBLIC_ADMIN_ROUTE_URL

function ManageProducts() {
  const dispatch = useDispatch();
  const [category, setCategory] = useState("necklaces");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const {token} = useSelector(state=>state.adminAuth)

  const fetchProductsByCategory = async (selectedCategory) => {
   
    try {
      setLoading(true);
      const response = await fetch(`${url}/products/${selectedCategory}`,{
        headers:{
          Authorization: `Bearer ${token}`,
        }
      });
      const data = await response.json();

      if (!response.ok) {
        return dispatch(showNotification({message:data.message || "Failed to fetch products"}));
      }

      // console.log(data)
       setProducts(data.products || []);
    } catch (err) {
     
     return dispatch(showNotification({ message: "Failed to load products", type: "error" }));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductsByCategory(category);
  }, [category]);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setProducts([])
  };

  const onAddStock = async ({ productId, stocksQuantity }) => {
    if (!productId) return;

    const confirmed = window.confirm(`Are you sure you want to add ${stocksQuantity} unit(s) to this product?`);
    if (!confirmed) return;

    try {
      setLoading(true)
      const response = await fetch(`${url}/add-stock`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId, stocksQuantity }),
      });

      const data = await response.json();

      if (!response.ok) {
        setLoading(false)
        return dispatch(showNotification({message:data.message||'Failed to add stock',type:'error'}))
      }
      if(data.success){
        setLoading(false)
        dispatch(showNotification({ message: "Stock added successfully", type: "success" }));
        return fetchProductsByCategory(category);
      }
      
      
       // Refresh list
    } catch (err) {
        setLoading(false)
      return dispatch(showNotification({ message: "Try again, something went wrong", type: "error" }));
    }
  };

  const onDeleteProduct = async (productId) => {
    if (!productId) return;

    const confirmed = window.confirm("Are you sure you want to delete this product?");
    if (!confirmed) return;

    try {
      setLoading(true)
      const response = await fetch(`${url}/delete-product/${productId}`,{
        headers:{Authorization: `Bearer ${token}`,}
       

      });
      const data = await response.json();

      if (!response.ok) {
        setLoading(false)
        return dispatch(showNotification({messgae:data.message || "Failed to delete product"}));
      }
      if(data.success){
        setLoading(false)
        setProducts(products=>products.filter(product=>product._id !== productId))
       return dispatch(showNotification({ message: "Product deleted successfully", type: "success" }));
      }

      
      
    } catch (err) {
      setLoading(false)
      return dispatch(showNotification({ message: "Something went wrong", type: "error" }));
    }
  };
  if(loading) return <CartPageLoading/>
  return (
    <div>
      <h1 className="flex justify-center text-xl capitalize mt-4">{category}</h1>

      <div className="p-4 flex justify-end">
        <div>
          <label className="block mb-1 text-sm font-medium">Select Category:</label>
          <select
            onChange={handleCategoryChange}
            value={category}
            className="border px-3 py-2 rounded-md"
          >
            <option value="necklaces">Necklaces</option>
            <option value="bracelets">Bracelets</option>
            <option value="earrings">Earrings</option>
            <option value="rings">Rings</option>
          </select>
        </div>
      </div>

     {products.length === 0 ? 
        <p className="text-center py-10 text-gray-500">No products found in this category.</p>
      :
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {products.map((product) => (
            <ProductSubDisplayAdmin
              key={product._id}
              productId={product._id}
              title={product.title}
              price={product.price}
              stock={product.stocksQuantity}
              color={product.color}
              image={product.images[0]}
              onAddStock={onAddStock}
              onDelete={onDeleteProduct}
            />
          ))}
        </div>
}
    </div>
  );
}

export default ManageProducts;
