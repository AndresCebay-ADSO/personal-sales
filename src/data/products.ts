export interface ProductItem {
  /** ID único (mantiene el estado de "chuleado" en tu celular aunque actualicemos el catálogo) */
  id: string;
  /** Nombre del producto */
  name: string;
  /** Categoría principal */
  category: 'Zapatos' | 'Ropa' | 'Accesorios' | 'Tecnología' | 'Otros' | string;
  /** URL de la imagen (o ruta local en /images/...) */
  image: string;
  /** Precio estimado o presupuesto en COP */
  estimatedPrice?: number;
  /** Talla o medida */
  spec?: string;
  /** Color o combinación buscada */
  colorway?: string;
  /** Referencia de dónde buscarlo en el centro */
  storeHint?: string;
  /** Nota personal para recordar al momento de ver el producto */
  notes?: string;
  /** Destacado opcional */
  priority?: 'alta' | 'normal';
  /** Etiquetas para el buscador */
  tags?: string[];
}

export const CATEGORIES = [
  { id: 'Todos', label: 'TODOS' },
  { id: 'Zapatos', label: 'ZAPATOS' },
  { id: 'Ropa', label: 'ROPA' },
  { id: 'Accesorios', label: 'ACCESORIOS' },
  { id: 'Tecnología', label: 'TECH' },
] as const;

/**
 * COLECCIÓN PERSONAL — EMPEZANDO CON ZAPATOS
 * Dime qué zapatos quieres quitar, editar o agregar y actualizamos este archivo.
 */
export const PRODUCTS: ProductItem[] = [
  {
    id: 'nb-9060-grey',
    name: 'New Balance 9060 / 574 Grey Day',
    category: 'Zapatos',
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1000&q=85',
    estimatedPrice: 280000,
    spec: 'Talla 40',
    colorway: 'Gris humo / Hueso',
    storeHint: 'Palacio Nacional / Centro',
    notes: 'Revisar gamuza, costuras limpias y que la plantilla sea cómoda para caminar todo el día.',
    priority: 'alta',
    tags: ['zapatos', 'tenis', 'new balance', 'gris', 'deportivos'],
  },
  {
    id: 'sneaker-minimal-white',
    name: 'Tenis Casual Cuero Blanco Liso',
    category: 'Zapatos',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1000&q=85',
    estimatedPrice: 210000,
    spec: 'Talla 40',
    colorway: 'Blanco / Suela crema',
    storeHint: 'Locales de calzado nacional',
    notes: 'Cuero fácil de limpiar (no tela), suela cosida y sin logos gigantes a los lados.',
    priority: 'alta',
    tags: ['zapatos', 'tenis', 'blancos', 'cuero', 'casual'],
  },
  {
    id: 'runner-dark-charcoal',
    name: 'Tenis Running / Uso Diario Oscuros',
    category: 'Zapatos',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=85',
    estimatedPrice: 240000,
    spec: 'Talla 40.5',
    colorway: 'Negro / Carbón',
    storeHint: 'Centro Comercial / Outlets',
    notes: 'Súper livianos y transpirables. Ideales para días de lluvia o caminatas largas.',
    priority: 'normal',
    tags: ['zapatos', 'tenis', 'running', 'negros', 'deportivos'],
  },
  {
    id: 'bota-casual-gamuza',
    name: 'Botín / Zapato Casual Gamuza o Cuero',
    category: 'Zapatos',
    image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=1000&q=85',
    estimatedPrice: 250000,
    spec: 'Talla 40',
    colorway: 'Arena / Café oscuro',
    storeHint: 'Pasaje Carabobo / Marroquinerías',
    notes: 'Para usar con jean o pantalón recto. Revisar que no sea pesado ni rígido en el tobillo.',
    priority: 'normal',
    tags: ['zapatos', 'botas', 'botines', 'cuero', 'gamuza', 'arena'],
  },
];
