export const configureYouTubeEmbed = () => {
    if (typeof window !== 'undefined') {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.addedNodes.length) {
                    mutation.addedNodes.forEach((node) => {
                        // Remove watch on YouTube button
                        if (node.classList && node.classList.contains('watch-on-youtube-button-wrapper')) {
                            node.remove();
                        }
                        
                        // Remove watermark
                        if (node.classList && node.classList.contains('ytp-watermark')) {
                            node.remove();
                        }
                        
                        // Also check for watermark in iframes
                        const iframes = document.querySelectorAll('iframe[src*="youtube.com"]');
                        iframes.forEach(iframe => {
                            try {
                                const watermark = iframe.contentDocument.querySelector('.ytp-watermark');
                                if (watermark) {
                                    watermark.style.display = 'none';
                                }
                            } catch (e) {
                                // Handle cross-origin restrictions
                            }
                        });
                    });
                }
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });
    }
};