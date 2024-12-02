import Image from "next/image";
import LogoIcon from "../assets/Logo.jpg";
import MenuIcon from "../assets/Menu1.png"; 

export function Header() {
  return (
    <header className="py-4 border-b border-white/15 md:border-none">
      <div className="container mx-auto">
        <div className="flex justify-between items-center border-white/15">
          
          <div className="border-white/15 h-10 w-10 rounded-xl inline-flex justify-center items-center md:p-2.5">
            <Image src={LogoIcon} alt="Logo" className="h-8 w-8 object-contain" />
          </div>

          
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              <a href="#" className="text-white/70 hover:text-white transition">Features</a>
              <a href="#" className="text-white/70 hover:text-white transition">Developer</a>
              <a href="#" className="text-white/70 hover:text-white transition">Pricing</a>
              <a href="#" className="text-white/70 hover:text-white transition">Changelog</a>
            </nav>
          </div>

         
          <div className="flex gap-4 items-center">
            
            <button className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#48208a] shadow-[0px_0px_12px_#8cff]">
              <div className="absolute inset-0">
                <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]">
                  <div className="border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
                  <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg"></div>
                </div>
              </div>
              <span>Join Waitlist</span>
            </button>

          
            <Image src={MenuIcon} alt="Menu" className="h-8 w-8 object-contain sm:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
}