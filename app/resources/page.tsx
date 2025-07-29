import Link from 'next/link'
import { ArrowRight, CheckCircle, Users, Shield, TrendingUp, Phone, Heart, Stethoscope, Home, Activity, MessageSquare, Briefcase, Droplets, Wrench, Camera, UserCheck, Package, Zap, TestTube, Syringe } from 'lucide-react'

export default function ResourcesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              IV Therapy &
              <span className="text-gradient block">Specialized Care</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Professional intravenous therapy and specialized medical services delivered in the comfort of your home. 
              Our skilled nursing team provides safe, effective IV therapy and other specialized treatments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center">
                Schedule IV Therapy
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

      {/* IV Therapy Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                IV Therapy Services
              </h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  Our registered nurses are specially trained to provide safe and effective intravenous therapy in the comfort of your home. IV therapy can be used for various medical conditions and treatments.
                </p>
                <p>
                  We ensure that all IV therapy procedures are performed with the highest standards of care, following strict protocols for safety and effectiveness. Our nurses are experienced in managing various types of IV treatments.
                </p>
                <p>
                  IV therapy can be prescribed for hydration, medication administration, nutrition support, and other medical needs. We work closely with your physician to ensure the treatment plan is followed precisely.
                </p>
              </div>
            </div>
            <div className="bg-primary-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our IV Therapy?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Droplets className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Professional Care</h4>
                    <p className="text-gray-600">Licensed registered nurses with specialized IV therapy training</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Home className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Home Convenience</h4>
                    <p className="text-gray-600">Receive treatment in the comfort of your own home</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Safety First</h4>
                    <p className="text-gray-600">Strict protocols and monitoring for your safety</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IV Therapy Types */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of IV Therapy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide various types of intravenous therapy to meet your specific medical needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Hydration Therapy',
                icon: Droplets,
                description: 'Intravenous fluids to restore hydration and electrolyte balance. Ideal for patients who are dehydrated or unable to maintain proper fluid intake.',
                benefits: ['Rapid rehydration', 'Electrolyte balance', 'Improved energy levels', 'Better organ function']
              },
              {
                title: 'Medication Administration',
                icon: Syringe,
                description: 'Direct delivery of medications through IV for faster absorption and immediate effect. Used for antibiotics, pain management, and other treatments.',
                benefits: ['Faster medication delivery', 'Higher bioavailability', 'Immediate effect', 'Precise dosing']
              },
              {
                title: 'Nutrition Support',
                icon: Activity,
                description: 'IV nutrition therapy for patients who cannot eat or digest food properly. Provides essential vitamins, minerals, and nutrients.',
                benefits: ['Complete nutrition', 'Vitamin supplementation', 'Mineral replacement', 'Energy support']
              },
              {
                title: 'Antibiotic Therapy',
                icon: Stethoscope,
                description: 'Intravenous antibiotics for serious infections that require high-dose treatment or when oral antibiotics are not effective.',
                benefits: ['High-dose delivery', 'Faster infection treatment', 'Better absorption', 'Reduced side effects']
              },
              {
                title: 'Pain Management',
                icon: Heart,
                description: 'IV pain medications for acute or chronic pain management when oral medications are not sufficient or appropriate.',
                benefits: ['Immediate pain relief', 'Controlled dosing', 'Reduced side effects', 'Better pain control']
              },
              {
                title: 'Vitamin Therapy',
                icon: Shield,
                description: 'High-dose vitamin infusions for various conditions including immune support, energy enhancement, and wellness.',
                benefits: ['Immune support', 'Energy enhancement', 'Wellness promotion', 'Nutrient optimization']
              }
            ].map((therapy, index) => (
              <div key={index} className="healthcare-card">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                  <therapy.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{therapy.title}</h3>
                <p className="text-gray-600 mb-6">{therapy.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                  {therapy.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Care Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Specialized Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond IV therapy, we offer a comprehensive range of specialized medical services in your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Wound Care', icon: Shield, description: 'Specialized wound treatment and dressing changes' },
              { name: 'Tracheostomy Care', icon: Stethoscope, description: 'Professional tracheostomy tube care and maintenance' },
              { name: 'Ventilator Care', icon: Activity, description: 'Skilled ventilator management and monitoring' },
              { name: 'G-Tube Care', icon: Heart, description: 'Gastrostomy tube feeding and care services' },
              { name: 'Suctioning', icon: Droplets, description: 'Airway suctioning and respiratory care' },
              { name: 'Vital Signs Monitoring', icon: Clock, description: 'Regular monitoring of blood pressure, heart rate, and other vitals' },
              { name: 'Blood Sugar Monitoring', icon: Syringe, description: 'Diabetes management and glucose monitoring' },
              { name: 'Medication Management', icon: Users, description: 'Comprehensive medication administration and monitoring' }
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

      {/* Safety and Quality */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Safety and Quality Standards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We maintain the highest standards of safety and quality for all our specialized care services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Licensed Professionals',
                description: 'All our nurses are licensed and certified with specialized training in IV therapy and other advanced procedures.',
                icon: Shield
              },
              {
                title: 'Strict Protocols',
                description: 'We follow established medical protocols and guidelines to ensure safe and effective treatment delivery.',
                icon: CheckCircle
              },
              {
                title: 'Continuous Monitoring',
                description: 'Regular monitoring and assessment to ensure treatment effectiveness and patient safety.',
                icon: Clock
              },
              {
                title: 'Emergency Preparedness',
                description: 'Our team is trained in emergency procedures and maintains emergency response capabilities.',
                icon: Activity
              },
              {
                title: 'Quality Assurance',
                description: 'Regular quality audits and performance reviews to maintain the highest standards of care.',
                icon: Heart
              },
              {
                title: 'Patient Education',
                description: 'We provide education to patients and families about their treatment and care requirements.',
                icon: Users
              }
            ].map((item, index) => (
              <div key={index} className="healthcare-card text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">
                  {item.description}
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
            Ready for Specialized Care?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Our specialized care services are designed to meet your unique medical needs in the comfort of your home. 
            Contact us to discuss your specific requirements and learn how we can help.
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