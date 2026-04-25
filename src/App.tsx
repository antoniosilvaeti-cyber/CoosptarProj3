import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WorkProcess from './components/WorkProcess';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 overflow-x-hidden pt-[72px]">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <WorkProcess />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
