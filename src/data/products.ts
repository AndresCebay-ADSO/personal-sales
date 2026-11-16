export interface ProductItem {
  /** ID único (mantiene el estado de "chuleado" en tu celular aunque actualicemos el catálogo) */
  id: string;
  /** Nombre del producto */
  name: string;
  /** Categoría principal */
  category: 'Perfumes' | 'Zapatos' | 'Ropa' | 'Accesorios' | 'Tecnología' | string;
  /** URL de la imagen o ruta local en /images/... */
  image: string;
  /** Cómo ajustar la foto ('contain' ideal para fotos de estudio con fondo blanco, 'cover' para fotos completas) */
  imageFit?: 'contain' | 'cover';
  /** Precio estimado o presupuesto en COP (opcional) */
  estimatedPrice?: number;
  /** Talla, mililitros o medida */
  spec?: string;
  /** Color, notas olfativas o referencia */
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
];
