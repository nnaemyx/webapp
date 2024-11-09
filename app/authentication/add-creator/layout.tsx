import { EventCreatorContextProvider } from './_components/context'

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <EventCreatorContextProvider>
        {children}
        </EventCreatorContextProvider>
    </div>
  );
}
