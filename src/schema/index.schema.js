import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup.string().required("Password is required").min(5),
});


const registerSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  name: yup.string().required("Name is required"),
  password: yup.string().required("Password is required").min(5),
});
const addStyleSchema = yup.object().shape({
  displayPic: yup.string(),
});

const addCategorySchema = yup.object().shape({
  // categoryType: yup.string(),
  categoryName: yup.string().required("Category name is required"),
  imageType: yup.string(),
  categoryDescription: yup
    .string()
    .required("Category description is required"),
  categoryUrl: yup.string().required("Category url is required"),
  collectionId: yup.string().required("Collection id is required"),
  categoryImage: yup.string(),
  isTiles: yup.boolean(),
  isTitleVisible: yup.boolean(),
  isAbsoluteDiscountFlag: yup.boolean(),
  categoryOrder: yup.number().typeError("Category Order is required"),
});

const addVersionSchema = yup.object().shape({
  currentVersion: yup.string().required("Current version is required"),
  previousVersion: yup.string().required("Previous version is required"),
  versionDescription: yup.string().required("Version Description is required"),
  versionDevice: yup.string().required("Version Device is required"),
  isForceful: yup.boolean(),
});

const addBanner = yup.object().shape({
  // bannerName: yup.string().required("Banner name is required"),
  bannerDescription: yup.string().required("Banner description is required"),
  // bannerUrl: yup.string().required("Banner url is required"),
  bannerType: yup.string().required("Banner type is required"),
  // bannerImage: yup.string().required('Banner image is required'),
});

const addTicker = yup.object().shape({
  tickerName: yup.string().required("ticker name is required"),
  tickerDescription: yup.string().required("ticker description is required"),
  tickerUrl: yup.string().required("ticker url is required"),
  tickerImage: yup.string().required("ticker image is required"),
});

const addDiscountSchema = yup.object().shape({
  discountType: yup.string().required("discount type is required"),
  discountPercentage: yup
    .number()
    .typeError("discount percentage description is required"),
  imageCdn: yup.string().required("image cdn is required"),
  message: yup.string().required("message is required"),
  discountCode: yup.string().required("Discount code is required"),
  isActive: yup.boolean(),
  // expiryDate: yup.date(),
});

export {
  addStyleSchema,
  loginSchema,
  addCategorySchema,
  addBanner,
  addTicker,
  addVersionSchema,
  addDiscountSchema,
  registerSchema
};
