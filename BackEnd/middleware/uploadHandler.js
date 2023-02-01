const multer = require("multer");
const multerS3 = require("multer-s3");
const aws = require("aws-sdk");
require("dotenv").config();

const s3 = new aws.S3({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_KEY,
  region: process.env.S3_REGION,
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.S3_BUCKET_NAME,
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req, file, cb) => {
      cb(null, file.originalname);
    },
  }),
});

// const storage = multer.diskStorage({
//   destination: async (req, file, cb) => {
//     await cb(null, "./Images");
//   },
//   filename: async (req, file, cb) => {
//     console.log(file);
//     await cb(null, Date.now() + file.originalname);
//   },
//   limits: { fieldSize: 25 * 1024 * 1024 },
// });

module.exports = upload;
