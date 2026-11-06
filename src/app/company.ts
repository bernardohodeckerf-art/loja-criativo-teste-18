export const company = { name: "LJB Ferragens e Acessórios para Móveis", authorizedBrand: "Blumm", phone: "", whatsapp: "554733396152", whatsappDisplay: "(47) 3339-6152", hours: "", social: "", address: "Rua Francisco Vahldieck, 3814 — Fortaleza Alta — Blumenau/SC" };
export function whatsappUrl(message = "Olá! Gostaria de conhecer os produtos da LJB e solicitar um orçamento.") {
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
}
