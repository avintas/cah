'use client'

import Link from 'next/link'
import { ArrowRight, Phone, Mail, MapPin, Clock, Users, Heart, Shield, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Contact
              <span className="text-gradient block">California Healthcare</span>
              Management Group
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Ready to get started with home health care services? Contact us today to discuss your needs 
              and learn how we can help you or your loved ones receive quality care in the comfort of your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center justify-center space-x-2 text-primary-600 font-semibold">
                <Phone className="w-5 h-5" />
                <span className="text-lg">1-818-783-4427</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Get Started Today
              </h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  Your home health care services will start with your doctor. They will write a prescription for the types of home health services you need. Once you have your prescription, you or your physician can contact California Healthcare Management Group and we will take care of the rest.
                </p>
                <p>
                  To make sure there are no surprises, we will verify your insurance benefits prior to the beginning of your in-home care. Our team is here to help you navigate the process and ensure you receive the care you need.
                </p>
                <p>
                  As a Home Care Elite Agency, we have earned the trust of thousands of families who needed help after a hospital stay or during an extended illness.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">Free consultation and assessment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">Insurance verification and assistance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">24/7 support and emergency care</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">Licensed and certified professionals</span>
                </div>
              </div>
            </div>

            <div className="bg-primary-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">1-818-783-4427</p>
                    <p className="text-sm text-gray-500">Available 24/7 for emergencies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@cahmgt.com</p>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Service Areas</h4>
                    <p className="text-gray-600">Los Angeles County, Orange County, Ventura County, San Bernardino County, Riverside County</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Service Hours</h4>
                    <p className="text-gray-600">24/7 Home Health Care Services</p>
                    <p className="text-sm text-gray-500">Including nights and weekends</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Request Home Health Care Services
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Fill out the form below and we'll contact you to discuss your home health care needs and answer any questions you may have.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="county" className="block text-sm font-medium text-gray-700 mb-2">
                    County *
                  </label>
                  <select
                    id="county"
                    name="county"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Select a county</option>
                    <option value="los-angeles">Los Angeles County</option>
                    <option value="orange">Orange County</option>
                    <option value="ventura">Ventura County</option>
                    <option value="san-bernardino">San Bernardino County</option>
                    <option value="riverside">Riverside County</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="services" className="block text-sm font-medium text-gray-700 mb-2">
                    Services Needed
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      'Skilled Nursing',
                      'Physical Therapy',
                      'Speech Therapy',
                      'Occupational Therapy',
                      'Home Health Aides',
                      'Social Workers',
                      'IV Therapy',
                      'Wound Care',
                      'Medical Supplies',
                      'Mobile Services'
                    ].map((service, index) => (
                      <label key={index} className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          name="services"
                          value={service.toLowerCase().replace(' ', '-')}
                          className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                        />
                        <span className="text-gray-700">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Please describe your care needs, any specific medical conditions, or questions you may have..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  ></textarea>
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500 mt-1"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    I consent to California Healthcare Management Group contacting me regarding home health care services. 
                    I understand that my information will be kept confidential and used only for the purpose of providing care services.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary py-4 text-lg font-semibold"
                >
                  Submit Request
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Families Choose California Healthcare Management Group
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're different from other healthcare agencies in several important ways.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: 'Compassionate Care',
                description: 'We provide care with a personal touch, supported by experienced employees who genuinely care about your well-being.'
              },
              {
                icon: Shield,
                title: 'Trusted Quality',
                description: 'All employees complete criminal background checks before being hired. You can trust our staff members.'
              },
              {
                icon: Users,
                title: 'Home Care Elite',
                description: 'We have earned the prestigious designation as a HOMECARE ELITE Top Agency, fully accredited and licensed.'
              },
              {
                icon: Clock,
                title: '24/7 Availability',
                description: 'We provide services whenever you need them, including nights and weekends, for as long as you need care.'
              }
            ].map((feature, index) => (
              <div key={index} className="healthcare-card text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Don't wait to get the care you or your loved ones need. Contact us today to discuss your home health care requirements and learn how we can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center justify-center space-x-2 text-white">
              <Phone className="w-5 h-5" />
              <span className="font-semibold text-lg">1-818-783-4427</span>
            </div>
            <p className="text-primary-200">Available 24/7</p>
          </div>
        </div>
      </section>
    </div>
  )
} 