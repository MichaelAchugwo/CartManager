# Cart Manager

A modern, responsive e-commerce cart management application built with Next.js, TypeScript, and Tailwind CSS. Features a beautiful slide-in cart, category filtering, coupon system, and smooth animations.

## 🚀 Features

### Core Functionality
- **Product Catalog**: Browse Nigerian products with detailed information
- **Shopping Cart**: Add, remove, and update product quantities
- **Category Filtering**: Filter products by category (Food, Clothing, Cooking, etc.)
- **Coupon System**: Apply discount codes (use `POWERLABSx` for 13.2% discount)
- **Real-time Calculations**: Automatic subtotal, discount, and total calculations
- **Stock Management**: Prevents adding more items than available stock

### User Experience
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Slide-in Cart**: Modern slide-in cart with backdrop blur effect
- **Smooth Animations**: Framer Motion animations throughout the interface
- **Toast Notifications**: Real-time feedback for user actions
- **Material UI Icons**: Professional iconography for better UX

### Technical Features
- **TypeScript**: Full type safety and better development experience
- **Component Architecture**: Modular, reusable components
- **State Management**: React hooks for efficient state handling
- **Error Handling**: Robust error handling with user-friendly messages
- **Performance Optimized**: Memoized calculations and efficient rendering

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Material UI Icons
- **Notifications**: React Toastify
- **Package Manager**: npm

## 📦 Installation

### Prerequisites
- Node.js 18.0 or higher
- npm (comes with Node.js)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd CartManager
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 🏗️ Project Structure

```
CartManager/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with ToastContainer
│   │   ├── page.tsx            # Main page component
│   │   └── globals.css         # Global styles and Tailwind imports
│   ├── components/
│   │   ├── Navigation.tsx      # Header with cart button
│   │   ├── ProductCard.tsx     # Individual product display
│   │   ├── ProductGrid.tsx     # Product grid layout
│   │   ├── Cart.tsx            # Slide-in cart component
│   │   ├── CartItem.tsx        # Individual cart item
│   │   └── CategoryFilter.tsx  # Category filtering tags
│   ├── lib/
│   │   └── products.json       # Product data
│   └── types/
│       └── index.ts            # TypeScript type definitions
├── public/
│   └── images/                 # Product images (add your own)
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🎯 How to Use

### Browsing Products
1. View all products on the main page
2. Use category filters to browse specific product types
3. Click "Add to Cart" to add products to your cart

### Managing Cart
1. Click the cart icon in the navigation to open the slide-in cart
2. Use +/- buttons to adjust quantities
3. Click the delete icon to remove items
4. View real-time price calculations

### Applying Coupons
1. Open the cart
2. Enter the coupon code: `POWERLABSx`
3. Click "Apply" to get a 13.2% discount
4. Click "Remove" to remove the coupon

## 🎨 Customization

### Adding Products
1. Edit `src/lib/products.json`
2. Add new products with the following structure:
   ```json
   {
     "id": 21,
     "name": "Product Name",
     "description": "Product description",
     "price": 1000,
     "category": "Category",
     "image": "/images/product-image.jpg",
     "stock": 50
   }
   ```

### Adding Product Images
1. Place your product images in the `public/images/` directory
2. Update the `image` field in `products.json` to match your image filenames
3. Images should be in JPG, PNG, or WebP format

### Styling Customization
- Modify `src/app/globals.css` for global styles
- Update Tailwind classes in components for styling changes
- Customize colors in `tailwind.config.js`

## 🧪 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🆘 Troubleshooting

### Common Issues

**Port 3000 already in use**
```bash
# Use a different port
npm run dev -- -p 3001
```

**Dependencies not installing**
```bash
# Clear npm cache
npm cache clean --force
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

**TypeScript errors**
```bash
# Check TypeScript configuration
npx tsc --noEmit
```

## 📞 Support

If you encounter any issues or have questions:
1. Check the troubleshooting section above
2. Review the project structure and configuration
3. Open an issue on GitHub with detailed information

---

**Happy Shopping! 🛒**
