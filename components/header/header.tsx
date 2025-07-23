import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import SL_Logo from "@/public/Logo/SL_Transparent_Logo.png";
import SL_Logo_Name from "@/public/Logo/Logo_name_1.png";
import { cn } from "@/lib/utils";
import { StarBorder } from "./star-border";

type HeaderParams = {
  href: string;
  type: string;
};

export function Header(params: HeaderParams) {
  const { href, type } = params;
  return (
    <header className={cn("mt-5", type === "SignIn" && "ani-fadeDown")}>
      <StarBorder className="w-full max-w-7xl shadow-[4px_23px_197px_49px_rgba(71,_17,_83,_0.48)]" color="white" speed="8s">
        <div className="relative">
          <div
            className={cn("relative flex items-center justify-between px-5")}
          >
            <Link href="/" className="flex items-center gap-2">
              <Image src={SL_Logo} alt="Logo" width={48} height={48} />
              <Image
                src={SL_Logo_Name}
                alt="Logo"
                width={280}
                height={280}
                className="hidden md:block dark:invert"
              />
            </Link>
            <div className="hidden md:flex justify-center items-center gap-5">
              <Button className="shine-glow-btn" asChild>
                <Link href={href}>{type}</Link>
              </Button>
            </div>
          </div>
        </div>
      </StarBorder>
    </header>
  );
}
