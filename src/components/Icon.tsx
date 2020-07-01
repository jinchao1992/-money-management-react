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

const Icon = (props: Prop) => {
  return (
    <svg className="icon">
      <use xlinkHref={`#${props.name}`}/>
    </svg>
  );
};

export default Icon;