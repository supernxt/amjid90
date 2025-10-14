import { useEffect } from "react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { 'agent-id': string }, HTMLElement>;
    }
  }
}

export default function AIVoiceWidget() {
  useEffect(() => {
    let widget: HTMLElement | null = null;
    let mounted = true;
    let retryTimeout: NodeJS.Timeout;

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
          console.log('ElevenLabs widget not ready, will retry...');
          retryTimeout = setTimeout(initializeWidget, 3000);
          return;
        }

        widget = document.createElement('elevenlabs-convai');
        widget.setAttribute('agent-id', 'agent_9801k71wapq9ehvrghfwzstqjbdn');
        
        // Add error handler
        widget.addEventListener('error', (e) => {
          console.log('Widget error handled gracefully:', e);
        });
        
        document.body.appendChild(widget);
      } catch (error) {
        console.log('AI assistant will be available shortly');
      }
    };

    initializeWidget();

    return () => {
      mounted = false;
      if (retryTimeout) clearTimeout(retryTimeout);
      if (widget && widget.parentNode) {
        widget.remove();
        widget = null;
      }
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3" data-testid="widget-ai-voice">
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
