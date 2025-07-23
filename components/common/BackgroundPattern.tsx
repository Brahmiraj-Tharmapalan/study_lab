export default function BackgroundPattern() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute left-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,0.15),transparent)]" />
      <div className="absolute right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,0.15),transparent)]" />
    </div>
  );
}
