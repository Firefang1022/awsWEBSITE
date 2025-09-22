import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { ProcessFlow } from './components/ProcessFlow';
import { TeamSection } from './components/TeamSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Services />
        <ProcessFlow />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
}
