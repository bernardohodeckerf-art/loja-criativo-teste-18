import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "LJB | Compensados, Ferragens e Acessórios", description: "Há mais de 24 anos no ramo moveleiro de Blumenau e região." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body>{children}</body></html>; }
