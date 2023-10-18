class ProductManager {
    constructor() {
      this.products = [];
    }
  
    getProducts() {
      return this.products;
    }
  
    addProduct(product) {
      // Comprobar si el código del producto ya existe
      if (this.products.some(p => p.code === product.code)) {
        throw new Error("El código del producto ya está en uso.");
      }
  
      // Generar un ID único para el producto
      const productId = Date.now().toString(16) + Math.random().toString(16).substr(2, 6);
  
      // Agregar el producto con el ID generado
      const newProduct = { id: productId, ...product };
      this.products.push(newProduct);
  
      return newProduct;
    }
  
    getProductById(productId) {
      const product = this.products.find(p => p.id === productId);
      if (!product) {
        throw new Error("Producto no encontrado");
      }
      return product;
    }
  }
  
  // Pruebas
  const manager = new ProductManager();
  
  // Prueba 1: getProducts() debe devolver un arreglo vacío
  console.log(manager.getProducts()); // []
  
  // Prueba 2: addProduct() debe agregar un producto
  const newProduct = {
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25,
  };
  console.log(manager.addProduct(newProduct));
  
  // Prueba 3: getProducts() debe mostrar el producto recién agregado
  console.log(manager.getProducts());
  
  // Prueba 4: addProduct() con el mismo código debe arrojar un error
  try {
    manager.addProduct(newProduct);
  } catch (error) {
    console.error(error.message); // "El código del producto ya está en uso."
  }
  
  // Prueba 5: getProductById() debe devolver el producto agregado
  const productById = manager.getProducts()[0].id;
  console.log(manager.getProductById(productById));
  
  // Prueba 6: getProductById() con un ID inexistente debe arrojar un error
  try {
    manager.getProductById("inexistente");
  } catch (error) {
    console.error(error.message); // "Producto no encontrado"
  }
  