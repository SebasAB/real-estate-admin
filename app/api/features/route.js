// FEATURES ENDPOINTS
import { connectToDB } from "@/app/lib/utils";
;

import Feature from "../../lib/models/feature/feature";

import { NextRequest, NextResponse } from "next/server";

export const GET = async (req, res) => {

    try {

        await connectToDB();


        const features = await Feature.find();

        return NextResponse.json({ features }, { status: 200 });


    } catch (error) {

    }

};

export const POST = async (req, res) => {

    const { name, icon } = await req.json();

    try {

        await connectToDB();

        const newFeature = await Feature.create({ name, icon });

        return NextResponse.json({ connectedToDB: true, feature: newFeature }, { status: 201 });

    } catch (error) {
        return NextResponse.json({
            status: 500,
            body: {
                error: error.message,
            },
        })
    }
}
