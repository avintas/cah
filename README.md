# California Healthcare Management Group Website

A modern, responsive website for California Healthcare Management Group built with Next.js, React, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional healthcare industry aesthetic
- **Mobile Responsive**: Optimized for all device sizes
- **Navigation**: Comprehensive navigation matching sitemap hierarchy
- **Contact Prominence**: Prominent display of contact information (818-783-4427)
- **Healthcare Focused**: Industry-specific styling and content
- **Performance Optimized**: Fast loading with Next.js optimizations

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd california-healthcare-management-group
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── about/             # About pages
│   ├── services/          # Services pages
│   ├── contact/           # Contact page
│   └── resources/         # Resources pages
├── components/            # React components
│   ├── Navigation.tsx     # Navigation component
│   └── Footer.tsx         # Footer component
├── lib/                   # Utility functions
│   └── utils.ts           # Class name utilities
├── public/                # Static assets
└── tailwind.config.js     # Tailwind configuration
```

## Pages

### Main Pages
- **Home** (`/`) - Landing page with hero section and services overview
- **Services** (`/services`) - Comprehensive services listing
- **About** (`/about`) - Company information and team
- **Contact** (`/contact`) - Contact form and information
- **Resources** (`/resources`) - Healthcare insights and articles

### Navigation Structure
- Home
- Services
  - Practice Management
  - Medical Billing
  - Administrative Support
  - Compliance & Risk Management
- About Us
  - Our Mission
  - Leadership Team
  - Company History
- Resources
  - Healthcare News
  - Industry Insights
  - Best Practices
- Contact

## Key Features

### Navigation Component
- Responsive mobile menu
- Dropdown navigation for Services, About Us, and Resources
- Prominent contact information display
- Smooth transitions and animations

### Healthcare Industry Styling
- Professional color palette (blues and grays)
- Medical-focused iconography
- Trust-building design elements
- Accessibility considerations

### Contact Information
- Phone number prominently displayed: **818-783-4427**
- Multiple contact methods
- Contact form with validation
- Business hours and location information

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Styling

The project uses Tailwind CSS with custom healthcare-focused design tokens:

- **Primary Colors**: Blue palette for trust and professionalism
- **Secondary Colors**: Gray palette for text and backgrounds
- **Accent Colors**: Orange for calls-to-action
- **Custom Components**: Pre-built healthcare-specific components

### Component Architecture

- **Navigation**: Responsive navigation with mobile menu
- **Footer**: Comprehensive footer with contact info and links
- **Cards**: Reusable healthcare-themed cards
- **Buttons**: Primary and secondary button styles
- **Forms**: Contact forms with validation

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Custom server

## Customization

### Colors
Update the color palette in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your custom blue palette
  },
  secondary: {
    // Your custom gray palette
  }
}
```

### Content
- Update company information in components
- Modify contact details throughout the site
- Customize service offerings and descriptions

### Styling
- Modify `app/globals.css` for global styles
- Update component-specific styles in individual files
- Customize Tailwind classes as needed

## Performance

The website is optimized for performance with:

- Next.js App Router for optimal routing
- Image optimization
- Code splitting
- CSS purging with Tailwind
- Responsive images
- Fast loading times

## Accessibility

- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

This project is proprietary to California Healthcare Management Group.

## Support

For technical support or questions about the website, contact the development team or refer to the Next.js documentation. 