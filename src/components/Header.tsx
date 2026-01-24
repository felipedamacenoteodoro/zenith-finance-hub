import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Menu, X, TrendingUp, TrendingDown, ChevronRight } from "lucide-react";
import { AdSpot } from "./AdSpot";

const marketData = [
  { name: "IBOV", value: "127.432", change: "+0,85%", up: true },
  { name: "DÓLAR", value: "R$ 5,12", change: "-0,32%", up: false },
  { name: "EURO", value: "R$ 5,58", change: "-0,18%", up: false },
  { name: "BITCOIN", value: "US$ 43.250", change: "+2,15%", up: true },
  { name: "SELIC", value: "11,25%", change: "0,00%", up: true },
];

const navCategories = [
  { to: "/", label: "Início" },
  { to: "/artigos?categoria=mercados", label: "Mercados" },
  { to: "/artigos?categoria=investimentos", label: "Investimentos" },
  { to: "/artigos?categoria=economia", label: "Economia" },
  { to: "/artigos?categoria=negocios", label: "Negócios" },
  { to: "/ferramentas", label: "Ferramentas" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/busca?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setIsSearchOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-card shadow-sm">
      {/* Top Bar with Ad */}
      <div className="border-b border-border">
        <div className="container py-2">
          <AdSpot position="header" zoneId="{{REVIVE_ZONE_HEADER}}" className="w-full min-h-[50px]" />
        </div>
      </div>

      {/* Market Ticker */}
      <div className="im-ticker overflow-hidden">
        <div className="container">
          <div className="flex items-center gap-1 py-2 overflow-x-auto scrollbar-hide">
            {marketData.map((item, index) => (
              <div
                key={item.name}
                className="im-ticker-item flex-shrink-0"
                data-bvx-track={`TICKER_${item.name}`}
              >
                <span className="font-bold text-foreground">{item.name}</span>
                <span className="text-muted-foreground">{item.value}</span>
                <span className={`flex items-center gap-0.5 font-semibold ${item.up ? "im-ticker-up" : "im-ticker-down"}`}>
                  {item.up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                  {item.change}
                </span>
                {index < marketData.length - 1 && <span className="text-border ml-3">|</span>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b border-border bg-card">
        <div className="container">
          <div className="flex h-14 items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2"
              data-bvx-track="LOGO_CLICK"
            >
              <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">$</span>
              </div>
              <span className="font-display text-xl font-bold text-foreground">
                {"{{PROJECT_LOGO}}"}
              </span>
            </Link>

            {/* Search */}
            <div className="flex-1 max-w-md mx-8 hidden md:block">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar notícias, ações, fundos..."
                  className="w-full px-4 py-2 pr-10 text-sm bg-muted border border-border rounded focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                  data-bvx-track="SEARCH_INPUT"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-primary"
                  data-bvx-track="SEARCH_SUBMIT"
                >
                  <Search className="h-4 w-4" />
                </button>
              </form>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-muted-foreground hover:text-foreground"
                data-bvx-track="SEARCH_MOBILE_TOGGLE"
              >
                <Search className="h-5 w-5" />
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-muted-foreground hover:text-foreground"
                data-bvx-track="MOBILE_MENU_TOGGLE"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>

            {/* Desktop CTA */}
            <Link
              to="/sobre"
              className="hidden md:flex items-center gap-1 im-btn-primary"
              data-bvx-track="CTA_HEADER"
            >
              Assine
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="hidden md:block border-b border-border bg-card">
        <div className="container">
          <div className="flex items-center gap-1">
            {navCategories.map((cat) => (
              <Link
                key={cat.to}
                to={cat.to}
                className="im-nav-link"
                data-bvx-track={`NAV_${cat.label.toUpperCase()}`}
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Search */}
      {isSearchOpen && (
        <div className="md:hidden border-b border-border bg-card p-3 animate-fade-in">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar..."
              className="w-full px-4 py-2 pr-10 text-sm bg-muted border border-border rounded focus:outline-none focus:ring-1 focus:ring-primary"
              autoFocus
              data-bvx-track="SEARCH_MOBILE_INPUT"
            />
            <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 p-1">
              <Search className="h-4 w-4 text-muted-foreground" />
            </button>
          </form>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden border-b border-border bg-card animate-fade-in">
          <div className="container py-3">
            <div className="flex flex-col">
              {navCategories.map((cat) => (
                <Link
                  key={cat.to}
                  to={cat.to}
                  className="py-2 px-3 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded"
                  onClick={() => setIsMenuOpen(false)}
                  data-bvx-track={`NAV_MOBILE_${cat.label.toUpperCase()}`}
                >
                  {cat.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};
