import './globals.css'
import { Rubik } from 'next/font/google'

export const dynamic = 'force-dynamic';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({ children }) {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  return (
    <html lang="en">
      <body className={rubik.className}>
        <Navbar user={data.session?.user} /> 
        <main className="mt-2">{children}</main> 
      </body>
    </html>
  );
}