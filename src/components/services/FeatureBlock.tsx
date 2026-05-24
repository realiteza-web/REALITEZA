import React from 'react';

interface FeatureBlockProps {
  title: string;
  content: string;
  icon?: React.ElementType;
}

const FeatureBlock = ({ title, content, icon: Icon }: FeatureBlockProps) => (
  <div className="p-8 bg-white border border-slate-200 hover:border-primary transition-all duration-300 group">
    {Icon && (
      <div className="w-12 h-12 bg-slate-50 text-primary flex items-center justify-center mb-6 group-hover:text-primary transition-all duration-300">
        <Icon size={24} />
      </div>
    )}
    <p className="sm:text-lg text-sm font-medium leading-relaxed text-slate-700">
      <strong className="text-slate-900 font-bold block text-lg mb-2 uppercase tracking-tight">{title}:</strong>
      {content}
    </p>
  </div>
);

export default FeatureBlock;
