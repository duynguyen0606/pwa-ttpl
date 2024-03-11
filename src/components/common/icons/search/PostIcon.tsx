import { memo } from 'react';

function PostIcon(props: {
  width?: string;
  height?: string;
  bgColor?: string;
}) {
  const { width, height, bgColor } = props;

  return (
    <svg
      fill={bgColor ? bgColor : '#000'}
      width={width ? width : '60px'}
      height={height ? height : '60px'}
      viewBox='0 0 20 20'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M18 3H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM4 10h6v1H4v-1zm8 4H4v-1h8v1zm5-6h-3V5h3v3z' />
    </svg>
  );
}

export default memo(PostIcon);
