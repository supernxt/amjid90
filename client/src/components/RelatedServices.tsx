import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface RelatedService {
  title: string;
  desc: string;
  path: string;
  color: string;
}

interface RelatedServicesProps {
  services: RelatedService[];
}

export default function RelatedServices({ services }: RelatedServicesProps) {
  return (
    <div className="bg-gray-50 rounded-3xl p-10 mb-16">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Related Services</h2>
        <p className="text-gray-600 mt-2">Explore more solutions from Super Next Technologies</p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {services.map((s, i) => (
          <Link key={i} href={s.path}>
            <div className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-primary/30 hover:shadow-md transition-all cursor-pointer group">
              <div className={`w-2 h-2 rounded-full ${s.color} mb-3`} />
              <h3 className="font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">{s.title}</h3>
              <p className="text-gray-500 text-sm mb-3">{s.desc}</p>
              <div className="flex items-center gap-1 text-primary text-sm font-medium">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
