const PopMessageIcon = ({
  style,
  ...restOfProps
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="56"
    height="56"
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...restOfProps}
  >
    <rect width="56" height="56" rx="7.46667" fill="#CCE2FF" />
    <path
      d="M8.63281 12.6465V46.2465H47.3661V12.6465L28.2328 23.8465L8.63281 12.6465Z"
      fill="#5D8EF3"
    />
    <path
      d="M27.2995 30.8464L47.3661 20.5797V12.6464L27.2995 23.8464L8.63281 12.1797V45.7797H13.2995V22.913L27.2995 30.8464Z"
      fill="#3F76E8"
    />
    <path
      d="M28.2329 28.0465L9.09961 9.37988H47.3663L28.2329 28.0465Z"
      fill="#273687"
    />
  </svg>
);

export default PopMessageIcon;
