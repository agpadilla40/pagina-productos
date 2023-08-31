const productos = [
    { description: "KIT para todo tipo de MANCHAS 6 Pzs c/u de 500 ML", category: "Lavandería", image: "KIT para todo tipo de MANCHAS 6 Pzs_500 ML.jpg" },
    { description: "Clorotens, Blanqueador 4L", category: "Lavandería", image: "Clorotens_Blanqueador 4L.jpg" },
    { description: "Adero Tens 4L", category: "Lavandería", image: "Adero Tens 4L.jpg" },
    { description: "Desengratens Citrus 4L", category: "Lavandería", image: "Desengratens Citrus 4L.jpg" },
];

const productList = document.getElementById("productList");
const categoryFilter = document.getElementById("categoryFilter");

function displayProductos(productosArray) {
    productList.innerHTML = "";
  productosArray.forEach(product => {
        const col = document.createElement("div");
        col.classList.add("col-md-4", "mb-4");
        
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = `images/${product.image}`;
        img.classList.add("card-img-top");

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const title = document.createElement("h5");
        title.classList.add("card-title");
        title.textContent = product.description;

        const category = document.createElement("p");
        category.classList.add("card-text");
      category.textContent = `Categoría: ${product.category}`;

        cardBody.appendChild(title);
        cardBody.appendChild(category);

        card.appendChild(img);
        card.appendChild(cardBody);

        col.appendChild(card);

        productList.appendChild(col);
    });
}

categoryFilter.addEventListener("change", () => {
    const selectedCategory = categoryFilter.value;
    if (selectedCategory === "todos") {
        displayProductos(productos);
    } else {
        const filteredProductos = productos.filter(product => product.category === selectedCategory);
        displayProductos(filteredProductos);
    }
});

displayProductos(productos);



// Para agregar un nuevo producto al arreglo
function addProduct(description, category, image) {
    const newProduct = {
      description: description,
      category: category,
      image: image
    };
productos.push(newProduct);
  }

  
  // Mandar llamar la función para anexar un nuevo producto
  // addProduct("Alcali Tens 4L", "tintorería", "Alcali Tens 4L.jpg");
  
  // Muestra de nueva cuenta los productos una vez que se agregó uno nuevo
  displayProductos(productos);

  const addProductButton = document.getElementById("add-product");

addProductButton.addEventListener("click", () => {
    const descriptionInput = document.getElementById("description");
    const categoryInput = document.getElementById("category");
    const imageInput = document.getElementById("image");

    const description = descriptionInput.value;
    const category = categoryInput.value;
    const image = imageInput.files[0];

    if (!description || !category || !image) {
        /* alert("Por favor, completa todos los campos."); */
        Swal.fire({
            imageUrl: 'images/warning2.webp',
            imageHeight: 120,
            imageWidth: 120,
            type:'warning',
            title:'<span class="formato-texto">Por favor, completa todos los campos.</span>',
            background: '#E2CB7D',
            confirmButtonColor: '#17649C',
            confirmButtonText: '<span class="size-text">OK</span>',                
        });
        return;
    }

    const newProduct = {
        description: description,
        category: category,
        image: image.name
    };

    // Agregar el nuevo producto al arreglo de productos
    productos.push(newProduct);

    // Actualizar la lista de héroes en la página
    displayProductos(productos);

    // Limpiar el formulario
 descriptionInput.value = "";
    categoryInput.value = "";
    imageInput.value = "";
});
    