import { motion } from 'framer-motion';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

interface CartItemProps {
  item: {
    id: number;
    name: string;
    price: number;
    quantity: number;
  };
  onUpdateQuantity: (productId: number, newQuantity: number) => void;
  onRemoveFromCart: (productId: number) => void;
  formatPrice: (price: number) => string;
}

const CartItem = ({ item, onUpdateQuantity, onRemoveFromCart, formatPrice }: CartItemProps) => {
  return (
    <motion.div 
      className="border-b pb-4"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-between items-start mb-2">
        <div className="flex-1">
          <h4 className="font-semibold text-gray-800">{item.name}</h4>
          <p className="text-sm text-gray-600">{formatPrice(item.price)}</p>
        </div>
        <motion.button
          onClick={() => onRemoveFromCart(item.id)}
          className="text-red-500 hover:text-red-700 cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <DeleteIcon />
        </motion.button>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center border rounded-md">
          <motion.button
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            className="p-1 hover:bg-gray-100 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <RemoveIcon className="text-gray-600" />
          </motion.button>
          <span className="px-3 py-1 text-gray-800">{item.quantity}</span>
          <motion.button
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="p-1 hover:bg-gray-100 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AddIcon className="text-gray-600" />
          </motion.button>
        </div>
        <span className="font-semibold text-gray-800">
          {formatPrice(item.price * item.quantity)}
        </span>
      </div>
    </motion.div>
  );
};

export default CartItem; 