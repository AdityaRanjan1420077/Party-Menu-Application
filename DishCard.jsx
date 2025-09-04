import { Plus, Minus, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// Import food images
import paneerTikkaImg from "@/assests/paneer-tikka.jpg";
import butterChickenImg from "@/assests/butter-chicken.jpg";
import gulabJamunImg from "@/assests/gulab-jamun.jpg";

// Map specific dishes to their images
const dishImages = {
  "Paneer Tikka": paneerTikkaImg,
  "Butter Chicken": butterChickenImg,
  "Gulab Jamun": gulabJamunImg,
};

export function DishCard({ dish, isSelected, onToggleSelect, onViewIngredients }) {
  const dishImage = dishImages[dish.name];

  return (
    <Card className={cn(
      "p-4 transition-all duration-200 border-2",
      isSelected 
        ? "border-primary bg-primary/5 shadow-md" 
        : "border-border hover:border-primary/50 hover:shadow-sm"
    )}>
      <div className="flex gap-4">
        {/* Dish Image */}
        <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
          {dishImage ? (
            <img 
              src={dishImage} 
              alt={dish.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <span className="text-2xl">
                {dish.mealType === "STARTER" && "🥗"}
                {dish.mealType === "MAIN COURSE" && "🍛"}
                {dish.mealType === "DESSERT" && "🍰"}
                {dish.mealType === "SIDES" && "🍞"}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-semibold text-foreground text-base leading-tight">{dish.name}</h3>
            <Badge 
              variant="outline" 
              className={cn(
                "px-2 py-0.5 text-xs font-medium border-2 flex-shrink-0",
                dish.type === "VEG" 
                  ? "border-veg text-veg bg-veg/10" 
                  : "border-non-veg text-non-veg bg-non-veg/10"
              )}
            >
              <span className={cn(
                "w-1.5 h-1.5 rounded-full mr-1.5",
                dish.type === "VEG" ? "bg-veg" : "bg-non-veg"
              )}></span>
              {dish.type === "VEG" ? "Veg" : "Non-Veg"}
            </Badge>
          </div>
          
          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{dish.description}</p>
          
          <div className="flex gap-2 mb-3">
            <Badge variant="secondary" className="bg-primary/10 text-primary text-xs">
              {dish.category.name}
            </Badge>
            <Badge variant="secondary" className="bg-accent/10 text-accent text-xs">
              {dish.dishType}
            </Badge>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onViewIngredients(dish.id)}
              className="flex items-center gap-1 text-xs h-8 px-3 border-muted-foreground/30 hover:border-primary hover:text-primary"
            >
              <Info className="h-3 w-3" />
              Ingredients
            </Button>
            
            <Button
              size="sm"
              onClick={() => onToggleSelect(dish.id)}
              className={cn(
                "flex items-center gap-1 h-8 px-3 text-xs font-medium transition-all",
                isSelected
                  ? "bg-destructive hover:bg-destructive/90 text-destructive-foreground"
                  : "bg-primary hover:bg-primary/90 text-primary-foreground"
              )}
            >
              {isSelected ? (
                <>
                  <Minus className="h-3 w-3" />
                  Remove
                </>
              ) : (
                <>
                  <Plus className="h-3 w-3" />
                  Add
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}