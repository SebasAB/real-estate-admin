import { connectToDB } from "@/app/lib/utils";
;

import Vendor from "../../lib/models/vendor/vendor";

import { NextResponse } from "next/server";

export const GET = async (req, res) => {

    try {

        await connectToDB();

        const vendors = await Vendor.find();

        return NextResponse.json({ vendors }, { status: 200 });


    } catch (error) {

    }

};

export const POST = async (req, res) => {

    const { name, phone, image, email } = await req.json();

    try {

        await connectToDB();

        const newVendor = await Vendor.create({ name, phone, image, email });

        return NextResponse.json({ connectedToDB: true, vendor: newVendor }, { status: 201 });

    } catch (error) {
        return NextResponse.json({
            status: 500,
            body: {
                error: error.message,
            },
        })
    }
}
