import Link from 'next/link';
import React from 'react';

interface Breadcrumb {
  label: string;
  path?: string;
}

type Props = {
  breadcrumb: Breadcrumb[];
  children: React.ReactNode;
};

const PageTitle: React.FC<Props> = ({ children, breadcrumb = [] }) => {
  return (
    <div className="container flex h-48 flex-col items-center justify-center">
      <h1 className="mb-4 text-4xl font-bold">{children}</h1>

      <nav aria-label="Breadcrumb" className="text-sm uppercase">
        <ol className="flex items-center">
          {breadcrumb.map((item, index) => {
            const isLast = index === breadcrumb.length - 1;

            return (
              <li key={`${item.path ?? item.label}-${index}`} className="flex items-center">
                {item.path && !isLast ? (
                  <Link href={item.path} className="hover:text-primary-600 hover:underline">
                    <span>{item.label}</span>
                  </Link>
                ) : (
                  <span
                    className={isLast ? 'text-gray-500' : 'text-gray-400'}
                    aria-current={isLast ? 'page' : undefined}
                  >
                    {item.label}
                  </span>
                )}

                {!isLast && (
                  <span className="px-2 text-primary-500" aria-hidden="true">
                    /
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};

export default PageTitle;
