'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const navigationItems = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Services',
      href: '/services',
      dropdown: [
        { name: 'Skilled Nursing', href: '/services#skilled-nursing' },
        { name: 'Physical Therapy', href: '/services#physical-therapy' },
        { name: 'Speech Therapy', href: '/services#speech-therapy' },
        { name: 'Occupational Therapy', href: '/services#occupational-therapy' },
        { name: 'Home Health Aides', href: '/services#home-health-aides' },
        { name: 'Social Workers', href: '/services#social-workers' },
        { name: 'IV Therapy', href: '/resources' },
        { name: 'Mobile Services', href: '/services#mobile-services' },
      ],
    },
    {
      name: 'About Us',
      href: '/about',
      dropdown: [
        { name: 'Our Mission', href: '/about#mission' },
        { name: 'Company History', href: '/about#history' },
        { name: 'Home Care Elite', href: '/about#home-care-elite' },
        { name: 'Areas We Serve', href: '/#areas-we-serve' },
      ],
    },
    {
      name: 'Resources',
      href: '/resources',
      dropdown: [
        { name: 'IV Therapy', href: '/resources#iv-therapy' },
        { name: 'Specialized Care', href: '/resources#specialized-care' },
        { name: 'Safety Standards', href: '/resources#safety-standards' },
        { name: 'Preparing for Care', href: '/about#preparing-for-care' },
      ],
    },
    {
      name: 'Contact',
      href: '/contact',
    },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName)
  }

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">CH</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900">California Healthcare</h1>
              <p className="text-sm text-gray-600">Management Group</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-primary-600">
              <Phone className="w-4 h-4" />
              <span className="font-semibold">1-818-783-4427</span>
            </div>
            <Link href="/contact" className="btn-primary">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className="flex items-center justify-between w-full text-left text-gray-700 hover:text-primary-600 font-medium py-2"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={cn("w-4 h-4 transition-transform", activeDropdown === item.name && "rotate-180")} />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="pl-4 space-y-2 mt-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block py-2 text-gray-600 hover:text-primary-600 transition-colors duration-200"
                              onClick={() => {
                                setActiveDropdown(null)
                                setIsMenuOpen(false)
                              }}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-2 text-primary-600 mb-4">
                  <Phone className="w-4 h-4" />
                  <span className="font-semibold">1-818-783-4427</span>
                </div>
                <Link 
                  href="/contact" 
                  className="btn-primary w-full text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation 