import Link from "next/link";
import { Instagram, Twitter, Facebook, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button"; // Shadcn Button component
import { Separator } from "@/components/ui/separator"; // Shadcn Separator component

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-lg font-semibold">Your Brand</h2>
            <p className="mt-2 text-sm text-gray-400">
              Discover the best products at unbeatable prices on our platform.
              Shop with confidence!
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className="text-lg font-semibold">Quick Links</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/shop"
                  className="text-sm text-gray-400 hover:text-gray-200"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-400 hover:text-gray-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-400 hover:text-gray-200"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-gray-400 hover:text-gray-200"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Location Section */}
          <div>
            <h2 className="text-lg font-semibold">Location</h2>
            <div className="mt-4 flex items-start space-x-2 text-gray-400">
              <MapPin className="h-6 w-6" />
              <p className="text-sm">
                1234 E-Commerce St, Suite 567
                <br />
                New York, NY 10001, USA
              </p>
            </div>
          </div>

          {/* Social Media Section */}
          <div>
            <h2 className="text-lg font-semibold">Follow Us</h2>
            <div className="flex mt-4 space-x-4">
              {/* Social Icons using lucide-react */}
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon">
                  <Instagram className="text-gray-400 hover:text-gray-200" />
                </Button>
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon">
                  <Twitter className="text-gray-400 hover:text-gray-200" />
                </Button>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon">
                  <Facebook className="text-gray-400 hover:text-gray-200" />
                </Button>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon">
                  <Linkedin className="text-gray-400 hover:text-gray-200" />
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Separator */}
        <Separator className="my-6 bg-gray-700" />

        {/* Terms and Conditions Section */}
        <div className="text-center text-sm text-gray-400 mb-6">
          <Link href="/terms" className="hover:text-gray-200 mx-2">
            Terms of Service
          </Link>
          |
          <Link href="/refund" className="hover:text-gray-200 mx-2">
            Refund Policy
          </Link>
          |
          <Link href="/shipping" className="hover:text-gray-200 mx-2">
            Shipping Policy
          </Link>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Your Brand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
