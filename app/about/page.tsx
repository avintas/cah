import Link from 'next/link'
import { CheckCircle, Users, Shield, TrendingUp, Phone, Award, Heart, Home, Clock } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              About
              <span className="text-gradient block">California Healthcare</span>
              Management Group
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Choosing the right health care provider can be difficult. Often, the decision must be made quickly. 
              One agency can seem exactly like the next. How do you choose the one that's right for you...and the people you love?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center">
                Contact Us Today
                <Phone className="ml-2 w-4 h-4" />
              </Link>
              <div className="flex items-center justify-center space-x-2 text-primary-600 font-semibold">
                <Phone className="w-4 h-4" />
                <span>1-818-783-4427</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                We're Different
              </h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  At California Healthcare Management Group, we can help. We're different—not just in the types of health care services we offer, but in the way we deliver them.
                </p>
                <p>
                  The friendly professionals from California Healthcare Management Group Home Health provide services in the comfort of your home for as long as you need it. This might mean a few days or weeks or several months, including night time and weekend visits.
                </p>
                <p>
                  As a Home Care Elite Agency, we have earned the trust of thousands of families who needed help after a hospital stay or during an extended illness.
                </p>
              </div>
            </div>
            <div className="bg-primary-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Commitment</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Heart className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Compassionate Care</h4>
                    <p className="text-gray-600">We provide care with a personal touch, supported by experienced employees.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Trusted Quality</h4>
                    <p className="text-gray-600">All employees complete criminal background checks before being hired.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Home className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Home-Based Care</h4>
                    <p className="text-gray-600">We provide services wherever you are—at home, in a personal care residence, a hospital or wherever you choose.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Highlights */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose California Healthcare Management Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're different from other healthcare agencies in several important ways.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="healthcare-card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Privately Owned Since 2013</h3>
              <p className="text-gray-600 mb-4">
                Some health care agencies are part of a large multi-state company, with layers of management. At California Healthcare Management Group, we're privately owned and operated.
              </p>
              <p className="text-gray-600">
                That means we care for you with a more personal touch, supported by a team of experienced employees—some of whom have been with us from the beginning.
              </p>
            </div>

            <div className="healthcare-card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Award-Winning Reputation</h3>
              <p className="text-gray-600 mb-4">
                California Healthcare Management Group is fully accredited and licensed by a variety of state and federal organizations, including Medicare.
              </p>
              <p className="text-gray-600">
                In addition, we have earned the prestigious designation as a HOMECARE ELITE Top Agency.
              </p>
            </div>

            <div className="healthcare-card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Full Continuum of Care</h3>
              <p className="text-gray-600 mb-4">
                From home health and non-medical caregiver services to palliative care and hospice, we offer a range of services to meet your short- or long-term needs.
              </p>
              <p className="text-gray-600">
                We also offer temporary supplemental clinical staff to other healthcare organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Home Health Care Information */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Home Health Care
              </h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  Your favorite chair. Your dishes. Your pets. The view out your window. It's always easier to take your medicines, complete your physical therapy exercises—and sleep—in your own space.
                </p>
                <p>
                  The friendly professionals from California Healthcare Management Group Home Health provide services in the comfort of your home for as long as you need it. This might mean a few days or weeks or several months, including night time and weekend visits.
                </p>
                <p>
                  As a Home Care Elite Agency, we have earned the trust of thousands of families who needed help after a hospital stay or during an extended illness.
                </p>
              </div>
            </div>
            <div className="bg-primary-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What is Home Health Care?</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Home health care allows the elderly and medically dependent individuals to live in their own home with the assistance of a private care professional. Depending on their medical condition, home health care can help seniors to live independent fuller lives and avoid the need for a nursing home.
                </p>
                <p>
                  In-home care can involve a variety of services from different types of health care professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preparing for Home Care */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Preparing for Home Care
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For an aging parent, a recovering loved one, or even yourself, navigating the world of home care can feel daunting. However, with some planning and useful tips, you can transform your home into a supportive environment where comfort, safety, and well-being take center stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Assessing Your Needs',
                description: 'It is important to evaluate your needs before hiring home care services to decide exactly what kind of care you or your loved ones require. Paying attention to their preferences will help prepare them for care.',
                features: ['Daily Activities', 'Mobility', 'Safety', 'Communication', 'Medical Conditions']
              },
              {
                title: 'Start The Conversation',
                description: 'Having open, honest, and transparent conversations with your loved one during the transition to in-home care will make the process much easier.',
                features: ['Find the Right Time', 'Use Private Setting', 'Express Feelings', 'Be Honest but Tactful', 'Be Compassionate']
              },
              {
                title: 'Choosing The Right Provider',
                description: 'Selecting the right home care provider is one of the most important decisions you\'ll make in this process.',
                features: ['Compassionate Care', 'Caregiving Experience', 'Professional Approach', 'Reputation and History', 'Flexibility']
              }
            ].map((item, index) => (
              <div key={index} className="healthcare-card">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 mb-6">{item.description}</p>
                <div className="space-y-2">
                  {item.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
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
            To learn more about how California Healthcare Management Group Home Health and Hospice can help you and your loved ones safely age in place, please visit us at www.cahmgt.com or call us at 1-818-783-4427.
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