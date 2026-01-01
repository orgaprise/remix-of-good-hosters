import { useState, useEffect } from 'react';
import { List, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface TOCItem {
  id: string;
  title: string;
  level?: number;
}

interface TableOfContentsProps {
  items: TOCItem[];
  title?: string;
  className?: string;
}

const TableOfContents = ({ items, title = "Table of Contents", className }: TableOfContentsProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-80px 0px -80% 0px',
        threshold: 0
      }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (items.length === 0) return null;

  return (
    <nav 
      className={cn(
        "bg-muted/50 rounded-xl border border-border p-5 mb-8",
        className
      )}
      aria-label="Table of contents"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-2">
          <List className="w-5 h-5 text-accent" aria-hidden="true" />
          <span className="font-display font-semibold text-foreground">{title}</span>
          <span className="text-sm text-muted-foreground">({items.length} sections)</span>
        </div>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-muted-foreground" aria-hidden="true" />
        ) : (
          <ChevronDown className="w-5 h-5 text-muted-foreground" aria-hidden="true" />
        )}
      </button>

      {isOpen && (
        <ol className="mt-4 space-y-2 list-none" role="list">
          {items.map((item, index) => (
            <li 
              key={item.id}
              style={{ paddingLeft: item.level ? `${(item.level - 1) * 16}px` : '0' }}
            >
              <button
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "text-left w-full py-1.5 px-3 rounded-lg text-sm transition-all duration-200 hover:bg-accent/10 hover:text-accent",
                  activeId === item.id
                    ? "bg-accent/10 text-accent font-medium border-l-2 border-accent"
                    : "text-muted-foreground"
                )}
              >
                <span className="text-accent/60 mr-2">{index + 1}.</span>
                {item.title}
              </button>
            </li>
          ))}
        </ol>
      )}
    </nav>
  );
};

export default TableOfContents;