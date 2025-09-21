import { redirect } from "next/navigation";

interface PageProps {
  params: Promise<{ lang: string }>;
}

const page = async ({ params }: PageProps) => {
  const { lang } = await params;

  // Redirect to home page with products anchor
  redirect(`/${lang}/#products`);
};

export default page;
