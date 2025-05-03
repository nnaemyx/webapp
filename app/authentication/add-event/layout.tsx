import { EventContextProvider } from './_components/context'

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <EventContextProvider>
        {children}
        </EventContextProvider>
    </div>
  );
}
