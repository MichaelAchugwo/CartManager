import { motion, AnimatePresence } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import CartItem from './CartItem';
import CouponSection from './CouponSection';

interface CartItemType {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItemType[];
  couponCode: string;
  setCouponCode: (code: string) => void;
  isCouponApplied: boolean;
  discount: number;
  onUpdateQuantity: (productId: number, newQuantity: number) => void;
  onRemoveFromCart: (productId: number) => void;
  onApplyCoupon: () => void;
  onRemoveCoupon: () => void;
  calculateSubtotal: () => number;
  calculateTotal: () => number;
  formatPrice: (price: number) => string;
}

const Cart = ({
  isOpen,
  onClose,
  cart,
  couponCode,
  setCouponCode,
  isCouponApplied,
  discount,
  onUpdateQuantity,
  onRemoveFromCart,
  onApplyCoupon,
  onRemoveCoupon,
  calculateSubtotal,
  calculateTotal,
  formatPrice
}: CartProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-opacity-50 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl flex flex-col"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-semibold text-gray-700">Shopping Cart</h2>
              <motion.button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <CloseIcon />
              </motion.button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <motion.p 
                  className="text-gray-500 text-center py-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Your cart is empty
                </motion.p>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map((item) => (
                      <CartItem
                        key={item.id}
                        item={item}
                        onUpdateQuantity={onUpdateQuantity}
                        onRemoveFromCart={onRemoveFromCart}
                        formatPrice={formatPrice}
                      />
                    ))}
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal:</span>
                      <span>{formatPrice(calculateSubtotal())}</span>
                    </div>
                    {isCouponApplied && (
                      <motion.div 
                        className="flex justify-between text-green-600"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <span>Discount (13.2%):</span>
                        <span>-{formatPrice(discount)}</span>
                      </motion.div>
                    )}
                    <div className="border-t pt-3">
                      <div className="flex justify-between text-lg font-bold text-gray-800">
                        <span>Total:</span>
                        <span>{formatPrice(calculateTotal())}</span>
                      </div>
                    </div>
                  </div>

                  <CouponSection
                    couponCode={couponCode}
                    setCouponCode={setCouponCode}
                    isCouponApplied={isCouponApplied}
                    onApplyCoupon={onApplyCoupon}
                    onRemoveCoupon={onRemoveCoupon}
                  />

                  <motion.button 
                    className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition-colors font-semibold cursor-pointer mt-4"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Checkout
                  </motion.button>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Cart; 