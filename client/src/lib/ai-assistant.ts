/**
 * Utility functions for interacting with the ElevenLabs AI assistant
 */

/**
 * Opens the ElevenLabs ConvAI chat widget by clicking its button
 */
export function openAIChat() {
  console.log('🤖 Attempting to open AI chat widget...');
  
  // Find the ElevenLabs widget element
  const widget = document.querySelector('elevenlabs-convai') as any;
  
  if (!widget) {
    console.warn('⚠️ AI assistant widget not found. It may still be loading.');
    alert('AI Assistant is loading. Please try again in a moment.');
    return;
  }

  console.log('✅ Widget found:', widget);

  // Try to access the Shadow DOM and click the button
  try {
    if (widget.shadowRoot) {
      console.log('🔍 Accessing shadow root...');
      
      // Find the button inside the shadow DOM
      // ElevenLabs widget typically has a button element
      const button = widget.shadowRoot.querySelector('button');
      
      if (button) {
        console.log('✅ Found button in shadow DOM, clicking...');
        button.click();
        return;
      } else {
        console.log('⚠️ No button found in shadow root, trying all clickable elements...');
        
        // Try to find any clickable element
        const clickables = widget.shadowRoot.querySelectorAll('[role="button"], .button, button, a');
        if (clickables.length > 0) {
          console.log(`Found ${clickables.length} clickable elements, clicking first one...`);
          (clickables[0] as HTMLElement).click();
          return;
        }
      }
    }
    
    // Fallback: try dispatching a click event directly on the widget
    console.log('⚠️ Shadow DOM access failed, trying direct click...');
    widget.click();
    
  } catch (error) {
    console.error('❌ Error accessing widget:', error);
    
    // Last resort: show a helpful message
    alert('Please click the AI assistant icon at the bottom-right corner of the screen.');
  }
}
