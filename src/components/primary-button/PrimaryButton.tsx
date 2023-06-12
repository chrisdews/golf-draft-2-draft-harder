import Link from "next/link";

const PrimaryButton = ({
  children,
  path,
  className,
}: {
  children: React.ReactNode;
  path: string;
  className: string;
}): JSX.Element => (
  <Link
    href={path}
    className={`border text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none focus:outline-none focus:shadow-outline ${className}`}
  >
    {children}
  </Link>
);

export default PrimaryButton;
