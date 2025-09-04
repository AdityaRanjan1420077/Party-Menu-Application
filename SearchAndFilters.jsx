import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function SearchAndFilters({
  searchQuery,
  onSearchChange,
  vegFilter,
  nonVegFilter,
  onVegFilterChange,
  onNonVegFilterChange
}) {
  return (
    <div className="p-4 bg-card border-b space-y-3">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          type="text"
          placeholder="Search dishes..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 bg-background border-muted-foreground/20 focus:border-primary"
        />
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium text-foreground">Filter:</span>
        </div>
        
        <div className="flex gap-2">
          <Button
            variant={vegFilter ? "default" : "outline"}
            size="sm"
            onClick={() => onVegFilterChange(!vegFilter)}
            className={cn(
              "h-8 px-3 text-xs font-medium border-2 transition-all",
              vegFilter 
                ? "bg-veg text-white border-veg hover:bg-veg/90" 
                : "border-veg text-veg hover:bg-veg/10"
            )}
          >
            <span className={cn(
              "w-2 h-2 rounded-full mr-2",
              "bg-veg"
            )}></span>
            Veg
          </Button>
          
          <Button
            variant={nonVegFilter ? "default" : "outline"}
            size="sm"
            onClick={() => onNonVegFilterChange(!nonVegFilter)}
            className={cn(
              "h-8 px-3 text-xs font-medium border-2 transition-all",
              nonVegFilter 
                ? "bg-non-veg text-white border-non-veg hover:bg-non-veg/90" 
                : "border-non-veg text-non-veg hover:bg-non-veg/10"
            )}
          >
            <span className={cn(
              "w-2 h-2 rounded-full mr-2",
              "bg-non-veg"
            )}></span>
            Non-Veg
          </Button>
        </div>
      </div>
    </div>
  );
}