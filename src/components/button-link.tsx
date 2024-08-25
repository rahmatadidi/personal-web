import React from "react";

type ButtonLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  download?: string;
};

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  href,
  download,
  className,
  children,
  ...props
}) => {
  return (
    <a
      href={href}
      download={download}
      className={`px-4 py-2 bg-secondary text-white rounded hover:bg-muted ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};
