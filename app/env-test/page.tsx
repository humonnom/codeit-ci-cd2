export default function Home() {
  return (
    <div>
      <h1>Current Environment: {process.env.NEXT_PUBLIC_VERCEL_ENV}</h1>
      <p>Custom Variable: {process.env.NEXT_PUBLIC_CUSTOM_VARIABLE}</p>
    </div>
  );
}
