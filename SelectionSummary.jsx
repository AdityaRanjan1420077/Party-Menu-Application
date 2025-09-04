import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";

export function SelectionSummary({ totalSelected, categoryCounts, onContinue }) {
  if (totalSelected === 0) return null;

  const categories = [
    { key: "STARTER", label: "Starters", emoji: "🥗" },
    { key: "MAIN COURSE", label: "Mains", emoji: "🍛" },
    { key: "DESSERT", label: "Desserts", emoji: "🍰" },
    { key: "SIDES", label: "Sides", emoji: "🍞" }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t shadow-lg p-4 z-50">
      <div className="max-w-md mx-auto space-y-3">
        {/* Category Breakdown */}
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map(category => {
            const count = categoryCounts[category.key] || 0;
            if (count === 0) return null;
            
            return (
              <Badge 
                key={category.key} 
                variant="secondary" 
                className="bg-primary/10 text-primary text-xs px-2 py-1"
              >
                <span className="mr-1">{category.emoji}</span>
                {category.label}: {count}
              </Badge>
            );
          })}
        </div>

        {/* Total and Continue Button */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5 text-primary" />
            <div>
              <span className="text-sm font-medium text-foreground">Total Selected:</span>
              <span className="ml-2 text-lg font-bold text-primary">{totalSelected}</span>
            </div>
          </div>
          
          <Button 
            onClick={onContinue}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 h-10 font-medium"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}