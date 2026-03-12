import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import ProductCard from "../components/common/ProductCard";
import { BEST_SELLERS } from "../data/mockData";
import { cn } from "../utils";

const ProductDetail = () => {
  const [selectedModel, setSelectedModel] = useState("iPhone 15 Pro Max");
  const [selectedColor, setSelectedColor] = useState("midnight");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [mainImage, setMainImage] = useState(
    "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=800&fit=crop",
  );
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Review form state
  const [rating, setRating] = useState(0);
  const [reviewLength, setReviewLength] = useState(0);

  const thumbnails = [
    "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=200&h=200&fit=crop",
    "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=200&h=200&fit=crop",
    "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=200&h=200&fit=crop",
    "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=200&h=200&fit=crop&sat=-100",
    "https://images.unsplash.com/photo-1611472173362-3f53dbd65d80?w=200&h=200&fit=crop",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop",
  ];

  const colors = [
    { id: "midnight", name: "Midnight Black" },
    { id: "rosegold", name: "Rose Gold" },
    { id: "ocean", name: "Ocean Blue" },
    { id: "forest", name: "Forest Green" },
    { id: "lavender", name: "Lavender Purple" },
    { id: "coral", name: "Coral Pink" },
  ];

  const models = [
    { name: "iPhone 15 Pro Max", disabled: false },
    { name: "iPhone 15 Pro", disabled: false },
    { name: "iPhone 15", disabled: true },
    { name: "iPhone 14 Pro Max", disabled: false },
    { name: "iPhone 14 Pro", disabled: true },
    { name: "iPhone 14", disabled: false },
  ];

  return (
    <div className="product-detail-page bg-bg-primary pt-8 pb-20">
      <div className="container-fluid max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Breadcrumb */}
        <nav className="breadcrumb-nav flex flex-wrap items-center gap-2 text-sm text-white/40 mb-10 border-b border-glass-border pb-4">
          <Link
            to="/"
            className="text-white/60 hover:text-accent transition-colors"
          >
            Home
          </Link>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-4 h-4"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
          <Link
            to="/cases"
            className="text-white/60 hover:text-accent transition-colors"
          >
            Products
          </Link>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-4 h-4"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
          <span className="text-white">Premium Leather MagSafe Case</span>
        </nav>

        {/* Product Main Section */}
        <div className="product-main grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 mb-16 relative z-10 w-full">
          {/* Product Gallery */}
          <div className="product-gallery flex flex-col md:flex-row gap-6 w-full lg:sticky lg:top-24 h-fit">
            {/* Thumbnails */}
            <div className="thumbnail-carousel-wrapper order-2 md:order-1 flex md:flex-col items-center gap-2 max-w-full md:max-w-[80px]">
              <button className="thumbnail-nav-btn md:w-full w-8 h-8 md:h-[32px] bg-white/[0.04] border border-glass-border hover:bg-accent/15 hover:border-accent flex items-center justify-center rounded-lg transition-all text-white/75 hover:text-accent disabled:opacity-30">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="md:-rotate-90"
                >
                  <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
              </button>

              <div className="thumbnail-viewport flex-1 overflow-x-auto md:overflow-y-hidden md:h-[540px] flex md:flex-col gap-3 min-w-0 snap-x">
                {thumbnails.map((thumb) => (
                  <button
                    key={thumb}
                    onClick={() =>
                      setMainImage(thumb.replace("w=200&h=200", "w=800&h=800"))
                    }
                    className={cn(
                      "thumbnail-item shrink-0 relative w-[70px] h-[70px] md:w-[80px] md:h-[80px] rounded-xl overflow-hidden border-2 transition-all p-0.5",
                      mainImage === thumb.replace("w=200&h=200", "w=800&h=800")
                        ? "border-accent scale-95"
                        : "border-transparent opacity-60 hover:opacity-100 hover:border-white/10",
                    )}
                  >
                    <img
                      src={thumb}
                      alt="Thumbnail"
                      className="w-full h-full object-cover rounded-[10px]"
                    />
                  </button>
                ))}
              </div>

              <button className="thumbnail-nav-btn md:w-full w-8 h-8 md:h-[32px] bg-white/[0.04] border border-glass-border hover:bg-accent/15 hover:border-accent flex items-center justify-center rounded-lg transition-all text-white/75 hover:text-accent">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="md:rotate-90"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>

            {/* Main Image */}
            <div className="main-image order-1 md:order-2 flex-1 relative aspect-square bg-gradient-to-br from-accent/10 to-accent-secondary/5 border border-glass-border rounded-[20px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.3),_0_0_0_1px_rgba(137,92,242,0.1)] group transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_35px_70px_rgba(137,92,242,0.35),_0_0_0_1px_rgba(137,92,242,0.3)] hover:border-accent/50">
              <motion.img
                key={mainImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                src={mainImage}
                alt="Premium Leather Case"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="product-badge hot absolute top-6 left-6 text-[0.7rem] font-extrabold uppercase tracking-widest px-4 py-2 rounded-full z-10 backdrop-blur-md bg-accent/20 text-accent border border-accent/50 shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
                Hot
              </span>
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={cn(
                  "wishlist-btn absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-400 z-10 backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.3)]",
                  isWishlisted
                    ? "bg-gradient-to-r from-accent to-accent-secondary border-transparent scale-110 shadow-[0_6px_16px_rgba(137,92,242,0.5)]"
                    : "bg-black/60 border border-white/15 hover:bg-accent/30 hover:border-accent/60 hover:scale-110",
                )}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill={isWishlisted ? "white" : "none"}
                  stroke="white"
                  strokeWidth="2"
                  className="w-[22px] h-[22px]"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div className="product-info flex flex-col pt-0 sm:pt-4">
            <h1 className="product-title text-3xl md:text-[2.25rem] font-bold text-white mb-4 leading-[1.2]">
              Premium Leather MagSafe Case with Card Holder
            </h1>

            {/* Rating */}
            <div className="product-rating flex items-center gap-3 mb-6 bg-white/[0.04] p-3 px-4 rounded-xl border border-glass-border w-fit backdrop-blur">
              <div className="stars flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    viewBox="0 0 24 24"
                    fill={star <= 4 ? "#FFA500" : "rgba(255,255,255,0.1)"}
                    className="w-[18px] h-[18px]"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <span className="rating-text text-white/75 text-[0.9rem] font-medium border-l border-white/10 pl-3">
                4.0 (128 reviews)
              </span>
            </div>

            {/* Price */}
            <div className="product-price flex items-baseline gap-4 mb-10 pb-6 border-b border-glass-border">
              <span className="current-price text-4xl font-extrabold bg-gradient-to-r from-accent via-accent-secondary to-accent bg-clip-text text-transparent">
                $49.99
              </span>
              <span className="original-price text-xl text-white/45 font-medium line-through">
                $69.99
              </span>
              <span className="discount-badge text-[0.8rem] font-bold text-green-400 bg-green-500/10 border border-green-500/20 px-2.5 py-1 rounded ml-auto sm:ml-0">
                28% OFF
              </span>
            </div>

            {/* Color Selection */}
            <div className="product-option mb-[1.125rem]">
              <label className="option-label">Color</label>
              <div className="color-options flex flex-wrap gap-2 mt-2">
                {colors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color.id)}
                    aria-label={color.name}
                    className={cn(
                      "color-option w-[36px] h-[36px] rounded-[7px] border-2 p-[2px] transition-all duration-300 relative flex items-center justify-center shadow-[0_2px_6px_rgba(0,0,0,0.2)]",
                      selectedColor === color.id
                        ? "border-accent shadow-[0_0_0_2.5px_rgba(137,92,242,0.2),_0_3px_10px_rgba(137,92,242,0.4)] translate-y-0"
                        : "border-white/10 hover:border-accent/50 hover:-translate-y-[2px] hover:shadow-[0_3px_10px_rgba(137,92,242,0.3)]",
                    )}
                  >
                    <span
                      className={cn(
                        "block absolute inset-[2.5px] rounded-[5px]",
                        color.id === "midnight" &&
                          "bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1e]",
                        color.id === "rosegold" &&
                          "bg-gradient-to-br from-[#ECC5C0] to-[#D4A5A5]",
                        color.id === "ocean" &&
                          "bg-gradient-to-br from-[#2E86AB] to-[#1D5B79]",
                        color.id === "forest" &&
                          "bg-gradient-to-br from-[#2D6A4F] to-[#1B4332]",
                        color.id === "lavender" &&
                          "bg-gradient-to-br from-[#B695C0] to-[#8B73A6]",
                        color.id === "coral" &&
                          "bg-gradient-to-br from-[#FF7F7F] to-[#FF6B6B]",
                      )}
                    ></span>
                    {selectedColor === color.id && (
                      <Check className="w-3.5 h-3.5 text-white z-10 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Model Selection */}
            <div className="product-option mb-[1.125rem]">
              <label className="option-label">Select Model</label>
              <div className="model-options flex flex-wrap gap-[6px] mt-2">
                {models.map((model) => (
                  <button
                    key={model.name}
                    disabled={model.disabled}
                    onClick={() => setSelectedModel(model.name)}
                    className={cn(
                      "model-option px-[14px] py-[8px] bg-white/[0.03] border-[1.5px] rounded-[7px] text-[12px] font-medium transition-all duration-300 relative",
                      selectedModel === model.name
                        ? "bg-gradient-to-r from-accent to-accent-secondary border-transparent text-white shadow-[0_3px_10px_rgba(137,92,242,0.4)] -translate-y-[1px]"
                        : model.disabled
                          ? "border-white/10 text-white/50 cursor-not-allowed opacity-50 line-through md:block hidden"
                          : "border-white/10 text-white/70 hover:bg-accent/12 hover:border-accent/40 hover:text-white hover:-translate-y-[1px] hover:shadow-[0_2px_6px_rgba(137,92,242,0.2)]",
                    )}
                  >
                    <span>{model.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="product-option mb-[1.125rem]">
              <label className="option-label">Quantity</label>
              <div className="quantity-selector mt-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="qty-btn"
                >
                  −
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                  }
                />
                <button
                  onClick={() => setQuantity(Math.min(10, quantity + 1))}
                  className="qty-btn"
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="product-actions mt-auto">
              <button className="btn-add-to-cart">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
                Add to Cart
              </button>
              <Link to="/checkout" className="btn-buy-now">
                Buy Now
              </Link>
            </div>
          </div>
        </div>

        {/* Product Features Section */}
        <div className="product-features-section my-16 border-t border-glass-border pt-16">
          <div className="features-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Drop Protection",
                desc: "Military-grade certified protection for your device",
                icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
              },
              {
                title: "Free Shipping",
                desc: "Free delivery on all orders over $50",
                icon: (
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                ),
              },
              {
                title: "Easy Returns",
                desc: "Hassle-free 30-day return policy",
                icon: (
                  <>
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </>
                ),
              },
              {
                title: "Fast Delivery",
                desc: "Ships within 24 hours of order placement",
                icon: (
                  <>
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </>
                ),
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="feature-card bg-white/[0.02] border border-glass-border rounded-xl p-6 transition-all hover:bg-white/[0.04] hover:-translate-y-2 hover:border-accent/40 hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)]"
              >
                <div className="feature-icon w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4 border border-accent/20">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-[22px] h-[22px]"
                  >
                    {feature.icon}
                  </svg>
                </div>
                <div className="feature-content">
                  <h3 className="text-[1.1rem] font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[0.9rem] text-white/60 m-0">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="product-details-tabs my-20">
          <div className="tabs-header flex flex-wrap gap-2 md:gap-4 border-b border-glass-border mb-8 pb-4">
            <button
              className={cn(
                "tab-btn px-6 py-3 font-semibold text-sm transition-all border-b-2",
                activeTab === "description"
                  ? "text-accent border-accent"
                  : "text-white/60 border-transparent hover:text-white hover:border-white/20",
              )}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
            <button
              className={cn(
                "tab-btn px-6 py-3 font-semibold text-sm transition-all border-b-2",
                activeTab === "specifications"
                  ? "text-accent border-accent"
                  : "text-white/60 border-transparent hover:text-white hover:border-white/20",
              )}
              onClick={() => setActiveTab("specifications")}
            >
              Specifications
            </button>
            <button
              className={cn(
                "tab-btn px-6 py-3 font-semibold text-sm transition-all border-b-2",
                activeTab === "reviews"
                  ? "text-accent border-accent"
                  : "text-white/60 border-transparent hover:text-white hover:border-white/20",
              )}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews (128)
            </button>
          </div>

          <div className="tabs-content">
            {/* Description Tab */}
            {activeTab === "description" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="tab-panel active"
              >
                <h3 className="text-xl font-semibold text-white mb-4">
                  Product Description
                </h3>
                <div className="text-white/75 space-y-4 text-base leading-relaxed">
                  <p className="font-medium text-white">
                    Experience premium protection with genuine leather
                    craftsmanship. This MagSafe-compatible case features a
                    built-in card holder and military-grade drop protection,
                    combining style and functionality.
                  </p>
                  <p>
                    Crafted from premium full-grain leather, this MagSafe case
                    offers sophisticated protection for your iPhone. The
                    integrated card holder securely stores up to 3 cards, while
                    the precision-cut openings ensure easy access to all buttons
                    and ports.
                  </p>
                  <p>
                    The case features raised edges around the camera and screen
                    for added protection, and the soft microfiber lining
                    prevents scratches. MagSafe technology enables fast wireless
                    charging and seamless attachment of MagSafe accessories.
                  </p>
                  <ul className="list-disc pl-5 mt-6 space-y-2">
                    <li>
                      Genuine leather construction with natural grain texture
                    </li>
                    <li>Built-in card holder with RFID protection</li>
                    <li>MagSafe compatible for wireless charging</li>
                    <li>Military-grade drop protection (tested to 10 feet)</li>
                    <li>Raised bezels protect camera and screen</li>
                    <li>Soft microfiber interior lining</li>
                    <li>Precise cutouts for all ports and buttons</li>
                  </ul>
                </div>
              </motion.div>
            )}

            {/* Specifications Tab */}
            {activeTab === "specifications" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="tab-panel active"
              >
                <h3 className="text-xl font-semibold text-white mb-4">
                  Technical Specifications
                </h3>
                <div className="overflow-hidden rounded-xl border border-glass-border">
                  <table className="w-full text-left border-collapse text-white/75">
                    <tbody>
                      {[
                        ["Material", "Genuine Leather, Polycarbonate"],
                        ["Compatibility", "iPhone 15, 14, 13 series"],
                        ["MagSafe", "Yes, full compatibility"],
                        ["Card Capacity", "3 cards"],
                        ["Drop Protection", "Military-grade (10 ft)"],
                        ["Weight", "45g (1.6 oz)"],
                        ["Thickness", "3mm"],
                        ["Warranty", "Lifetime warranty"],
                      ].map((row, i) => (
                        <tr
                          key={i}
                          className={
                            i % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent"
                          }
                        >
                          <td className="p-4 border-b border-glass-border font-medium w-1/3">
                            {row[0]}
                          </td>
                          <td className="p-4 border-b border-glass-border">
                            {row[1]}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {/* Reviews Tab */}
            {activeTab === "reviews" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="tab-panel active text-white"
              >
                <h3 className="text-xl font-semibold mb-6">Customer Reviews</h3>

                <div className="reviews-summary flex items-center justify-between mb-10 bg-white/[0.04] border border-glass-border p-8 rounded-2xl flex-wrap gap-8">
                  <div className="rating-overview flex items-center gap-6">
                    <span className="big-rating text-5xl font-extrabold text-[#FFA500]">
                      4.0
                    </span>
                    <div>
                      <div className="stars flex gap-1 mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            viewBox="0 0 24 24"
                            fill={
                              star <= 4 ? "#FFA500" : "rgba(255,255,255,0.1)"
                            }
                            className="w-[20px] h-[20px]"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-white/60 m-0">Based on 128 reviews</p>
                    </div>
                  </div>
                  <button className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors font-medium">
                    Write a Review
                  </button>
                </div>

                <div className="review-list space-y-6">
                  {/* Dummy Review 1 */}
                  <div className="review-item bg-white/[0.02] border border-white/[0.05] p-6 rounded-xl">
                    <div className="review-header flex justify-between mb-4">
                      <div>
                        <strong className="block mb-1 text-lg">Sarah M.</strong>
                        <div className="stars flex gap-0.5">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              viewBox="0 0 24 24"
                              fill="#FFA500"
                              className="w-[14px] h-[14px]"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <span className="text-white/40 text-sm">2 days ago</span>
                    </div>
                    <p className="text-white/80 leading-relaxed">
                      Absolutely love this case! The leather quality is
                      outstanding and the card holder is so convenient.
                      Definitely worth the price.
                    </p>
                  </div>

                  {/* Dummy Review 2 */}
                  <div className="review-item bg-white/[0.02] border border-white/[0.05] p-6 rounded-xl">
                    <div className="review-header flex justify-between mb-4">
                      <div>
                        <strong className="block mb-1 text-lg">
                          Michael R.
                        </strong>
                        <div className="stars flex gap-0.5">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              viewBox="0 0 24 24"
                              fill={
                                star <= 4 ? "#FFA500" : "rgba(255,255,255,0.1)"
                              }
                              className="w-[14px] h-[14px]"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <span className="text-white/40 text-sm">1 week ago</span>
                    </div>
                    <p className="text-white/80 leading-relaxed">
                      Great protection and the MagSafe works perfectly. The
                      leather feels premium and ages beautifully.
                    </p>
                  </div>
                </div>

                <div className="mt-16 bg-[#080f52]/40 border border-glass-border p-8 rounded-2xl">
                  <h3 className="text-xl font-semibold mb-2">Write a Review</h3>
                  <p className="text-white/60 mb-8">
                    Share your experience with this product
                  </p>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold mb-3 text-white/80">
                        Your Rating *
                      </label>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((r) => (
                          <button
                            key={r}
                            type="button"
                            onClick={() => setRating(r)}
                            className="hover:scale-110 transition-transform"
                          >
                            <svg
                              viewBox="0 0 24 24"
                              fill={r <= rating ? "#FFA500" : "none"}
                              stroke={r <= rating ? "#FFA500" : "currentColor"}
                              className="w-[30px] h-[30px] text-white/30"
                            >
                              <polygon
                                strokeWidth="1"
                                strokeLinejoin="round"
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                              />
                            </svg>
                          </button>
                        ))}
                        {rating > 0 && (
                          <span className="text-[#FFA500] ml-3 mt-1 font-medium">
                            {rating} Stars
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-white/80">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          className="w-full bg-white/[0.03] border border-glass-border rounded-lg p-3 text-white focus:outline-none focus:border-accent"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-white/80">
                          Email *
                        </label>
                        <input
                          type="email"
                          className="w-full bg-white/[0.03] border border-glass-border rounded-lg p-3 text-white focus:outline-none focus:border-accent"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-white/80">
                        Review Title *
                      </label>
                      <input
                        type="text"
                        className="w-full bg-white/[0.03] border border-glass-border rounded-lg p-3 text-white focus:outline-none focus:border-accent"
                        placeholder="Summarize your experience"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-white/80">
                        Your Review *
                      </label>
                      <textarea
                        rows={5}
                        className="w-full bg-white/[0.03] border border-glass-border rounded-lg p-3 text-white focus:outline-none focus:border-accent resize-none"
                        placeholder="Tell us about your experience with this product..."
                        onChange={(e) => setReviewLength(e.target.value.length)}
                      ></textarea>
                      <div className="flex justify-end mt-1 text-sm text-accent">
                        {reviewLength} / 500 characters
                      </div>
                    </div>

                    <div className="flex gap-4 pt-4 border-t border-glass-border">
                      <button
                        type="button"
                        className="px-8 py-3 bg-accent hover:bg-accent-secondary rounded-lg font-bold text-white transition-colors"
                      >
                        Submit Review
                      </button>
                    </div>
                  </form>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="related-products pt-16">
          <h2 className="text-3xl font-bold text-white mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BEST_SELLERS.slice(0, 4).map((product, idx) => (
              <ProductCard key={product.id + idx} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
