import type { Work, WorkCategory } from "@/types";

/** Visitor-facing names of the categories (also used by the gallery filter). */
export const categoryLabels: Record<WorkCategory, string> = {
  print: "3D Baskı",
  model: "Model ve Render",
};

/**
 * Showcase items.
 * TODO: these are PLACEHOLDERS. Replace them with the real works:
 *  - put photos into /public/photos and list them in `photos` (the first one is the cover)
 *  - put .glb files into /public/models and set `model` (optional, keep each file under ~10 MB)
 * "placeholder-cube.glb" is a simple demo cube generated for this site so the 3D viewer can be shown.
 */
export const works: Work[] = [
  {
    slug: "taksi-tabelasi",
    title: "Taksi Tabelası",
    category: "print",
    summary: "Sarı ve siyah, klasik taksi çatı tabelası modeli.",
    description:
      "Klasik bir taksi çatı tabelası tasarımı. PLA ile basılır; sarı ve siyah iki renkle görseldeki gibi bir sonuç verir. Dekoratif ya da maket amaçlı kullanılabilir.",
    photos: ["/photos/taxi-sign.jpg"],
    imageKind: "render",
    material: "PLA",
    credit: {
      designer: "Tade",
      sourceName: "MakerWorld",
      sourceUrl: "https://makerworld.com/tr/models/677134-taxi-sign",
      license: "CC0 (Public Domain)",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/deed.tr",
    },
    featured: true,
  },
  {
    slug: "ornek-baski",
    title: "Örnek Baskı (yer tutucu)",
    category: "print",
    summary: "Gerçek bir 3D baskı ürününün kısa tanıtımı burada yer alacak.",
    description:
      "Bu kart bir yer tutucudur. Gerçek ürünün hikâyesini, kullanım alanını ve üretim detaylarını buraya yazacağız. Sağdaki 3D görüntüleyiciyi fare ya da parmakla döndürüp yakınlaştırabilirsiniz.",
    photos: [],
    model: "/models/placeholder-cube.glb",
    material: "PLA",
    size: "50 mm",
    featured: true,
  },
  {
    slug: "ornek-model",
    title: "Örnek Model (yer tutucu)",
    category: "model",
    summary: "Bilgisayar ortamında tasarlanmış bir 3D modelin ya da renderın tanıtımı.",
    description:
      "Bu kart bir yer tutucudur. Gerçek model için görseller ve istenirse etkileşimli 3D dosyası eklenecek.",
    photos: [],
    featured: true,
  },
  {
    slug: "ornek-ozel-uretim",
    title: "Örnek Özel Üretim (yer tutucu)",
    category: "print",
    summary: "İşlevsel parça ve özel üretim örneği.",
    description: "Bu kart bir yer tutucudur. İşlevsel parçalar ve özel üretimler bu şekilde sergilenecek.",
    photos: [],
    featured: true,
  },
];

/** Finds a work by its slug, or undefined when there is none. */
export function getWork(slug: string): Work | undefined {
  return works.find((work) => work.slug === slug);
}
