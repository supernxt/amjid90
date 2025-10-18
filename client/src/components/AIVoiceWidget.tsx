import { useEffect } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openAIChat } from "@/lib/ai-assistant";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { 'agent-id': string }, HTMLElement>;
    }
  }
}

export default function AIVoiceWidget() {
  useEffect(() => {
    // Only load AI assistant on HTTPS (required for microphone access)
    const isSecure = window.location.protocol === 'https:' || window.location.hostname === 'localhost';
    
    if (!isSecure) {
      console.info('AI voice assistant requires HTTPS. Will be available after SSL setup.');
      return;
    }

    let widget: HTMLElement | null = null;
    let mounted = true;
    let retryCount = 0;
    const maxRetries = 3;
    let originalErrorHandler: OnErrorEventHandler = null;

    const initializeWidget = async () => {
      try {
        const existingWidget = document.querySelector('elevenlabs-convai');
        if (existingWidget) {
          return;
        }

        // Wait for script to load
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        if (!mounted) return;

        // Check if custom element is defined
        if (!customElements.get('elevenlabs-convai')) {
          retryCount++;
          if (retryCount < maxRetries) {
            setTimeout(initializeWidget, 3000);
          }
          return;
        }

        widget = document.createElement('elevenlabs-convai');
        widget.setAttribute('agent-id', 'agent_9801k71wapq9ehvrghfwzstqjbdn');
        
        // Suppress widget-specific errors
        widget.addEventListener('error', (e) => {
          e.preventDefault();
          e.stopPropagation();
        });
        
        // Capture original error handler
        originalErrorHandler = window.onerror;
        
        // Suppress specific ElevenLabs errors only
        window.onerror = function(msg, url, line, col, error) {
          if (msg && typeof msg === 'string' && (msg.includes('getUint8Mode') || msg.includes('mediaDevices'))) {
            return true; // Suppress these specific errors
          }
          // Pass all other errors to original handler
          if (originalErrorHandler) {
            return originalErrorHandler(msg, url, line, col, error);
          }
          return false;
        };
        
        document.body.appendChild(widget);
      } catch (error) {
        // Silently fail
      }
    };

    initializeWidget();

    return () => {
      mounted = false;
      
      // Restore original error handler
      if (originalErrorHandler !== null) {
        window.onerror = originalErrorHandler;
      }
      
      if (widget && widget.parentNode) {
        widget.remove();
        widget = null;
      }
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3" data-testid="widget-ai-voice">
      <Button
        size="icon"
        variant="default"
        onClick={openAIChat}
        className="h-14 w-14 rounded-full shadow-lg shadow-primary/30 animate-pulse"
        data-testid="button-float-ai-chat"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
      <a href="tel:048864215">
        <Button
          size="icon"
          variant="outline"
          className="h-14 w-14 rounded-full bg-background/95 backdrop-blur-sm border-2 border-primary/40 hover:border-primary shadow-lg shadow-primary/20"
          data-testid="button-float-call"
        >
          <Phone className="h-6 w-6 text-primary" />
        </Button>
      </a>
    </div>
  );
}
