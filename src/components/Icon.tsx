import React from 'react';
// import引入一个文件目录下所有的文件
const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().map(requireContext);
try {
  importAll(require.context('icons', true, /\.svg$/));
} catch (err) {
  console.log(err);
}

interface Props {
  name?: string
  onClick?: () => void;
}

const Icon = (props: Props) => {
  return (
    <svg className="icon" onClick={props.onClick}>
      <use xlinkHref={`#${props.name}`}/>
    </svg>
  );
};

export default Icon;