import { useEffect } from "react";
import { Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
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
    const widgetElement = document.createElement('elevenlabs-convai');
    widgetElement.setAttribute('agent-id', 'agent_9801k71wapq9ehvrghfwzstqjbdn');
    document.body.appendChild(widgetElement);

    return () => {
      const widget = document.querySelector('elevenlabs-convai');
      if (widget) {
        widget.remove();
      }
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3" data-testid="widget-ai-voice">
      <div className="flex flex-col gap-2">
        <a href="tel:048864215">
          <Button
            size="icon"
            variant="outline"
            className="h-12 w-12 rounded-full bg-background/95 backdrop-blur-sm border-2"
            data-testid="button-float-call"
          >
            <Phone className="h-5 w-5" />
          </Button>
        </a>
        <a href="https://wa.me/048864215" target="_blank" rel="noopener noreferrer">
          <Button
            size="icon"
            variant="default"
            className="h-12 w-12 rounded-full"
            data-testid="button-float-whatsapp"
          >
            <SiWhatsapp className="h-5 w-5" />
          </Button>
        </a>
      </div>
    </div>
  );
}
