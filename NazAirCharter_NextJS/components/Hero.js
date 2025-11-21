export default function Hero() {
  return (
    <section>
      <h1 className="text-4xl font-bold">Naz Air Charter</h1>
      <p>Luxury Private Jet Charter</p>
      <video autoPlay muted loop className="w-full mt-4">
        <source src="/videos/jet-takeoff.mp4" type="video/mp4" />
      </video>
    </section>
  );
}