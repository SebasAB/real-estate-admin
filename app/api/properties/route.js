import { connectToDB } from "@/app/lib/utils";
import { NextResponse } from "next/server";

import Property from "../../lib/models/property/property";

export const GET = async (req, res) => {

  try {

    await connectToDB();

    const properties = await Property.find().populate("vendor").populate("features");

    const property = properties[0]
    console.log(property);

    return NextResponse.json({ properties }, { status: 200 });


  } catch (error) {

    return NextResponse.json({
      status: 500,
      body: {
        error: error.message,
      },
    });

  }

};

export const POST = async (req, res) => {

  const property = await req.json();

  try {

    await connectToDB();

    const newProperty = await Property.create(property);

    await newProperty.save();

    return NextResponse.json({ property: newProperty }, { status: 201 });

  } catch (error) {
    return NextResponse.json({
      status: 500,
      body: {
        error: error.message,
      },
    });
  }

};