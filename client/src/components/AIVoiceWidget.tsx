import { useEffect } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { 'agent-id': string }, HTMLElement>;
    }
  }
}

export default function AIVoiceWidget() {
  useEffect(() => {
    const isSecure = window.location.protocol === 'https:' || window.location.hostname === 'localhost';

    if (!isSecure) {
      console.info('AI voice assistant requires HTTPS. Will be available after SSL setup.');
      return;
    }

    let widget: HTMLElement | null = null;
    let mounted = true;
    let retryCount = 0;
    const maxRetries = 3;

    const initializeWidget = async () => {
      try {
        const existingWidget = document.querySelector('elevenlabs-convai');
        if (existingWidget) return;

        await new Promise(resolve => setTimeout(resolve, 2000));

        if (!mounted) return;

        if (!customElements.get('elevenlabs-convai')) {
          retryCount++;
          if (retryCount < maxRetries) {
            setTimeout(initializeWidget, 3000);
          }
          return;
        }

        widget = document.createElement('elevenlabs-convai');
        widget.setAttribute('agent-id', 'agent_9801k71wapq9ehvrghfwzstqjbdn');
        document.body.appendChild(widget);
      } catch {
        // Silently fail
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

  return null;
}
