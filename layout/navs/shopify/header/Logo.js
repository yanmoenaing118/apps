import Image from "next/image";

export default function Logo() {
  return (
    <div>
      <Image src="/images/shopify-logo.png" width={36} height={36} />
      <style jsx>{`
        div {
          position: relative;
        }
      `}</style>
    </div>
  );
}
