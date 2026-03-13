# Website Portfolio | Kritish Dhital

An ultra-refined, architectural portfolio for a Full Stack AI/ML Developer. Designed with a focus on depth, precision, and modern aesthetics, this project showcases end-to-end AI/ML ecosystems through a sophisticated, 3D-inspired interface.

## 🚀 Key Features

- **Architectural Design**: A clean, light-mode palette inspired by premium industrial design (Apple-style aesthetics).
- **3D Material System**: Interactive project cards with glassmorphism, depth-of-field effects, and multi-layered shadows.
- **Background Engine**:
  - **Void Shader**: A custom GLSL-powered background for deep atmospheric texture.
  - **Neural Network Canvas**: Interactive particle system representing neural pathways.
- **Custom Interaction**: Minimalist custom cursor with mix-blend-mode for precision navigation.
- **Responsive Core**: Fully adaptive layout utilizing a flexible spacing system and clamped typography for all screen sizes.

## 🛠 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Styling**: Vanilla CSS with a centralized variable system.

## 📁 Project Structure

```text
src/
├── components/          # Reusable UI modules
│   ├── CustomCursor.tsx # Precision cursor system
│   ├── Hero.tsx         # Typing effect & landing introduction
│   ├── Projects.tsx     # 3D Material-based project showcase
│   ├── Nav.tsx          # Glass-blurred navigation
│   └── Footer.tsx       # Collaborative uplink & contact portal
├── Global.css           # Design system variables & architectural styles
└── App.tsx              # Application layout & scroll orchestration
```

## ⚙️ Getting Started

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### 2. Installation
Clone the repository and install the dependencies:
```bash
npm install
```

### 3. Development
Start the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

### 4. Production Build
To create an optimized production build:
```bash
npm run build
```
The output will be generated in the `dist/` directory.

## 🎨 Design Philosophy

This portfolio follows a **"Code-First, Aesthetic-Second"** philosophy. Every interaction is designed to reflect the precision required in AI engineering. 

- **Spacing**: Rigid 8px/4px based system (`--spacing-sm` through `--spacing-xxl`).
- **Typography**: High-end font selection using **Syne** for display and **Space Grotesk** for body, balanced with **JetBrains Mono** for technical data.
- **Feedback**: Immediate, tactile response on all interactive elements via Framer Motion.

## 📜 License
© 2026 KRITISH DHITAL. Proudly Built in Nepal.

**PRIVATE_LICENSE**: This project is proprietary. All rights reserved. Unauthorized copying, modification, or distribution of this code via any medium is strictly prohibited. For inquiries regarding use or collaboration, please use the contact uplink provided in the platform.
