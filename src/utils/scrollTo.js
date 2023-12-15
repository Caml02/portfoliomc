// scrollTo.js

export const scrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
  
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 60, // Adjust the offset as needed
        behavior: 'smooth',
      });
    }
  };
  