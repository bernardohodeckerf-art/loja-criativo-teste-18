# LJB — desenvolvimento

Base Next.js, TypeScript e Tailwind CSS. Node 24 e npm.

## Executar

`npm ci`
`npm run dev -- --hostname 0.0.0.0`

## Verificar

`npm run lint`
`npm run build`
`npm start -- --hostname 0.0.0.0`

Catálogo com 14 produtos, filtros e consulta em dialog nativo com Escape e foco modal. Lenis respeita movimento reduzido. Dados revisáveis em src/app/company.ts. Telefone, WhatsApp e horários não informados.

## Vídeo do hero — origem e licença

- Autor: **Tima Miroshnichenko**.
- Título: *A Wood Worker is Putting Wood Putty on the Block of Wood*.
- Página original: https://www.pexels.com/video/a-wood-worker-is-putting-wood-putty-on-the-block-of-wood-6789582/
- Arquivo original: https://videos.pexels.com/video-files/6789582/6789582-uhd_3840_2160_25fps.mp4
- Licença Pexels: https://www.pexels.com/license/ — permite uso comercial e edição, sem atribuição obrigatória; respeitar restrições sobre endosso, revenda e redistribuição. Consultada em 05/11/2026.
- Material de banco ilustrativo de marcenaria; não representa instalações nem funcionários da LJB.
- Original oferecido pelo Pexels em 3840 × 2160; ffprobe confirmou H.264, 25 fps, 30,44 s e 50.642.222 bytes. Não houve ampliação nesta implementação. A dimensão do arquivo e os dados da fonte não são uma auditoria independente do processo de captação.
- Derivado local: `public/media/woodworking-4k.mp4`, 3840 × 2160, 8 s, sem faixa de áudio, 4.892.526 bytes (~4,9 MB), H.264. Capa WebP extraída do mesmo vídeo, 1600 × 900.
- Créditos, URLs e SHA-256 em `public/media/credits.json`. Original preservado fora do checkout em `/workspace/media-originals/pexels-6789582-original.mp4`.

Reprodução automática, sem áudio, em loop e inline. Capa permanece atrás do vídeo e substitui a reprodução quando houver falha. Botão acessível permite pausar. Em telas abaixo de 768 px ou movimento reduzido o elemento de vídeo e sua URL não são montados, evitando download do MP4. Alterações dessas preferências removem o vídeo. Framer Motion aplica zoom discreto na rolagem integrada ao Lenis; a composição completa ZoomParallax com fotografias continua pendente.

Para reproduzir a compressão, com ffmpeg instalado:

```sh
ffmpeg -ss 4 -i original.mp4 -t 8 -an -c:v libx264 -preset fast -crf 28 -pix_fmt yuv420p -movflags +faststart -threads 2 public/media/woodworking-4k.mp4
ffmpeg -ss 4 -i original.mp4 -frames:v 1 -vf scale=1600:-1 -quality 82 public/media/woodworking-poster.webp
```

## Demais pendências

Logo oficial não recebida; não há modelo 3D, fotografias de produtos ou logotipos oficiais. O nome LJB e fabricantes permanecem em texto provisório. FGVTN requer confirmação de identidade visual; Blumm preserva a grafia do briefing. Não há preços, especificações, estoque ou contatos inventados. shadcn/ui ainda não foi inicializado. A implementação completa das demais partes do briefing continua pendente. O envio ao GitHub foi solicitado pelo usuário. Nenhuma publicação do site foi executada.

## Validação do vídeo (05/11/2026)

- ESLint e build de produção com TypeScript: passaram.
- ffprobe: derivado 3840 × 2160, 8 s, apenas stream de vídeo; ffmpeg decodificou o trecho completo sem erro.
- Chromium em produção, desktop 1440 px: dimensões reais de reprodução 3840 × 2160, tempo avançando, pausa e retomada verificadas.
- Chromium em 360 px e desktop com movimento reduzido: nenhum elemento video e nenhuma requisição MP4.
- Falha de rede do MP4 simulada: vídeo removido e capa preservada.
- Sem erros de JavaScript ou rolagem horizontal nos quatro cenários. Screenshot desktop inspecionado para leitura do título e CTAs.
- Safari/iOS, outros navegadores e aparelhos físicos não foram testados.
