import { memo } from 'react';

function AllIcon(props: { width?: string; height?: string; bgColor?: string }) {
  const { width, height, bgColor } = props;
  return (
    <svg
      version='1.1'
      id='Capa_1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      fill={bgColor ? bgColor : '#000'}
      width={width ? width : '60px'}
      height={height ? height : '60px'}
      viewBox='0 0 552.912 552.912'
      xmlSpace='preserve'
    >
      <g>
        <g>
          <path
            d='M276.462,3.693L276.462,3.693L276.462,3.693L276.462,3.693L0,242.311l27.551,31.92l35.408-30.58v305.567H221.08V385.688
			h55.382l0,0h55.382v163.531h158.119V243.657l35.403,30.583l27.546-31.923L276.462,3.693z M276.462,261.906
			c-33.82,0-61.237-27.417-61.237-61.234c0-33.814,27.422-61.232,61.237-61.232c33.816,0,61.227,27.418,61.227,61.232
			C337.688,234.483,310.278,261.906,276.462,261.906z'
          />
        </g>
      </g>
    </svg>
  );
}

export default memo(AllIcon);
