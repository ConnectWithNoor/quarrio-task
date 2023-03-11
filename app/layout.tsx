import './globals.css';

export const metadata = {
  title: 'Quarrio Evolution Task - Noor Muhammad',
  description: 'Submission by Noor Muhammad (ConnectWithNoor)',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
