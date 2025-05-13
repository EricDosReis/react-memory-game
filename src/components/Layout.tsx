type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-blue-200 p-4 sm:gap-8 sm:p-8">
      {children}
    </div>
  );
};

export { Layout };
