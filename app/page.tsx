import Image from "next/image";

import Logo from '../public/assets/logo.svg'
import Mail from '../public/assets/mail.svg'

export default function Home() {
  return (
    <main>
      <div className="h-auto w-full max-w-full">
        <Logo />
      </div>
      <a href="mailto:askme@hardart.cz" className="h-7 w-9 block absolute bottom-8 right-8">
        <Mail />
      </a>
    </main>
  );
}
