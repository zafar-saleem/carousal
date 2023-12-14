import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: any) {
  // const {searchParams} = new URL(request.url);
  const searchParams = request.nextUrl.searchParams;
  const messageParam = searchParams.get("message");
  
  console.log(messageParam);

  return new NextResponse(
    JSON.stringify({ success: true, message: 'messageParam' }),
    { status: 200, headers: { 'content-type': 'application/json' } }
  );
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  return new NextResponse(
    JSON.stringify({ success: true, message: body.message }),
    { status: 200, headers: { 'content-type': 'application/json' } }
  );
}

export async function PUT(request: NextRequest) {
  const body = await request.json();

  return new NextResponse(
    JSON.stringify({ success: true, message: body.message }),
    { status: 200, headers: { 'content-type': 'application/json' } }
  );
}

export async function DELETE(request: NextRequest) {
  const body = await request.json();

  return new NextResponse(
    JSON.stringify({ success: true, message: body.message }),
    { status: 200, headers: { 'content-type': 'application/json' } }
  );
}
