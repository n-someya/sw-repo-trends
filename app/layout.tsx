import "./globals.css";
import { Metadata } from "next"
import { GoogleTagManager } from '@next/third-parties/google'

import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { CircleUserRound } from 'lucide-react';



const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "ソフトウェア リポジトリ トレンド | Software Repo Trends",
  description: "Githubで注目を集めるトレンドのソフトウェアレポジトリに関して、概要を解析して紹介しています。技術トレンドの調査に役立ててください。",
  icons: {
    shortcut: "/favicon.webp"
  }
};

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </head>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <GoogleTagManager gtmId="GTM-T4DQGPQ6" />
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <nav className="w-full flex justify-center border-b border-b-foreground/9">
                <div className="w-full flex justify-between items-center h-11 p-3 text-sm">
                  <span className="text-lg font-bold underline decoration-4 decoration-sky-200">Software Repo Trends</span>
                  {/* <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" aria-label="ユーザー設定" size="icon" className='rounded-full'>
                        <CircleUserRound className="h-9 w-8" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent side="bottom">
                      <DropdownMenuItem>
                        <Link href="/privacy">
                          プライバシーポリシー
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/terms">
                          利用規約
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu> */}
                </div>
              </nav>


              <div className="flex-1 max-w-full flex flex-col items-center">
                {children}
              </div>
              <footer className="w-full border-t border-t-foreground/10 p-4 flex justify-center text-center text-xs items-center space-x-4">
                <Link href="/" className="text-center">トップページ</Link>
                <Link href="/privacy" className="text-center">プライバシーポリシー</Link>
                <Link href="/terms" className="text-center">利用規約</Link>
                <span className="text-center">© 2024 n-someya</span>
              </footer>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}