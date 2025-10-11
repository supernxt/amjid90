/**
 * Utility functions for interacting with the ElevenLabs AI assistant
 */

/**
 * Opens the ElevenLabs ConvAI chat widget
 */
export function openAIChat() {
  // Try to find and trigger the ElevenLabs widget
  const widget = document.querySelector('elevenlabs-convai') as any;
  
  if (widget) {
    // Try multiple methods to open the widget
    if (typeof widget.open === 'function') {
      widget.open();
    } else if (typeof widget.show === 'function') {
      widget.show();
    } else if (typeof widget.toggle === 'function') {
      widget.toggle();
    } else if (typeof widget.click === 'function') {
      widget.click();
    } else {
      // Simulate a click event on the widget
      widget.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    }
  } else {
    console.warn('AI assistant widget not found. Please wait for it to load.');
    // Optionally show a toast notification
    alert('AI Assistant is loading. Please try again in a moment.');
  }
}
