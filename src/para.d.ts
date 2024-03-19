function formatParagraph(text: string): string {
    // Reemplaza cualquier salto de línea con etiquetas <br> para mantener los saltos de línea en HTML
    return text.replace(/\n/g, '<.>');
  }