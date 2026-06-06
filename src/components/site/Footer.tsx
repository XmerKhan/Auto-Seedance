import { Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="mx-auto max-w-7xl px-4 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="size-8 rounded-lg btn-gradient grid place-items-center">
              <Sparkles className="size-4 text-white" />
            </span>
            <span className="gradient-text">Auto Seedance</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Bulk AI Images &amp; Videos Generator Automation. Automate Dreamina image &amp; video generation workflows directly from your browser.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-semibold mb-3">Product</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link to="/extension" className="hover:text-foreground">Extension</Link></li>
            <li><Link to="/pricing" className="hover:text-foreground">Pricing</Link></li>
            <li><a href="/#features" className="hover:text-foreground">Features</a></li>
            <li><a href="/#faq" className="hover:text-foreground">FAQ</a></li>
          </ul>
        </div>
        <div className="text-sm">
          <h4 className="font-semibold mb-3">Account</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link to="/auth" className="hover:text-foreground">Sign in</Link></li>
            <li><Link to="/dashboard" className="hover:text-foreground">Dashboard</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div className="text-sm">
          <h4 className="font-semibold mb-3">Legal</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-foreground">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-6 text-xs text-muted-foreground">
          <h4 className="font-semibold text-foreground mb-2">Backlinks &amp; Credits</h4>
          <p>
            Auto Seedance automates workflows that interface with third-party AI models. Underlying generative video research and model infrastructure is credited to{" "}
            <a
              href="https://www.byteplus.com/en/activity/seedance2-0"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="underline hover:text-foreground"
            >
              BytePlus Seedance 2.0
            </a>{" "}
            — our AI Model Infrastructure Partner. Auto Seedance is an independent automation tool and is not affiliated with or endorsed by BytePlus, ByteDance, or Dreamina.
          </p>
        </div>
      </div>

      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Auto Seedance. Bulk AI automation for creators.
      </div>
    </footer>
  );
}
