export interface ProductItem {
  /** ID único (mantiene el estado de "chuleado" en tu celular aunque actualicemos el catálogo) */
  id: string;
  /** Nombre del producto */
  name: string;
  /** Categoría principal */
  category: 'Perfumes' | 'Zapatos' | 'Ropa' | 'Accesorios' | 'Tecnología' | string;
  /** Imagen principal en /images/... */
  image: string;
  /** Galería opcional cuando un producto tiene varias fotos (ángulos) */
  images?: string[];
  /** Cómo ajustar la foto ('contain' ideal para fotos de estudio con fondo blanco, 'cover' para fotos completas) */
  imageFit?: 'contain' | 'cover';
  /** Precio estimado o presupuesto en COP (opcional) */
  estimatedPrice?: number;
  /** Talla, mililitros o referencia */
  spec?: string;
  /** Color, notas olfativas o detalles visuales */
  colorway?: string;
  /** Referencia de dónde buscarlo en el centro */
  storeHint?: string;
  /** Nota personal para recordar al momento de ver el producto */
  notes?: string;
  /** Etiquetas para el buscador */
  tags?: string[];
}

export const CATEGORIES = [
  { id: 'Todos', label: 'Todos' },
  { id: 'Perfumes', label: 'Perfumes' },
  { id: 'Zapatos', label: 'Zapatos' },
  { id: 'Ropa', label: 'Ropa' },
  { id: 'Accesorios', label: 'Accesorios' },
] as const;

/**
 * TU COLECCIÓN REAL DE COMPRAS
 */
export const PRODUCTS: ProductItem[] = [
  {
    id: 'nb-1906r-silver-black',
    name: 'New Balance 1906R (M1906RER)',
    category: 'Zapatos',
    image: '/images/nb-1906r-silver-black-1.jpg',
    images: [
      '/images/nb-1906r-silver-black-1.jpg',
      '/images/nb-1906r-silver-black-2.jpg',
      '/images/nb-1906r-silver-black-3.webp',
    ],
    imageFit: 'contain',
    spec: 'Ref. M1906RER · N-ergy / Ortholite',
    colorway: 'Blanco malla / Plata metálico / Talón y N en negro',
    notes: 'Revisar los 3 ángulos: malla blanca tipo panal, detalles plateados metálicos, talón TPU negro y plantilla negra New Balance 1906 Ortholite.',
    tags: ['zapatos', 'tenis', 'new balance', '1906r', 'm1906rer', 'blanco', 'plata', 'negro'],
  },
  {
    id: 'creed-aventus',
    name: 'Creed Aventus',
    category: 'Perfumes',
    image: '/images/creed-aventus.webp',
    imageFit: 'contain',
    spec: '100 ml · Eau de Parfum',
    colorway: 'Frutal amaderada / Piña, bergamota, abedul y almizcle',
    notes: 'Frasco transparente con franja inferior negra texturizada, jinete plateado y tapa negra.',
    tags: ['perfume', 'locion', 'fragancia', 'creed', 'aventus'],
  },
  {
    id: 'creed-silver-mountain-water',
    name: 'Creed Silver Mountain Water',
    category: 'Perfumes',
    image: '/images/creed-silver-mountain-water.webp',
    imageFit: 'contain',
    spec: '100 ml · Eau de Parfum',
    colorway: 'Cítrica fresca / Bergamota, té verde, grosella negra y almizcle',
    notes: 'Frasco completamente blanco brillante con tapa plateada y letras plateadas.',
    tags: ['perfume', 'locion', 'fragancia', 'creed', 'silver mountain water', 'blanco'],
  },
  {
    id: 'bond-no-9-bleecker-street',
    name: 'Bond No. 9 Downtown Bleecker Street',
    category: 'Perfumes',
    image: '/images/bond-no-9-bleecker-street.jpg',
    imageFit: 'contain',
    spec: '100 ml · Eau de Parfum',
    colorway: 'Amaderada / Hojas de violeta, mora y cedro',
    notes: 'Botella estrella verde con sol morado y dorado (Bleecker St. NYC).',
    tags: ['perfume', 'locion', 'fragancia', 'bond no 9', 'bleecker street', 'downtown'],
  },
  {
    id: 'acqua-di-parma-oud',
    name: 'Acqua di Parma Oud',
    category: 'Perfumes',
    image: '/images/acqua-di-parma-oud.webp',
    imageFit: 'contain',
    spec: '100 ml · Eau de Parfum',
    colorway: 'Cítrica amaderada / Madera de Oud, bergamota y cuero',
    notes: 'Botella negra brillante con etiqueta negra y letras/escudo en dorado (Signatures of the Sun).',
    tags: ['perfume', 'locion', 'fragancia', 'acqua di parma', 'oud', 'negra'],
  },
  {
    id: 'parfums-de-marly-percival',
    name: 'Parfums de Marly Percival',
    category: 'Perfumes',
    image: '/images/parfums-de-marly-percival.webp',
    imageFit: 'contain',
    spec: '200 ml · Eau de Parfum',
    colorway: 'Aromática fresca / Bergamota, mandarina, lavanda y ambroxan',
    notes: 'Frasco azul marino mate con los dos caballos en relieve (1743) y tapa plateada.',
    tags: ['perfume', 'locion', 'fragancia', 'parfums de marly', 'pdm', 'percival', 'azul'],
  },
  {
    id: 'frederic-malle-monsieur',
    name: 'Frédéric Malle Monsieur.',
    category: 'Perfumes',
    image: '/images/frederic-malle-monsieur.webp',
    imageFit: 'contain',
    spec: '100 ml · Eau de Parfum',
    colorway: 'Oriental amaderada / Pachulí, absoluto de ron, mandarina e incienso',
    notes: 'Edición Bruno Jovanovic. Frasco cilíndrico transparente con etiqueta negra y letras MONSIEUR. en rojo.',
    tags: ['perfume', 'locion', 'fragancia', 'frederic malle', 'monsieur', 'bruno jovanovic'],
  },
  {
    id: 'tom-ford-ombre-leather',
    name: 'Tom Ford Ombré Leather',
    category: 'Perfumes',
    image: '/images/tom-ford-ombre-leather.webp',
    imageFit: 'contain',
    spec: '100 ml · Eau de Parfum',
    colorway: 'Cuero especiado / Cardamomo, cuero negro, jazmín sambac y ámbar',
    notes: 'Frasco cilindro negro mate con placa negra tipo cuero y letras blancas.',
    tags: ['perfume', 'locion', 'fragancia', 'tom ford', 'ombre leather', 'cuero', 'negro'],
  },
  {
    id: 'dior-sauvage-parfum',
    name: 'Dior Sauvage Parfum',
    category: 'Perfumes',
    image: '/images/dior-sauvage-parfum.webp',
    imageFit: 'contain',
    spec: '100 ml · Parfum',
    colorway: 'Cítrica amaderada / Bergamota de Calabria, madera de sándalo y haba tonka',
    notes: 'Versión PARFUM (dice PARFUM debajo de SAUVAGE), frasco azul noche oscuro degradado.',
    tags: ['perfume', 'locion', 'fragancia', 'dior', 'sauvage', 'parfum'],
  },
  {
    id: 'loewe-7-pour-homme',
    name: 'Loewe 7 Pour Homme',
    category: 'Perfumes',
    image: '/images/loewe-7-pour-homme.jpg',
    imageFit: 'contain',
    spec: '150 ml · Eau de Toilette',
    colorway: 'Amaderada especiada / Incienso, baya de pimienta roja, manzana roja y cedro',
    notes: 'Frasco rectangular azul metálico con etiqueta blanca vertical y tapa de madera clara.',
    tags: ['perfume', 'locion', 'fragancia', 'loewe', 'loewe 7', 'azul'],
  },
  {
    id: 'valentino-uomo-born-in-roma',
    name: 'Valentino Uomo Born in Roma',
    category: 'Perfumes',
    image: '/images/valentino-uomo-born-in-roma.webp',
    imageFit: 'contain',
    spec: '100 ml · Eau de Toilette',
    colorway: 'Amaderada aromática / Hojas de violeta, salvia, jengibre y vetiver ahumado',
    notes: 'Frasco con tachuelas (rockstuds) degradado de negro a transparente y letras VALENTINO en rosa.',
    tags: ['perfume', 'locion', 'fragancia', 'valentino', 'uomo', 'born in roma'],
  },
  {
    id: 'versace-eros-parfum',
    name: 'Versace Eros Parfum',
    category: 'Perfumes',
    image: '/images/versace-eros-parfum.webp',
    imageFit: 'contain',
    spec: '100 ml · Parfum',
    colorway: 'Oriental fresca / Menta, limón, manzana verde, haba tonka y ámbar',
    notes: 'Versión PARFUM en frasco azul turquesa con grecas, Medusa central y letras doradas.',
    tags: ['perfume', 'locion', 'fragancia', 'versace', 'eros', 'parfum', 'azul'],
  },
  {
    id: 'issey-miyake-leau-dissey-edp',
    name: "Issey Miyake L'Eau d'Issey Pour Homme EDP",
    category: 'Perfumes',
    image: '/images/issey-miyake-leau-dissey-edp.jpg',
    imageFit: 'contain',
    spec: '125 ml · Eau de Parfum',
    colorway: 'Acuática amaderada / Pimienta de Sichuan, bálsamo de abeto y madera de cedro',
    notes: "Versión Eau de Parfum recargable con tapa texturizada tipo madera grisácea.",
    tags: ['perfume', 'locion', 'fragancia', 'issey miyake', 'leau dissey', 'edp'],
  },
  {
    id: 'armaf-club-de-nuit-urban-man-elixir',
    name: 'Armaf Club de Nuit Urban Man Elixir',
    category: 'Perfumes',
    image: '/images/armaf-club-de-nuit-urban-man-elixir.webp',
    imageFit: 'contain',
    spec: '105 ml · Eau de Parfum',
    colorway: 'Especiada aromática / Bergamota, pimienta rosa, lavanda y ambroxan',
    notes: 'Versión Urban Man ELIXIR (letras rojas abajo), botella negra con medallón negro y brillantes en la tapa.',
    tags: ['perfume', 'locion', 'fragancia', 'armaf', 'club de nuit', 'urban man', 'elixir'],
  },
  {
    id: 'ahmed-al-maghribi-kaaf',
    name: 'Ahmed Al Maghribi Kaaf',
    category: 'Perfumes',
    image: '/images/ahmed-al-maghribi-kaaf.webp',
    imageFit: 'contain',
    spec: '100 ml · Eau de Parfum',
    colorway: 'Acuática fresca / Frutos rojos, sandía, notas marinas, lavanda y sándalo',
    notes: 'Frasco cilíndrico con líquido azul grisáceo, caligrafía árabe dorada (KAAF) y tapa blanca ancha.',
    tags: ['perfume', 'locion', 'fragancia', 'ahmed al maghribi', 'kaaf', 'arabe'],
  },
  {
    id: 'davidoff-cool-water',
    name: 'Davidoff Cool Water',
    category: 'Perfumes',
    image: '/images/davidoff-cool-water.webp',
    imageFit: 'contain',
    spec: '125 ml · Eau de Toilette',
    colorway: 'Aromática acuática / Agua de mar, menta, lavanda, cilantro y almizcle',
    notes: 'Clásico frasco rectangular azul traslúcido con tapa negra cilíndrica.',
    tags: ['perfume', 'locion', 'fragancia', 'davidoff', 'cool water', 'azul'],
  },
  {
    id: 'nautica-voyage',
    name: 'Nautica Voyage',
    category: 'Perfumes',
    image: '/images/nautica-voyage.webp',
    imageFit: 'contain',
    spec: '100 ml · Eau de Toilette',
    colorway: 'Acuática verde / Manzana verde, hojas verdes, flor de loto y cedro',
    notes: 'Frasco de vidrio pesado con líquido celeste claro y tapa metálica cromada.',
    tags: ['perfume', 'locion', 'fragancia', 'nautica', 'voyage', 'azul'],
  },
];
