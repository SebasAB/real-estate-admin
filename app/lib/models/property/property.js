import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
  // reference to vendor model and is required
  vendor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vendor",
    required: true,
  },
  // array of strings for images and is required
  images: {
    type: [String],
    required: true,
  },
  // type of the property, apartment, house, etc, is required
  propertyType: {
    type: String,
    required: true,
  },
  // if is for rent or sale, is required
  propertyStatus: {
    type: String,
    required: true,
  },
  // number of rooms, is required
  rooms: {
    type: Number,
    required: true,
  },
  // number of bathrooms, is required
  bathrooms: {
    type: Number,
    required: true,
  },
  // number of parking spaces, is required
  parking: {
    type: Number,
    required: true,
  },
  // address of the property, is required
  address: {
    type: String,
    required: true,
  },
  // city of the property, is required
  city: {
    type: String,
    required: true,
  },
  // state of the property, is required
  state: {
    type: String,
    required: true,
  },
  // country of the property, is required
  country: {
    type: String,
    required: true,
  },
  // price of the property, is required
  price: {
    type: Number,
    required: true,
  },
  // description of the property, is required
  description: {
    type: String,
    required: true,
  },
  // date of creation of the property
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // date of update of the property
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  // property is available date
  availableDate: {
    type: String,
    required: true,
  },
  // property area in square meters
  propertyTotalArea: {
    type: Number,
    required: true,
  },
  propertyConstructionArea: {
    type: Number,
    required: true,
  },
  // where the property is located for google maps map
  location: {
    type: {
      type: String,
      default: "Point",
    },
    coordinates: [Number],
  },
  // property video url for embeding youtube video in the property page
  video: {
    type: String,
    required: true,
  },
  // property features reference to the features model and is an array
  features: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Feature",
    },
  ],
});

export const Property =
  mongoose.models.Property || mongoose.model("Property", propertySchema);
