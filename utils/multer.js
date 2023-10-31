import multer from "multer";

// create storag
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "productPhoto") {
      cb(null, "public/product");
    } else if (file.fieldname === "studentPhoto") {
      cb(null, "public/student");
    }
  },
  filename: (req, file, cb) => {
    cb(
      null,
      Date.now() + "_" + Math.floor(Math.random()) + "_" + file.originalname
    );
  },
});

export const productMulter = multer({ storage }).single("productPhoto");
export const studentMulter = multer({ storage }).single("studentPhoto");
