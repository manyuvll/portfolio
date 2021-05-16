import Header from "./header";
import Footer from "./footer";

interface LayoutProps {
    children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen ">
        <div className="background"/>
        <Header />
        <main className="flex-1 flex items-center justify-center lg:container px-4 py-6 mx-auto md:px-6 md:py-12">
            {props.children}
        </main>
        <Footer />
    </div>
  );
}