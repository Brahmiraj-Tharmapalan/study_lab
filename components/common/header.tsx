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
    <header
    className={cn(
      "mt-5 max-w-7xl",
          type === "SignIn" && "ani-fadeDown"
        )}
        >
        <StarBorder>
        <div className="relative">
          {/* <div className="absolute -inset-2 rounded-lg bg-gradient-to-bl from-gray-600 via-sky-600 to-neutral-600 opacity-50 blur-2xl z-0"></div> */}
          <div
            className={cn(
              "relative flex h-16 items-center justify-between px-5 rounded-bl-lg rounded-tr-lg border border-white/15 bg-[#131316] shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.20)] overflow-hidden z-10"
            )}
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
