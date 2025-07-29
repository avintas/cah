import Link from 'next/link'
import { ArrowRight, CheckCircle, Users, Shield, TrendingUp, Phone, MapPin, Heart, Stethoscope, Home } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Professional
                <span className="text-gradient block">Home Health</span>
                Care Services
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Your favorite chair. Your dishes. Your pets. The view out your window. 
                It's always easier to take your medicines, complete your physical therapy exercises—and sleep—in your own space.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary inline-flex items-center justify-center">
                  Get Started Today
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <div className="flex items-center space-x-2 text-primary-600 font-semibold">
                  <Phone className="w-4 h-4" />
                  <span>1-818-783-4427</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <Home className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Home Health Care</h3>
                      <p className="text-sm text-gray-600">Comfort of your own home</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <Stethoscope className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Skilled Nursing</h3>
                      <p className="text-sm text-gray-600">Professional medical care</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Compassionate Care</h3>
                      <p className="text-sm text-gray-600">Personalized attention</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Areas We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              California Healthcare Management Group provides comprehensive home health care services across Southern California.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Los Angeles County',
              'Orange County', 
              'Ventura County',
              'San Bernardino County',
              'Riverside County'
            ].map((county, index) => (
              <div key={index} className="healthcare-card text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{county}</h3>
                <p className="text-gray-600">
                  Professional home health care services available throughout {county}.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Services We Provide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive home health care services tailored to meet your specific needs and medical requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Skilled Nursing', icon: Stethoscope, description: 'Professional nursing care in the comfort of your home' },
              { name: 'Physical Therapy', icon: TrendingUp, description: 'Rehabilitation and mobility improvement services' },
              { name: 'Speech Therapy', icon: Users, description: 'Communication and swallowing disorder treatment' },
              { name: 'Occupational Therapy', icon: Shield, description: 'Daily living skills and independence training' },
              { name: 'Bathing Nurses', icon: Heart, description: 'Personal care and hygiene assistance' },
              { name: 'Social Workers', icon: Users, description: 'Psychosocial support and community resources' },
              { name: 'Mobile Podiatrist', icon: Stethoscope, description: 'Foot care and podiatry services' },
              { name: 'Mobile Ultrasound', icon: Shield, description: 'Diagnostic imaging services at home' },
              { name: 'Mobile X-Ray', icon: TrendingUp, description: 'On-site diagnostic imaging' },
              { name: 'Mobile Physicians', icon: Stethoscope, description: 'Physician visits in your home' },
              { name: 'Medical Supplies', icon: Shield, description: 'Essential medical equipment and supplies' },
              { name: 'Wound Care Specialists', icon: Heart, description: 'Specialized wound treatment and care' },
              { name: 'Mobile Lab', icon: TrendingUp, description: 'Laboratory testing services' },
              { name: 'IV Therapy', icon: Stethoscope, description: 'Intravenous therapy and medication administration' }
            ].map((service, index) => (
              <div key={index} className="healthcare-card text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <Link href="/services" className="text-primary-600 hover:text-primary-700 font-medium">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nursing Specialties */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nursing Specialties
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              California Healthcare Management Group specializes in Home Care for patients with the following diagnoses:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Spinal Cord Injury',
              'Brain Injury',
              'Cerebral Palsy',
              'Epilepsy/Seizure Disorder',
              'Muscular Dystrophy',
              'Chromosomal Disorders',
              'Chronic Respiratory Diseases',
              'Cancer',
              'Multiple Sclerosis',
              'Lou Gehrig Disease',
              'Parkinson\'s Disease',
              'Stroke Aftercare',
              'Diabetes',
              'Heart Disease',
              'Alzheimer\'s',
              'Aids/HIV Positive',
              'Autism',
              'Down Syndrome',
              'Failure to Thrive'
            ].map((diagnosis, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                <span className="text-gray-700">{diagnosis}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose California Healthcare Management Group?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Privately Owned Since 2013</h3>
                    <p className="text-gray-600">
                      We're privately owned and operated, providing care with a more personal touch supported by experienced employees.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Home Care Elite Top Agency</h3>
                    <p className="text-gray-600">
                      We have earned the prestigious designation as a HOMECARE ELITE Top Agency, fully accredited and licensed.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Fully Screened Staff</h3>
                    <p className="text-gray-600">
                      All employees complete criminal background checks before being hired. You can trust our staff members.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Full Continuum of Care</h3>
                    <p className="text-gray-600">
                      From home health and non-medical caregiver services to palliative care and hospice, we offer comprehensive care.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Get Started?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">Call us at 1-818-783-4427</span>
                </div>
                <p className="text-gray-600">
                  Your home health care services will start with your doctor. They will write a prescription for the types of home health services you need.
                </p>
                <Link href="/contact" className="btn-primary w-full text-center">
                  Contact Us Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Thousands of Families
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            As a Home Care Elite Agency, we have earned the trust of thousands of families who needed help after a hospital stay or during an extended illness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Contact Us Today
            </Link>
            <div className="flex items-center justify-center space-x-2 text-white">
              <Phone className="w-4 h-4" />
              <span className="font-semibold">1-818-783-4427</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 