## Correção do catálogo solicitada pelo usuário

Madeira/compensado naval e fórmica foram retirados da oferta, filtros, questionário e galeria. A apresentação agora usa "Ferragens e Acessórios", e "Madeiras e revestimentos" foi renomeada para "Acabamentos e colagem". São 12 famílias de produtos ativas. Alternativa foi substituída por Blumm, usando a logo original Blum do site oficial, com a grafia configurável preservada conforme solicitação. "Cabideiros" foi corrigido para "Cabide interno", e a foto genérica anterior de arara foi retirada.

As fotos corretas de perfil de alumínio, divisor de talheres e cabide interno foram recebidas no ZIP `WhatsApp Image 2026-11-05 at 21.21.51.zip` e aplicadas ao catálogo, carrossel e ampliação. A indicação de foto em atualização foi removida. As imagens foram convertidas para WebP sem ampliação e com proporções preservadas, e a origem foi registrada nos créditos. O ZIP com sete fotos era repetido; o template de hamburgueria também enviado não foi integrado por não pertencer ao pedido do site LJB.

A marca LJB recebeu uma versão renderizada em 3D por IA baseada na referência fornecida, com letras azuis, linhas horizontais e contorno oval avermelhado e preto. Não é um modelo WebGL nem se afirma identidade pixel a pixel com o original. A versão original em arquivo ainda não foi disponibilizada no executor.

# LJB — Compensados, Ferragens e Acessórios

Site Next.js, TypeScript e Tailwind CSS com catálogo ilustrado, questionário de projeto, hero em vídeo, animações e componentes shadcn/ui. Node 24 e npm.

## Desenvolvimento e validação

```sh
npm ci
npm run dev -- --hostname 0.0.0.0
npm run lint
npm run build
npm start -- --hostname 0.0.0.0
```

O build usa Webpack porque o Turbopack apresentou falha de abertura de porta interna neste ambiente. No desenvolvimento, prefira `localhost` no navegador; a versão instalada restringe origens de recursos HMR.

## Funcionalidades

- Catálogo com 14 famílias de produtos, filtros e fotos reais otimizadas em WebP. Todas as imagens são ilustrativas: não afirmam modelos exatos, estoque ou especificações. Compensado naval usa foto ilustrativa de compensado, sem certificar a classe naval.
- Ampliação acessível com dialog nativo, Escape, botão de fechamento, foco devolvido ao acionador e atribuição da foto.
- Questionário em quatro etapas: projeto, produtos, detalhes e resumo. Adicionar produto no catálogo inclui o item na lista. Permite revisar, copiar e baixar o resumo. Não transmite dados nem pedidos; respostas ficam no estado da página e não sobrevivem ao recarregamento. Nenhum contato comercial foi inventado.
- Layout em 360 px, tablet e desktop, menu móvel e proporções de mídia preservadas.
- Hero cinematográfico com entradas GSAP, camadas com perspectiva, iluminação e flutuação. Carrossel em leque com fotos, setas, gestos e alternativa estática. Cards e logos têm efeitos visuais CSS de profundidade; **não são modelos geométricos WebGL**.
- Controle global de animações e respeito a prefers-reduced-motion. Movimento reduzido não baixa vídeo. Lenis, GSAP e Framer Motion têm limpeza dos efeitos ao desativar as animações.

## Componentes enviados pelo usuário

Cinco anexos eram cópias idênticas do mesmo CinematicHero, confirmadas por SHA-256. O outro trazia o Card Fan Carousel. Foram integradas versões adaptadas em `src/components/ui/cinematic-landing-hero.tsx` e `src/components/ui/card-fan-carousel.tsx`.

O hero foi adaptado para a identidade LJB e o vídeo existente, sem mockup de aplicativo, textos de recuperação pessoal ou lojas de apps do exemplo. Evita pin de rolagem de 7.000 px. A galeria usa fotos de produtos em vez de paisagens de demonstração. Ambos respeitam pausa global e movimento reduzido.

A estrutura shadcn está configurada em `components.json`, com alias `@/components/ui` para `src/components/ui`, estilos em `src/app/globals.css` e utilitário `src/lib/utils.ts`. O botão shadcn é usado no questionário. GSAP foi instalado como dependência dos componentes enviados.

## Fotos: autoria e licença

As 14 fotos foram obtidas no Wikimedia Commons. Sete imagens adicionais de dobradiças, corrediças e perfil de LED foram fornecidas pelo usuário no ZIP WhatsApp Unknown 2026-11-05 at 20.54.22.zip; seus créditos informam a origem fornecida e não alegam licença aberta. Fontes originais, autores, dimensões, licença e descrição da conversão constam de `public/products/credits.json`. A página `/creditos` e a ampliação de cada foto exibem a atribuição e os links de licença. Arquivos com CC BY-SA mantêm suas respectivas licenças nas versões convertidas; a licença da foto não se estende automaticamente ao restante do projeto.

Derivados WebP têm no máximo 1.000 px de largura, sem ampliação artificial. Originais foram preservados fora do checkout em `/workspace/media-originals/products`; podem ser recuperados pelas URLs de origem no manifesto. Nem todas as fontes oferecem resolução próxima a 4K. Nenhuma fotografia é apresentada como modelo específico disponível em estoque.

## Vídeo do hero

- Autor: **Tima Miroshnichenko**.
- Título: *A Wood Worker is Putting Wood Putty on the Block of Wood*.
- Página: https://www.pexels.com/video/a-wood-worker-is-putting-wood-putty-on-the-block-of-wood-6789582/
- Original: https://videos.pexels.com/video-files/6789582/6789582-uhd_3840_2160_25fps.mp4
- Licença: https://www.pexels.com/license/ — uso comercial e edição permitidos, respeitadas as restrições da licença. Consultada em 05/11/2026.
- Vídeo de banco ilustrativo: não representa instalações ou funcionários da LJB.
- Original oferecido pela fonte em 3840 × 2160, confirmado por ffprobe: H.264, 25 fps, 30,44 s, 50.642.222 bytes. Não houve upscale nesta implementação; dimensões e dados da fonte não constituem auditoria independente da captação.
- Desktop/tablet a partir de 768 px: `public/media/woodworking-4k.mp4`, 3840 × 2160, 8 s, sem áudio, 4.892.526 bytes (~4,9 MB).
- Celular abaixo de 768 px: `public/media/woodworking-mobile.mp4`, 960 × 540, mesmo trecho e sem áudio, cerca de 408 KB. O MP4 4K não é requisitado no celular. O enquadramento horizontal aparece acima do texto, com proporção 16:9 preservada.
- Autoplay, muted, loop, playsInline, botão de pausa e capa WebP em caso de falha. Movimento reduzido ou pausa global remove o vídeo e mantém a imagem estática.
- Créditos e SHA-256 do original/derivado 4K em `public/media/credits.json`. Original fora do checkout em `/workspace/media-originals/pexels-6789582-original.mp4`.

## Marcas

Rometal, FGV, Soprano e Lumitek: arquivos obtidos nos respectivos sites oficiais. A referência FGV enviada pelo usuário corresponde à marca Formenti e Giovenzana; o nome exibido é FGV. Vonder: versão equivalente ao desenho de referência, obtida no catálogo Logo Download. Fontes registradas em `public/brands/credits.json`. Logotipos são marcas de seus titulares, não imagens com licença aberta. Uso identificativo das marcas informadas pelo usuário, sem afirmação de patrocínio.

**Alternativa permanece em texto.** Os anexos de imagem exibidos no chat não ficaram disponíveis como arquivos no executor. O site pesquisado para Alternativa Ferragens respondeu 503; outra empresa encontrada tinha identidade diferente da referência vermelha enviada e não foi usada. Para incorporar a imagem exata, disponibilizar o arquivo PNG/JPG/SVG de Alternativa. Não foi gerada nem redesenhada uma marca substituta.

A logo oficial LJB em 3D também continua pendente de arquivo de referência original. A grafia "Blumm" permanece em `src/app/company.ts` conforme o briefing; não foi alterada automaticamente. WhatsApp informado: (47) 3339-6152, link internacional 554733396152. Telefone para chamadas e horários não foram informados.

## Validação em 05/11/2026

ESLint e build de produção com TypeScript passaram. Chromium de produção: reprodução do vídeo móvel em 360 px e 4K em 768/1440 px; nenhum MP4 com movimento reduzido. Fluxo móvel completo do questionário, conteúdo do resumo, download da lista, menu, filtros, ampliação e Escape passaram. Os quatro tamanhos/cenários não apresentaram erros de JavaScript nem rolagem horizontal. Safari/iOS e aparelhos físicos não foram testados.

Esta alteração não publica o site. A logo Alternativa e o modelo 3D oficial LJB continuam pendentes conforme descrito acima.

Validação complementar da versão final: 14 fotografias e cinco logotipos carregaram e foram decodificados no Chromium; setas do carrossel, pausa/retomada global, página de créditos e capa após falha de rede passaram. A configuração PostCSS oficial do Tailwind foi adicionada para gerar corretamente as classes no build Webpack. Lint final sem avisos.

## Atualização: WhatsApp e imagens fornecidas

WhatsApp centralizado em `src/app/company.ts`: (47) 3339-6152, `https://wa.me/554733396152`. O questionário oferece abrir o WhatsApp com o resumo preenchido; o visitante revisa e envia a mensagem no próprio WhatsApp. O site não dispara mensagens automaticamente. As sete fotos do ZIP foram convertidas para WebP sem ampliação e incorporadas às galerias de dobradiças (3), corrediças (3) e perfis de LED (1). Não foram inferidos preços, medidas, disponibilidade ou modelos comerciais a partir das imagens.
