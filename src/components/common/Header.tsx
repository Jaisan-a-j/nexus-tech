import { Menu, Heart, ShoppingBasket, User } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 shadow-sm">
      <div className="flex items-center justify-between">
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:bg-gray-100"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-6">
          <Link
            to="/wishlist"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:bg-gray-100"
            aria-label="Wishlist"
          >
            <Heart className="h-5 w-5" />
          </Link>
          <Link
            to="/cart"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:bg-gray-100"
            aria-label="Cart"
          >
            <ShoppingBasket className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-red-500 px-1.5 text-[11px] font-semibold text-white">
              8
            </span>
          </Link>
          <Link
            to="/profile"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:bg-gray-100"
            aria-label="Profile"
          >
            <User className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
