import { NextResponse } from 'next/server'
import { getFeed } from '@/components/libs/getFeed'

export async function GET() {
  const feed = await getFeed()
  const xml = feed.atom1()
  return new NextResponse(xml, {
    status: 200,
    headers: { 'Content-Type': 'application/xml' },
  })
}
