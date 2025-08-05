# 🚀 Hasitha Dhananjaya - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. This portfolio showcases my projects, skills, experience, and education in an elegant and interactive design.

## ✨ Features

- **Modern Design**: Clean, professional, and responsive layout
- **Interactive Components**: Smooth animations and hover effects
- **Contact Integration**: EmailJS integration for contact form
- **WhatsApp Integration**: Floating WhatsApp button for instant communication
- **Project Showcase**: Detailed project cards with GitHub links
- **Skills Display**: Visual representation of technical skills
- **Experience Timeline**: Professional experience and education sections
- **Mobile Responsive**: Optimized for all device sizes
- **Performance Optimized**: Built with Next.js 14 for optimal performance

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **UI Components**: [Headless UI](https://headlessui.com/)
- **Email Service**: [EmailJS](https://www.emailjs.com/)
- **Font Optimization**: Next.js Font Optimization

## 📁 Project Structure

```
src/
├── app/
│   ├── assets/
│   │   ├── about.tsx           # About section component
│   │   ├── contact.tsx         # Contact form component
│   │   ├── education.tsx       # Education section
│   │   ├── experience.tsx      # Work experience section
│   │   ├── experienceCard.tsx  # Experience card component
│   │   ├── footer.tsx          # Footer component
│   │   ├── logoScroller.tsx    # Technology logos scroller
│   │   ├── navbar.tsx          # Navigation component
│   │   ├── projectCard.tsx     # Project showcase card
│   │   ├── projects.tsx        # Projects section
│   │   ├── skills.tsx          # Skills section
│   │   ├── statsCard.tsx       # Statistics display card
│   │   └── ThankYouModal.tsx   # Success modal component
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Main page component
└── public/
    ├── favicon.png             # Site favicon
    ├── pic.jpg                 # Profile picture
    └── ...
```

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js installed on your system (version 18 or higher).

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hasitha20025/portfolio.git
   cd portfolio/app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio in action.

### Building for Production

```bash
npm run build
npm run start
```

## 📧 Contact Configuration

To enable the contact form functionality:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up your email service and template
3. Update the EmailJS configuration in the contact component
4. Replace the service ID, template ID, and user ID with your own

## 🎨 Customization

### Colors & Styling
The project uses Tailwind CSS with custom color schemes. You can modify the colors in:
- `tailwind.config.ts` - Custom color definitions
- `globals.css` - Global styles and CSS variables

### Content Updates
- **About Section**: Update `src/app/assets/about.tsx`
- **Projects**: Modify `src/app/assets/projects.tsx` with your own projects
- **Skills**: Update `src/app/assets/skills.tsx` with your technical skills
- **Experience**: Modify `src/app/assets/experience.tsx` with your work history
- **Education**: Update `src/app/assets/education.tsx` with your educational background

## 📱 Features Breakdown

### Interactive Components
- **Responsive Navigation**: Mobile-friendly navigation bar
- **Project Cards**: Hover effects and GitHub integration
- **Contact Form**: Functional contact form with validation
- **WhatsApp Integration**: Direct messaging capability
- **Success Modals**: User feedback for form submissions

### Performance Features
- **Next.js 14**: Latest framework features and optimizations
- **Font Optimization**: Automatic font loading and optimization
- **Image Optimization**: Built-in Next.js image optimization
- **Code Splitting**: Automatic code splitting for better performance

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Deploy with one click

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/hasitha20025/portfolio)

### Other Deployment Options
- **Netlify**: Connect your GitHub repo for automatic deployments
- **AWS Amplify**: For AWS-based hosting
- **Railway**: Simple deployment with Git integration

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/hasitha20025/portfolio/issues).

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 About the Developer

**Hasitha Dhananjaya**
- 📧 Email: [Contact through the website](https://your-portfolio-url.com)
- 💼 WhatsApp: [+94784375524](https://wa.me/+94784375524)
- 🔗 GitHub: [@hasitha20025](https://github.com/hasitha20025)

---

⭐ If you found this portfolio useful, please consider giving it a star on GitHub!

## 📚 Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - Learn TypeScript
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Learn about utility-first CSS
- [React Documentation](https://reactjs.org/docs) - Learn React concepts
