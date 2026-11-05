export const categories = ["Todos", "Madeiras e revestimentos", "Ferragens e acessórios", "Fixação", "Perfis e iluminação"];
export const products = [
 {id:"plywood",name:"Compensado naval",category:1,description:"Chapas para os seus projetos de marcenaria.",imageNote:"Compensado ilustrativo. Consulte a opção naval e suas especificações."},
 {id:"laminate",name:"Fórmica",category:1,description:"Revestimentos para dar personalidade ao seu móvel.",imageNote:"Amostras ilustrativas de laminados decorativos."},
 {id:"edgebanding",name:"Fitas de borda",category:1,description:"Acabamento para os detalhes do seu móvel.",imageNote:"Aplicação ilustrativa de fita de borda em marcenaria."},
 {id:"glue",name:"Colas",category:1,description:"Soluções de colagem para marcenaria."},
 {id:"handle",name:"Puxadores",category:2,description:"Detalhes que transformam o seu projeto."},
 {id:"slide",name:"Corrediças",category:2,description:"Movimento para gavetas e móveis."},
 {id:"hinge",name:"Dobradiças",category:2,description:"Ferragens para a montagem dos seus móveis."},
 {id:"rail",name:"Cabideiros",category:2,description:"Organização para armários e closets.",imageNote:"Uso ilustrativo de cabideiro em ambiente. Consulte as opções da loja."},
 {id:"cutlery",name:"Divisores de talheres",category:2,description:"Organização para o interior das gavetas."},
 {id:"screw",name:"Parafusos",category:3,description:"Fixação para a montagem dos seus projetos."},
 {id:"plug",name:"Buchas",category:3,description:"Acessórios para as suas necessidades de fixação."},
 {id:"aluminium",name:"Perfis de alumínio",category:4,description:"Soluções para estrutura e acabamento."},
 {id:"ledprofile",name:"Perfis de LED",category:4,description:"Acabamento para a iluminação dos móveis."},
 {id:"ledstrip",name:"Fitas de LED",category:4,description:"Luz para valorizar os seus ambientes."},
];
export type Product = (typeof products)[number];

const suppliedPhotos: Record<string, string[]> = {
 hinge: ['/products/supplied/hinge-1.webp','/products/supplied/hinge-2.webp','/products/supplied/hinge-3.webp'],
 slide: ['/products/supplied/slide-1.webp','/products/supplied/slide-2.webp','/products/supplied/slide-3.webp'],
 ledprofile: ['/products/supplied/ledprofile-1.webp'],
};
export function productPhotos(id: string) { return suppliedPhotos[id] || [`/products/${id}.webp`]; }
