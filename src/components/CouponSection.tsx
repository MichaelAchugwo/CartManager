import { motion } from 'framer-motion';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

interface CouponSectionProps {
  couponCode: string;
  setCouponCode: (code: string) => void;
  isCouponApplied: boolean;
  onApplyCoupon: () => void;
  onRemoveCoupon: () => void;
}

const CouponSection = ({ 
  couponCode, 
  setCouponCode, 
  isCouponApplied, 
  onApplyCoupon, 
  onRemoveCoupon 
}: CouponSectionProps) => {
  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input
          type="text"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          placeholder="Enter coupon code"
          className="flex-1 px-3 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isCouponApplied}
        />
        {!isCouponApplied ? (
          <motion.button
            onClick={onApplyCoupon}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors flex items-center gap-1 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <LocalOfferIcon />
            Apply
          </motion.button>
        ) : (
          <motion.button
            onClick={onRemoveCoupon}
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Remove
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default CouponSection; 