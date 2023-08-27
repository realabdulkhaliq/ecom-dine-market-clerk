const MaxWidthWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="max-w-screen-2xl mx-auto px-5 lg:px-24">
      {children}
    </section>
  );
};

export default MaxWidthWrapper;
