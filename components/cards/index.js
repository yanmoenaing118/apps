import Image from "next/image";
import Link from "next/link";
export default function CardList({ list }) {
  return (
    <section className="grid gap-2 xl:grid-cols-3 md:grid-cols-2 auto-rows-auto">
      {list.map((item, idx) => (
        <CardItem key={idx} item={item} />
      ))}{" "}
    </section>
  );
}

function CardItem({ item }) {
  return (
    <div className="shadow p-2">
      <div className="relative w-full flex items-center">
        <Image
          src="https://www.themoviedb.org/t/p/w533_and_h300_bestv2/4r7scgI5aUrShN0YzriAatWd15e.jpg"
          width={600}
          height={240}
          objectFit="contain"
        />
        <Link href={`/${item}`}>
          <a>View Details</a>
        </Link>
      </div>
    </div>
  );
}
