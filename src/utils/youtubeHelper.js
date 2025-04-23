export const configureYouTubeEmbed = () => {
  if (typeof window !== 'undefined') {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          mutation.addedNodes.forEach((node) => {
            if (node.classList && node.classList.contains('watch-on-youtube-button-wrapper')) {
              node.remove();
            }
          });
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
};