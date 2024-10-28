import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Banner"
import ProductCard from "@/components/productCard";
import { wrap } from "module";
import BasicSelect from "@/components/CarSelect";
import CarPanel from "@/components/CarPanel";
import TravelCard from "@/components/TravelCard";

export default function Home() {
  return (
    <main>
     <Banner/>
     <CarPanel/>
     <TravelCard/>
    </main>
  );
}
