export default function Home() {
  return (
    <div className="">
      <video
        src="https://www.luxedressing.com/assets/video/luxe-film.mp4"
        loop
        autoPlay
        playsInline
        muted
        className="h-[600px] outline-none object-cover w-full"
      />
      <div className="mx-auto max-w-4xl w-full min-h-screen bg-primary"></div>
      <div className="mx-auto max-w-4xl w-full min-h-screen bg-red-100"></div>
      <div className="mx-auto max-w-4xl w-full min-h-screen bg-blue-100"></div>
    </div>
  );
}
