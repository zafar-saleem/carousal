import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest, { params }: any) {
  const id = params.id;
  console.log({id});
  return new NextResponse(
    JSON.stringify({ success: true, id: `id `}),
    { status: 200, headers: { "content-type": "application/json" } }
  );
}
