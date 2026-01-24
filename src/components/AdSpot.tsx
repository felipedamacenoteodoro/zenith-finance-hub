interface AdSpotProps {
  position: "header" | "sidebar" | "in-content" | "sticky-bottom";
  zoneId: string;
  className?: string;
}

export const AdSpot = ({ position, zoneId, className = "" }: AdSpotProps) => {
  const getPositionStyles = () => {
    switch (position) {
      case "header":
        return "min-h-[90px]";
      case "sidebar":
        return "min-h-[250px]";
      case "in-content":
        return "min-h-[250px] my-6";
      case "sticky-bottom":
        return "fixed bottom-0 left-0 right-0 min-h-[90px] z-50";
      default:
        return "";
    }
  };

  return (
    <div
      id={`revive-${position}-${zoneId}`}
      className={`ad-container ${getPositionStyles()} ${className}`}
      data-revive-zoneid={zoneId}
      data-bvx-track={`AD_VIEW_${position.toUpperCase()}`}
    >
      <span className="text-xs uppercase tracking-wider opacity-50">Publicidade</span>
    </div>
  );
};
