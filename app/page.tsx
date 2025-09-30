"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Copy, Check, Twitter, Send, Zap, Shield, Users, TrendingUp } from "lucide-react"

export default function BrewsLanding() {
  const [copied, setCopied] = useState(false)
  const contractAddress = "0x123abcd123efgh"

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="/images/brews.jpg" alt="$BREWS Logo" className="w-10 h-10 rounded-full animate-glow" />
            <span className="text-2xl font-bold gradient-text">$BREWS</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-primary transition-colors">
              About
            </a>
            <a href="#features" className="hover:text-primary transition-colors">
              Features
            </a>
            <a href="#roadmap" className="hover:text-primary transition-colors">
              Roadmap
            </a>
            <a href="#community" className="hover:text-primary transition-colors">
              Community
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://telegram.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <Send className="w-5 h-5" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <img
              src="/images/brews.jpg"
              alt="$BREWS Token"
              className="w-32 h-32 mx-auto rounded-full animate-float mb-8"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            Welcome to <span className="gradient-text">$BREWS</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Token yang diciptakan dengan ide-ide liar dan bebas dari batas. Bergabunglah dengan revolusi meme coin
            $BREWS!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 animate-glow px-8 py-3 text-lg font-semibold"
            >
              Buy $BREWS Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg bg-transparent"
            >
              View Chart
            </Button>
          </div>

          {/* Contract Address */}
          <Card className="max-w-md mx-auto bg-card border-border">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-3 text-primary">Smart Contract</h3>
              <div className="flex items-center justify-between bg-input p-3 rounded-lg">
                <code className="text-sm font-mono text-foreground truncate mr-2">{contractAddress}</code>
                <Button size="sm" variant="ghost" onClick={copyToClipboard} className="hover:bg-primary/20 p-2">
                  {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Why Choose $BREWS?</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
                <p className="text-muted-foreground">
                  Transaksi super cepat dengan biaya rendah di blockchain terdepan
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Secure & Safe</h3>
                <p className="text-muted-foreground">Keamanan tingkat enterprise dengan audit smart contract lengkap</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Community Driven</h3>
                <p className="text-muted-foreground">
                  Dibangun oleh komunitas, untuk komunitas dengan governance terdesentralisasi
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">High Potential</h3>
                <p className="text-muted-foreground">
                  Potensi pertumbuhan tinggi dengan utility dan use case yang jelas
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-card/20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 gradient-text">About $BREWS</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              $BREWS adalah lebih dari sekadar meme coin. Kami adalah komunitas yang percaya pada kekuatan inovasi,
              kreativitas, dan kebebasan finansial. Dengan teknologi blockchain terdepan dan visi yang jelas, $BREWS
              hadir untuk mengubah cara dunia melihat cryptocurrency.
            </p>
            <p className="text-lg text-muted-foreground text-pretty">
              Bergabunglah dengan revolusi digital dan jadilah bagian dari masa depan keuangan yang terdesentralisasi.
              Bersama $BREWS, kita akan menciptakan ekosistem yang menguntungkan semua pihak.
            </p>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Roadmap</h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-4 h-4 bg-primary rounded-full mt-2 animate-pulse-gold"></div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Q1 2024 - Launch</h3>
                  <p className="text-muted-foreground">
                    Token launch, website deployment, dan pembentukan komunitas awal
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-4 h-4 bg-primary rounded-full mt-2 animate-pulse-gold"></div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Q2 2024 - Growth</h3>
                  <p className="text-muted-foreground">
                    Listing di exchange utama, partnership strategis, dan pengembangan utility
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-4 h-4 bg-muted rounded-full mt-2"></div>
                <div>
                  <h3 className="text-xl font-semibold text-muted mb-2">Q3 2024 - Expansion</h3>
                  <p className="text-muted-foreground">DeFi integration, staking rewards, dan pengembangan ecosystem</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-4 h-4 bg-muted rounded-full mt-2"></div>
                <div>
                  <h3 className="text-xl font-semibold text-muted mb-2">Q4 2024 - Innovation</h3>
                  <p className="text-muted-foreground">NFT marketplace, governance system, dan global expansion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-16 px-4 bg-card/20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 gradient-text">Join Our Community</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Bergabunglah dengan ribuan holder $BREWS di seluruh dunia. Dapatkan update terbaru, diskusi strategi, dan
            akses eksklusif ke event komunitas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#1DA1F2] hover:bg-[#1DA1F2]/90 text-white px-8 py-3">
              <Twitter className="w-5 h-5 mr-2" />
              Follow on Twitter
            </Button>
            <Button size="lg" className="bg-[#0088cc] hover:bg-[#0088cc]/90 text-white px-8 py-3">
              <Send className="w-5 h-5 mr-2" />
              Join Telegram
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img src="/images/brews.jpg" alt="$BREWS Logo" className="w-8 h-8 rounded-full" />
              <span className="text-xl font-bold gradient-text">$BREWS</span>
            </div>

            <div className="text-center md:text-right">
              <p className="text-muted-foreground mb-2">© 2024 $BREWS Token. All rights reserved.</p>
              <p className="text-sm text-muted-foreground">
                Developed by <span className="text-primary font-semibold">@ozi.meme</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
