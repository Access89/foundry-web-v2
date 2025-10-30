import { Button, ButtonProps, cn } from '@nextui-org/react';

interface ICustomButton extends ButtonProps {
  children: React.ReactNode;
  className?: string;
  selector?: string;
  to?: string;
}
export const CustomButton = ({
  children,
  className,
  ...rest
}: ICustomButton) => {
  return (
    <Button
      className={cn(
        'bg-[#F9FFF6] rounded-md capitalize text-[#316449] disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed',
        className,
      )}
      {...rest}
      onPress={(e) => {
        if (rest.disabled) {
          return;
        }
        rest.onPress?.(e);
      }}
    >
      {children}
    </Button>
  );
};
