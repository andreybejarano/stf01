const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');

function getProducts() {
	const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
	return products;
}

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

// Esta variable emula las categorias si vinieran de una  base de datos o un archivo json
const categories = [
	{
		id: 1,
		value: 'in-sale',
		label: 'En oferta'
	},
	{
		id: 2,
		value: 'visited',
		label: 'Últimos agregados'
	}
];

const controller = {
	// Root - Show all products
	index: (req, res) => {
		// Do the magic
		res.render('products', { products: getProducts() });
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		// Do the magic
		const products = getProducts();
		const product = products.find(product => product.id == req.params.id);
		if (!product) {
			return res.render('error', {
				message: 'El producto no existe',
				error: {
					status: 404
				},
				path: req.url
			});
		}
		res.render('detail', { product });
	},

	// Create - Form to create
	create: (req, res) => {
		// Do the magic
		res.render('product-create-form');
	},

	// Create -  Method to store
	store: (req, res) => {
		// Do the magic
		const products = getProducts();
		const productToCreate = {
			id: products[products.length - 1].id + 1,
			image: 'default-image.png',
			...req.body
		}
		products.push(productToCreate);
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
		res.redirect('/products');
	},

	// Update - Form to edit
	edit: (req, res) => {
		// Do the magic
		const products = getProducts();
		const product = products.find(product => product.id == req.params.id);
		res.render('product-edit-form', { productToEdit: product, categories });
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
		const products = getProducts();
		const indexProduct = products.findIndex(product => product.id == req.params.id);
		products[indexProduct] = {
			...products[indexProduct],
			...req.body
		};
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
		res.redirect('/products');
	},

	// Delete - Delete one product from DB
	destroy: (req, res) => {
		// Do the magic
		const products = getProducts();
		//  Eliminar un elelemtno de un array con filter
		// const productsFiltered = products.filter(products => products.id != req.params.id);
		// fs.writeFileSync(productsFilePath, JSON.stringify(productsFiltered, null, 2));

		//  Eliminar un elelemtno de un array con splice, se debe obtener el id del elemento a eliminar
		const indexProduct = products.findIndex(product => product.id == req.params.id);
		// usando el splice se le pasa el indice del elemento a eliminar y 1 q es la cantidad de elementos a eliminar
		products.splice(indexProduct, 1);
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
		res.redirect('/products');
	}
};

module.exports = controller;