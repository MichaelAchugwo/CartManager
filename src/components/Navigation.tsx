import { motion } from 'framer-motion';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

interface NavigationProps {
  cartItemCount: number;
  onCartClick: () => void;
}

const Navigation = ({ cartItemCount, onCartClick }: NavigationProps) => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-8 py-4">
        <div className="flex justify-between items-center">
          <motion.h1 
            className="text-2xl font-bold text-gray-800"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Cart Manager
          </motion.h1>
          <motion.button
            onClick={onCartClick}
            className="relative bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AddShoppingCartIcon />
            {cartItemCount > 0 && (
              <motion.span 
                className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                {cartItemCount}
              </motion.span>
            )}
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 