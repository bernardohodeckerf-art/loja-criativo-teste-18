import Image from "next/image";
export function BrandLogo({ prominent = false }: { prominent?: boolean }) {
 return <Image src="/brands/ljb-3d.webp" alt="LJB — Ferragens e Acessórios para Móveis" width={600} height={300} sizes={prominent ? "(max-width: 1100px) 240px, 320px" : "(max-width: 767px) 125px, 155px"} className={prominent ? "ljb-logo prominent" : "ljb-logo"} priority={!prominent}/>;
}
