# Frontend - Authentication Application

A modern React TypeScript frontend application built with Vite, featuring authentication functionality with a clean and responsive UI.

## 🚀 Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Redux Toolkit** - State management
- **React Router** - Client-side routing
- **React Hook Form** - Form handling with validation
- **Zod** - Schema validation
- **Axios** - HTTP client
- **React Hot Toast** - Toast notifications

## 📋 Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

## 🛠️ Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file (if not exists):
```bash
cp .env.example .env
```

4. Configure environment variables in `.env`:
```env
VITE_API_BASE_URL=http://localhost:3001
```

## 🏃‍♂️ Running the Application

### Development Mode
Start the development server with hot reload:
```bash
npm run dev
```
The application will be available at `http://localhost:3000`

### Production Build
Build the application for production:
```bash
npm run build
```

### Preview Production Build
Preview the production build locally:
```bash
npm run preview
```

## 🧹 Code Quality

### Linting
Run ESLint to check code quality:
```bash
npm run lint
```

### Type Checking
TypeScript compilation and type checking:
```bash
npx tsc --noEmit
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── config/             # Configuration files
├── hooks/              # Custom React hooks
├── pages/              # Page components
├── store/              # Redux store configuration
├── types/              # TypeScript type definitions
├── services/           # API services
├── App.tsx             # Main App component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## 🔧 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🌐 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_BASE_URL` | Backend API base URL | `http://localhost:3001` |

## 🔗 API Integration

The frontend communicates with the backend API running on port 3001. Make sure the backend server is running before starting the frontend application.

## 📱 Features

- User authentication (login/register)
- Protected routes
- Responsive design
- Form validation
- Error handling
- Toast notifications
- State management with Redux

## 🤝 Contributing

1. Follow the existing code style
2. Run linting before committing
3. Ensure TypeScript compilation passes
4. Test your changes thoroughly

## 📄 License

This project is licensed under the MIT License.
