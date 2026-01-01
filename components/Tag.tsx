
import React from 'react';

interface TagProps {
  label: string;
}

// Skill tag component 技能标签组件
const Tag: React.FC<TagProps> = ({ label }) => {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
      {label}
    </span>
  );
};

export default Tag;
