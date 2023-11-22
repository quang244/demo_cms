import {sessionStatus} from "@/utils/session";
import {NextRequest, NextResponse} from "next/server";

const protectedRoutes = ["/user"]

export default function middleware(req: any) {
    if (!sessionStatus && protectedRoutes.includes(req.nextUrl.pathname)) {
        const absolutePath = new URL("/login", req.nextUrl.origin)
        return NextResponse.redirect(absolutePath.toString())
    }
}
