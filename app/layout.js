import './globals.css';

export const metadata = {
  title: 'Persona Forge',
  description: 'Free personality growth platform with onboarding personality test, missions, AI coaching, and progress tracking.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
