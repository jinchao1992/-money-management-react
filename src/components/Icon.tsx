import React from 'react';
// import引入一个文件目录下所有的文件
const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().map(requireContext);
try {
  importAll(require.context('icons', true, /\.svg$/));
} catch (err) {
  console.log(err);
}

interface Prop {
  name: string
}

const Icon = (prop: Prop) => {
  return (
    <svg className="icon">
      <use xlinkHref={`#${prop.name}`}/>
    </svg>
  );
};

export default Icon;