import className from "classnames";

function Button({
  children,
  primary,
  secondary,
  warning,
  danger,
  success,
  outline,
  rounded,
  ...rest
}) {
  const classes = className(
    rest.className,
    ",flex items-center px-3 py-1.5 border ",
    {
      "border-blue-500 bg-blue-500 text-white": primary,
      "border-gray-900 bg-gray-500 text-white": secondary,
      "border-green-500 bg-green-500 text-white": success,
      "border-yellow-500 bg-yellow-500 text-white": warning,
      "border-red-500 bg-red-500 text-white": danger,
      "rounded-full": rounded,
      "bg-white outline-2": outline,
      "text-blue-500": outline && primary,
      "text-gray-900": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-500": outline && warning,
      "text-red-500": outline && danger,
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

// Button.propTypes = {
//   checkVariationValue: ({ primary, secondary, warning, danger, success }) => {
//     const count =
//       Number(!!primary) +
//       Number(!!warning) +
//       Number(!!secondary) +
//       Number(!!danger) +
//       Number(!!success);
//     if (count > 1) {
//       return new Error(
//         "Only one of primary secondary warning danger and success can be true"
//       );
//     }
//   },
// };

export default Button;
