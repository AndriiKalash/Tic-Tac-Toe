import clsx from 'clsx';

/**
 *
 * @param {{
 * children:any,
 * className:string,
 * size:  'md' | 'lg',
 * variant: 'primary' | 'outline',
 * }}props
 */

export function UiButton({ className, children, variant, size }) {
  const buttonClassName = clsx(
    className,
    'transition-colors font-normal leading-tight',
    {
      md: 'text-sm rounded py-2 px-6 ',
      lg: ' w-44 text-2xl rounded-lg px-5 py-2',
    }[size],
    {
      primary: 'bg-teal-600 text-white hover:bg-teal-500',
      outline: 'border border-teal-600 text-teal-600 hover:bg-teal-50',
    }[variant]
  );

  return <button className={buttonClassName}>{children}</button>;
}
