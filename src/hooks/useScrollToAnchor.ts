
export const useScrollToAnchor = () => {
  const scrollToElement = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();
    
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Get the height of the fixed navigation bar to offset the scroll position
      const navHeight = document.querySelector('nav')?.offsetHeight || 0;
      
      // Calculate the position
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight - 20; // Additional 20px for some padding
      
      // Use smooth scrolling
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return { scrollToElement };
};
