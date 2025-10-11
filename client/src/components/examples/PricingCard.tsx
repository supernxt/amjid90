import PricingCard from '../PricingCard'

export default function PricingCardExample() {
  return (
    <PricingCard
      title="AI Pro"
      price="$299"
      period="month"
      description="Perfect for growing teams"
      features={[
        "10 AI agent seats",
        "Multi-channel support",
        "CRM integration",
        "Priority support",
        "Advanced analytics"
      ]}
      isPopular={true}
    />
  )
}
