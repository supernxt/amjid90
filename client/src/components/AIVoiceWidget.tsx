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

    const initializeWidget = async () => {
      try {
        const existingWidget = document.querySelector('elevenlabs-convai');
        if (existingWidget) {
          return;
        }

        await Promise.race([
          customElements.whenDefined('elevenlabs-convai'),
          new Promise((_, reject) => setTimeout(() => reject(new Error('Widget definition timeout')), 15000))
        ]);

        if (!mounted) return;

        widget = document.createElement('elevenlabs-convai');
        widget.setAttribute('agent-id', 'agent_9801k71wapq9ehvrghfwzstqjbdn');
        document.body.appendChild(widget);
      } catch (error) {
        console.warn('ElevenLabs widget not available - assistant may load later');
      }
    };

    initializeWidget();

    return () => {
      mounted = false;
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
