import Navbar from '../components/Navbar';

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="w-full">{children}</main>
    </div>
  );
}
