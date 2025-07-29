import Link from 'next/link'
import { ArrowRight, CheckCircle, Users, Shield, TrendingUp, Phone, Heart, Stethoscope, Home, Activity, MessageSquare, Briefcase, Droplets, Wrench, Camera, UserCheck, Package, Zap, TestTube, Syringe } from 'lucide-react'

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Home Health Care
              <span className="text-gradient block">Services</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Your favorite chair. Your dishes. Your pets. The view out your window. 
              It's always easier to take your medicines, complete your physical therapy exercises—and sleep—in your own space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center">
                Get Started Today
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <div className="flex items-center justify-center space-x-2 text-primary-600 font-semibold">
                <Phone className="w-4 h-4" />
                <span>1-818-783-4427</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Home Health Care */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What is Home Health Care?
              </h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  Home health care allows the elderly and medically dependent individuals to live in their own home with the assistance of a private care professional. Depending on their medical condition, home health care can help seniors to live independent fuller lives and avoid the need for a nursing home.
                </p>
                <p>
                  In-home care can involve a variety of services from different types of health care professionals. The friendly professionals from California Healthcare Management Group Home Health provide services in the comfort of your home for as long as you need it.
                </p>
                <p>
                  This might mean a few days or weeks or several months, including night time and weekend visits. As a Home Care Elite Agency, we have earned the trust of thousands of families who needed help after a hospital stay or during an extended illness.
                </p>
              </div>
            </div>
            <div className="bg-primary-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Where do I start?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Get a Prescription</h4>
                    <p className="text-gray-600">Your home health care services will start with your doctor. They will write a prescription for the types of home health services you need.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Contact Us</h4>
                    <p className="text-gray-600">Once you have your prescription, you or your physician can contact California Healthcare Management Group and we will take care of the rest.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Insurance Verification</h4>
                    <p className="text-gray-600">To make sure there are no surprises, we will verify your insurance benefits prior to the beginning of your in-home care.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Home Health Care Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Services for in-home health care may include a comprehensive range of professional medical and support services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Registered Nurses',
                icon: Stethoscope,
                description: 'Registered nurses make certain the care plan set forth by the patient\'s doctor is being carried out exactly as needed. These services may include administering proper medications and dosage, wound care, IV therapy, nutrition, education on disease process, identifying changes in medical status, and other medically necessary procedures.',
                features: ['Medication Administration', 'Wound Care', 'IV Therapy', 'Nutrition Support', 'Disease Education']
              },
              {
                title: 'Home Health Aides',
                icon: Heart,
                description: 'A home health aide helps seniors or dependent patients with the daily tasks that they may not be able to perform on their own. These services may include assistance with bathing, dressing, light housekeeping, laundry, and other daily tasks.',
                features: ['Bathing Assistance', 'Dressing Help', 'Light Housekeeping', 'Laundry Services', 'Daily Task Support']
              },
              {
                title: 'Physical Therapy',
                icon: Activity,
                description: 'Physical Therapists from California Healthcare Management Group typically have a doctoral degree and are licensed care professionals. They help patients regain as much motor function as possible after an injury, surgery, or even illness.',
                features: ['Motor Function Recovery', 'Injury Rehabilitation', 'Post-Surgery Care', 'Mobility Training', 'Strength Building']
              },
              {
                title: 'Occupational Therapists',
                icon: Briefcase,
                description: 'Occupational Therapists are licensed care professionals that help people regain or relearn fine motor skills. These skills usually involve daily living activities such as getting dressed, writing, cooking, and eating.',
                features: ['Fine Motor Skills', 'Daily Living Activities', 'Adaptive Equipment', 'Independence Training', 'Stroke Recovery']
              },
              {
                title: 'Speech Therapists',
                icon: MessageSquare,
                description: 'Our Speech Pathologists are skilled licensed professionals that diagnose and treat disorders associated with understanding and vocalization of languages, as well as the functionality of the mouth and throat.',
                features: ['Communication Disorders', 'Swallowing Issues', 'Language Disorders', 'Voice Disorders', 'Fluency Disorders']
              },
              {
                title: 'Medical Social Workers',
                icon: Users,
                description: 'Medical Social Workers working with California Healthcare Management Group are health care professionals that assess the Psychosocial needs of the patient and family. They also help to qualify discharge plans to be sure they meet the requirements of the patient.',
                features: ['Psychosocial Assessment', 'Discharge Planning', 'Counseling Support', 'Community Resources', 'Family Support']
              }
            ].map((service, index) => (
              <div key={index} className="healthcare-card">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
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

      {/* Additional Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We also provide specialized mobile services and medical supplies to support your home health care needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Mobile Podiatrist', icon: UserCheck, description: 'Foot care and podiatry services in your home' },
              { name: 'Mobile Ultrasound', icon: Camera, description: 'Diagnostic imaging services at your convenience' },
              { name: 'Mobile X-Ray', icon: Camera, description: 'On-site diagnostic imaging when needed' },
              { name: 'Mobile Physicians', icon: Stethoscope, description: 'Physician visits in the comfort of your home' },
              { name: 'Medical Supplies', icon: Package, description: 'Essential medical equipment and supplies' },
              { name: 'Wound Care Specialists', icon: Zap, description: 'Specialized wound treatment and care' },
              { name: 'Mobile Lab', icon: TestTube, description: 'Laboratory testing services' },
              { name: 'IV Therapy', icon: Syringe, description: 'Intravenous therapy and medication administration' }
            ].map((service, index) => (
              <div key={index} className="healthcare-card text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Home Care Services Include */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Home Care Services Include
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive home care services cover all aspects of medical and personal care needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Assessment',
              'Medication Administration',
              'Ventilator Care',
              'Tracheostomy Care',
              'Suctioning',
              'G-Tube Feedings and Care',
              'Monitor Vital Signs',
              'Check Blood Sugars',
              'Provide Wound Care'
            ].map((service, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{service}</span>
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
            All of the listed disciplines can be a part of the comprehensive home health plan. California Healthcare Management Group is here to ensure you receive these services with the quality associated with the highest medical standards.
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