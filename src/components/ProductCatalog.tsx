import { useState, useMemo, useEffect } from "react";
import ProductCard from "./ProductCard";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Badge } from "./ui/badge";
import { 
  Filter, 
  Grid, 
  List, 
  Search, 
  SlidersHorizontal,
  Star,
  Package,
  TrendingUp
} from "lucide-react";
import { categories, brands, type Product } from "../data/products";

interface ProductCatalogProps {
  onAddToCart: (product: Product) => void;
}

type SortOption = "featured" | "price-low" | "price-high" | "rating" | "name" | "newest";

const ProductCatalog = ({ onAddToCart }: ProductCatalogProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All Brands");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [showFilters, setShowFilters] = useState(false);
  const [showInStockOnly, setShowInStockOnly] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(setProducts)
      .catch(() => setProducts([]));
  }, []);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Category filter
    if (selectedCategory !== "All") {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Brand filter
    if (selectedBrand !== "All Brands") {
      filtered = filtered.filter(product => product.brand === selectedBrand);
    }

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Price range filter
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Stock filter
    if (showInStockOnly) {
      filtered = filtered.filter(product => product.inStock);
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "name":
          return a.name.localeCompare(b.name);
        case "featured":
          return b.featured ? 1 : -1;
        default:
          return 0;
      }
    });

    return filtered;
  }, [products, selectedCategory, selectedBrand, searchQuery, sortBy, priceRange, showInStockOnly]);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSelectedCategory("All");
    setSelectedBrand("All Brands");
    setSearchQuery("");
    setSortBy("featured");
    setPriceRange([0, 1000]);
    setShowInStockOnly(false);
    setCurrentPage(1);
  };

  return (
    <section id="catalog" className="py-20 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold metallic-text mb-4 leading-[1.18] pb-2">
            Massive Product Catalog
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Explore our extensive collection of {products.length}+ premium superbike accessories
          </p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Package className="h-4 w-4 text-primary" />
              <span>{products.length} Products</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-accent" />
              <span>{categories.length - 1} Categories</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-secondary" />
              <span>{brands.length - 1} Brands</span>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="glass-strong rounded-xl p-6 mb-8">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search products, brands, or features..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-glass pl-12 pr-4 py-4 text-lg"
            />
          </div>
        </div>

        {/* Filter Controls */}
        <div className="glass-strong rounded-xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            {/* Category Filters */}
            <div className="w-full lg:w-auto">
              <h3 className="text-sm font-semibold text-muted-foreground mb-3">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    variant={selectedCategory === category ? "default" : "ghost"}
                    className={
                      selectedCategory === category
                        ? "btn-glow"
                        : "btn-glass hover:text-primary"
                    }
                    size="sm"
                  >
                    {category}
                    {category !== "All" && (
                      <Badge variant="secondary" className="ml-2 text-xs">
                        {products.filter(p => p.category === category).length}
                      </Badge>
                    )}
                  </Button>
                ))}
              </div>
            </div>

            {/* Advanced Filters Toggle */}
            <Button
              onClick={() => setShowFilters(!showFilters)}
              variant="ghost"
              className="btn-glass"
              size="sm"
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              {showFilters ? "Hide" : "Show"} Filters
            </Button>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-glass-border/20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="text-sm font-semibold text-muted-foreground mb-2 block">Brand</label>
                  <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                    <SelectTrigger className="input-glass">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {brands.map((brand) => (
                        <SelectItem key={brand} value={brand}>
                          {brand}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-semibold text-muted-foreground mb-2 block">Sort By</label>
                  <Select value={sortBy} onValueChange={(value: SortOption) => setSortBy(value)}>
                    <SelectTrigger className="input-glass">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                      <SelectItem value="name">Name A-Z</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-semibold text-muted-foreground mb-2 block">Price Range</label>
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      placeholder="Min"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                      className="input-glass text-sm"
                    />
                    <span className="text-muted-foreground">-</span>
                    <Input
                      type="number"
                      placeholder="Max"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 1000])}
                      className="input-glass text-sm"
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-end">
                  <Button
                    onClick={() => setShowInStockOnly(!showInStockOnly)}
                    variant={showInStockOnly ? "default" : "ghost"}
                    className={showInStockOnly ? "btn-glow" : "btn-glass"}
                    size="sm"
                  >
                    In Stock Only
                  </Button>
                  <Button
                    onClick={clearFilters}
                    variant="ghost"
                    className="btn-glass mt-2"
                    size="sm"
                  >
                    Clear All
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Results Summary and View Controls */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-6 pt-6 border-t border-glass-border/20">
            <div className="text-sm text-muted-foreground">
              Showing {startIndex + 1}-{Math.min(startIndex + productsPerPage, filteredProducts.length)} of {filteredProducts.length} products
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Button
                  onClick={() => setViewMode("grid")}
                  variant="ghost"
                  size="sm"
                  className={`btn-glass ${viewMode === "grid" ? "text-primary" : ""}`}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  onClick={() => setViewMode("list")}
                  variant="ghost"
                  size="sm"
                  className={`btn-glass ${viewMode === "list" ? "text-primary" : ""}`}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid/List */}
        <div className={`grid gap-6 mb-12 ${
          viewMode === "grid" 
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
            : "grid-cols-1"
        }`}>
          {paginatedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              viewMode={viewMode}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-muted-foreground mb-2">No products found</h3>
            <p className="text-muted-foreground mb-6">Try adjusting your filters or search terms</p>
            <Button onClick={clearFilters} className="btn-glow">
              Clear All Filters
            </Button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2">
            <Button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              variant="ghost"
              className="btn-glass"
              size="sm"
            >
              Previous
            </Button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                onClick={() => setCurrentPage(page)}
                variant={currentPage === page ? "default" : "ghost"}
                className={currentPage === page ? "btn-glow" : "btn-glass"}
                size="sm"
              >
                {page}
              </Button>
            ))}
            
            <Button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              variant="ghost"
              className="btn-glass"
              size="sm"
            >
              Next
            </Button>
          </div>
        )}

        {/* Load More Alternative */}
        {currentPage < totalPages && (
          <div className="text-center mt-8">
            <Button 
              onClick={() => setCurrentPage(prev => prev + 1)}
              className="btn-glow px-12 py-3"
            >
              Load More Products ({filteredProducts.length - (currentPage * productsPerPage)} remaining)
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCatalog;