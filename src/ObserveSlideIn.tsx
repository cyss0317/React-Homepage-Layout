import { useEffect, useRef } from "react";

export default function ObserveAppear({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null, // Observe relative to the viewport
      rootMargin: "0px", // No margin around the viewport
      threshold: 0.5, // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("invisible");
          entry.target.classList.add("intersect-appear");
          observer.unobserve(entry.target); // Stop observing once it has appeared
        } else {
          entry.target.classList.add("invisible");
          entry.target.classList.remove("intersect-fade-out");
        }
      });
    }, observerOptions);

    const container = containerRef.current;
    if (container) {
      // Observe each child of the container
      const elements = container.querySelectorAll(".invisible");
      elements.forEach((element) => observer.observe(element));
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="observer">
      {children}
    </div>
  );
}
