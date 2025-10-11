import FlipCard from '../FlipCard'
import { Mail } from 'lucide-react'

export default function FlipCardExample() {
  return (
    <FlipCard
      icon={Mail}
      title="Brand Monitor Agent"
      description="Monitor your brand across social media and web"
      features={[
        "Real-time social media monitoring",
        "Sentiment analysis",
        "Automated alerts",
        "Multi-platform tracking"
      ]}
      category="Marketing"
    />
  )
}
