import { NextResponse } from 'next/server'
import { getFeed } from '@/components/libs/getFeed'

// TODO 公開したらクライアントアプリでfeedを表示してみる
export async function GET() {
  const feed = await getFeed()
  const xml = feed.rss2()
  return new NextResponse(xml, {
    status: 200,
    headers: { 'Content-Type': 'application/xml' },
  })
}
