import { createSlug, generateRandomId } from "../helper/helper.js";
import fs from "fs";
import { render } from "ejs";

////////////////////////////////////////////////
export const allProductData = (req, res) => {
  const productData = JSON.parse(
    fs.readFileSync("Json_db/product.json").toString()
  );
  if (productData.leanth === 0) {
    return res.status(404).json({ message: "Page is note Found" });
  }

  res.status(200).json({ product: productData });
};

/**
 * create product data
 */
export const productData = (req, res) => {
  // distracture data from req.body
  const { name, regulerPrice, salePrice, category, stock } = req.body;
  ////////////////////////////////////////////////////////////
  //validation

  // data send json server
  const product = {
    id: generateRandomId(),
    name,
    slug: createSlug(name),
    regulerPrice,
    salePrice,
    category,
    stock,
    photo: req.file.filename,
  };

  const productData = JSON.parse(
    fs.readFileSync("Json_db/product.json").toString()
  );
  if (productData.some((data) => data.slug === createSlug(name))) {
    return res.status(400).json({ message: "this product already exists" });
  }

  productData.push(product);

  fs.writeFileSync("Json_db/product.json", JSON.stringify(productData));

  res.redirect("/");
};

////////////// All Product EJS ///////////////////
export const Allproduct = (req, res) => {
  const productData = JSON.parse(
    fs.readFileSync("Json_db/product.json").toString()
  );
  res.render("Allproduct", {
    product: productData,
  });
};
////////////// Create Product EJS ///////////////////
export const CreateProduct = (req, res) => {
  res.render("CreateProduct");
};
////////////// Single Product EJS ///////////////////
export const SingleProduct = (req, res) => {
  const { slug } = req.params;
  const singleProductData = JSON.parse(
    fs.readFileSync("Json_db/product.json").toString()
  );
  const findProduct = singleProductData.find((data) => data.slug === slug);
  res.render("SingleProduct", {
    product: findProduct,
  });
};
///////////////////// Edit Product EJS //////////////////////
export const editProduct = (req, res) => {
  const { id } = req.params;
  const getallData = JSON.parse(
    fs.readFileSync("Json_db/product.json").toString()
  );
  const getSignleData = getallData.find((data) => data.id === id);
  res.render("EditProduct", {
    product: getSignleData,
  });
};
///////////////////// Edit Data Update EJS //////////////////////
export const updateProductData = (req, res) => {
  const { id } = req.params;
  const { name, regulerPrice, salePrice, category, stock } = req.body;

  const productData = JSON.parse(
    fs.readFileSync("Json_db/product.json").toString()
  );

  let photo_name =
    productData[productData.findIndex((data) => data.id === id)].photo;

  if (req?.file?.filename) {
    photo_name = req.file.filename;
  }

  productData[productData.findIndex((data) => data.id === id)] = {
    id: id,
    slug: createSlug(name),
    name,
    regulerPrice,
    salePrice,
    category,
    stock,
    photo: photo_name,
  };
  fs.writeFileSync("Json_db/product.json", JSON.stringify(productData));
  res.redirect("/");
};

///////////////////// Delete Product EJS //////////////////////
export const deleteProduct = (req, res) => {
  const { id } = req.params;
  const getallData = JSON.parse(
    fs.readFileSync("Json_db/product.json").toString()
  );
  const updateData = getallData.filter((data) => data.id !== id);
  fs.writeFileSync("Json_db/product.json", JSON.stringify(updateData));
  res.redirect("/");
};
