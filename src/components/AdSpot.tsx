interface AdSpotProps {
  position: "header" | "sidebar" | "in-content" | "sticky-bottom";
  zoneId: string;
  className?: string;
}

export const AdSpot = ({ position, zoneId, className = "" }: AdSpotProps) => {
  const getPositionStyles = () => {
    switch (position) {
      case "header":
        return "min-h-[90px] bg-im-gray-light";
      case "sidebar":
        return "min-h-[280px] bg-im-gray-light";
      case "in-content":
        return "min-h-[280px] my-8 bg-im-gray-light";
      case "sticky-bottom":
        return "fixed bottom-0 left-0 right-0 min-h-[90px] z-50 bg-card shadow-lg border-t border-border";
      default:
        return "";
    }
  };

  return (
    <div
      id={`revive-${position}-${zoneId}`}
      className={`flex items-center justify-center ${getPositionStyles()} ${className}`}
      data-revive-zoneid={zoneId}
      data-bvx-track={`AD_VIEW_${position.toUpperCase()}`}
    >
      <div className="text-center">
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Publicidade
        </span>
        <div className="text-[10px] text-muted-foreground/50 mt-1">
          {position === "header" && "728x90"}
          {position === "sidebar" && "300x250"}
          {position === "in-content" && "728x280"}
          {position === "sticky-bottom" && "728x90"}
        </div>
      </div>
    </div>
  );
};
