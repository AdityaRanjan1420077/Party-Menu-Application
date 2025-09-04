import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const mealTypeEmojis = {
  "STARTER": "🥗",
  "MAIN COURSE": "🍛", 
  "DESSERT": "🍰",
  "SIDES": "🍞"
};

export function CategoryTabs({ activeCategory, onCategoryChange, categoryCounts }) {
  const categories = ["STARTER", "MAIN COURSE", "DESSERT", "SIDES"];

  return (
    <div className="border-b bg-card">
      <Tabs value={activeCategory} onValueChange={onCategoryChange} className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-muted/50 p-1 h-auto">
          {categories.map((category) => {
            const count = categoryCounts[category] || 0;
            return (
              <TabsTrigger
                key={category}
                value={category}
                className="flex flex-col items-center gap-1 py-3 px-2 text-xs font-medium relative
                  hover:underline hover:decoration-2 hover:decoration-[hsl(var(--primary))]
                  data-[state=active]:bg-[hsl(var(--primary)/0.12)] data-[state=active]:text-foreground"
              >
                <div className="flex items-center gap-1">
                  <span className="text-lg">{mealTypeEmojis[category]}</span>
                  <span className="hidden sm:inline">{category}</span>
                </div>
                
                {count > 0 && (
                  <Badge 
                    variant="secondary" 
                    className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs bg-accent text-accent-foreground border-2 border-background"
                  >
                    {count}
                  </Badge>
                )}
              </TabsTrigger>
            );
          })}
        </TabsList>
      </Tabs>
    </div>
  );
}