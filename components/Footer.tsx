import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CH</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">California Healthcare</h3>
                <p className="text-sm text-gray-300">Management Group</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed pr-4">
              Professional home health care services delivered in the comfort of your own home. 
              As a Home Care Elite Agency, we provide compassionate care with licensed professionals.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  IV Therapy & Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services#skilled-nursing" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  Skilled Nursing
                </Link>
              </li>
              <li>
                <Link href="/services#physical-therapy" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  Physical Therapy
                </Link>
              </li>
              <li>
                <Link href="/services#speech-therapy" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  Speech Therapy
                </Link>
              </li>
              <li>
                <Link href="/services#occupational-therapy" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  Occupational Therapy
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  IV Therapy
                </Link>
              </li>
              <li>
                <Link href="/services#mobile-services" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  Mobile Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary-400" />
                <span className="text-gray-300 text-sm">1-818-783-4427</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary-400" />
                <span className="text-gray-300 text-sm">info@cahmgt.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary-400" />
                <span className="text-gray-300 text-sm">Southern California</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-primary-400" />
                <span className="text-gray-300 text-sm">24/7 Care Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="border-t border-gray-800 py-8">
          <div className="text-center mb-6">
            <h4 className="font-semibold text-lg mb-4">Areas We Serve</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Los Angeles County • Orange County • Ventura County • San Bernardino County • Riverside County
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm leading-relaxed">
              © {currentYear} California Healthcare Management Group. All rights reserved.
            </p>
            <div className="flex space-x-8">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 