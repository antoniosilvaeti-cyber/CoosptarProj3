
export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-gray-400 py-12">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="h-8 w-auto grayscale brightness-200" />
          <span className="text-xl font-bold text-white tracking-tight">Coopstar <span className="text-brand-red">Express</span></span>
        </div>
        
        <div className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Coopstar Express. Todos os direitos reservados.
        </div>

        <div className="text-sm flex items-center gap-1">
          Feito com estilo e performance.
        </div>
      </div>
    </footer>
  );
}
