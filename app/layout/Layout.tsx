export default function Layout({ children }: { children: any }) {
  return (
    <div className="min-h-screen w-full">
      <div className="mx-20">{children}</div>
    </div>
  );
}
