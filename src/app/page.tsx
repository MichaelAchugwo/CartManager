'use client';

import { useState, useMemo, useEffect } from 'react';
import { toast } from 'react-toastify';
import products from '@/lib/products.json';
import Navigation from '@/components/Navigation';
import CategoryFilter from '@/components/CategoryFilter';
import ProductGrid from '@/components/ProductGrid';
import Cart from '@/components/Cart';
import { Product, CartItem } from '@/types';

const Home = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [couponCode, setCouponCode] = useState('');
  const [isCouponApplied, setIsCouponApplied] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(products.map(product => product.category))];
    return uniqueCategories.sort();
  }, []);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') {
      return products;
    }
    return products.filter(product => product.category === selectedCategory);
  }, [selectedCategory]);

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    return subtotal - discount;
  };

  useEffect(() => {
    if (isCouponApplied) {
      const subtotal = calculateSubtotal();
      const discountAmount = subtotal * 0.132;
      setDiscount(discountAmount);
    }
  }, [cart, isCouponApplied]);

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        if (existingItem.quantity >= product.stock) {
          toast.error('Maximum stock limit reached');
          return prevCart;
        }
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    toast.success(`${product.name} added to cart`);
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }

    const product = products.find(p => p.id === productId);
    if (product && newQuantity > product.stock) {
      toast.error('Cannot exceed available stock');
      return;
    }

    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const removeFromCart = (productId: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
    toast.success('Item removed from cart');
  };

  const validateCouponCode = (code: string) => {
    const couponRegex = /^POWERLABSx$/i;
    return couponRegex.test(code);
  };

  const applyCoupon = () => {
    if (!couponCode.trim()) {
      toast.error('Please enter a coupon code');
      return;
    }

    if (!validateCouponCode(couponCode)) {
      toast.error('Invalid coupon code');
      return;
    }

    if (isCouponApplied) {
      toast.error('Coupon already applied');
      return;
    }

    const subtotal = calculateSubtotal();
    const discountAmount = subtotal * 0.132;
    setDiscount(discountAmount);
    setIsCouponApplied(true);
    toast.success('Coupon applied successfully! 13.2% discount added');
  };

  const removeCoupon = () => {
    setDiscount(0);
    setIsCouponApplied(false);
    setCouponCode('');
    toast.success('Coupon removed');
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN'
    }).format(price);
  };

  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation 
        cartItemCount={getCartItemCount()}
        onCartClick={() => setIsCartOpen(true)}
      />
      
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      
      <ProductGrid 
        products={filteredProducts}
        onAddToCart={addToCart}
        formatPrice={formatPrice}
      />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        couponCode={couponCode}
        setCouponCode={setCouponCode}
        isCouponApplied={isCouponApplied}
        discount={discount}
        onUpdateQuantity={updateQuantity}
        onRemoveFromCart={removeFromCart}
        onApplyCoupon={applyCoupon}
        onRemoveCoupon={removeCoupon}
        calculateSubtotal={calculateSubtotal}
        calculateTotal={calculateTotal}
        formatPrice={formatPrice}
      />
    </div>
  );
};

export default Home;
