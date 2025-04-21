export default function PaymentSuccess({
  searchParams: { amount },
}: {
  searchParams: { amount: string };
}) {
  return (
    <main
      className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md 
        bg-gradient-to-tr from-blue-500 to-purple-500"
    >
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2">Payment Successful</h1>
        <h2 className="text-2xl">
          You Successfully sent{"  "}
          <span className="mt-5 text-4xl font-bold underline">${amount}</span>
        </h2>
      </div>
    </main>
  );
}
